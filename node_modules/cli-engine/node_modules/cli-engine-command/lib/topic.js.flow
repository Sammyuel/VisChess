// @flow

import type Command from './command'

export default class Topic {
  constructor(commands: Class<Command<*>>[]) {
    this.commands = commands
  }

  static topic: string
  static description: ?string
  static hidden = false

  commands: Class<Command<*>>[]

  static get id(): string {
    return this.topic
  }
}
