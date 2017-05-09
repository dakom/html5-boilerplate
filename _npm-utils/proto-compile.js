const fs = require('fs');
const child_process = require('child_process');
const mkdirp = require('mkdirp');

var CommonConfig = require('../common.config.js');

var config = CommonConfig.GetProtoConfig();

//pbjs -t static-module -w commonjs -p proto/** **/*.proto",
//child_process.execFileSync("ffmpeg", ["-i", originFile, "-movflags", "+faststart", "-pix_fmt", "yuv420p", "-f", "webm", "-vcodec", "libvpx-vp9", "-acodec", "libvorbis", "-ab", "128000", "-crf", "22", "-b:v", "0", destFile]);

var nFiles = 0;

//MAIN

var inputFiles = getFileListings(config.originFolder);

for(var i = 0; i < inputFiles.length; i++) {
    var fileInfo = inputFiles[i];
    
    //var destFile = config.destFolder + "/" + config.filename + ".js";

    var destFolder = config.destFolder + fileInfo.parent.substring(config.originFolder.length);

    

    if (!fs.existsSync(destFolder)) {
        mkdirp.sync(destFolder);
    }
    
    var destFile = destFolder + "/" + fileInfo.fileName;
    var fileJs = destFile + ".js";
    var fileTsd = destFile + ".d.ts";

    child_process.execFileSync("pbjs", ["-t", "static-module", "-w", "commonjs", "-o", fileJs, fileInfo.filePath]);
    child_process.execFileSync("pbts", ["-o", fileTsd, fileJs]);

}

/*
if (!fs.existsSync(config.destFolder)) {
    mkdirp(config.destFolder);
}
*/



//pbjs -t static-module -w commonjs -o compiled.js
//console.log(inputFiles);

function getFileListings(path, list) {
    if (list === undefined) {
        list = [];
    }

    if (fs.existsSync(path)) {
        var fileNames = fs.readdirSync(path);

        for (var i = 0; i < fileNames.length; i++) {
            var fileName = fileNames[i];
            var filePath = path + '/' + fileName;
            var stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                getFileListings(filePath, list);
            } else if (stats.isFile()) {
                if(fileName.indexOf(".proto") !== -1) {
                    var fileInfo = {
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
