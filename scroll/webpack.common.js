 const path = require('path');
 const { VueLoaderPlugin } = require('vue-loader');
 
 module.exports = {
   entry: {
     scroll: './src/index.js',
   },
   resolve:{
    //配置别名，在项目中可缩减引用路径
    alias: {
       vue$: 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
 output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
     publicPath:'',
     clean: true,
     library: 'scrollComponent',
     libraryTarget: 'umd'
   },
  //  optimization: {
  //   moduleIds: 'deterministic',//防止随着自身的 module.id 的变化，而发生变化。
  //   runtimeChunk: 'single',
  //  splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
   module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
			  test: /\.scss$/,
			  use: [{
				  loader: "vue-style-loader" // 将 JS 字符串生成为 style 节点
			  }, {
				  loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
			  },{
				  loader: "sass-loader" // 将 Sass 编译成 CSS
			  }]
			},
     
    ],
  },
 };