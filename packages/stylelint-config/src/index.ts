import type { Config } from "stylelint";

export type defineStylelintConfig = Config;

const stylelintConfig: defineStylelintConfig = {
  plugins: ["stylelint-prettier"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "prettier/prettier": true,
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.{js,jsx,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
    {
      files: ["**/*.{html,svelte,vue}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.md"],
      customSyntax: "postcss-markdown",
    },
  ],
};

module.exports = stylelintConfig;
