export interface InlineHighlightResult {
  start: number;
  end: number;
  token: 'plain' | 'number' | 'boolean' | 'null' | 'key' | 'punctuation' | 'string';
}

const syntaxHighlightLine = (enabled: boolean, text: string, offset: number): InlineHighlightResult[] => {
  if (!enabled) {
    return [{ token: 'plain', start: offset, end: text.length + offset }];
  }
  if (!Number.isNaN(Number(text))) {
    return [{ token: 'number', start: offset, end: text.length + offset }];
  }
  if (text === 'true' || text === 'false') {
    return [{ token: 'boolean', start: offset, end: text.length + offset }];
  }
  if (text === 'null') {
    return [{ token: 'null', start: offset, end: text.length + offset }];
  }
  if (text.startsWith('"')) {
    if (text.endsWith(': [') || text.endsWith(': {')) {
      return [
        { token: 'key', start: offset, end: text.length - 3 + offset },
        { token: 'punctuation', start: text.length - 3, end: text.length - 2 + offset },
        { token: 'plain', start: text.length - 2, end: text.length - 1 + offset },
        { token: 'punctuation', start: text.length - 1, end: text.length + offset },
      ];
    }
    let pairedQuoteIndex = 1;
    while (pairedQuoteIndex < text.length) {
      if (text[pairedQuoteIndex] === '"') break;
      if (text[pairedQuoteIndex] === '\\') ++pairedQuoteIndex;
      ++pairedQuoteIndex;
    }
    if (pairedQuoteIndex === text.length - 1) {
      return [{ token: 'string', start: offset, end: text.length + offset }];
    }
    return [
      { token: 'key', start: offset, end: pairedQuoteIndex + 1 + offset },
      { token: 'punctuation', start: pairedQuoteIndex + 1, end: pairedQuoteIndex + 2 + offset },
      { token: 'plain', start: pairedQuoteIndex + 2, end: pairedQuoteIndex + 3 + offset },
      ...syntaxHighlightLine(enabled, text.substring(pairedQuoteIndex + 3), offset + pairedQuoteIndex + 3),
    ];
  }
  if (text === '{' || text === '}' || text === '[' || text === ']') {
    return [{ token: 'punctuation', start: offset, end: text.length + offset }];
  }
  // should this be expected?
  return [{ token: 'plain', start: offset, end: text.length + offset }];
};

export default syntaxHighlightLine;
