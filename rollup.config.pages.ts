import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import less from 'rollup-plugin-less';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import styles from 'rollup-plugin-styles';
import swc from 'rollup-plugin-swc';

import packageJson from './package.json';

const BASEDIR = process.env.BASEDIR || '.cache';

const plugins = [
  less({
    output: `${BASEDIR}/index.css`,
    insert: true,
  }),
  styles(),
  html({
    template: options => {
      return `<!DOCTYPE html>
<html>
<head>
  <title>JSON Diff Kit Playground</title>
  <meta charset="utf-8" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5D3V5T84WY"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5D3V5T84WY');
  </script>
  <link rel="stylesheet" href="index.css" />
</head>
<body>
  <div id="root"></div>
  ${options?.files.js.map(({ fileName }) => `<script src="${fileName}"></script>`)}
</body>
</html>
`;
    },
  }),
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
  swc({
    minify: process.env.NODE_ENV === 'production',
    sourceMaps: process.env.NODE_ENV !== 'production',
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
    sourcemap: process.env.NODE_ENV !== 'production',
  },
  plugins,
};
