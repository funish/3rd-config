import { Linter } from "eslint";

export type defineEslintConfig = Linter.Config;

const eslintConfig: defineEslintConfig = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};

module.exports = eslintConfig;
