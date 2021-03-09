var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './client/src/main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    https: true
  },
  plugins: [
    new HtmlWebpackPlugin({ gameName: 'Tic-Tac-Toe', template: 'public/index.html' })
  ]
}
