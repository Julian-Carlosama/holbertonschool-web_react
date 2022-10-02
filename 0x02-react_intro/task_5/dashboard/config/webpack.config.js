const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8000,
  },
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
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
