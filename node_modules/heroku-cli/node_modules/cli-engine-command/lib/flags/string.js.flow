// @flow

import { type OptionFlag } from 'cli-engine-config'

type Options = $Shape<OptionFlag<string>>

export default function StringFlag(options: Options = {}): OptionFlag<string> {
  return {
    parse: input => input,
    ...options,
  }
}
