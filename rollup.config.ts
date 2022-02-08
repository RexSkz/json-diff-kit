import fs from 'fs';

import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import html from '@rollup/plugin-html';
import less from 'rollup-plugin-less';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

export default {
  input: 'demo/index.tsx',
  output: {
    file: '.cache/index.js',
    format: 'umd',
    name: 'JSONDiffKit',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
    esbuild({
      exclude: [],
      minify: process.env.NODE_ENV === 'production',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      define: {
        'process.env.NODE_ENV': process.env.NODE_ENV,
        __VERSION__: JSON.stringify(require('./package.json').version),
      },
      loaders: {
        '.json': 'json', // require @rollup/plugin-commonjs
        '.js': 'jsx',
      },
    }),
    less({
      output: '.cache/index.css',
    }),
    html({
      template: ({ files }) => {
        return `<!DOCTYPE html>
<html>
<head>
  <title>JSON Diff Demo</title>
  <link rel="stylesheet" href="index.css" />
</head>
<body>
  <div id="root"></div>
  ${files.js.map(({ fileName }) => `<script src="${fileName}"></script>`)}
</body>
</html>
`;
      },
    }),
    serve({
      contentBase: '.cache',
      open: true,
      openPage: '/index.html',
      port: 3000,
    }),
  ],
};
