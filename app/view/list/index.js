module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/public/",r(r.s=210)}({0:function(e,t){("object"==typeof e&&"object"==typeof e.exports?e.exports:window).noop=function(){}},1:function(e,t){e.exports=require("react")},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),l=(n=a)&&n.__esModule?n:{default:n};var i='\nvar _hmt = _hmt || [];\n(function() {\n  var hm = document.createElement("script");\n  hm.src = "https://hm.baidu.com/hm.js?9f682e45a4a58c1b87ade63a74516cd5";\n  var s = document.getElementsByTagName("script")[0]; \n  s.parentNode.insertBefore(hm, s);\n})();\n',c='\x3c!--[if lt IE 10]><script src="/public/libs/ie-polyfill.js"><\/script><![endif]--\x3e',u='\x3c!--[if lt IE 9]><meta httpEquiv="refresh" content="1;url=/error/lowVersionBrowser" /><script>top.window.location.href="/error/lowVersionBrowser";<\/script><![endif]--\x3e',s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.ctx;e.request,e.helper,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}(e,["ctx","request","helper"]);return l.default.createElement("html",null,l.default.createElement("head",null,l.default.createElement("title",null,this.props.title),l.default.createElement("meta",{charSet:"utf-8"}),l.default.createElement("meta",{name:"viewport",content:"initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"}),l.default.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),l.default.createElement("meta",{name:"keywords",content:this.props.keywords}),l.default.createElement("meta",{name:"description",content:this.props.description}),l.default.createElement("script",{dangerouslySetInnerHTML:{__html:i}}),t&&"vconsole"===t.query.debug&&l.default.createElement(l.default.Fragment,null,l.default.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/vConsole/3.2.0/vconsole.min.js"}),l.default.createElement("script",{dangerouslySetInnerHTML:{__html:"new VConsole();"}})),l.default.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.7/core.min.js"}),l.default.createElement("script",{dangerouslySetInnerHTML:{__html:"document.write('"+c+"')"}}),t&&!/\/lowVersionBrowser/.test(t.request.url)&&l.default.createElement("script",{dangerouslySetInnerHTML:{__html:"document.write('"+u+"')"}}),l.default.createElement("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"})),l.default.createElement("body",null,l.default.createElement("div",{id:"app"},this.props.children)))}}]),t}();t.default=s;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"baiduTongji","D:/github/egg-react-web/src/framework/layout/layout.jsx"),__REACT_HOT_LOADER__.register(c,"ie9Mixins","D:/github/egg-react-web/src/framework/layout/layout.jsx"),__REACT_HOT_LOADER__.register(u,"ie8Mixins","D:/github/egg-react-web/src/framework/layout/layout.jsx"),__REACT_HOT_LOADER__.register(s,"Layout","D:/github/egg-react-web/src/framework/layout/layout.jsx"))},210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1),a=c(o),l=c(r(2));r(3);var i=c(r(211));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"render",value:function(){return a.default.createElement(l.default,this.props,a.default.createElement(i.default,this.props))}}]),t}();t.default=u;"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(u,"Page","D:/github/egg-react-web/src/page/list/index.jsx")},211:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=l(r(1)),a=l(r(5));function l(e){return e&&e.__esModule?e:{default:e}}r(0);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={loading:!1,apps:[{name:"React管理系统",color:"#20a0ff",url:"/admin",description:"用于管理前台模块的react单页系统，后端服务已分离至egg-crud仓库"},{name:"API文档",color:"#13CE66",url:"/doc",description:"My WebSite APIs docs"},{name:"小程序",color:"#FF4949",url:"/metaphysics",description:"Metaphysics Calculator"},{name:"RSS订阅",color:"#F7BA2A",url:"/subscription",description:"My RSS subscription from my spider, 包括我的Github动态，知乎动态，网易云歌单等"},{name:"网站介绍",color:"#8492A6",url:"/about",description:"Shaper, 粒子效果生成器，简单文字介绍我的网站"},{name:"照片",color:"#FF6666",url:"/photo",description:"电影与生活，色彩与空间"},{name:"文章",color:"#FF9933",url:"/article",description:"技术学习、分享，Share the Ghost in the Shell"},{name:"话题关系图",color:"#33CC99",url:"/chart",description:"数据来源本站爬虫，取自知乎、国家统计局(http://data.stats.gov.cn/)等"},{name:"二维码生成",color:"#303133",url:"/qrcode",description:"node-qrcode生成"},{name:"PDF生成",color:"#20a0ff",url:"/pdf",description:"puppeteer生成PDF"},{name:"全景VR",color:"#F56C6C",url:"/vr",description:"基于Three.js"}]},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.default.createElement(a.default,null,o.default.createElement("div",{className:"content"},o.default.createElement("div",{className:"waterfall clearfix"},this.state.apps.map(function(e,t){return o.default.createElement("div",{key:t,className:"waterfall-item"},o.default.createElement("a",{className:"box-app",style:{background:e.color},href:e.url},o.default.createElement("h3",{className:"app-name"},e.name),o.default.createElement("p",{className:"app-desc"},e.description)))}))))}}]),t}();t.default=i;"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(i,"App","D:/github/egg-react-web/src/page/list/index.jsx")},3:function(e,t,r){"use strict";r(4)},4:function(e,t,r){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[this.getDay()+""])),t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e}},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),l=(n=a)&&n.__esModule?n:{default:n};r(0),r(0);var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.default.createElement("div",{className:"wrapper"},l.default.createElement("header",{className:"header"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"header-left"},l.default.createElement("a",{href:"/"},l.default.createElement("img",{className:"logo",src:"/public/images/logo-text.png"}))),l.default.createElement("div",{className:"header-right"},this.props.header))),l.default.createElement("div",{className:"main"},l.default.createElement("div",{className:"container"},this.props.children)),l.default.createElement("p",{className:"copyright"},l.default.createElement("span",null,"© ",(new Date).getFullYear()," EvanLiu, Inc."),l.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.miitbeian.gov.cn"},"粤ICP备18035883号")))}}]),t}();t.default=i;"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(i,"Container","D:/github/egg-react-web/src/component/container/index.js")}});