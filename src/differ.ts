import detectCircular from './utils/detect-circular';
import diffArrayLCS from './utils/diff-array-lcs';
import diffArrayNormal from './utils/diff-array-normal';
import diffObject from './utils/diff-object';
import getType from './utils/get-type';
import sortInnerArrays from './utils/sort-inner-arrays';
import stringify from './utils/stringify';

export interface DifferOptions {
  /**
   * Whether to detect circular reference in source objects before diff starts. Default
   * is `true`. If you are confident for your data (e.g. from `JSON.parse` or an API
   * response), you can set it to `false` to improve performance, but the algorithm may
   * not stop if circular reference does show up.
   */
  detectCircular?: boolean;
  /**
   * Max depth, default `Infinity` means no depth limit.
   */
  maxDepth?: number;
  /**
   * Support recognizing modifications, default `true` means the differ will output the
   * `* modified` sign apart from the basic `+ add` and `- remove` sign. If you prefer
   * Git output, please set it to `false`.
   */
  showModifications?: boolean;
  /**
   * The way to diff arrays, default is `"normal"`.
   *
   * For example, if we got 2 arrays: `a =[1, 2, 3]` and `b = [2, 3, 1, 4, 0]`, and the
   * `showModifications` is set to `true`.
   *
   * When using `normal`, the differ will compare the items in the same index one by one.
   * The time complexity is faster (`O(LEN)`). The output will be:
   *
   * ```text
   *   a b
   * * 1 2
   * * 2 3
   * * 3 1
   * +   4
   * +   0
   * ```
   *
   * When using `lcs`, the differ will perform the LCS (Longest Common Subsequence) algorithm,
   * assuming the items in the subsequence are unchanged. The time complexity for LCS is
   * slower (`O(LEN^2)`). The output will be:
   *
   * ```text
   *   a b
   * - 1
   *   2 2
   *   3 3
   * +   1
   * +   4
   * +   0
   * ```
   *
   * When using `unorder-normal`, the differ will first sort 2 arrays, then act like `normal`.
   * The output will be:
   *
   * ```text
   *   a b
   * * 1 0
   * * 2 1
   * * 3 2
   * * 4 3
   * +   4
   * ```
   *
   * When using `unorder-lcs`, the differ will first sort 2 arrays, then act like `lcs`.
   * The output will be:
   *
   * ```text
   *   a b
   * +   0
   *   1 1
   *   2 2
   *   3 3
   * +   4
   * ```
   */
  arrayDiffMethod?: 'normal' | 'lcs' | 'unorder-normal' | 'unorder-lcs';
}

export interface DiffResult {
  level: number;
  type: 'modify' | 'add' | 'remove' | 'equal';
  text: string;
  comma?: boolean;
  lineNumber?: number;
}

export type ArrayDiffFunc = (
  arrLeft: any[],
  arrRight: any[],
  keyLeft: string,
  keyRight: string,
  level: number,
  options: DifferOptions,
  ...args: any[]
) => [DiffResult[], DiffResult[]];

class Differ {
  private options: DifferOptions;
  private arrayDiffFunc: ArrayDiffFunc;

  constructor({
    detectCircular = true,
    maxDepth = Infinity,
    showModifications = true,
    arrayDiffMethod = 'normal',
  }: DifferOptions = {}) {
    this.options = {
      detectCircular,
      maxDepth,
      showModifications,
      arrayDiffMethod,
    };
    this.arrayDiffFunc = arrayDiffMethod === 'lcs' || arrayDiffMethod === 'unorder-lcs'
      ? diffArrayLCS
      : diffArrayNormal;
  }

  private detectCircular(source: any) {
    if (this.options.detectCircular) {
      if (detectCircular(source)) {
        throw new Error(`Circular reference detected in object (with keys ${Object.keys(source).map(t => `"${t}"`).join(', ')})`);
      }
    }
  }

  private sortResultLines(left: DiffResult[], right: DiffResult[]) {
    for (let k = 0; k < left.length; k++) {
      let changed = false;
      for (let i = 1; i < left.length; i++) {
        if (
          left[i].type === 'remove' &&
          left[i - 1].type === 'equal' &&
          right[i].type === 'equal' &&
          right[i - 1].type === 'add'
        ) {
          const t1 = left[i - 1];
          left[i - 1] = left[i];
          left[i] = t1;
          const t2 = right[i - 1];
          right[i - 1] = right[i];
          right[i] = t2;
          changed = true;
        }
      }
      if (!changed) {
        break;
      }
    }
  }

  private calculateLineNumbers(result: DiffResult[]) {
    let lineNumber = 0;
    for (const item of result) {
      if (!item.text) {
        continue;
      }
      item.lineNumber = ++lineNumber;
    }
  }

  private calculateCommas(result: DiffResult[]) {
    const nextLine = Array(result.length).fill(0);
    for (let i = result.length - 1; i > 0; i--) {
      if (result[i].text) {
        nextLine[i - 1] = i;
      } else {
        nextLine[i - 1] = nextLine[i];
      }
    }

    for (let i = 0; i < result.length; i++) {
      if (
        !result[i].text.endsWith('{')
        && !result[i].text.endsWith('[')
        && result[i].text
        && nextLine[i]
        && result[i].level <= result[nextLine[i]].level
      ) {
        result[i].comma = true;
      }
    }
  }

  diff(sourceLeft: any, sourceRight: any) {
    this.detectCircular(sourceLeft);
    this.detectCircular(sourceRight);

    if (
      this.options.arrayDiffMethod === 'unorder-normal'
      || this.options.arrayDiffMethod === 'unorder-lcs'
    ) {
      sourceLeft = sortInnerArrays(sourceLeft);
      sourceRight = sortInnerArrays(sourceRight);
    }

    let resultLeft: DiffResult[] = [];
    let resultRight: DiffResult[] = [];

    const typeLeft = getType(sourceLeft);
    const typeRight = getType(sourceRight);
    if (typeLeft !== typeRight) {
      resultLeft = stringify(sourceLeft, null, 1, this.options.maxDepth).split('\n').map(line => ({
        level: line.match(/^\s+/)?.[0]?.length || 0,
        type: 'remove',
        text: line.replace(/^\s+/, '').replace(/,$/g, ''),
        comma: line.endsWith(','),
      }));
      resultRight = stringify(sourceRight, null, 1, this.options.maxDepth).split('\n').map(line => ({
        level: line.match(/^\s+/)?.[0]?.length || 0,
        type: 'add',
        text: line.replace(/^\s+/, '').replace(/,$/g, ''),
        comma: line.endsWith(','),
      }));
      const lLength = resultLeft.length;
      const rLength = resultRight.length;
      resultLeft.push(...Array(rLength).fill({ level: 0, type: 'equal', text: '' }));
      resultRight.unshift(...Array(lLength).fill({ level: 0, type: 'equal', text: '' }));
    } else if (typeLeft === 'object') {
      [resultLeft, resultRight] = diffObject(sourceLeft, sourceRight, 1, this.options, this.arrayDiffFunc);
      resultLeft.unshift({ level: 0, type: 'equal', text: '{' });
      resultLeft.push({ level: 0, type: 'equal', text: '}' });
      resultRight.unshift({ level: 0, type: 'equal', text: '{' });
      resultRight.push({ level: 0, type: 'equal', text: '}' });
    } else if (typeLeft === 'array') {
      [resultLeft, resultRight] = this.arrayDiffFunc(sourceLeft, sourceRight, '', '', 0, this.options);
    } else if (sourceLeft !== sourceRight) {
      if (this.options.showModifications) {
        resultLeft = [{ level: 0, type: 'modify', text: stringify(sourceLeft, null, null, this.options.maxDepth) }];
        resultRight = [{ level: 0, type: 'modify', text: stringify(sourceRight, null, null, this.options.maxDepth) }];
      } else {
        resultLeft = [
          { level: 0, type: 'remove', text: stringify(sourceLeft, null, null, this.options.maxDepth) },
          { level: 0, type: 'equal', text: '' },
        ];
        resultRight = [
          { level: 0, type: 'equal', text: '' },
          { level: 0, type: 'add', text: stringify(sourceRight, null, null, this.options.maxDepth) },
        ];
      }
    } else {
      resultLeft = [{ level: 0, type: 'equal', text: stringify(sourceLeft, null, null, this.options.maxDepth) }];
      resultRight = [{ level: 0, type: 'equal', text: stringify(sourceRight, null, null, this.options.maxDepth) }];
    }

    this.sortResultLines(resultLeft, resultRight);

    this.calculateLineNumbers(resultLeft);
    this.calculateLineNumbers(resultRight);

    this.calculateCommas(resultLeft);
    this.calculateCommas(resultRight);

    return [resultLeft, resultRight] as const;
  }
}

export default Differ;
