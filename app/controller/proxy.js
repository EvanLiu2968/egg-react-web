'use strict';
const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');
const pathToRegexp = require('path-to-regexp');
const axios = require('axios')

module.exports = app => {
  const options = {
    '/proxy/github' :{
      target: 'https://api.github.com',
      changeOrigin: true,
      logLevel: 'debug',
      onError: function (err, req, res) {
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });
        res.end('Something went wrong. And we are reporting a custom error message.');
      },
      onProxyReq:function (proxyReq, req, res) {
        // add custom header or body to request
        console.log('=======proxyReq')
        // console.log(proxyReq)
      },
      pathRewrite: {
        '^/proxy/github': '',
      }
    },
    '/proxy/douban' :{
      target: 'https://api.douban.com/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/proxy/douban': '',
      },
      onProxyReq:function (proxyReq, req, res) {}
    },
  }
  return class ProxyController extends app.Controller {
    async api() {
      const { ctx, config, service } = this;
      const { method, url, body } = ctx.request
      Object.keys(options).forEach(function(key) {
        if(!matchProxy && realUrl.indexOf(key) > -1) {
          k2c(httpProxy(options[route]))(ctx, next);
        }
      });
    }
  };
};