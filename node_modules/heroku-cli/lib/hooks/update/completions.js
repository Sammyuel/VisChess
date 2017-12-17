'use strict';

var _cliUx = require('cli-ux');

var _cliUx2 = _interopRequireDefault(_cliUx);

var _plugins = require('cli-engine/lib/plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _completions = require('cli-engine-heroku/lib/completions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = require('debug')('heroku:completions');

async function run(config, opts) {
  try {
    if (config.windows) {
      debug('skipping autocomplete on windows');
    } else {
      const plugins = await new _plugins2.default(config).list();
      const acPlugin = plugins.find(p => p.name === 'heroku-cli-autocomplete');
      if (acPlugin) {
        _cliUx2.default.action.start('Updating completions');
        let ac = await acPlugin.findCommand('autocomplete:buildcache');
        if (ac) {
          await ac.run({
            ...config,
            argv: []
          });
        }
        await _completions.AppCompletion.options({ config });
        await _completions.PipelineCompletion.options({ config });
        await _completions.SpaceCompletion.options({ config });
        await _completions.TeamCompletion.options({ config });
      } else {
        debug('skipping autocomplete, not installed');
      }
      _cliUx2.default.done();
    }
  } catch (err) {
    debug(err);
  }
}

module.exports = run;