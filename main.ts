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
//    -> CHOSEN. A real, specific, boring workplace detail: an overnight
//       update locking you out with a password you never set. The laugh
//       comes from the excuse's own logic (the machine invented a password
//       for you). No wild story, no dead grandmother, no fever, no GTA
//       mention (naming the game would be a confession). Reads like a text
//       typed in a hurry while staring at the login screen.
//       19 words, 95 characters, pure ASCII. Verified by python after two
//       runs: 1 line, 19 words, 95 chars stripped, 96 with trailing newline,
//       ASCII only, deterministic across runs.
//
// The program writes exactly this one line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My laptop updated overnight and now it only boots to a screen asking for a password I never set";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
