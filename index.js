const path = require('path');
const { execFileSync } = require('child_process');

function lockScreen() {
  execFileSync(path.join(__dirname, 'lockscreen'), { stdio: 'ignore' });
}

module.exports = lockScreen;
