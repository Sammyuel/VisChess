// @flow

import util from 'util'
import linewrap from './linewrap'
import {errtermwidth} from './screen'
import {SimpleAction, SpinnerAction, ActionBase, shouldDisplaySpinner} from './action'
import supports from 'supports-color'
import chalk from 'chalk'
import path from 'path'
import {buildConfig, type Config, type ConfigOptions} from 'cli-engine-config'
import Prompter, {type PromptOptions} from './prompt'
import type {TableOptions} from './table'
import StreamOutput, {logToFile} from './stream'

class ExitError extends Error {
  constructor (code: number) {
    super(`Exited with code: ${code}`)
    this.code = code
  }

  code: number
}

export const CustomColors = {
  supports,
  // map gray -> dim because it's not solarized compatible
  gray: (s: string) => chalk.dim(s),
  grey: (s: string) => chalk.dim(s),
  attachment: (s: string) => chalk.cyan(s),
  addon: (s: string) => chalk.yellow(s),
  configVar: (s: string) => chalk.green(s),
  release: (s: string) => chalk.blue.bold(s),
  cmd: (s: string) => chalk.cyan.bold(s),
  app: (s: string) => CustomColors.heroku(`⬢ ${s}`),
  heroku: (s: string) => {
    if (!CustomColors.supports) return s
    let has256 = CustomColors.supports.has256 || (process.env.TERM || '').indexOf('256') !== -1
    return has256 ? '\u001b[38;5;104m' + s + chalk.styles.reset.open : chalk.magenta(s)
  }
}

if (['false', '0'].indexOf((process.env.COLOR || '').toLowerCase()) !== -1) CustomColors.supports = false

function wrap (msg: string): string {
  return linewrap(6,
    errtermwidth, {
      skipScheme: 'ansi-color',
      skip: /^\$ .*$/
    })(msg)
}

function bangify (msg: string, c: string): string {
  let lines = msg.split('\n')
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]
    lines[i] = ' ' + c + line.substr(2, line.length)
  }
  return lines.join('\n')
}

function getErrorMessage (err: Error): string {
  let message
  if (err.body) {
    // API error
    if (err.body.message) {
      message = util.inspect(err.body.message)
    } else if (err.body.error) {
      message = util.inspect(err.body.error)
    }
  }
  // Unhandled error
  if (err.message && err.code) {
    message = `${util.inspect(err.code)}: ${err.message}`
  } else if (err.message) {
    message = err.message
  }
  return message || util.inspect(err)
}

const arrow = process.platform === 'win32' ? '!' : '▸'

export default class Output {
  constructor (options: {config?: ?ConfigOptions, mock?: boolean} = {}) {
    this.mock = options.mock
    this.config = buildConfig(options.config)
    this.stdout = new StreamOutput(process.stdout, this)
    this.stderr = new StreamOutput(process.stderr, this)
    this.action = shouldDisplaySpinner(this) ? new SpinnerAction(this) : new SimpleAction(this)
    if (this.mock) chalk.enabled = CustomColors.supports = false
    this.prompter = new Prompter(this)
  }

  mock = false
  config: Config
  action: ActionBase
  stdout: StreamOutput
  stderr: StreamOutput
  prompter: Prompter

  get color (): $Shape<typeof chalk & typeof CustomColors> {
    return new Proxy(chalk, {
      get: (chalk, name) => {
        if (CustomColors[name]) return CustomColors[name]
        return chalk[name]
      }
    })
  }

  async done (...rest: void[]): Promise<void> {
    this.action.stop()
  }

  log (data, ...args: any) { this.stdout.log(data, ...args) }

  styledJSON (obj: any) {
    let json = JSON.stringify(obj, null, 2)
    if (CustomColors.supports) {
      let cardinal = require('cardinal')
      let theme = require('cardinal/themes/jq')
      this.log(cardinal.highlight(json, {json: true, theme: theme}))
    } else {
      this.log(json)
    }
  }

  styledHeader (header: string) {
    this.log(this.color.dim('=== ') + this.color.bold(header))
  }

  styledObject (obj: any, keys: string[]) {
    const util = require('util')
    let keyLengths = Object.keys(obj).map(key => key.toString().length)
    let maxKeyLength = Math.max.apply(Math, keyLengths) + 2
    function pp (obj) {
      if (typeof obj === 'string' || typeof obj === 'number') {
        return obj
      } else if (typeof obj === 'object') {
        return Object.keys(obj).map(k => k + ': ' + util.inspect(obj[k])).join(', ')
      } else {
        return util.inspect(obj)
      }
    }
    let logKeyValue = (key, value) => {
      this.log(`${this.color.blue(key)}:` + ' '.repeat(maxKeyLength - key.length - 1) + pp(value))
    }
    for (var key of (keys || Object.keys(obj).sort())) {
      let value = obj[key]
      if (Array.isArray(value)) {
        if (value.length > 0) {
          logKeyValue(key, value[0])
          for (var e of value.slice(1)) {
            this.log(' '.repeat(maxKeyLength) + pp(e))
          }
        }
      } else if (value !== null && value !== undefined) {
        logKeyValue(key, value)
      }
    }
  }

  /**
   * inspect an object for debugging
   */
  inspect (obj: any, opts: any = {}) {
    this.action.pause(() => {
      console.dir(obj, Object.assign({colors: true}, opts))
    })
  }

  debug (obj: string) {
    if (this.config.debug) this.action.pause(() => console.log(obj))
  }

  get errlog (): string { return path.join(this.config.cacheDir, 'error.log') }
  get autoupdatelog (): string { return path.join(this.config.cacheDir, 'autoupdate.log') }

  error (err: Error | string, exitCode?: number | false = 1) {
    if (this.mock && typeof err !== 'string' && exitCode !== false) throw err
    try {
      if (typeof err === 'string') err = new Error(err)
      this.logError(err)
      if (this.action.task) this.action.stop(this.color.bold.red('!'))
      if (this.config.debug) {
        this.stderr.log(err.stack || util.inspect(err))
      } else {
        this.stderr.log(bangify(wrap(getErrorMessage(err)), this.color.red(arrow)))
      }
    } catch (e) {
      console.error('error displaying error')
      console.error(e)
      console.error(err)
    }
    if (exitCode !== false) this.exit(exitCode)
  }

  warn (err: Error | string, prefix?: string) {
    this.action.pause(() => {
      try {
        prefix = prefix ? `${prefix} ` : ''
        err = typeof err === 'string' ? new Error(err) : err
        this.logError(err)
        if (this.config.debug) process.stderr.write(`WARNING: ${prefix}`) && this.stderr.log(err.stack || util.inspect(err))
        else this.stderr.log(bangify(wrap(prefix + getErrorMessage(err)), this.color.yellow(arrow)))
      } catch (e) {
        console.error('error displaying warning')
        console.error(e)
        console.error(err)
      }
    }, this.color.bold.yellow('!'))
  }

  logError (err: Error | string) {
    logToFile(util.inspect(err) + '\n', this.errlog)
  }

  prompt (name: string, options: PromptOptions) {
    return this.prompter.prompt(name, options)
  }

  table <T: {height?: number}> (data: Array<T>, options: $Shape<TableOptions<T>>) {
    let table = require('./table')
    return table(this, data, options)
  }

  exit (code: number = 0) {
    if (this.config.debug) console.error(`Exiting with code: ${code}`)
    if (this.mock) throw new ExitError(code); else process.exit(code)
  }
}
