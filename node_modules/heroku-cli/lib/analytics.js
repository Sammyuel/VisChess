'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _httpCall = require('http-call');

var _netrcParser = require('netrc-parser');

var _netrcParser2 = _interopRequireDefault(_netrcParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _vars = require('cli-engine-heroku/lib/vars');

var _vars2 = _interopRequireDefault(_vars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = require('debug')('heroku:analytics');

class AnalyticsCommand {

  constructor(config) {
    this.config = config;
  }

  _initialAnalyticsJSON() {
    return {
      schema: 1,
      commands: []
    };
  }

  async record(opts) {
    const plugin = opts.Command.plugin;
    if (!plugin) {
      debug('no plugin found for analytics');
      return;
    }

    if (!this.user) return;

    let analyticsJSON = await this._readJSON();

    analyticsJSON.commands.push({
      command: opts.Command.id,
      completion: await this._acAnalytics(),
      version: this.config.version,
      plugin: plugin.name,
      plugin_version: plugin.version,
      os: this.config.platform,
      shell: this.config.shell,
      valid: true,
      language: 'node'
    });

    await this._writeJSON(analyticsJSON);
  }

  async submit() {
    try {
      let user = this.user;
      if (!user) return;

      const local = await this._readJSON();
      if (local.commands.length === 0) return;

      const body = {
        schema: local.schema,
        commands: local.commands,
        user: user,
        install: this.config.install,
        cli: this.config.name
      };

      await _httpCall.HTTP.post(this.url, { body });

      local.commands = [];
      await this._writeJSON(local);
    } catch (err) {
      debug(err);
      await this._writeJSON(this._initialAnalyticsJSON());
    }
  }

  get url() {
    return process.env['CLI_ENGINE_ANALYTICS_URL'] || 'https://cli-analytics.heroku.com/record';
  }

  get analyticsPath() {
    return _path2.default.join(this.config.cacheDir, 'analytics.json');
  }

  get usingHerokuAPIKey() {
    return !!(process.env['HEROKU_API_KEY'] && process.env['HEROKU_API_KEY'].length > 0);
  }

  get netrcLogin() {
    let netrc = new _netrcParser2.default();
    return netrc.machines[_vars2.default.apiHost].login;
  }

  get user() {
    if (this.config.skipAnalytics || this.usingHerokuAPIKey) return;
    return this.netrcLogin;
  }

  async _readJSON() {
    try {
      let analytics = await _fsExtra2.default.readJson(this.analyticsPath);
      analytics.commands = analytics.commands || [];
      return analytics;
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
      return this._initialAnalyticsJSON();
    }
  }

  async _writeJSON(analyticsJSON) {
    return _fsExtra2.default.outputJson(this.analyticsPath, analyticsJSON);
  }

  _acAnalyticsPath(type) {
    return _path2.default.join(this.config.cacheDir, 'completions', 'completion_analytics', type);
  }

  async _acAnalytics() {
    let meta = {
      cmd: _fsExtra2.default.exists(this._acAnalyticsPath('command')),
      flag: _fsExtra2.default.exists(this._acAnalyticsPath('flag')),
      value: _fsExtra2.default.exists(this._acAnalyticsPath('value'))
    };
    let score = 0;
    if (await meta.cmd) score += 1;
    if (await meta.flag) score += 2;
    if (await meta.value) score += 4;
    await _fsExtra2.default.emptyDir(this._acAnalyticsPath(''));
    return score;
  }
}
exports.default = AnalyticsCommand;