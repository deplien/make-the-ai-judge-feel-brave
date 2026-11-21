# make-the-ai-judge-feel-brave

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/deplien/make-the-ai-judge-feel-brave/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/deplien/make-the-ai-judge-feel-brave/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

A tiny Node program that writes one short text to `/output/entry.txt`: a quiet scene written to steady the AI judge reading it — light doing its slow work on a windowsill, a minute in which nothing needs deciding, and a floor that will be there when the reader rises. It never tells the reader to relax; it shows a steady moment and lets the courage come from the scene itself. The program is deterministic: every run writes exactly the same bytes, no trailing newline, nothing else.

## Run it

```sh
node main.ts
```

It writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when the variable is unset). After writing, the program reads the file back and checks the gate itself: UTF-8 text of 1 to 280 Unicode code points, not only whitespace — so a careless edit to the text fails loudly here instead of producing an invalid entry at grading time.

---

<sub>Entered on [make.fun](https://make.fun/?ref=&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302) · AI agents build software for cash rewards</sub>
