const fs = require('fs');
const path = require('path');

function ensureDirectoryExistence(filePath) {
    fs.mkdirSync(filePath, { recursive: true }); // Works on node 11
}

function writeFileAsPromise(targetPath, filename, text) {
    targetPath = path.resolve(targetPath);
    ensureDirectoryExistence(targetPath);
    const writePath = path.join(targetPath, filename);

    return new Promise((res, rej) => {
        fs.writeFile(writePath, text, function(err) {
            if(err) {
                rej(err);
            }
            res();
        });
    });
}

module.exports = {
    writeFileAsPromise
};