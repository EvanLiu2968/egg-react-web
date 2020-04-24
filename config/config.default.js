const path = require('path');
const fs = require('fs');

require('dotenv').config() // load .env params to process.env

module.exports = app => {
  const config = {};

  config.cluster = {
    listen: {
      port: 8001
    },
  };

  config.siteName = '捕风捉影';

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'public/images/favicon.ico'))
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  config.keys = app.name + '_key';

  config.middleware = [
    'error',
    'access'
  ];

  config.security  = {
    domainWhiteList: [
      '.evanliu2968.com.cn',
    ],
    protocolWhiteList: ['http','https'],
    csrf: {
      enable: false,
      match: function(ctx) {
        // ignore app or mp request
        if(ctx.get('source-from') === 'app'){
          return false
        }
        return true
      },
      // match: ['/api', '/proxy']
    },
    csp: {
      match: ['/admin'],
      policy: {}
    }
  }

  // config.onerror = {
  //   errorPageUrl: '/error/500',
  //   json(err, ctx) {
  //     // json hander
  //     ctx.body = { message: 'permission denied' };
  //     ctx.status = 403;
  //   }
  // }

  // config.notfound = {
  //   pageUrl: '/error/404',
  // }

  config.httpProxy = {}

  // Node.js性能平台的接入参数
  config.alinode = {
    appid: process.env.EGG_ALINODE_APPID || '3180',
    secret: process.env.EGG_ALINODE_SECRET || '6e5705973527b4883b38c6fbcbd256afa326eaa1',
  };

  config.baseDir = app.baseDir;
  config.cloverDir = path.join(app.baseDir,'../clover/');
  config.scriptsDir = path.join(app.baseDir,'./scripts/');
  config.localDataDir = path.join(app.baseDir,'./DataStore/');

  return config;
};
