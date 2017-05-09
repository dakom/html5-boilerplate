//CONFIG

const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const child_process = require('child_process');

var CommonConfig = require('../common.config.js');

var config = CommonConfig.GetCordovaConfig();

//delete current cordova contents
rimraf.sync('./cordova/www/*');

var fileListings = getFileListings('./dist');

if(config.includeCdn) {
    var includePath = CommonConfig.GetLocalFolders().cdn;
    includePath = includePath.substring(0, includePath.length-1);

    fileListings = fileListings.concat(getFileListings(includePath, config.cdnDestPath));
}

if(config.includeRemote) {
    var includePath = CommonConfig.GetLocalFolders().static + 'remote/';
    includePath = includePath.substring(0, includePath.length-1);

    fileListings = fileListings.concat(getFileListings(includePath, config.remoteDestPath));
}

for(var i = 0; i < fileListings.length; i++) {
    var fileInfo = fileListings[i];

    var destFolder = "./cordova/www";
    
    if(fileInfo.destPath.length > 0) {
        destFolder += "/" + fileInfo.destPath;
     }
     
     destFolder += fileInfo.parent.substring(fileInfo.originPath.length);
     var destFile = destFolder + "/" + fileInfo.fileName;

    if (!fs.existsSync(destFolder)) {
        mkdirp.sync(destFolder);
    }

    child_process.execFileSync("cp", [fileInfo.filePath, destFile]);
}

function getFileListings(originPath, destPath, path, list) {
    if (list === undefined) {
        list = [];
    }

    if(path === undefined) {
        path = originPath;
    }
    if(destPath === undefined) {
        destPath = ""
    }

    if (fs.existsSync(path)) {
        var fileNames = fs.readdirSync(path);

        for (var i = 0; i < fileNames.length; i++) {
            var fileName = fileNames[i];
            var filePath = path + '/' + fileName;
            var stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                getFileListings(originPath, destPath, filePath, list);
            } else if (stats.isFile()) {
                var ext = getExtension(fileName);
                if(config.ignoreExtensions.indexOf(ext) == -1) {
                    var fileInfo = {
                        destPath: destPath,
                        originPath: originPath,
                        fileName: fileName,
                        filePath: filePath,
                        parent: path,
                    };

                    list.push(fileInfo);
                }
            }
        }
    }

    return list;
}

function getExtension(fileName) {
    var extension = "";

    var lastIndex = fileName.lastIndexOf(".");

    if (lastIndex != -1) {
        extension = fileName.substring(lastIndex + 1);
    }

    return extension.toLowerCase();

}