// @flow

import util from 'util'
import chalk from 'chalk'
import path from 'path'
import moment from 'moment'
import fs from 'fs-extra'
import type Output from '.'

export function logToFile (msg: string, logfile: string) {
  try {
    fs.mkdirpSync(path.dirname(logfile))
    fs.appendFileSync(logfile, chalk.stripColor(msg))
  } catch (err) { console.error(err) }
}

export default class StreamOutput {
  output = ''
  stream: stream$Writable
  out: Output
  logfile: ?string

  static startOfLine = true

  constructor (stream: stream$Writable, output: Output) {
    this.out = output
    this.stream = stream
  }

  write (msg: string, options: {log?: boolean} = {}) {
    const log = options.log !== false
    if (log) this.writeLogFile(msg, this.constructor.startOfLine)
    // conditionally show timestamp if configured to display
    if (this.constructor.startOfLine && this.displayTimestamps) msg = this.timestamp(msg)
    if (this.out.mock) this.output += msg
    else this.stream.write(msg)
    this.constructor.startOfLine = msg.endsWith('\n')
  }

  timestamp (msg: string): string {
    return `[${moment().format()}] ${msg}`
  }

  log (data: string, ...args: any[]) {
    let msg = data ? util.format(data, ...args) : ''
    msg += '\n'
    this.out.action.pause(() => this.write(msg))
  }

  writeLogFile (msg: string, withTimestamp: boolean) {
    if (!this.logfile) return
    msg = withTimestamp ? this.timestamp(msg) : msg
    logToFile(msg, this.logfile)
  }

  get displayTimestamps (): boolean {
    let bin = this.out.config.bin.replace('-', '_').toUpperCase()
    let key = `${bin}_TIMESTAMPS`
    return ['1', 'true'].includes(process.env[key])
  }
}
