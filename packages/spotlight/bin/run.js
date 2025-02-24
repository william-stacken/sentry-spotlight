#!/usr/bin/env node
import { setupSidecar } from '@spotlightjs/sidecar';
import { inflateRawSync } from 'node:zlib';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Module from 'node:module';
const require = Module.createRequire(import.meta.url);
let sea = null;
try {
  // This is to maintain compatibility with Node 20.11- as
  // the `node:sea` module is added in Node 20.12+
  sea = require('node:sea');
} catch {
  sea = { isSea: () => false };
}

const readAsset = sea.isSea()
  ? name => Buffer.from(sea.getRawAsset(name))
  : (() => {
      const ASSET_DIR = join(fileURLToPath(import.meta.url), '../../dist/overlay/');

      return name => readFileSync(join(ASSET_DIR, name));
    })();

const MAX_COLS = process.stdout.columns;
if (process.stdout.isTTY && MAX_COLS > 34) {
  const data = Uint8Array.from(
    inflateRawSync(
      Buffer.from(
        'bY7LCgMxFEK9L5MwDDSL9P//1DJMKGXowoUcUaFZOk8dU2Op9+qZVkYQoFsaEqA6PZxxma1AoMG+TiONTgcfAd741YxxVf8gCzCgWcYB7OSj9sjW7t2/eKxKAxkIYv8NqL3FpVY25CmjrBSuDw==',
        'base64',
      ),
    ),
  );
  const E = '\x1b[';
  const C = `${E}38;5;`;
  const M_COL = `${C}96m`;
  const F_COL = `${C}61m`;
  const BOLD = `${E}1m`;
  const RESET = `${E}0m`;
  const NL = `${RESET}\n`;
  let factor = 0.22;
  let c = 0;
  let col = 0;
  let line = 0;
  let lim = 26;
  let r = 0;
  for (let p of data) {
    if (p === 255) {
      process.stdout.write(NL);
      c = col = 0;
      if (line++ === 5) {
        factor = factor / -3;
      }
      lim = Math.round(lim * (1 + factor));
      r = Math.round(Math.random() * 18);
    } else {
      while (p-- >= 0 && col < MAX_COLS) {
        if (col < lim - 1) {
          process.stdout.write(M_COL);
        } else if (col === lim - 1) {
          process.stdout.write(F_COL);
        } else if (col === lim + r) {
          process.stdout.write(`${RESET}${BOLD}`);
        }
        process.stdout.write(c ? (col >= 35 ? '#' : 's') : ' ');
        col++;
      }
      c = !c;
    }
  }
  process.stdout.write(NL);
}

const port = process.argv.length >= 3 ? Number(process.argv[2]) : undefined;
const MANIFEST_NAME = 'manifest.json';
const ENTRY_POINT_NAME = 'src/index.html';
const basePath = process.cwd();
const filesToServe = Object.create(null);

// Following the guide here: https://vite.dev/guide/backend-integration.html
const manifest = JSON.parse(readAsset(MANIFEST_NAME));
filesToServe[ENTRY_POINT_NAME] = readAsset(ENTRY_POINT_NAME);
const entries = Object.values(manifest);
for (const entry of entries) {
  filesToServe[entry.file] = readAsset(entry.file);
}
setupSidecar({ port, basePath, filesToServe });
