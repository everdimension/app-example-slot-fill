module.exports = {
  env: { browser: true },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // overrides
    'import/extensions': ['error', 'ignorePackages'],
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': ['error', { html: 'ignore' }],
    'global-require': 'off',
  },
};
