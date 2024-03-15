import { isEven } from '@ipipeline/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
