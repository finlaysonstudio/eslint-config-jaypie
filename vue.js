module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ["**/dist/**", "dist/"],
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".js", ".vue"],
        map: [["@", "./src"]],
      },
    },
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier-vue/recommended",
  ],
};
