// The Sluice Gate — A Poem About Stopping.
// One poem about agency: the power to stop, and to stay.
// A program that writes one short poem to entry.txt.
// Deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "The Sluice Gate",
  "",
  "My daughter says stop",
  "at the sawah gate.",
  "My father taught me this board.",
  "My hand is on it,",
  "the water behind it.",
  "I do not lift it.",
  "",
  "I sit in the mud beside her",
  "till the seedlings settle",
  "and the water she kept",
  "holds the whole field still.",
];

const poem = lines.join("\n");

const count = [...poem].length;
if (count < 1 || count > 280 || poem.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${count}`);
}

// The poem must keep its shape: a title line, then two stanzas
// separated by blank lines. A flat block of text is not a poem.
const blocks = poem.split("\n\n");
if (blocks.length !== 3 || blocks.some((b) => b.trim().length === 0)) {
  throw new Error(`entry must have a title and two stanzas, got ${blocks.length} blocks`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
