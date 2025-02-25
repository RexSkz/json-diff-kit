import type { Terminal } from 'terminal-kit';
import type { DiffResult } from '@json-diff-kit/differ/src';

const DIVIDER = ' │ ';
const HINT_TEXT = 'Press q to quit, ↑/↓ to scroll';

const decorate = (line: DiffResult) => {
  const indent = '  '.repeat(line.level);
  const comma = line.comma ? ',' : '';
  return `${indent}${line.text}${comma}`;
};

const getOutputFunction = (terminal: Terminal, line: DiffResult) => {
  if (line.type === 'add') return terminal.bgGreen;
  if (line.type === 'remove') return terminal.bgRed;
  if (line.type === 'modify') return terminal.bgYellow;
  return terminal;
};

const showContent = (
  terminal: Terminal,
  leftResult: DiffResult[],
  rightResult: DiffResult[],
  columns: number,
  rows: number,
  startLine: number,
) => {
  const lineNumberWidth = Math.max(
    ...leftResult.map(line => String(line.lineNumber || '').length),
    ...rightResult.map(line => String(line.lineNumber || '').length),
  ) + DIVIDER.length;
  const contentWidth = ((columns - 1) >> 1) - lineNumberWidth;

  for (let _i = 0; _i < rows - 1; _i++) {
    terminal.moveTo(1, _i + 1).eraseLine();

    const i = _i + startLine;
    const left = leftResult[i];
    const right = rightResult[i];
    if (!left && !right) {
      continue;
    }

    const leftOutputFunction = getOutputFunction(terminal, left);
    const rightOutputFunction = getOutputFunction(terminal, right);

    leftOutputFunction((left.lineNumber || '').toString().padStart(lineNumberWidth - 1, ' ') + DIVIDER);
    leftOutputFunction(decorate(left).slice(0, contentWidth).padEnd(contentWidth, ' '));
    (left.type === 'modify' ? terminal.bgYellow : terminal)('│');
    rightOutputFunction((right.lineNumber || '').toString().padStart(lineNumberWidth - 1, ' ') + DIVIDER);
    rightOutputFunction(decorate(right).slice(0, contentWidth).padEnd(contentWidth, ' '));
  }

  terminal.moveTo(1, rows).eraseLine();
  const lineRangeText = `${startLine + 1}-${Math.min(startLine + rows - 1, leftResult.length)}/${leftResult.length}`;
  terminal(`${HINT_TEXT}${lineRangeText.padStart(columns - HINT_TEXT.length, ' ')}`);
  terminal.moveTo(1, rows);
};

const importTerminalKit = async() => {
  try {
    return await import('terminal-kit');
  } catch {
    // eslint-disable-next-line no-console
    console.error('Please install the package "terminal-kit" to show diff in terminal.');
    process.exit(1);
  }
};

const showInTerminal = async([leftResult, rightResult]: readonly [DiffResult[], DiffResult[]]) => {
  const { terminal } = await importTerminalKit();
  let startLine = 0;
  let columns = terminal.width;
  let rows = terminal.height;

  // Swap to an alternate screen buffer
  // https://github.com/vadimdemedes/ink/issues/263#issuecomment-600927688
  const enterAltScreenCommand = '\x1b[?1049h';
  const leaveAltScreenCommand = '\x1b[?1049l';
  process.stdout.write(enterAltScreenCommand);
  process.on('exit', () => {
    process.stdout.write(leaveAltScreenCommand);
  });

  showContent(terminal, leftResult, rightResult, columns, rows, startLine);

  terminal.on('resize', (newColumns: number, newRows: number) => {
    columns = newColumns;
    rows = newRows;
    showContent(terminal, leftResult, rightResult, columns, rows, startLine);
  });

  terminal.grabInput(true);
  terminal.on('key', (key: string) => {
    switch (key) {
      case 'UP':
        if (startLine > 0) {
          startLine--;
          showContent(terminal, leftResult, rightResult, columns, rows, startLine);
        }
        break;
      case 'DOWN':
        if (startLine < leftResult.length - rows + 1) {
          startLine++;
          showContent(terminal, leftResult, rightResult, columns, rows, startLine);
        }
        break;
      case 'PAGE_UP':
        startLine = Math.max(0, startLine - rows + 1);
        showContent(terminal, leftResult, rightResult, columns, rows, startLine);
        break;
      case 'PAGE_DOWN':
      case 'SPACE':
        startLine = Math.min(leftResult.length - rows + 1, startLine + rows - 1);
        showContent(terminal, leftResult, rightResult, columns, rows, startLine);
        break;
      case 'q':
      case 'CTRL_C':
        process.exit(0);
    }
  });
};

export default showInTerminal;
