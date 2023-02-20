module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'eol-last': ['error', 'never'],
    'semi': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'quote-props': ['error', 'consistent'],
    'react/react-in-jsx-scope': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': [1,
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowDouble',
        trailingUnderscore: 'allowDouble'
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': [0, { allowString: true, allowNumber: true }]
  },
  globals: {
    '__IS_DEV__': true
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    react: {
      'version': 'detect'
    }
  }
};