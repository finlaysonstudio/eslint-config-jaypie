module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["**/dist/**", "dist/"],
  overrides: [
    {
      files: ["__tests__/**", "**/*.spec.js", "**/*.test.js"],
      plugins: ["vitest"],
      rules: {
        "vitest/no-focused-tests": ["error", { fixable: false }],
        "vitest/no-disabled-tests": "warn",
        "no-restricted-syntax": "off",
      },
    },
    {
      files: ["*.cjs"],
      rules: {
        "import/no-commonjs": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["no-autofix", "prettier"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/no-commonjs": "off",
    "import/no-unresolved": ["error", { ignore: ["^csv-stringify/sync$"] }],
    "no-autofix/prefer-const": "warn",
    "no-console": "warn",
    "no-fallthrough": "error",
    "no-restricted-syntax": [
      "error",
      "ExportNamedDeclaration",
      "ExportDefaultDeclaration",
      "ExportAllDeclaration",
      "ImportDeclaration",
    ],
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": [
      "warn",
      { functions: true, classes: true, variables: true },
    ],
    "object-shorthand": ["error", "always"],
  },
};
