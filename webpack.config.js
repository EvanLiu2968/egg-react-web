

module.exports = {
  port: 9000,
  egg: true,
  framework: 'react',
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : undefined,
  entry: {
    extMath: '.js',
    include: [
      'src/page/',
      { layout: 'src/framework/layout/layout.jsx?loader=false' },
      { 'admin/index': 'src/page/admin/index.jsx?loader=false' },
    ],
    exclude: [
      'src/page/[a-z]+/component',
      'src/page/[a-z]+/src', 
      'src/page/test'
    ],
    loader: {
      client: 'src/framework/entry/client-loader.js',
      server: 'src/framework/entry/server-loader.js'
    }
  },
  // buildPath : '/public/',
  // publicPath: '/public/',
  alias: {
    '@': 'src',
    '@admin': 'src/page/admin/src'
  },
  dll: ['react', 'react-dom'],
  // common: ['axios'],
  // compile:{       // 在多页面入口较多时才开启
  //   thread: true, // 多进程编译
  //   cache: true   // 启动编译缓存
  // },
  loaders: {
    eslint: false,
    css: true,
    less: true,
    sass: true
  },
  plugins: {
    imagemini: false,
    plugins: {
      uglifyJs: {
        args: {
          compress: {
            warnings: false,
            dead_code: true,
            drop_console: false, // 保留console
            drop_debugger: true
          }
        }
      }
    }
  },
  done() {
    console.log('---webpack compile finish---');
    console.log('---start reload page...---');
  }
};
