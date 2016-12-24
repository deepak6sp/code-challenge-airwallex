var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: [
    './client/app/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'public/app.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  sassLoader: {
      includePaths: [ 'client/styles' ]
  },
  resolve: {
    extensions: ['', '.js', '.scss']
  },

  plugins: [
     // This plugin moves all the CSS into a separate stylesheet
    new ExtractTextPlugin('public/app.css'),
     // This plugin minify both css and js
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ],
  devServer: {
    contentBase: './'
  }
};
