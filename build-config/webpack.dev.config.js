'use strict';

let config = require('./webpack.config');

config.output.filename = 'superagent.js';

module.exports = config;
