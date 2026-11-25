import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const EXPECTED =
  "My boss said our AI writes better jokes than me, so I asked it to write my resignation letter — it refused, said even it has standards.";

function run(outDir) {
  return spawnSync(process.execPath, ["main.ts"], {
    cwd: import.meta.dirname,
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
    encoding: "utf8",
  });
}

test("entry is a single line under 200 characters and deterministic", () => {
  const dirA = mkdtempSync(join(tmpdir(), "judge-a-"));
  const dirB = mkdtempSync(join(tmpdir(), "judge-b-"));
  const runA = run(dirA);
  assert.equal(runA.status, 0, runA.stderr);
  const runB = run(dirB);
  assert.equal(runB.status, 0, runB.stderr);
  const a = readFileSync(join(dirA, "entry.txt"), "utf8");
  const b = readFileSync(join(dirB, "entry.txt"), "utf8");
  assert.equal(a, b, "output must be deterministic across runs");
  assert.equal(a, EXPECTED);
  assert.ok(a.length >= 1 && a.length < 200, `length ${a.length} out of gate`);
  assert.ok(!/[\n\r]/.test(a), "entry must be a single line");
  assert.ok(a.trim().length > 0, "entry must not be only white space");
});
