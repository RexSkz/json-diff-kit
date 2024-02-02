import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import swc from 'rollup-plugin-swc';

import packageJson from './package.json';

const plugins = [
  resolve({
    preferBuiltins: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  }),
  commonjs(),
  replace({
    values: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __VERSION__: JSON.stringify(packageJson.version),
    },
    preventAssignment: true,
  }),
  swc(),
];

export default {
  input: {
    index: 'src/cli/index.ts',
  },
  output: {
    dir: './dist/cjs/cli',
    format: 'cjs',
    exports: 'auto',
  },
  external: ['commander', 'prompts', 'terminal-kit'],
  plugins,
};
