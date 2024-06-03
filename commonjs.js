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
  plugins: ["prettier"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/no-commonjs": "off",
    "import/no-unresolved": ["error"],
    "no-console": "warn",
    "no-restricted-syntax": [
      "error",
      "ExportNamedDeclaration",
      "ExportDefaultDeclaration",
      "ExportAllDeclaration",
      "ImportDeclaration",
    ],
    "no-shadow": "error",
    "object-shorthand": ["error", "always"],
  },
};
