// @flow

import { stdtermwidth } from './screen'
import type { Config, ICommand, Arg, Flag } from 'cli-engine-config'
import { color } from './color'

function linewrap(length: number, s: string): string {
  const linewrap = require('@heroku/linewrap')
  return linewrap(length, stdtermwidth, {
    skipScheme: 'ansi-color',
  })(s).trim()
}

function renderList(items: [string, ?string][]): string {
  const S = require('string')
  const max = require('lodash.maxby')

  let maxLength = max(items, '[0].length')[0].length
  let lines = items.map(i => {
    let left = i[0]
    let right = i[1]
    if (!right) return left
    left = `${S(left).padRight(maxLength)}`
    right = linewrap(maxLength + 2, right)
    return `${left}  ${right}`
  })
  return lines.join('\n')
}

function buildUsage(command: ICommand): string {
  if (command.usage) return command.usage.trim()
  let cmd = command.id
  if (!command.args) return cmd.trim()
  let args = command.args.map(renderArg)
  return `${cmd} ${args.join(' ')}`.trim()
}

function renderArg(arg: Arg): string {
  let name = arg.name.toUpperCase()
  if (arg.required !== false && arg.optional !== true) return `${name}`
  else return `[${name}]`
}

export default class Help {
  config: Config

  constructor(config: Config) {
    this.config = config
  }

  command(cmd: ICommand): string {
    let flags: any = Object.entries(cmd.flags || {}).filter(([name, flag]) => !(flag: any).hidden)
    let args = (cmd.args || []).filter(a => !a.hidden)
    let hasFlags = flags.length ? ` ${color.blue('[flags]')}` : ''
    let usage = `${color.bold('Usage:')} ${this.config.bin} ${buildUsage(cmd)}${hasFlags}\n`
    return [
      usage,
      cmd.description ? `\n${color.bold(cmd.description.trim())}\n` : '',
      this.renderAliases(cmd.aliases),
      this.renderArgs(args),
      this.renderFlags(flags),
      cmd.help ? `\n${cmd.help.trim()}\n` : '',
    ].join('')
  }

  commandLine(cmd: ICommand): [string, ?string] {
    return [buildUsage(cmd), cmd.description ? color.dim(cmd.description) : null]
  }

  renderAliases(aliases: ?(string[])): string {
    if (!aliases || !aliases.length) return ''
    let a = aliases.map(a => `  $ ${this.config.bin} ${a}`).join('\n')
    return `\n${color.blue('Aliases:')}\n${a}\n`
  }

  renderArgs(args: Arg[]): string {
    if (!args.find(f => f.description)) return ''
    return (
      '\n' +
      renderList(
        args.map(a => {
          return [a.name.toUpperCase(), a.description ? color.dim(a.description) : null]
        }),
      ) +
      '\n'
    )
  }

  renderFlags(flags: [string, Flag][]): string {
    if (!flags.length) return ''
    flags.sort((a, b) => {
      if (a[1].char && !b[1].char) return -1
      if (b[1].char && !a[1].char) return 1
      if (a[0] < b[0]) return -1
      return b[0] < a[0] ? 1 : 0
    })
    return (
      `\n${color.blue('Flags:')}\n` +
      renderList(
        flags.map(([name, f]) => {
          let label = []
          if (f.char) label.push(`-${f.char}`)
          if (name) label.push(` --${name}`)
          let usage = f.parse ? ` ${name.toUpperCase()}` : ''
          let description = f.description || ''
          if (f.required || f.optional === false) description = `(required) ${description}`
          return [` ${label.join(',').trim()}` + usage, description ? color.dim(description) : null]
        }),
      ) +
      '\n'
    )
  }
}
