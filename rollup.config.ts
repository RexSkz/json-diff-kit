import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import html from '@rollup/plugin-html';
import less from 'rollup-plugin-less';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import styles from 'rollup-plugin-styles';

import packageJson from './package.json';

const BASEDIR = process.env.BASEDIR || '.cache';

const plugins = [
  resolve({ preferBuiltins: true }),
  commonjs(),
  esbuild({
    exclude: [],
    minify: process.env.NODE_ENV === 'production',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __VERSION__: JSON.stringify(packageJson.version),
    },
    loaders: {
      '.json': 'json', // require @rollup/plugin-commonjs
      '.js': 'jsx',
    },
  }),
  less({
    output: `${BASEDIR}/index.css`,
    insert: true,
  }),
  styles(),
  html({
    template: ({ files }) => {
      return `<!DOCTYPE html>
<html>
<head>
  <title>JSON Diff Kit Demo</title>
</head>
<body>
  <div id="root"></div>
  ${files.js.map(({ fileName }) => `<script src="${fileName}"></script>`)}
</body>
</html>
`;
    },
  }),
];

if (process.env.NODE_ENV !== 'production') {
  plugins.push(
    serve({
      contentBase: BASEDIR,
      open: true,
      openPage: '/index.html',
      port: 3000,
    }),
    livereload({
      watch: BASEDIR,
      delay: 300,
    }),
  );
}

export default {
  input: 'playground/index.tsx',
  output: {
    file: `${BASEDIR}/index.js`,
    format: 'umd',
    name: 'JSONDiffKit',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins,
};
