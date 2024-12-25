import pluginImport from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';

export default [
  ...pluginVue.configs['flat/base'],
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/strongly-recommended'],
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue', '**/*.js', '**/*.mjs'],
    plugins: {
      import: pluginImport,
    },
    rules: {
      'semi': [ 'error', 'always' ],
      'quotes': ['error', 'single'],

      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never', // Trailing commas are not enforced in function parameter lists
        },
      ],

      'object-curly-spacing': ['error', 'always'],

      // Enforce single quotes in import statements
      '@/quote-props': ['error', 'consistent-as-needed'],

      'import/order': [
        'error',
        {
          'groups': [
            'builtin', // Built-in Node.js modules
            'external', // External modules from node_modules
            'internal', // Internal modules
            ['parent', 'sibling'], // Parent and sibling imports
            'index', // Index file imports
            'object', // Imports of object types
          ],
          'newlines-between': 'never', // Ensure a blank line between groups
          'alphabetize': { order: 'asc', caseInsensitive: true }, // Alphabetical order
        },
      ],

      // Enforce a blank line between imports and the rest of the code
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'import',
          next: '*', // Enforce a blank line after the last import
        },
        {
          blankLine: 'never',
          prev: 'import',
          next: 'import', // No blank lines between consecutive imports
        },
      ],
    },
  },
];