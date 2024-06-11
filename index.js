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
    "import/no-commonjs": "error",
    "import/no-unresolved": ["error"],
    "no-console": "warn",
    "no-fallthrough": "error",
    "no-param-reassign": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
    "object-shorthand": ["error", "always"],
    "prefer-const": "warn",
  },
};
