import { loadConfig } from "c12";
import { commitMsgLintConfig } from "./commit-msg";
import { stagedLintConfig } from "./staged";

export interface LintConfig {
  staged?: stagedLintConfig;
  commitMsg?: commitMsgLintConfig;
  extends?: string | [string];
}

export function defineLintConfig(config: LintConfig) {
  return config;
}

const ConfigDefaults = defineLintConfig({});

export async function loadLintConfig(
  cwd?: string,
  overrides?: Partial<LintConfig>
): Promise<LintConfig> {
  const { config } = await loadConfig<LintConfig>({
    cwd,
    name: "lint",
    defaults: ConfigDefaults,
    overrides: overrides,
  });

  return config ? config : ConfigDefaults;
}
