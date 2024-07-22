import js from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginNoAutofix from "eslint-plugin-no-autofix";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginPrettierVue from "eslint-plugin-prettier-vue";
import pluginVitest from "eslint-plugin-vitest";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  // Configs and Plugins
  js.configs.recommended, // Recommended config applied to all files
  {
    plugins: {
      import: pluginImport,
      "no-autofix": pluginNoAutofix,
    },
  },
  ...pluginVue.configs["flat/essential"],
  pluginPrettierRecommended, // Prettier wants to always be the last plugin
  // Project Overrides
  {
    // Global Ignore
    ignores: ["**/dist/**", "dist/"],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    rules: {
      "import/extensions": ["error", "ignorePackages"],
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
      "no-restricted-syntax": [
        "error",
        {
          selector: "CallExpression[callee.name='require']",
          message: "Unexpected require, use import instead.",
        },
        {
          selector:
            "MemberExpression[object.name='module'][property.name='exports']",
          message: "Unexpected module.exports, use export instead.",
        },
        {
          selector: "MemberExpression[object.name='exports']",
          message: "Unexpected exports, use export instead.",
        },
      ],
    },
  },
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  // File Overrides
  {
    files: ["**/__tests__/**", "**/*.spec.js", "**/*.test.js"],
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      "vitest/no-focused-tests": ["error", { fixable: false }],
      "vitest/no-disabled-tests": "warn",
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ImportDeclaration",
          message: "Unexpected import, use require instead.",
        },
        {
          selector: "ExportNamedDeclaration",
          message: "Unexpected export, use module.exports instead.",
        },
        {
          selector: "ExportDefaultDeclaration",
          message: "Unexpected export, use module.exports instead.",
        },
      ],
    },
  },
  {
    files: ["**/*.vue"],
    plugins: {
      "prettier-vue": pluginPrettierVue,
    },
    rules: {
      "import/extensions": "off",
      "prettier/prettier": "off",
      "prettier-vue/prettier": "error",
    },
  },
  {
    files: [
      "packages/*-vue/**/*.js",
      "packages/*-vue/**/*.mjs",
      "packages/*-vue/**/*.vue",
      "packages/vue/**/*.js",
      "packages/vue/**/*.mjs",
      "packages/vue/**/*.vue",
      "packages/vue-*/**/*.js",
      "packages/vue-*/**/*.mjs",
      "packages/vue-*/**/*.vue",
      "vue/**/*.js",
      "vue/**/*.mjs",
      "vue/**/*.vue",
    ],
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
];
