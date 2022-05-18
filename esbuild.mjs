import path from 'path';

import { build } from 'esbuild';
import { lessLoader } from 'esbuild-plugin-less';

build({
  entryPoints: [
    path.resolve('src', 'index.ts'),
    path.resolve('src', 'viewer.less'),
  ],
  outdir: path.resolve('dist'),
  format: 'esm',
  bundle: true,
  loader: {
    '.ts': 'ts',
    '.json': 'json',
  },
  external: ['react', 'react-dom'],
  plugins: [
    lessLoader(),
  ],
});
