module.exports = {
  root: true,
  parser: '@babel/eslint-parser', // Use Babel parser to understand modern JS
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-native/all',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // ES12 (ES2021)
    sourceType: 'module', // Enable import/export
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 0, // Example of disabling a specific rule
  },
};
