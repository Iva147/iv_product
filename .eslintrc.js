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
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      },
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],

      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2020
      }
    },
    {
      files: ['*.test.{tsx,ts}'],
      rules: {
        'i18next/no-literal-string': 'off'
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
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks'
  ],
  rules: {
    'eol-last': ['error', 'never'],
    'semi': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/consistent-type-assertions': [1, { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }],
    'quote-props': ['error', 'consistent'],
    'react/react-in-jsx-scope': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': [1,
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allowDouble',
        trailingUnderscore: 'allowDouble'
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': [0, { allowString: true, allowNumber: true }],
    'i18next/no-literal-string': [2, {markupOnly: true, ignoreAttribute: ['to', 'data-testid', 'name']}],
    'no-trailing-spaces': [1, {ignoreComments: true}],
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'react/display-name': 'off',
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["warn",
      {
        'after': true,
        "overrides": {
          "if": { "after": false },
          "for": { "after": false },
          "while": { "after": false },
          "from": { "after": true, "before": true }
        }
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  globals: {
    '__IS_DEV__': true
  },
  settings: {
    react: {
      'version': 'detect'
    }
  },
  ignorePatterns: ['./eslintrc.js']
};