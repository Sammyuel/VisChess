// @flow

import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import uuidV4 from 'uuid/v4'
import { type UserConfig } from './user_config'
import {validate} from 'jest-validate'

type S3 = {
  host?: string
}

type CLI = {
  dirname?: string,
  defaultCommand?: string,
  commands?: string,
  s3?: S3,
  hooks?: {[name: string]: string | string[]},
  plugins?: string[]
}
const exampleCLI = {
  bin: 'heroku',
  dirname: 'heroku',
  node: '8.0.0',
  defaultCommand: 'dashboard',
  commands: './lib/commands',
  hooks: {
    init: './lib/hooks/init.js',
    update: './lib/hooks/update.js',
    prerun: './lib/hooks/prerun.js',
    'plugins:preinstall': './lib/hooks/plugins/preinstall.js'
  },
  s3: {host: 'host'},
  plugins: ['heroku-pg', 'heroku-redis']
}

export type PJSON = {
  name: string,
  version: string,
  dependencies: { [name: string]: string },
  'cli-engine': CLI
}

export type Config = {
  name: string, // name of CLI
  dirname: string, // name of CLI directory
  initPath: string, // path to init script
  commandsDir: string, // root path to CLI commands
  bin: string, // name of binary
  s3: S3, // S3 config
  root: string, // root of CLI
  home: string, // user home directory
  pjson: PJSON, // parsed CLI package.json
  updateDisabled: ?string, // CLI updates are disabled
  defaultCommand: string, // default command if no args passed (usually help)
  channel: string, // CLI channel for updates
  version: string, // CLI version
  debug: number, // debugging level
  dataDir: string, // directory for storing CLI data
  cacheDir: string, // directory for storing temporary CLI data
  configDir: string, // directory for storing CLI config
  arch: string, // CPU architecture
  platform: string, // operating system
  windows: boolean, // is windows OS
  _version: '1', // config schema version
  skipAnalytics: boolean, // skip processing of analytics
  install: ?string, // generated uuid of this install
  userAgent: string, // user agent for API calls
  shell: string, // the shell in which the command is run
  hooks: {[name: string]: string[]}, // scripts to run in the CLI on lifecycle events like prerun
  userConfig: UserConfig, // users custom configuration json
  __cache: any // memoization cache
}

export type ConfigOptions = $Shape<Config>

function dir (config: Config, category: string, d: ?string): string {
  let cacheKey = `dir:${category}`
  let cache = config.__cache[cacheKey]
  if (cache) return cache
  d = d || path.join(config.home, category === 'data' ? '.local/share' : '.' + category)
  if (config.windows) d = process.env.LOCALAPPDATA || d
  d = process.env.XDG_DATA_HOME || d
  d = path.join(d, config.dirname)
  fs.mkdirpSync(d)
  config.__cache[cacheKey] = d
  return d
}

function debug (bin: string) {
  const debug = (process.env.DEBUG || '').includes('*') || envVarTrue(envVarKey(bin, 'DEBUG'))
  return debug ? 1 : 0
}

function envVarKey (...parts: string[]) {
  return parts.map(p => p.replace(/-/g, '_')).join('_').toUpperCase()
}

function envVarTrue (k: string): boolean {
  let v = process.env[k]
  return v === '1' || v === 'true'
}

function loadUserConfig (config: Config): UserConfig {
  const cache = config.__cache['userConfig']
  if (cache) return cache
  const configPath = path.join(config.configDir, 'config.json')
  let userConfig: UserConfig
  try {
    userConfig = fs.readJSONSync(configPath)
  } catch (e) {
    if (e.code === 'ENOENT') {
      userConfig = {
        skipAnalytics: false,
        install: null
      }
    } else {
      throw e
    }
  }
  config.__cache['userConfig'] = userConfig

  if (config.skipAnalytics) userConfig.install = null
  else if (!userConfig.install) {
    userConfig.install = uuidV4()
    try {
      fs.writeJSONSync(configPath, userConfig)
    } catch (e) {
      userConfig.install = null
    }
  }

  return userConfig
}

function shell (onWindows: boolean = false): string {
  let shellPath
  if (process.env['SHELL']) {
    shellPath = process.env['SHELL'].split(`/`)
  } else if (onWindows && process.env['COMSPEC']) {
    shellPath = process.env['COMSPEC'].split(/\\|\//)
  } else {
    shellPath = ['unknown']
  }
  return shellPath[shellPath.length - 1]
}

function userAgent (config: Config) {
  const channel = config.channel === 'stable' ? '' : ` ${config.channel}`
  return `${config.name}/${config.version}${channel} (${config.platform}-${config.arch}) node-${process.version}`
}

function commandsDir (config: Config): ?string {
  let commandsDir = config.pjson['cli-engine'].commands
  if (!commandsDir) return
  return path.join(config.root, commandsDir)
}

function hooks (config: Config): {[name: string]: string[]} {
  let hooks = {}
  for (let [k, v] of Object.entries(config.pjson['cli-engine'].hooks || {})) {
    hooks[k] = Array.isArray(v) ? v : [v]
  }
  return hooks
}

function envSkipAnalytics (config: Config) {
  if (config.userConfig.skipAnalytics) {
    return true
  } else if (envVarTrue('TESTING') || envVarTrue(envVarKey(config.bin, 'SKIP_ANALYTICS'))) {
    return true
  }
  return false
}

function validatePJSON (pjson: PJSON) {
  const cli = pjson['cli-engine'] || {}
  const comment = 'cli-engine-config'
  const title = {
    warning: 'invalid CLI package.json',
    error: 'invalid CLI package.json' }
  validate(cli, {comment, title, exampleConfig: exampleCLI})
  // validate(cli.hooks, {
  //   comment,
  //   condition: (option, validOption) => {
  //     console.dir({option, validOption})
  //   },
  //   title,
  //   exampleConfig: exampleCLI.hooks
  // })
}

export interface IRunOptions {
  argv?: string[],
  config?: ConfigOptions
}

export interface ICommand {
  +topic: string,
  +command: ?string,
  +description: ?string,
  +hidden: ?boolean,
  +usage: ?string,
  +help: ?string,
  +aliases: string[],
  +_version: string,
  +id: string,
  +run: (options: $Shape<IRunOptions>) => Promise<any>
}

export function buildConfig (existing: ?ConfigOptions = {}): Config {
  if (!existing) existing = {}
  if (existing.root && !existing.pjson) {
    let pjsonPath = path.join(existing.root, 'package.json')
    if (fs.existsSync(pjsonPath)) {
      // parse the package.json at the root
      let pjson = fs.readJSONSync(path.join(existing.root, 'package.json'))
      existing.pjson = {
        ...defaultConfig.pjson,
        'cli-engine': {
          ...defaultConfig.pjson['cli-engine'],
          ...(pjson['cli-engine'] || {})
        },
        ...pjson
      }
      validatePJSON(existing.pjson)
    }
  }
  return {
    __cache: {},
    _version: '1',
    pjson: {
      name: 'cli-engine',
      version: '0.0.0',
      dependencies: {},
      'cli-engine': {
        hooks: {},
        defaultCommand: 'help',
        s3: { host: null }
      }
    },
    channel: 'stable',
    home: os.homedir() || os.tmpdir(),
    root: path.join(__dirname, '..'),
    arch: os.arch() === 'ia32' ? 'x86' : os.arch(),
    platform: os.platform() === 'win32' ? 'windows' : os.platform(),
    get defaultCommand () { return this.pjson['cli-engine'].defaultCommand },
    get name () { return this.pjson.name },
    get version () { return this.pjson.version },
    get hooks () { return hooks(this) },
    get windows () { return this.platform === 'windows' },
    get userAgent () { return userAgent(this) },
    get dirname () { return this.pjson['cli-engine'].dirname || this.bin },
    get shell () { return shell(this.windows) },
    get bin () { return this.pjson['cli-engine'].bin || this.name },
    get debug () { return debug(this.bin || 'cli-engine') || 0 },
    get dataDir () { return dir(this, 'data') },
    get configDir () { return dir(this, 'config') },
    get cacheDir () { return dir(this, 'cache', this.platform === 'darwin' ? path.join(this.home, 'Library', 'Caches') : null) },
    get userConfig () { return loadUserConfig(this) },
    get skipAnalytics () { return envSkipAnalytics(this) },
    get install () { return this.userConfig.install },
    get s3 () { return this.pjson['cli-engine'].s3 },
    get commandsDir () { return commandsDir(this) },
    ...(existing: any)
  }
}

export const defaultConfig = buildConfig()
