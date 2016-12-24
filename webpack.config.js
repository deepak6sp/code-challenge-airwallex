var path = require("path");
module.exports = {
  entry: [
    './client/app/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'build/app.js'
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
  devServer: {
    contentBase: './'
  }
};
