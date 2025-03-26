import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      'import': importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jsx-a11y/anchor-is-valid': 'warn', // Accessibility rule for anchors
      'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }], // Ensures imports are ordered
      'import/newline-after-import': 'error', // Enforces a newline after import statements
      'no-console': 'warn', // Warns about console usage
      'no-debugger': 'error', // Disallows the use of debugger
      'no-unused-vars': 'warn', // Warns about unused variables
      'consistent-return': 'error', // Enforces consistent return statements
      'eqeqeq': ['error', 'always'], // Enforces the use of === and !==
      'no-var': 'error', // Disallows the use of var
      'prefer-const': 'error', // Suggests using const
      'prefer-arrow-callback': 'warn', // Suggests using arrow functions as callbacks
    },
  },
];
