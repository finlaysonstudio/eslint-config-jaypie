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
    {
      files: ["*.vue"],
      extends: ["plugin:vue/vue3-essential", "plugin:prettier-vue/recommended"],
      rules: {
        "import/extensions": "off",
        "prettier/prettier": "off",
      },
    },
    {
      files: ["vue/**/*.js", "vue/**/*.vue", "*.js"],
      rules: {
        "import/extensions": "off",
      },
      settings: {
        "import/resolver": {
          alias: {
            extensions: [".js", ".vue"],
            map: [["@", "./vue/src"]],
          },
        },
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
    "import/no-commonjs": "error",
    "import/no-unresolved": ["error", { ignore: ["^csv-stringify/sync$"] }],
    "no-autofix/prefer-const": "warn",
    "no-console": "warn",
    "no-fallthrough": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
    "object-shorthand": ["error", "always"],
  },
};
