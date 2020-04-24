
const path = require('path');
const EasyWebpack = require('easywebpack-react');

module.exports = (app) => {
  const config = {};

  config.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  config.development = {
    watchDirs: ['build'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config'] // 指定过滤的目录（包括子目录）
  };

// if you have not inject window.__INITIAL_STATE__, it auto do it.
  config.reactssr = {
    doctype: '<!doctype html>',
    layout: path.join(app.baseDir, 'app/view/layout.js'),
    manifest: path.join(app.baseDir, 'config/manifest.json'),
    injectHeadRegex: /(<\/head>)/i,
    injectBodyRegex: /(<\/body>)/i,
    injectCss: true,
    injectJs: true,
    crossorigin: false,
    injectRes: [], // custom inject list, for css js, inline or remote.
    mergeLocals: true, // merge ctx.local, 
    fallbackToClient: true, // fallback to client rendering if server render failed
    afterRender: (html, context) => { /* eslint no-unused-vars:off */
      return html;
    }
  };

  config.webpack = {
    port: 9000, //${port} 为 构建前端渲染js, ${port+1} 构建后端渲染逻辑
    appPort: process.env.PORT || 8001,
    proxy: {
      host: 'http://127.0.0.1:9000', // target host that matched path will be proxy to
      match: /^\/public\/((?!(images|libs))\w)+/, // path pattern, exclude images
    },
    webpackConfigList: EasyWebpack.getWebpackConfig()
  };

  const localIP = require('ip').address();
  const domainWhiteList = [];
  [9000, 9001, 9002].forEach(port => {
    domainWhiteList.push(`http://localhost:${port}`);
    domainWhiteList.push(`http://127.0.0.1:${port}`);
    domainWhiteList.push(`http://${localIP}:${port}`);
  });

  config.security = { domainWhiteList };

  return config;
};
