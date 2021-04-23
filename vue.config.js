
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const resolve = dir => path.resolve(__dirname, dir);
let plugins = [];

// npm i -D compression-webpack-plugin
// 1、如果 compression-webpack-plugin@3.0.0 的话，就把 vue.config.js 中关于 compression-webpack-plugin 配置 asset 改为 filename
// 2、如果构建过程中提示一些属性找不到，那么可以把项目中的 package.lock.json 和 node_modules 删除，
// 并把 package.json 中关于 compression-webpack-plugin 版本调低，如：1.1.12，然后重新 npm install 和 npm run build
if (process.env.NODE_ENV === "production") {
  const compressionTest = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
  plugins = [
    new CompressionPlugin({
      //[file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 "[path].gz[query]"。
      filename: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
      //可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"。
      algorithm: 'gzip',
      //所有匹配该正则的资源都会被处理。默认值是全部资源。
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      // test: /\.(js|css|html|svg)$/,
      //只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
      threshold: 10240,
      //只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
      minRatio: 0.8
    })
  ];
}

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
  publicPath: './',
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: 'http://localhost:8848'
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "my-project",
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    plugins
  }
}