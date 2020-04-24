const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const chalk = require('chalk');

function runCmd(cmd, args, callback) {
  var spawn = childProcess.spawn;
  var child = spawn(cmd, args);
  var res = "";

  child.stdout.on('data', function(buffer) { res += buffer.toString(); });
  child.stdout.on('end', function() { callback (res) });
}

module.exports = function() {
  return new Promise((resolve, reject) => {
    if(!fs.existsSync(path.join(__dirname, '../../clover'))){
      console.log(chalk.yellow('clover not exist, start remote cloning...' + ' \n'))
      runCmd('sh', [path.join(__dirname,'./pullClover.sh')], function(res){
        console.log(chalk.green(res + ' \n'))
        resolve()
      });
      // childProcess.exec(shell, function (error, stdout, stderr) {
      //   if(error){
      //     return reject(error)
      //   }
      //   console.log(stderr)
      //   return resolve(stdout)
      // })
    } else {
      console.log(chalk.green('clover remote address is https://github.com/EvanLiu2968/clover.git.' + ' \n'))
      resolve()
    }
  })
}