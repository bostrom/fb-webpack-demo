var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var PATHS = {
  appdir: path.join(__dirname, 'app'),
  appjs: path.join(__dirname, 'app', 'app.js'),
  builddir: path.join(__dirname, 'build'),
  ejstemplate: path.join(__dirname, 'app', 'index.ejs')
};

module.exports = {
  entry: {
    app: PATHS.appjs
  },
  output: {
    path: PATHS.builddir,
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: PATHS.appdir
    }, {
      test: /\.html$/,
      loader: "raw-loader",
      include: PATHS.appdir
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=100000",
      include: PATHS.appdir
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
      template: PATHS.ejstemplate
    })
  ]
};
