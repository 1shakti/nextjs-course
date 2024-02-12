module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['react-app', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    "no-undef": "error"
  },
};
