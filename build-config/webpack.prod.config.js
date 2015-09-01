'use strict';

var webpack = require('webpack');
let config = require('./webpack.config');

config.output.filename = 'superagent.min.js';

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
