const path = require('path');
const { execFile } = require('child_process');

function lockScreen() {
  return new Promise((resolve, reject) => {
    const childProcess = execFile(path.join(__dirname, 'lockscreen'), {
      stdio: 'ignore',
    }, error => {
      if (error) {
        reject(error);
      } else {
        resolve(childProcess.exitCode);
      }
    });
  });
}

module.exports = lockScreen;
