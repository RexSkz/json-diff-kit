import type { DifferOptions } from '../differ';
import cmp from './cmp';

const sortKeys = (arr: string[], options: DifferOptions) => {
  return arr.sort((a, b) => cmp(a, b, { ignoreCase: options.ignoreCaseForKey }));
}

export default sortKeys;
