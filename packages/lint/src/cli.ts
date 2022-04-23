import cac from "cac";
import consola from "consola";
import { readFileSync } from "fs";

const cli = cac("hooks");
const { version } = JSON.parse(readFileSync("package.json", "utf8"));

// Listen to unknown commands
cli.on("command:*", () => {
  consola.error("Invalid command: %s", cli.args.join(" "));
  process.exit(1);
});

// Display help message when `-h` or `--help` appears
cli.help();
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version(version);

try {
  // Parse CLI args without running the command
  cli.parse(process.argv, { run: false });
  // Run the command yourself
  // You only need `await` when your command action returns a Promise
  await cli.runMatchedCommand();
} catch (error) {
  // Handle error here..
  // e.g.
  consola.error(error);
  process.exit(1);
}
