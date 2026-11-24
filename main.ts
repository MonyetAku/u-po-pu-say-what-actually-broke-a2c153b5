// Say What Actually Broke — entry program.
// Writes the winning one-line error message to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The gate wants UTF-8 text of 1 to 200 characters; the file holds exactly
// the line, with no trailing newline, so the byte count stays minimal
// (the tie-break favours the smaller text).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ERROR_LINE =
  "Upload failed: you sent the wrong file, then the right file in the wrong format, and now the server swears it has never seen either one.";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir !== undefined && dir.length > 0) return dir;
  return "output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), ERROR_LINE, "utf8");
}

main();
