// @flow

import type { OptionFlag } from 'cli-engine-config'

type Options = $Shape<OptionFlag<number>>

export default function StringFlag(options: Options = {}): OptionFlag<number> {
  return {
    parse: (input, cmd, name) => parseInt(input),
    ...options,
  }
}
