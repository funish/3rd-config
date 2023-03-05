import { defineLintConfig } from "@funish/lint";

export default defineLintConfig({
  staged: {
    "*.{js,jsx,ts,tsx,vue}": "eslint . --cache --ignore-path .gitignore",
    "*.{css,scss,js,jsx,tsx,html,vue,md}": "stylelint",
    "*.*": "pnpm prettier --check . --ignore-unknown --ignore-path .gitignore",
  },
});
