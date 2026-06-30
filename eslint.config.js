/* eslint-env node */
import tseslint from 'typescript-eslint';
import tsdoc from 'eslint-plugin-tsdoc';

export default tseslint.config(
  { ignores: ['dist/', 'node_modules/', 'coverage/', 'tests/setup.ts'] },
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...tseslint.configs['recommendedTypeChecked'].map(c => ({
    ...c,
    files: ['src/**/*.ts'],
    languageOptions: {
      ...(c.languageOptions ?? {}),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),
  ...tseslint.configs['stylisticTypeChecked'].map(c => ({
    ...c,
    files: ['src/**/*.ts'],
    languageOptions: {
      ...(c.languageOptions ?? {}),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),
  {
    files: ['src/**/*.ts'],
    plugins: { tsdoc },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { arguments: false } }],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'tsdoc/syntax': 'warn',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
);
