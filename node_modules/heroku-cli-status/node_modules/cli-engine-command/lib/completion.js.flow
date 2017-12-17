// @flow

import type Output from './output'

type CompletionContext = {
  args?: ?{[name: string]: string},
  flags?: ?{[name: string]: string},
  argv?: ?string[],
  out: Output
}

export type Completion = {
  cacheDuration?: number,
  cacheKey?: (CompletionContext) => Promise<string>,
  options: (CompletionContext) => Promise<string[]>
}
