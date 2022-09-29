const path = require("path");
const HTMLWebpackPlugin = require("html_webpack-plugin");

module.exports = {
    entry: {
      index: path.resolve(__dirname,'../src/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename:  'bundle.js'
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: 'Dashboard App',
        filename: 'index.html',
        template: './dist/index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            { loader: 'image-webpack-loader', options: { disable: true}}
          ]
        }
        
      ]
    },
    devtool: 'inline-source-map'
};
