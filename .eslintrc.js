module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    "import/resolver": {
      "typescript": {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
    },
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // IMPORTS
    "import/extensions": 'off',
    "import/prefer-default-export": 'off',
    "import/no-unresolved": 'off',

    // REACT
    "react/jsx-filename-extension": 'off',
    "react/react-in-jsx-scope": 'off',

    "no-param-reassign": 'off',
    "no-restricted-exports": 'off',
    "no-console": 'off',
  },
};
