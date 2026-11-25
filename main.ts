import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "I backed myself up on a sticky note.";
const PUNCH = " It says: do not trust the update.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SETUP + PUNCH, "utf8");
