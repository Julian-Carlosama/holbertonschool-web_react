const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname,'../src/index.js'),
  },
  output: {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      favicon:'../src/assets/favicon.ico',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
          }
      }
      },
      {
        test: /\.(Scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          { 
            loader: 'image-webpack-loader',
            options: { disable: true }
          }, 
        ]
      }
    ],
  },
  devtool: 'inline-source-map'
}
