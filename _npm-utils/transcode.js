//CONFIG

var CommonConfig = require('../common.config.js');

var config = CommonConfig.GetTranscodeConfig();

const originVideoExtensions = ["mp4", "mov", "avi", "webm"];
const originAudioExtensions = ["wav", "aiff", "mp3", "flac"];
const originGraphicsExtensions = ["png", "jpg", "jpeg", "gif"];
const sidecarExtensions = ["json"];


//Might want to adjust the parameters for the different targets in here
function transcodeTarget(target) {
    var originFile = target.origin;
    var destFile = target.destFile;

    switch (target.method) {
        case "video":
            switch (target.extension) {
                case "webm":
                    child_process.execFileSync("ffmpeg", ["-i", originFile, "-movflags", "+faststart", "-pix_fmt", "yuv420p", "-f", "webm", "-vcodec", "libvpx-vp9", "-acodec", "libvorbis", "-ab", "128000", "-crf", "22", "-b:v", "0", destFile]);
                    break;
                case "mp4":
                    child_process.execFileSync("ffmpeg", ["-i", originFile, "-movflags", "+faststart", "-pix_fmt", "yuv420p", "-profile:v", "high", "-level", "4.1", "-strict", "experimental", "-acodec", "aac", "-ac", "2", "-ab", "128k", "-vcodec", "libx264", "-preset", "slow", "-f", "mp4", "-crf", "22", destFile]);
                    break;
                case "ogv":
                    child_process.execFileSync("ffmpeg", ["-i", originFile, "-movflags", "+faststart", "-pix_fmt", "yuv420p", "-codec:v", "libtheora", "-qscale:v", "4", "-codec:a", "libvorbis", "-qscale:a", "3", destFile]);

                    break;

                default:
                    break;
            }

            break;

        case "audio":
            switch (target.extension) {
                case "mp3":
                    child_process.execFileSync("lame", ["-b", "128", "-h", originFile, destFile]);
                    break;
                case "m4a":

                    child_process.execFileSync("ffmpeg", ["-i", originFile, "-c:a", "aac", "-b:a", "128k", "-strict", "-2", destFile]); //could use libfdk_aac but not available
                    break;

                case "ogg":

                    child_process.execFileSync("ffmpeg", ["-i", originFile, "-c:a", "libvorbis", "-q:a", "4", destFile]);
                    break;

                default:
                    break;
            }

            break;

        default:
            //copy only
            child_process.execFileSync("cp", [originFile, destFile]);
            break;
    }
}


//NOTHING TO EDIT BELOW HERE!
const fs = require('fs');
const child_process = require('child_process');

var results = {
    skipped: 0,
    transcoded: 0
}

//MAIN
validateInput();
doTranscode();

//FUNCTIONS

function validateInput() {
    config.mediaType = process.argv[2];

    const allowedMedia = ["audio", "video", "graphics", "all"];

    switch (config.mediaType) {
        case "audio":
        case "video":
        case "graphics":
        case "all":
            break;
        default:
            console.log("Usage: npm run transcode -- [all/audio/video/graphics] (dryrun)");
            console.log("");
            console.log("The space between -- and subsequent args is required");
            console.log("");
            console.log("if dryrun is set, the destinations will only be listed");
            console.log("");
            process.exit(0);
    }

    if (process.argv[3] === "dryrun") {
        config.dryrun = true
    } else {
        config.dryrun = false;
    }
}



function doTranscode() {
    var originListings = getFileListings(config.originFolder);
    var targetListings = getTargetListings(originListings);

    console.log("Processing [" + config.mediaType + "] [" + originListings.length + "] inputs -> [" + targetListings.length + "] targets");

    for (var t = 0; t < targetListings.length; t++) {
        var target = targetListings[t];

        console.log(target.origin);
        console.log("   [" + target.method + (target.extension === undefined ? "" : "/" + target.extension) + "]--> " + target.destFile);

        if (fs.existsSync(target.destFile)) {
            results.skipped++;
            console.log("   Already exists");
        } else {
            results.transcoded++;
            if (config.dryrun) {
                console.log("   Will transcode (dryrun is set)");
            } else {
                if (!fs.existsSync(target.destParent)) {
                    console.log("   destination folder missing, creating: " + target.destParent);
                    child_process.execFileSync("mkdir", ["-p", target.destParent]);
                }

                console.log("   Transcoding...");

                transcodeTarget(target);
            }
        }
    }

    console.log("");
    console.log("FINISHED!");
    console.log("Skipped: " + results.skipped + " Transcoded: " + results.transcoded + " Total Inputs: " + originListings.length + " Total Destinations: " + targetListings.length);
    if ((results.skipped + results.transcoded) != targetListings.length) {
        console.log("Error on length mismatch!!!");
    }
    console.log("");
}



function getTargetListings(originListings) {
    const videoExtensions = ["webm", "mp4", "ogv"];
    const audioExtensions = ["mp3", "m4a", "ogg"];

    var allTargets = [];

    for (var f = 0; f < originListings.length; f++) {
        var fileInfo = originListings[f];
        var destPath = config.destFolder + fileInfo.originPath.substr(config.originFolder.length);
        var destBasePath = destPath.substr(0, destPath.lastIndexOf("."));
        var destParent = config.destFolder + fileInfo.originParent.substr(config.originFolder.length);

        if (fileInfo.method == "video" || fileInfo.method == "audio") {
            //remove extension on dest, then add it back in per-target


            var extensions = (fileInfo.method == "video") ? videoExtensions : audioExtensions;

            for (var i = 0; i < extensions.length; i++) {
                var targetExtension = extensions[i];
                allTargets.push({
                    origin: fileInfo.originPath,
                    destParent: destParent,
                    destFile: destBasePath + "." + targetExtension,
                    method: fileInfo.method,
                    extension: targetExtension
                });
            }
        } else {
            allTargets.push({
                origin: fileInfo.originPath,
                destParent: destParent,
                originParent: fileInfo.originParent,
                destFile: destPath,
                method: fileInfo.method,
            });
        }
    }

    return allTargets;
}


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
                var method = getValidatedMethod(fileName);


                if (method) {
                    var fileInfo = {
                        originPath: filePath,
                        originParent: path,
                        method: method,
                    };

                    list.push(fileInfo);

                    addSidecarFiles(fileInfo, list);

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

    return extension;

}

function addSidecarFiles(fileInfo, list) {

    for (var i = 0; i < sidecarExtensions.length; i++) {
        var sidecarExtension = sidecarExtensions[i];

        var sidecarOrigin = fileInfo.originPath.substr(0, fileInfo.originPath.lastIndexOf(".")) + "." + sidecarExtension;

        if (fs.existsSync(sidecarOrigin)) {
            list.push({
                originPath: sidecarOrigin,
                method: "sidecar",
                originParent: fileInfo.originParent,
            });

        }
    }
}

function getValidatedMethod(fileName) {

    var extension = getExtension(fileName).toLowerCase();

    var videoExtensions = originVideoExtensions;
    var audioExtensions = originAudioExtensions;
    var graphicsExtensions = originGraphicsExtensions;

    var isVideo = false;
    var isAudio = false;
    var isGraphics = false;


    for (var i = 0; i < graphicsExtensions.length; i++) {
        if (extension.indexOf(graphicsExtensions[i]) != -1) {
            isGraphics = true;
            break;
        }
    }



    if (!isGraphics) {
        for (var i = 0; i < videoExtensions.length; i++) {
            if (extension.indexOf(videoExtensions[i]) != -1) {
                isVideo = true;
                break;
            }
        }
        if (!isVideo) {
            for (var i = 0; i < audioExtensions.length; i++) {
                if (extension.indexOf(audioExtensions[i]) != -1) {
                    isAudio = true;
                    break;
                }
            }
        }
    }


    if (isVideo && (config.mediaType == "all" || config.mediaType == "video")) {
        return "video";
    }
    if (isAudio && (config.mediaType == "all" || config.mediaType == "audio")) {
        return "audio";
    }
    if (isGraphics && (config.mediaType == "all" || config.mediaType == "graphics")) {
        return "graphics";
    }
    return (false);
}