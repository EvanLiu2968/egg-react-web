// https://cn.eslint.org/docs/rules/
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  'extends': [
    'plugin:react/recommended', // 解决已使用，但是报未定义的错误
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true, // support Object spread https://eslint.org/docs/user-guide/configuring#specifying-parser-options
      "experimentalDecorators": true,
      "jsx": true,
      "modules": true
    }
  },
  "rules": {
    "indent": 0,
    // "semi": ["error", "never"],
    "react/prop-types": 0, // remove react-prop, open it when you need ~
    "react/display-name": 0,
    "react/no-deprecated": 0,
    "new-cap": "off",
    "newline-after-var": "off",
    "no-invalid-this": "off",
    "quotes": "off",
    "guard-for-in": "off",
    "no-console": "off",
    "no-undefined": "off",
    "array-bracket-spacing": "off",
    "no-unused-expressions": "off",
    "linebreak-style": "off",
    // "comma-dangle": [
    //   "error",
    //   "never"
    // ]
  },
  "plugins": [
    "react"
  ]
}