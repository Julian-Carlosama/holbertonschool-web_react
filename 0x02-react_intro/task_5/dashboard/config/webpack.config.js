const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Implementing Webpack',
      template: './dist/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}
