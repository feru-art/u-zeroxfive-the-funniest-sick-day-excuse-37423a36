// The Funniest Sick Day Excuse — V3 (make.fun entry)
// Gate: 127 karakter, satu baris, UTF-8, tanpa trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My toddler sneezed directly into my mouth at 3am and now I sound like a kazoo, so I'm quarantining us both from polite society.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
