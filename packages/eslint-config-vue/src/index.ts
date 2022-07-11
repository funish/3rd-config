import { Linter } from "eslint";

const eslintConfig: Linter.Config = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};

export default eslintConfig;
