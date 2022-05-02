import type { Config } from "stylelint";

export type defineStylelintConfig = Config;

const stylelintConfig: defineStylelintConfig = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "at-root",
          "content",
          "debug",
          "each",
          "else",
          "else if",
          "error",
          "extend",
          "for",
          "forward",
          "function",
          "if",
          "import",
          "include",
          "media",
          "mixin",
          "return",
          "use",
          "warn",
          "while",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.{html,vue}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.md"],
      customSyntax: "postcss-markdown",
    },
  ],
};

module.exports = stylelintConfig;
