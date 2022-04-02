module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'esbuild-jest',
      {
        sourcemap: 'inline',
        target: 'es2017',
      }
    ],
  },
};
