import { Linter } from "eslint";

const eslintConfig: Linter.Config = {
  extends: [
    "eslint:recommended",
    "plugin:@stencil/recommended",
    "plugin:prettier/recommended",
  ],
};

export default eslintConfig;
