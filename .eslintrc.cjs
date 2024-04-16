module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:rexskz/default',
  ],
  globals: {
    __VERSION__: 'readonly',
  },
};
