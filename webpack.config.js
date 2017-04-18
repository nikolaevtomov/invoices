var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var precss = require('precss');
var autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {

  devtool: "eval",
  context: path.join(__dirname, "app"),

  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, "app", "index.js")
  ],

  output: {
    filename: "/bundle.js",
    publicPath: "/",
    path: path.join(__dirname, "dist")
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel?cacheDirectory=true",
        include: path.join(__dirname, "app"),
        exclude: /(node_modules)/
      },
      { test: /\.css$/, loader: "style!css!postcss" },
      { test: /\.scss$/, loader: "style!css!postcss!sass" },
      { test: /\.html$/, loader: "html" }
    ]
  },

  include: [
    path.resolve(__dirname, "node_modules")
  ],

  postcss: function () {
    return {
      defaults: [precss, autoprefixer],
      cleaner: [autoprefixer({ browsers: ['last 2 version'] })],
    };
  },

  plugins: [
    new ExtractTextPlugin(!isProd ? 'bundle.css' : 'bundle.[hash].css'),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      root: path.resolve(__dirname, "app")
    },
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "app")
  }

};
