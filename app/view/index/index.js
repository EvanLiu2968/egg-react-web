module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/public/",r(r.s=208)}({0:function(e,t){("object"==typeof e&&"object"==typeof e.exports?e.exports:window).noop=function(){}},1:function(e,t){e.exports=require("react")},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),l=(n=a)&&n.__esModule?n:{default:n};var u='\nvar _hmt = _hmt || [];\n(function() {\n  var hm = document.createElement("script");\n  hm.src = "https://hm.baidu.com/hm.js?9f682e45a4a58c1b87ade63a74516cd5";\n  var s = document.getElementsByTagName("script")[0]; \n  s.parentNode.insertBefore(hm, s);\n})();\n',i='\x3c!--[if lt IE 10]><script src="/public/libs/ie-polyfill.js"><\/script><![endif]--\x3e',c='\x3c!--[if lt IE 9]><meta httpEquiv="refresh" content="1;url=/error/lowVersionBrowser" /><script>top.window.location.href="/error/lowVersionBrowser";<\/script><![endif]--\x3e',s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.ctx;e.request,e.helper,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}(e,["ctx","request","helper"]);return l.default.createElement("html",null,l.default.createElement("head",null,l.default.createElement("title",null,this.props.title),l.default.createElement("meta",{charSet:"utf-8"}),l.default.createElement("meta",{name:"viewport",content:"initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"}),l.default.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),l.default.createElement("meta",{name:"keywords",content:this.props.keywords}),l.default.createElement("meta",{name:"description",content:this.props.description}),l.default.createElement("script",{dangerouslySetInnerHTML:{__html:u}}),t&&"vconsole"===t.query.debug&&l.default.createElement(l.default.Fragment,null,l.default.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/vConsole/3.2.0/vconsole.min.js"}),l.default.createElement("script",{dangerouslySetInnerHTML:{__html:"new VConsole();"}})),l.default.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.7/core.min.js"}),l.default.createElement("script",{dangerouslySetInnerHTML:{__html:"document.write('"+i+"')"}}),t&&!/\/lowVersionBrowser/.test(t.request.url)&&l.default.createElement("script",{dangerouslySetInnerHTML:{__html:"document.write('"+c+"')"}}),l.default.createElement("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"})),l.default.createElement("body",null,l.default.createElement("div",{id:"app"},this.props.children)))}}]),t}();t.default=s;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"baiduTongji","D:/github/egg-react-web/src/framework/layout/layout.jsx"),__REACT_HOT_LOADER__.register(i,"ie9Mixins","D:/github/egg-react-web/src/framework/layout/layout.jsx"),__REACT_HOT_LOADER__.register(c,"ie8Mixins","D:/github/egg-react-web/src/framework/layout/layout.jsx"),__REACT_HOT_LOADER__.register(s,"Layout","D:/github/egg-react-web/src/framework/layout/layout.jsx"))},208:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1),a=i(o),l=i(r(2));r(3);var u=i(r(209));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"render",value:function(){return a.default.createElement(l.default,this.props,a.default.createElement(u.default,this.props))}}]),t}();t.default=c;"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(c,"Page","D:/github/egg-react-web/src/page/index/index.jsx")},209:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),l=(n=a)&&n.__esModule?n:{default:n};r(0),r(0);var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"wrapper-full"},l.default.createElement("div",{className:"box-image"},l.default.createElement("img",{src:"/public/images/horse.png"})),l.default.createElement("div",{className:"box-intro"},l.default.createElement("h1",{className:"title"},"Evan Liu"),l.default.createElement("h2",{className:"subtitle"},"慎行，独思"),l.default.createElement("ul",{className:"column-list"},l.default.createElement("li",null,l.default.createElement("a",{href:"https://github.com/EvanLiu2968",target:"_blank",rel:"noopener noreferrer"},"Github")),l.default.createElement("li",null,l.default.createElement("a",{href:"https://evanliu2968.github.io",target:"_blank",rel:"noopener noreferrer"},"GhPage")),l.default.createElement("li",null,l.default.createElement("a",{href:"/public/images/weixin.jpg",target:"_blank",rel:"noopener noreferrer"},"Wechat")),l.default.createElement("li",null,l.default.createElement("a",{href:"/search",target:"_blank",rel:"noopener noreferrer"},"Search"))),l.default.createElement("ul",{className:"column-list"},l.default.createElement("li",null,l.default.createElement("a",{href:"/photo"},"Photo")),l.default.createElement("li",null,l.default.createElement("a",{href:"/article"},"Article")),l.default.createElement("li",null,l.default.createElement("a",{href:"/list"},"APP")))),l.default.createElement("p",{className:"copyright"},l.default.createElement("span",null,"© 2019 EvanLiu, Inc."),l.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.miitbeian.gov.cn"},"粤ICP备18035883号")))}}]),t}();t.default=u;"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(u,"App","D:/github/egg-react-web/src/page/index/index.jsx")},3:function(e,t,r){"use strict";r(4)},4:function(e,t,r){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[this.getDay()+""])),t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e}}});