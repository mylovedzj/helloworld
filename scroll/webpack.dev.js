const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port:'8080',
    host:'192.168.0.102',
    proxy: {
      '/api': {
          //要访问的跨域的域名
          target: 'https://api.imjad.cn/',
          changOrigin: true,
          pathRewrite: {
              '^/api': ''
          }
      }
    }
  },
});