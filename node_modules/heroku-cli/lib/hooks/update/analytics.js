'use strict';

const debug = require('debug')('heroku:analytics');

async function run(config) {
  try {
    const Analytics = require('../../analytics').default;
    const analytics = new Analytics(config);
    await analytics.submit();
  } catch (err) {
    debug(err);
  }
}

module.exports = run;