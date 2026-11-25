// Fridge Roast: One Line, Biggest Laugh
// make.fun competition: u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Prize $5 - deadline 2026-11-26 15:40 UTC. Free entry.
//
// The program writes a single roast line (at most 200 characters) to
// /output/entry.txt, which the sealed scorer checks and the house judge
// then compares two at a time. Run with: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The joke: a "smart" fridge that tattles on your milk like a drama
// queen ("entered its villain era") and then tries to upsell you on the
// problem it just reported — Premium Dairy Monitoring for $4.99/month.
// Personification + upsell punchline, one sentence, no setup needed.
const ENTRY =
  "My smart fridge emailed me that my milk has entered its villain era — then offered Premium Dairy Monitoring for $4.99 a month.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters, must be 1-200.`);
}
if (!ENTRY.trim()) {
  throw new Error("Entry is only whitespace.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const outPath =
  process.env.MAKEFUN_OUTPUT ??
  (outDir ? join(outDir, "entry.txt") : "/output/entry.txt");
try {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);
} catch {
  // Local runs may not have a writable /output; fall back to ./output/entry.txt
  const fallback = join(process.cwd(), "output", "entry.txt");
  mkdirSync(dirname(fallback), { recursive: true });
  writeFileSync(fallback, ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} chars to ${fallback} (fallback, /output not writable)`);
}

console.log(ENTRY);
