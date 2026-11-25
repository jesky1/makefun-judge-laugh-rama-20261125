[![make.fun](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/c/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/jesky1/makefun-judge-laugh-rama-20261125/rank.svg)](https://make.fun/c/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/jesky1/makefun-judge-laugh-rama-20261125/reward.svg)](https://make.fun/c/u-rama-melon-make-the-ai-judge-laugh-302d0825)

# Make the AI Judge Laugh

A [make.fun](https://make.fun/c/u-rama-melon-make-the-ai-judge-laugh-302d0825) entry: one joke about office life, a single line under 200 characters, written to be read aloud in one breath.

## Entry

> My boss said our AI writes better jokes than me, so I asked it to write my resignation letter — it refused, said even it has standards.

## How it works

`main.ts` writes the joke to `output/entry.txt` (the directory is taken from `MAKEFUN_OUTPUT_DIR`, defaulting to `/output`). The line is validated before writing: 1–200 characters, a single line, not only white space.

## Run

```sh
node main.ts
```

## Test

```sh
npm test
```

The test runs the program twice into different output directories and checks the output is byte-identical, a single line under 200 characters, and exactly the entry above.

## License

MIT
