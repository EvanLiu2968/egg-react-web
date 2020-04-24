# Evanliu2968

基于 Egg2 + React16 + Webpack4 多页面服务端渲染同构工程个人网站项目

在线地址[https://www.evanliu2968.com.cn](https://www.evanliu2968.com.cn)

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x
- Webpack 版本: ^4.x.x
- React 版本: ^16.11.0

## 文档

- [https://eggjs.org/zh-cn/intro/quickstart.html](https://eggjs.org/zh-cn/intro/quickstart.html)

## 特性

- 基于 React 多页面服务端客户端同构实现

- 支持 server 和 client 端代码修改, webpack即时编译和热更新, `yarn run dev` 一键启动应用

- 支持服务端渲染 `render` 和纯前端渲染 `renderClient`

- 支持自动根据 jsx 文件构建 webpack entry 入口文件

- Node 8 版本的 async 和 await 特性, Controller 采用 class 方式编写

## 接口服务

真实的复杂应用是需要ORM框架来管理数据库的。
因此按前后端分离的微服务架构，该服务只做接口渲染层，接口Model层已分离为[https://github.com/EvanLiu2968/egg-crud](https://github.com/EvanLiu2968/egg-crud)

注：本地开发时可以在根目录新建一个.env文件，用于保存当前服务环境配置，该文件会忽略提交
```bash
# 无该参数则默认为 http://127.0.0.1:7001
API_SERVER=http://www.evanliu2968.com.cn:7001
```

## 文档说明

- [~/docs/API.md](./docs/API.md)


#### 提交规范
- upd: 更新某功能（update）
- feat: 新功能（feature）
- fix: 修补bug
- docs: 文档（documentation）
- style: 格式（不影响代码运行的变动）
- refactor: 重构某功能
- test: 增加测试
- chore: 构建过程或辅助工具的变动
```sh
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'fix: 修复 xxx 功能'
```

#### 项目运行

```bash
yarn
# 本地开发运行
yarn run dev
# 编译文件
yarn run build
# 生产环境运行
yarn run pm2:add # or egg-script start --daemon
```
*更多命令请看`package.json/scripts`*

应用访问: [http://127.0.0.1:8001](http://127.0.0.1:8001)
接口文档: [http://127.0.0.1:7001/swagger-ui.html](http://127.0.0.1:7001/swagger-ui.html)

#### 配置说明

`webpack.config.js`是webpack构建配置，相应部分已做简单说明

`config/config.default.js`是egg应用配置，具体看文档或者阅读源码


#### gitignore

采用云服务器上build打包文件，仅保留了images(如有压缩需求，自行预处理)

#### IE兼容
参见`scripts/iePolyfill.js`
- stage-1 全局引入core-js的cdn(貌似babel的transfrom-runtime并不能兼容ie9，而且是局部变量，都无法检测是否有引入，还是建议单独全局引入，其实cdn+gzip也不会影响什么速度)
- stage-2 ie9/10兼容(适用React15/16 Vue2)
- stage-3 ie8兼容(适用React0.1)

## License

[Apache-2.0](LICENSE)
