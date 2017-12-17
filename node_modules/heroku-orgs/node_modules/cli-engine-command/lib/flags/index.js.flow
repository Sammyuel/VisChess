// @flow

import type Command from '../command'
import boolean from './boolean'
import string from './string'
import number from './number'
import type {Completion} from '../completion'

type AlphabetUppercase = | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'X' | 'Y' | 'Z'
type AlphabetLowercase = | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'x' | 'y' | 'z'

export type Flag = {
  char?: (AlphabetLowercase | AlphabetUppercase),
  description?: string,
  hidden?: boolean,
}

export type BooleanFlag = Flag & {
  parse: null
}

export type OptionFlag <T> = Flag & {
  default?: ?() => Promise<?T>,
  required?: ?boolean,
  optional?: ?boolean,
  parse: (?string, ?Command<*> | void, string | void) => (Promise<?T> | ?T),
  completion?: Completion
}

export const flags = {boolean, string, number}
