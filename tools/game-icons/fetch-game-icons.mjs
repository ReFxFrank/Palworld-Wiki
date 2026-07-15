#!/usr/bin/env node
/**
 * PalBreed game-icon fetch pipeline.
 *
 * Downloads the real-game imagery used by the site into assets/ and records a
 * SHA-256 manifest so later runs can verify integrity offline:
 *
 *   - assets/pals/<iconFile>.png        Pal portraits (pinned PalCalc commit)
 *   - assets/elements/<element>.png     Element icons
 *   - assets/map/icons/<category>.png   Map marker category icons
 *   - assets/structures/<id>.png        Structure icons (wiki page images)
 *
 * Sources and destinations are declared in tools/game-icons/sources.json.
 * Run:    node tools/game-icons/fetch-game-icons.mjs           (fetch missing)
 *         node tools/game-icons/fetch-game-icons.mjs --force   (refetch all)
 *         node tools/game-icons/fetch-game-icons.mjs --verify  (hash-check only)
 */
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, rename, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SOURCES_PATH = path.join(ROOT, 'tools', 'game-icons', 'sources.json');
const MANIFEST_PATH = path.join(ROOT, 'tools', 'game-icons', 'manifest.json');
const FORCE = process.argv.includes('--force');
const VERIFY = process.argv.includes('--verify');
const CONCURRENCY = 8;
const RETRIES = 3;
const USER_AGENT = 'PalBreedWiki-icon-fetch/1.0 (offline fan companion; contact: local)';

const sha256 = buffer => createHash('sha256').update(buffer).digest('hex');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function loadSources() {
  const raw = JSON.parse(await readFile(SOURCES_PATH, 'utf8'));
  if (!Array.isArray(raw.files)) throw new Error('sources.json must have a files array');
  return raw;
}

async function fetchBuffer(url) {
  let lastError;
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const response = await fetch(url, { headers: { 'user-agent': USER_AGENT } });
      if (response.status === 404) return { notFound: true };
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      if (!buffer.length) throw new Error('empty body');
      return { buffer };
    } catch (error) {
      lastError = error;
      if (attempt < RETRIES) await sleep(400 * attempt);
    }
  }
  throw lastError;
}

async function run() {
  const config = await loadSources();
  const results = [];
  const failures = [];
  const mismatches = [];
  let priorHashes = new Map();
  try {
    const prior = JSON.parse(await readFile(MANIFEST_PATH, 'utf8'));
    priorHashes = new Map(prior.files.map(f => [f.dest, f.sha256]));
  } catch {}
  const hostRules = config.hostRules || {};
  const hostOf = url => new URL(url).host;
  const throttledHosts = new Set(Object.keys(hostRules));
  const fastQueue = config.files.filter(f => !throttledHosts.has(hostOf(f.url)));
  const slowQueues = Object.fromEntries(Object.keys(hostRules).map(host => [host, config.files.filter(f => hostOf(f.url) === host)]));

  if (VERIFY) {
    const manifest = JSON.parse(await readFile(MANIFEST_PATH, 'utf8'));
    let ok = 0, bad = 0, missing = 0;
    for (const entry of manifest.files) {
      const dest = path.join(ROOT, entry.dest);
      if (!existsSync(dest)) { missing++; console.error(`missing: ${entry.dest}`); continue; }
      const digest = sha256(await readFile(dest));
      if (digest === entry.sha256) ok++;
      else { bad++; console.error(`hash mismatch: ${entry.dest}`); }
    }
    console.log(`verify: ${ok} ok, ${bad} mismatched, ${missing} missing of ${manifest.files.length}`);
    process.exit(bad || missing ? 1 : 0);
  }

  async function handle(item, delayMs = 0) {
    const dest = path.join(ROOT, item.dest);
    if (!FORCE && existsSync(dest)) {
      const buffer = await readFile(dest);
      const digest = sha256(buffer);
      const prior = priorHashes.get(item.dest);
      if (prior && prior !== digest) mismatches.push({ dest: item.dest, expected: prior, actual: digest });
      results.push({ dest: item.dest, url: item.url, sha256: digest, bytes: buffer.length, cached: true });
      return false;
    }
    try {
      const { buffer, notFound } = await fetchBuffer(item.url);
      if (notFound) {
        if (item.optional && existsSync(dest)) {
          // Upstream deleted the file but a previously fetched copy is still
          // served by the site — keep it in the manifest rather than dropping
          // its integrity record.
          const local = await readFile(dest);
          results.push({ dest: item.dest, url: item.url, sha256: sha256(local), bytes: local.length, cached: true });
          results.push({ dest: item.dest, url: item.url, skipped: 'upstream 404; kept existing local copy' });
        }
        else if (item.optional) results.push({ dest: item.dest, url: item.url, skipped: 'not found (optional)' });
        else failures.push({ dest: item.dest, url: item.url, error: 'HTTP 404' });
      } else {
        await mkdir(path.dirname(dest), { recursive: true });
        const tmp = `${dest}.tmp`;
        await writeFile(tmp, buffer);
        await rename(tmp, dest);
        results.push({ dest: item.dest, url: item.url, sha256: sha256(buffer), bytes: buffer.length });
      }
    } catch (error) {
      failures.push({ dest: item.dest, url: item.url, error: String(error.message || error) });
    }
    if (delayMs) await sleep(delayMs);
    return true;
  }

  async function fastWorker() {
    while (fastQueue.length) await handle(fastQueue.shift());
  }
  async function slowWorker(host) {
    const queue = slowQueues[host];
    const { delayMs = 1000 } = hostRules[host];
    let done = 0;
    while (queue.length) {
      const fetched = await handle(queue.shift(), delayMs);
      if (fetched && ++done % 25 === 0) console.log(`${host}: ${done} fetched, ${queue.length} remaining`);
    }
  }

  await Promise.all([
    ...Array.from({ length: CONCURRENCY }, fastWorker),
    ...Object.keys(slowQueues).flatMap(host => Array.from({ length: hostRules[host].concurrency || 1 }, () => slowWorker(host))),
  ]);

  const downloaded = results.filter(r => !r.cached && !r.skipped);
  if (mismatches.length) {
    for (const m of mismatches) console.error(`HASH MISMATCH ${m.dest}: manifest ${m.expected.slice(0, 12)}… vs local ${m.actual.slice(0, 12)}… — local file changed since last fetch; investigate or refetch with --force`);
    console.error('Manifest NOT updated because of hash mismatches.');
    process.exit(1);
  }
  const manifest = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    attribution: config.attribution || null,
    files: results.filter(r => r.sha256).map(({ dest, url, sha256: hash, bytes }) => ({ dest, url, sha256: hash, bytes }))
      .sort((a, b) => a.dest.localeCompare(b.dest)),
    skipped: results.filter(r => r.skipped).map(({ dest, url, skipped }) => ({ dest, url, reason: skipped })),
    failures,
  };
  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);

  console.log(`fetched ${downloaded.length}, reused ${results.filter(r => r.cached).length}, skipped ${manifest.skipped.length}, failed ${failures.length} of ${config.files.length}`);
  for (const failure of failures) console.error(`FAIL ${failure.dest} <- ${failure.url}: ${failure.error}`);
  const totalBytes = manifest.files.reduce((n, f) => n + f.bytes, 0);
  console.log(`manifest: ${manifest.files.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MB, written to tools/game-icons/manifest.json`);
  // Anything in `failures` is a genuine fetch error (optional upstream-404s
  // are routed to `skipped` above), so any failure is a non-zero exit.
  process.exit(failures.length ? 1 : 0);
}

run().catch(error => { console.error(error); process.exit(1); });
