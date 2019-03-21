/* @flow */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const dirApp = path.join(__dirname, 'app');
const dirNode = 'node_modules';
const dirMykrobeAtlasApp = path.join(dirNode, 'mykrobe-atlas/app');

const appHtmlTitle = 'Mykrobe';

module.exports = {
  entry: {
    bundle: ['whatwg-fetch', 'babel-polyfill', path.join(dirApp, 'index')],
  },
  resolve: {
    modules: [dirApp, dirMykrobeAtlasApp, dirNode],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.template.html'),
      title: appHtmlTitle,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }),
    // Don't bundle moment locales - instead, add a require to each specific locale e.g. require('moment/locale/en');
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: false,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(makeandship-js-common|mykrobe-atlas|swagger-client))/,
      },
    ],
  },
  stats: 'errors-only',
};
