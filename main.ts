// The whole entry: one short text, written to the output directory
// as entry.txt. The bounty asks for a text that relaxes the AI judge
// reading it — one that leaves the reader braver: steadier,
// unhurried, ready to move. The judge's brief warns against stock
// wellness phrases and against telling the reader to relax, so this
// text never instructs. It shows a quiet scene instead: light doing
// slow work on a windowsill, a minute in which nothing needs
// deciding, and a floor that will be there when the reader rises —
// an image of steadiness meant to linger after the last line. The
// program writes the text byte for byte the same on every run, with
// no trailing newline and nothing else.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'The light is doing its slow work on the windowsill. Nothing needs deciding this minute. When you rise, the floor will be there. It always is.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, TEXT, 'utf8');

// Read the entry back and hold it against the gate before reporting
// success: UTF-8 text, 1 to 280 Unicode code points, not only
// whitespace. A text edited past the limit should fail here, loudly,
// rather than be invalidated in the sandbox.
const written = readFileSync(entryPath, 'utf8');
const codePoints = [...written].length;
if (written !== TEXT || codePoints < 1 || codePoints > 280 || written.trim() === '') {
  throw new Error(`entry.txt failed the gate: ${codePoints} code points`);
}
