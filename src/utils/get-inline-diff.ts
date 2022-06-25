import { lcs as myersDiff } from 'fast-myers-diff';

export interface InlineDiffOptions {
  mode?: 'char' | 'word';
  wordSeparator?: string;
}

export interface InlineDiffResult {
  type: 'add' | 'remove' | 'equal';
  text: string;
}

const filterEmptyParts = (arr: InlineDiffResult[]) => {
  return arr.filter(item => item.text.length);
};

const joinBySeparator = (arr: InlineDiffResult[], separator: string) => {
  if (!arr.length) {
    return arr;
  }
  const result: InlineDiffResult[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.length && arr[i].text.length) {
      if (result[result.length - 1].type === 'equal') {
        result[result.length - 1] = {
          ...result[result.length - 1],
          text: result[result.length - 1].text + separator,
        };
      } else {
        result.push({ type: 'equal', text: separator });
      }
    }
    result.push(arr[i]);
  }
  return result;
};

const getInlineDiff = (l: string, r: string, options: InlineDiffOptions) => {
  if (options.mode === 'word') {
    const lArr = l.split(options.wordSeparator);
    const rArr = r.split(options.wordSeparator);
    const iter = myersDiff(lArr, rArr);
    let resultL: InlineDiffResult[] = [];
    let resultR: InlineDiffResult[] = [];
    let lastL = 0;
    let lastR = 0;
    for (const [sl, sr, length] of iter) {
      if (sl > lastL) {
        resultL.push({ type: 'remove', text: lArr.slice(lastL, sl).join(options.wordSeparator) });
      }
      if (sr > lastR) {
        resultR.push({ type: 'add', text: rArr.slice(lastR, sr).join(options.wordSeparator) });
      }
      lastL = sl + length;
      lastR = sr + length;
      resultL.push({ type: 'equal', text: lArr.slice(sl, lastL).join(options.wordSeparator) });
      resultR.push({ type: 'equal', text: rArr.slice(sr, lastR).join(options.wordSeparator) });
    }
    if (l.length > lastL) {
      resultL.push({ type: 'remove', text: lArr.slice(lastL).join(options.wordSeparator) });
    }
    if (r.length > lastR) {
      resultR.push({ type: 'add', text: rArr.slice(lastR).join(options.wordSeparator) });
    }
    resultL = joinBySeparator(filterEmptyParts(resultL), options.wordSeparator);
    resultR = joinBySeparator(filterEmptyParts(resultR), options.wordSeparator);
    return [resultL, resultR];
  }

  const iter = myersDiff(l, r);
  let resultL: InlineDiffResult[] = [];
  let resultR: InlineDiffResult[] = [];
  let lastL = 0;
  let lastR = 0;
  for (const [sl, sr, length] of iter) {
    if (sl > lastL) {
      resultL.push({ type: 'remove', text: l.substring(lastL, sl) });
    }
    if (sr > lastR) {
      resultR.push({ type: 'add', text: r.substring(lastR, sr) });
    }
    lastL = sl + length;
    lastR = sr + length;
    resultL.push({ type: 'equal', text: l.substring(sl, lastL) });
    resultR.push({ type: 'equal', text: r.substring(sr, lastR) });
  }
  if (l.length > lastL) {
    resultL.push({ type: 'remove', text: l.substring(lastL) });
  }
  if (r.length > lastR) {
    resultR.push({ type: 'add', text: r.substring(lastR) });
  }
  resultL = filterEmptyParts(resultL);
  resultR = filterEmptyParts(resultR);
  return [resultL, resultR];
};

export default getInlineDiff;
