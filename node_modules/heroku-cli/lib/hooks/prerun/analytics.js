'use strict';

const debug = require('debug')('heroku:analytics');

async function run(config, opts) {
  try {
    const Analytics = require('../../analytics').default;
    const analytics = new Analytics(config);
    await analytics.record(opts);
  } catch (err) {
    debug(err);
  }
}

module.exports = run;