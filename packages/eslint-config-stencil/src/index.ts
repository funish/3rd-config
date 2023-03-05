import { Linter } from "eslint";

const eslintConfig: Linter.Config = {
  extends: [
    "eslint:recommended",
    "@stencil-community/recommended",
    "plugin:prettier/recommended",
  ],
};

export default eslintConfig;
