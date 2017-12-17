// @flow

import type Output from '.'

export function shouldDisplaySpinner (out: Output) {
  return !process.env.DEBUG && !out.mock && !out.config.debug && !!process.stdin.isTTY && !!process.stderr.isTTY && !process.env.CI && process.env.TERM !== 'dumb'
}

type Task = {
  action: string,
  status: ?string,
  active: ?boolean
}

export class ActionBase {
  task: ?Task
  out: Output

  constructor (out: Output) {
    this.out = out
  }

  start (action: string, status: ?string) {
    const task = this.task = {action, status, active: this.task && this.task.active}
    this._start()
    task.active = true
    this.log(task)
  }

  stop (msg: string = 'done') {
    const task = this.task
    if (!task) return
    // TODO: is this right?
    this.status = msg
    this._stop()
    task.active = false
    delete this.task
  }

  get status (): ?string { return this.task ? this.task.status : undefined }
  set status (status: string) {
    const task = this.task
    if (!task) return
    if (task.status === status) return
    this._updateStatus(status, task.status)
    task.status = status
    this.log(task)
  }

  pause (fn: Function, icon: ?string) {
    const task = this.task
    const active = task && task.active
    if (task && active) {
      this._pause(icon)
      task.active = false
    }
    let ret = fn()
    if (task && active) {
      this._resume()
    }
    return ret
  }

  log ({action, status}: {action: string, status: ?string}) {
    let msg = status ? `${action}... ${status}\n` : `${action}...\n`
    this.out.stderr.writeLogFile(msg, true)
  }

  _start () { throw new Error('not implemented') }
  _stop () { throw new Error('not implemented') }
  _resume () { if (this.task) this.start(this.task.action, this.task.status) }
  _pause (icon: ?string) { throw new Error('not implemented') }
  _updateStatus (status: string, prevStatus: ?string) { }
}

export class SimpleAction extends ActionBase {
  _start () {
    const task = this.task
    if (!task) return
    this._render(task.action, task.status)
  }

  _pause (icon: ?string) {
    if (icon) this._updateStatus(icon)
    this._write('\n')
  }

  _resume () { }

  _updateStatus (status: string, prevStatus: ?string) {
    const task = this.task
    if (!task) return
    if (task.active && !prevStatus) this._write(` ${status}`)
    else this._render(task.action, status)
  }

  _stop () {
    this._write('\n')
  }

  _render (action: string, status: ?string) {
    const task = this.task
    if (!task) return
    if (task.active) this._write('\n')
    this._write(status ? `${action}... ${status}` : `${action}...`)
  }

  _write (s: string) {
    this.out.stderr.write(s, {log: false})
  }
}

export class SpinnerAction extends ActionBase {
  spinner: number
  ansi: any
  frames: any
  frameIndex: number
  output: ?string
  width: number

  constructor (out: Output) {
    super(out)
    this.ansi = require('ansi-escapes')
    this.frames = require('./spinners.js')[process.platform === 'win32' ? 'line' : 'dots2'].frames
    this.frameIndex = 0
    const screen = require('./screen')
    this.width = screen.errtermwidth
  }

  _start () {
    this._reset()
    if (this.spinner) clearInterval(this.spinner)
    this._render()
    let interval: any = this.spinner = setInterval(this._render.bind(this), this.out.config.windows ? 500 : 100, 'spinner')
    interval.unref()
  }

  _stop () {
    clearInterval(this.spinner)
    this._render()
    this.output = null
  }

  _pause (icon: ?string) {
    clearInterval(this.spinner)
    this._reset()
    if (icon) this._render(` ${icon}`)
    this.output = null
  }

  _render (icon: ?string) {
    const task = this.task
    if (!task) return
    this._reset()
    let frame = icon === 'spinner'
      ? ` ${this._frame()}`
      : icon || ''
    let status = task.status ? ` ${task.status}` : ''
    this.output = `${task.action}...${frame}${status}\n`
    this._write(this.output)
  }

  _reset () {
    if (!this.output) return
    let lines = this._lines(this.output)
    this._write(this.ansi.cursorLeft +
      this.ansi.cursorUp(lines) +
      this.ansi.eraseDown)
    this.output = null
  }

  _frame (): string {
    let frame = this.frames[this.frameIndex]
    this.frameIndex = ++this.frameIndex % this.frames.length
    return this.out.color.heroku(frame)
  }

  _lines (s: string): number {
    return this.out.color.stripColor(s)
      .split('\n')
      .map(l => Math.ceil(l.length / this.width))
      .reduce((c, i) => c + i, 0)
  }

  _write (s: string) {
    this.out.stderr.write(s, {log: false})
  }
}
