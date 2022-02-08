import path from 'path';

import { build } from 'esbuild';
import { lessLoader } from 'esbuild-plugin-less';

build({
  entryPoints: [
    path.resolve('src', 'index.ts'),
  ],
  outdir: path.resolve('dist'),
  bundle: true,
  loader: {
    '.ts': 'ts',
    '.json': 'json',
  },
  external: ['react', 'react-dom'],
  minify: true,
  plugins: [
    lessLoader(),
  ],
});
