const checkClover = require('./scripts/checkClover');

checkClover().then(res => {
  require('egg').startCluster({
    baseDir: __dirname,
    workers: process.env.WORKERS,
    port: process.env.PORT || 8001
  });
})
