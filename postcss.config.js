'use strict';

module.exports = {
  // exec: true,
  sourceMap: true,
  plugins: [
    // require('postcss-pxtorem')({
    //   rootValue: 75, //设计图px宽/屏幕rem宽
    //   unitPrecision: 6, //rem小数点
    //   propWhiteList: [], //
    //   selectorBlackList: [],
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 2 //大于最小计算尺寸才计算
    // }),
    require('autoprefixer')({ browsers: ['iOS >= 7', 'Android >= 4.0', 'ie >= 9'] })
  ]
};
