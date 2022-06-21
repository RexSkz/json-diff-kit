export interface InlineDiffResult {
  type: 'add' | 'remove' | 'equal';
  text: string;
}

// This LCS is only for strings.
const lcsString = (l: string, r: string): [InlineDiffResult[], InlineDiffResult[]] => {
  const f = Array(l.length + 1).fill(0).map(() => Array(r.length + 1).fill(0));
  const backtrack = Array(l.length + 1).fill(0).map(() => Array(r.length + 1).fill(0));

  for (let i = 1; i <= l.length; i++) backtrack[i][0] = 'up';
  for (let j = 1; j <= r.length; j++) backtrack[0][j] = 'left';
  for (let i = 1; i <= l.length; i++) {
    for (let j = 1; j <= r.length; j++) {
      if (l[i - 1] === r[j - 1]) {
        f[i][j] = f[i - 1][j - 1] + 1;
        backtrack[i][j] = 'diag';
      } else if (f[i - 1][j] >= f[i][j - 1]) {
        f[i][j] = f[i - 1][j];
        backtrack[i][j] = 'up';
      } else {
        f[i][j] = f[i][j - 1];
        backtrack[i][j] = 'left';
      }
    }
  }

  let i = l.length;
  let j = r.length;
  const tLeft: InlineDiffResult[] = [];
  const tRight: InlineDiffResult[] = [];

  while (i > 0 || j > 0) {
    if (backtrack[i][j] === 'diag') {
      if (!tLeft.length || tLeft[0].type !== 'equal') {
        tLeft.unshift({ type: 'equal', text: '' });
      }
      if (!tRight.length || tRight[0].type !== 'equal') {
        tRight.unshift({ type: 'equal', text: '' });
      }
      tLeft[0].text = l[i - 1] + tLeft[0].text;
      tRight[0].text = r[j - 1] + tRight[0].text;
      i--;
      j--;
    } else if (backtrack[i][j] === 'up') {
      if (!tLeft.length || tLeft[0].type !== 'remove') {
        tLeft.unshift({ type: 'remove', text: '' });
      }
      tLeft[0].text = l[i - 1] + tLeft[0].text;
      i--;
    } else {
      if (!tRight.length || tRight[0].type !== 'add') {
        tRight.unshift({ type: 'add', text: '' });
      }
      tRight[0].text = r[j - 1] + tRight[0].text;
      j--;
    }
  }

  return [tLeft, tRight];
};

const getInlineDiff = (l: string, r: string) => {
  return lcsString(l, r);
};

export default getInlineDiff;
