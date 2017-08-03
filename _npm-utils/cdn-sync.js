const fs = require('fs');
const child_process = require('child_process');

var CommonConfig = require('../common.config.js');

if(process.env.NODE_ENV == "sync-soft") {
    child_process.execFileSync("gsutil", ["-m", "rsync", "-r", CommonConfig.GetLocalFolders().cdn, CommonConfig.GetCloudStorageCdnOrigin()]);
} else if(process.env.NODE_ENV == "sync-hard") {
    child_process.execFileSync("gsutil", ["-m", "rsync", "-d", "-r", CommonConfig.GetLocalFolders().cdn, CommonConfig.GetCloudStorageCdnOrigin()]);
}