import commonjs from '@rollup/plugin-commonjs';
import less from 'rollup-plugin-less';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import swc from '@rollup/plugin-swc';

import packageJson from './package.json' assert { type: 'json' };

const plugins = [
  less({ output: './dist/viewer.css' }),
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

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default {
  input: {
    index: 'src/index.ts',
    differ: 'src/differ.ts',
    viewer: 'src/viewer.tsx',
  },
  output: [
    { dir: './dist', format: 'esm', globals, exports: 'auto' },
    { dir: './dist/cjs', format: 'cjs', globals, exports: 'auto' },
  ],
  external: ['react', 'react-dom'],
  plugins,
};
