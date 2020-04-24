import React, { Component } from 'react';

const baiduTongji = `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9f682e45a4a58c1b87ade63a74516cd5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`;


const ie9Mixins = '<!--[if lt IE 10]>' +
'<script src="/public/libs/ie-polyfill.js"></script>' +
'<![endif]-->';

const ie8Mixins = '<!--[if lt IE 9]>' +
'<meta httpEquiv="refresh" content="1;url=/error/lowVersionBrowser" />' +
'<script>top.window.location.href="/error/lowVersionBrowser";</script>' +
'<![endif]-->';

/**
 * 执行顺序： Layout(只在服务端执行一次) => 注入页面css/js等资源 => 客户端相应页面后初始化app容器
 */
export default class Layout extends React.Component {
  render() {
    let { ctx, request, helper, ...initState } = this.props;
    // const serialize = require('serialize-javascript');
    // initState = initState.state || initState;
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta name="keywords" content={this.props.keywords}></meta>
          <meta name="description" content={this.props.description}></meta>
          { EASY_ENV_IS_PROD && (
            <script dangerouslySetInnerHTML={{__html: baiduTongji}}></script>
          ) }
          { ctx && ctx.query.debug==='vconsole' && (
            <React.Fragment>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/vConsole/3.2.0/vconsole.min.js"></script>
              <script dangerouslySetInnerHTML={{__html:`new VConsole();`}}></script>
            </React.Fragment>
          ) }
          <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.7/core.min.js"></script>
          <script dangerouslySetInnerHTML={{__html:`document.write('${ie9Mixins}')`}}></script>
          { ctx && !/\/lowVersionBrowser/.test(ctx.request.url) && <script dangerouslySetInnerHTML={{__html:`document.write('${ie8Mixins}')`}}></script> }
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        </head>
        <body>
          <div id="app">{this.props.children}</div>
          {/* <script id="__INITIAL_STATE__" dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__= ${serialize(initState, { isJSON: true })};`}}></script> */}
        </body>
      </html>
    )
  }
}