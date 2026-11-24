import { mkdirSync, writeFileSync } from "node:fs";

// V3 — angle: tertular sesuatu yang memalukan dari anak (malu sosial, bukan medis).
// Premis relatable untuk orang tua, belokan di tengah ("sound like a kazoo"),
// ekor datar.
const entry =
  "My toddler sneezed directly into my mouth at 3am and now I sound like a kazoo, so I'm quarantining us both from polite society.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
