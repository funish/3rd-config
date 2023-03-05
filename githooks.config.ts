import { defineGithooksConfig } from "@funish/githooks";

export default defineGithooksConfig({
  extends: ["@funish/githooks-config"],
  gitConfig: {
    core: {
      autocrlf: "input",
    },
  },
});
