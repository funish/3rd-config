import { defineLintConfig } from "@funish/lint";

export default defineLintConfig({
  staged: {
    "*.ts": "pnpm lint:js && pnpm lint:prettier",
    "*.*": "pnpm prettier --check . --ignore-unknown --ignore-path .gitignore",
  },
});
