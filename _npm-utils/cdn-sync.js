const fs = require('fs');
const child_process = require('child_process');

var CommonConfig = require('../common.config.js');

child_process.execFileSync("gsutil", ["-m", "rsync", "-r", CommonConfig.GetLocalFolders().cdn, CommonConfig.GetCloudStorageCdnOrigin()]);