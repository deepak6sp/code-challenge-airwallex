var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: [
    './client/app/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },{
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  sassLoader: {
      includePaths: [ 'client/styles' ]
  },
  resolve: {
    extensions: ['', '.js', '.scss']
  },
   // This plugin moves all the CSS into a separate stylesheet
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  devServer: {
    contentBase: './'
  }
};