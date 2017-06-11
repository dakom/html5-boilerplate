const os = require('os');

module.exports = (function () {
  

  /*
    For all the values below, pay attention to trailing slashes, they are there for a reason :)
  */

  //set to false to just use localhost, otherwise it will make best-guess at the local ip and use that in dev mode
  var DEV_LAN_MODE = false;

  //the remote location of the cdn server
  var CDN_SERVER = "https://cdn.rawgit.com/dakom/html5-boilerplate/1.0/static/cdn/";
  
  //cdn origin for uploading to cloud storage (not used on every project)
  var CLOUDSTORAGE_CDN_ORIGIN = "gs://example-cdn/app/";

  //when in development mode, force load "remote" external libs from their local folder
  //this is useful when developing offline or if you have a lot of remote libraries
  var DEV_REMOTE_IS_LOCAL = false;
  
  //all the libs sitting on the cdn should be under this folder
  var cdnLibsPrefix = 'runtime-libs/';

  //all the libs sitting on the distribution server should be under this folder
  var distLibsPrefix = 'runtime-libs/'; 

  //these are the locations on disk
  var localFolders = {
    cdn: "./cdn/",
    static: "./static/",
  }

  /*
    Each object has only two values

    loc: the relative location of the target file (no prefixes)
    type: remote, cdn, or dist
  */
  var externalLibs = [
    {
      loc: 'cdn.rawgit.com/dcodeIO/protobuf.js/6.7.3/dist/protobuf.min.js',
      type: 'remote'
    },
  ];

/*
  The following seting is for where the external libs are imported as modules in code but *only* for IDE helpers. 
  
  See common.config.js in the master branch for example
*/
  var webpackExcludes = [];


  /*
    Entry point for workers
    Note that the object key will result in the bundle name you use in javascript
    So to load the worker defined in this example, you'd use new Worker('fractalWorker.js');
    "bundle" is a reserved name so don't use that
  */
  var workerEntries = {}

  //////////////////////////////////////////////////////////////////////////////
  /////////////// Nothing to change below here - edit at your own risk! ////////
  //////////////////////////////////////////////////////////////////////////////

  var DEV_SERVER_PORT = "3000";
  var DEV_FILE_STATIC_SERVER_PORT = "4000";
  var DEV_FILE_CDN_SERVER_PORT = "4001";

function GetLocalLanIp() {
    var bestMatch = "localhost";

    if(!DEV_LAN_MODE) {
      return bestMatch;
    }

    //http://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js

    var ifaces = os.networkInterfaces();
    

    Object.keys(ifaces).forEach(function (ifname) {
      var alias = 0;

      ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
          // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
          return;
        }

        //quick and dirty... could be improved
        if(ifname.indexOf("en0") === 0) {
          bestMatch = iface.address;
        }

        //for logging-

        if (alias >= 1) {
          // this single interface has multiple ipv4 addresses
          //console.log(ifname + ':' + alias, iface.address);
        } else {
          // this interface has only one ipv4 adress
          //console.log(ifname, iface.address);
        }

        
        ++alias;
      });
    });


    return bestMatch;
  }

  exports.GetLocalLanIp = GetLocalLanIp;

  function GetLocalHttpAddress(port) {
    return "http://" + GetLocalLanIp() + ":" + port + "/";
  }

exports.GetDevServerPort = function() {
  return DEV_SERVER_PORT;
}

exports.GetCloudStorageCdnOrigin = function() {
  return CLOUDSTORAGE_CDN_ORIGIN;
}

exports.GetLocalFolders = function() {
  return localFolders;
}

  exports.GetWebpackOutputFolder = function(env) {
    switch(env) {
      case "testdev":
        return "test-dev";
      case "testdist":
      case "testdist-localcdn":
        return "test-dist";
      default:
        return "dist";
    }

  }
  exports.GetWebpackEntries = function(env) {
    var entries = {};
    for(var key in workerEntries) {
      if(workerEntries.hasOwnProperty(key)) {
        entries[key] = workerEntries[key];
      }
    }
    if(env == "testdev" || env == "testdist" || env == "testdist-localcdn") {
      entries.bundle = './src/tests/TestInit.ts';
    } else {
      entries.bundle ='./src/app/AppInit.ts';
    }
    return entries;
  }

  exports.GetWebpackDevTool = function(env) {
    
    if(env == "testdev") {
      return 'eval';
    }
    return 'source-map';
  }
  exports.GetWebpackHtmlTemplate = function(env) {
    if(env == "testdev") {
      return './html-templates/mocha.template.ejs'
    }
    return './html-templates/index.template.ejs';
  }

  exports.GetTranscodeConfig = function() {
    return transcodeConfig;
  }

  exports.GetWebpackExcludes = function() {
    return webpackExcludes;
  }

  exports.GetInfo = function (key, env) {
    var DEV_FILE_STATIC_SERVER = GetLocalHttpAddress(DEV_FILE_STATIC_SERVER_PORT);
    var DEV_FILE_CDN_SERVER = GetLocalHttpAddress(DEV_FILE_CDN_SERVER_PORT);
    
    switch (key) {
      case "dist":
        return ((env === "production") ? "" : DEV_FILE_STATIC_SERVER + "dist-include/");
      case "cdn":
        if((env === "production" || env === "testdist")) {
          return CDN_SERVER;
        }

        return DEV_FILE_CDN_SERVER;
      case "remote":
      
      if((env === "production" || !DEV_REMOTE_IS_LOCAL || env === "testdist")) {
          return "//";
        } else {
          return DEV_FILE_STATIC_SERVER + "remote/";
        }
      case "html-template":
        var ret = "";
        for (var i = 0; i < externalLibs.length; i++) {
          var libInfo = externalLibs[i];
          var baseUrl = exports.GetInfo(libInfo.type, env);
          if (libInfo.type == "cdn") {
            if(env === "production" || env === "testdist") {
                ret += "<script type='text/javascript' src='" + CDN_SERVER + cdnLibsPrefix + libInfo.loc + "'></script>\n";
                continue;
              }
            baseUrl += cdnLibsPrefix;
          } else if (libInfo.type == "dist") {
            baseUrl += distLibsPrefix;
          }
          var libUrl = baseUrl + libInfo.loc;
          ret += "<script type='text/javascript' src='" + libUrl + "'></script>\n";
        }
        return ret;

      case "karma-libs":
        var ret = [];
        for (var i = 0; i < externalLibs.length; i++) {
          var libInfo = externalLibs[i];
          if (libInfo.type == "remote" && (env === "production" || !DEV_REMOTE_IS_LOCAL || env === "testdist")) {
            //it seems karma requires the full url
            ret.push("http://" + libInfo.loc);
          } else if (libInfo.type == "cdn") {
              var cdnServer = exports.GetInfo(libInfo.type, env);

              ret.push(cdnServer + cdnLibsPrefix + libInfo.loc);
        } else {
            var baseUrl = localFolders[libInfo.type];
            if (libInfo.type == "dist") {
              baseUrl += distLibsPrefix;
            }

            ret.push("../" + baseUrl + libInfo.loc);
          }

        }
        return ret;

    }

    return "";
  }

  return exports;
}());
