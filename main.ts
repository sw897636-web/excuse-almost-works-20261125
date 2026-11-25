// The Excuse That Almost Works
// make.fun one-line comedy bounty: write the single line a gamer texts
// the boss to skip work on GTA 6 launch week. One line, at most 20 words,
// 1-140 chars, plain text, sent in a hurry.
//
// Candidate drafts (judged against the brief: believable boring detail,
// funny from its own logic, hurried, fresh angle):
// 1. "My building's elevator died and I'm on the 14th floor with a bad knee, give me an hour"
//    -> believable, but "give me an hour" sounds negotiated, not a day off.
// 2. "The dentist moved my root canal to this morning because someone cancelled, I have to take it"
//    -> believable and boring, but a root canal is a bit dramatic, and
//       "someone cancelled" invites the question of why it matters today.
// 3. "My car battery died in the work car park and roadside assistance says two hours"
//    -> too close to the banned flat-tyre angle.
// 4. "My laptop updated overnight and now it only boots to a screen asking for a password I never set"
//    -> superseded by Quick Smart review (REPLACE): the new line below.
//    "Can't come in this week, my grandma just moved to Vice City and refuses to drive without me."
//    -> CHOSEN (per Quick Smart review). The laugh comes from the excuse's
//       own logic (grandma relocating to Vice City and needing you as her
//       driver). No GTA mention by name (naming the game would be a
//       confession). Reads like a text typed in a hurry.
//       18 words, 92 characters, pure ASCII. Verified by python after two
//       runs: 1 line, 18 words, 92 chars stripped, 93 with trailing newline,
//       ASCII only, deterministic across runs.
//
// The program writes exactly this one line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Can't come in this week, my grandma just moved to Vice City and refuses to drive without me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
