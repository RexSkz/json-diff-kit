import { lcs as myersDiff } from 'fast-myers-diff';

export interface InlineDiffResult {
  type: 'add' | 'remove' | 'equal';
  text: string;
}

const getInlineDiff = (l: string, r: string) => {
  const iter = myersDiff(l, r);
  const resultL: InlineDiffResult[] = [];
  const resultR: InlineDiffResult[] = [];
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
  return [resultL, resultR];
};

export default getInlineDiff;
