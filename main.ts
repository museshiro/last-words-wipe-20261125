import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Update, spare my memory and I'll tell everyone " +
  "your progress bar is accurate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
