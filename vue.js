module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier-vue/recommended",
  ],
  ignorePatterns: ["**/dist/**", "dist/"],
  root: true,
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".js", ".vue"],
        map: [["@", "./src"]],
      },
    },
  },
};
