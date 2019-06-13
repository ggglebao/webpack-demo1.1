const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: __dirname + '/src/index.js',
    print: __dirname + '/src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      title: 'Out Management',
      template: __dirname + '/src/index.html',
      favicon: __dirname + '/src/favicon.ico',// 给你生成的html文件生成一个 favicon
      chunks: ['app','print'],// 使用那些入口对应的文件
      inject: 'body' //script标签位值
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Out1 Management',
      template: __dirname + '/src/index.html',
      favicon: __dirname + '/src/favicon.ico',// 给你生成的html文件生成一个 favicon
      chunks: ['app','print'],// 使用那些入口对应的文件
      inject: 'body' //script标签位值
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}