var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'webroot/js');
var APP_DIR = path.resolve(__dirname, 'src/React');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'myown.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  watchOptions : {
      poll: 500,
      ignored: /node_modules/
  }
};

module.exports = config;
