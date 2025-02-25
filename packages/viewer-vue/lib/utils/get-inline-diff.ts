import { lcs as myersDiff } from 'fast-myers-diff';

export interface InlineDiffOptions {
  mode?: 'char' | 'word';
  wordSeparator?: string;
}

export interface InlineDiffResult {
  type?: 'add' | 'remove';
  start: number;
  end: number;
}

const getOriginalIndices = (arr: string[], separatorLength: number) => {
  const result: number[] = [];
  let index = 0;
  for (const item of arr) {
    result.push(index);
    index += item.length + separatorLength;
  }
  result.push(index - separatorLength);
  return result;
};

const filterEmptyParts = (arr: InlineDiffResult[]) => {
  return arr.filter(item => item.end > item.start);
};

const getInlineDiff = (l: string, r: string, options: InlineDiffOptions): [
  InlineDiffResult[],
  InlineDiffResult[]
] => {
  let resultL: InlineDiffResult[] = [];
  let resultR: InlineDiffResult[] = [];
  let lastL = 0;
  let lastR = 0;

  if (options.mode === 'word') {
    const wordSeparator = options.wordSeparator || ' ';
    const lArr = l.split(wordSeparator);
    const rArr = r.split(wordSeparator);

    /**
     * The iter array contains the information about replacement, which is an array of
     * tuple `[startL, startR, length]`.
     *
     * e.g. `[1, 2, 3]` means replace `lArr[1...1+3]` to `rArr[2...2+3]` (include the end).
     */
    const iter = [...myersDiff(lArr, rArr)];

    const separatorLength = wordSeparator.length;
    const indicesL = getOriginalIndices(lArr, separatorLength);
    const indicesR = getOriginalIndices(rArr, separatorLength);

    for (const [sl, sr, length] of iter) {
      if (sl > lastL) {
        resultL.push({ type: 'remove', start: indicesL[lastL], end: indicesL[sl] });
      }
      if (sr > lastR) {
        resultR.push({ type: 'add', start: indicesR[lastR], end: indicesR[sr] });
      }
      lastL = sl + length;
      lastR = sr + length;
      resultL.push({ start: indicesL[sl], end: indicesL[lastL] });
      resultR.push({ start: indicesR[sr], end: indicesR[lastR] });
    }
    if (l.length > lastL) {
      resultL.push({ type: 'remove', start: indicesL[lastL], end: l.length });
    }
    if (r.length > lastR) {
      resultR.push({ type: 'add', start: indicesR[lastR], end: r.length });
    }
    resultL = filterEmptyParts(resultL);
    resultR = filterEmptyParts(resultR);
    return [resultL, resultR];
  }

  const iter = myersDiff(l, r);
  for (const [sl, sr, length] of iter) {
    if (sl > lastL) {
      resultL.push({ type: 'remove', start: lastL, end: sl });
    }
    if (sr > lastR) {
      resultR.push({ type: 'add', start: lastR, end: sr });
    }
    lastL = sl + length;
    lastR = sr + length;
    resultL.push({ start: sl, end: lastL });
    resultR.push({ start: sr, end: lastR });
  }
  if (l.length > lastL) {
    resultL.push({ type: 'remove', start: lastL, end: l.length });
  }
  if (r.length > lastR) {
    resultR.push({ type: 'add', start: lastR, end: r.length });
  }
  resultL = filterEmptyParts(resultL);
  resultR = filterEmptyParts(resultR);
  return [resultL, resultR];
};

export default getInlineDiff;
