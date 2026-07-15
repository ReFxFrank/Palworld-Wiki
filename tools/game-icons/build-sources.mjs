#!/usr/bin/env node
/**
 * Generates tools/game-icons/sources.json — the download plan consumed by
 * fetch-game-icons.mjs.
 *
 * Pinned upstream snapshots (same commits as the data pipelines):
 *   - tylercamp/palcalc @ 8ade7381d0548d0312dbe0d650673e4cebd86fd6 (MIT repo;
 *     bundled Pal portrait PNGs are Pocketpair game art, fair-use fan reference)
 *   - oMaN-Rod/palworld-save-pal @ 4cd0a85f66cf424b650ef0e886032a6b7419e55b
 *     (element + passive-rank icons; Pocketpair game art, fair-use fan reference)
 *   - palworld.wiki.gg uploads (map compass icons + structure icons; Pocketpair
 *     game art hosted by the wiki, fair-use fan reference)
 *
 * Pal portraits come from index.html PAL_DATA (iconFile field); structure
 * icons follow the wiki's exact "<Page title> icon.png" naming convention,
 * validated across the catalog on 2026-07-14.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'tools', 'game-icons', 'sources.json');

const PALCALC_COMMIT = '8ade7381d0548d0312dbe0d650673e4cebd86fd6';
const SAVE_PAL_COMMIT = '4cd0a85f66cf424b650ef0e886032a6b7419e55b';
const PALCALC_PALS = `https://raw.githubusercontent.com/tylercamp/palcalc/${PALCALC_COMMIT}/PalCalc.UI/Resources/Pals/`;
const SAVE_PAL_IMG = `https://raw.githubusercontent.com/oMaN-Rod/palworld-save-pal/${SAVE_PAL_COMMIT}/ui/src/lib/assets/img/`;
const WIKI_IMAGES = 'https://palworld.wiki.gg/images/';

// Canonical element keys used by the site (see elementIconKey in index.html).
const ELEMENTS = ['neutral', 'fire', 'water', 'grass', 'electric', 'ice', 'ground', 'dark', 'dragon'];

// In-game passive-skill rank arrows (tier -3 … +4).
const RANKS = [-3, -2, -1, 0, 1, 2, 3, 4];

// Real in-game compass/map icons per marker category, discovered and
// HEAD-verified on palworld.wiki.gg (2026-07-14).
const MAP_CATEGORY_ICONS = {
  'fast-travel': 'Compass_Great_Eagle_Statue_icon.png',
  'watchtower': 'Compass_Location_icon.png',
  'tower': 'Compass_Tower_icon.png',
  'sealed-realm': 'Compass_Dungeon_icon.png',
  'alpha-pal': 'Alpha_Pals_icon.png',
  'oil-rig': 'Compass_Oil_Rig_icon.png',
  'skill-fruit': 'Skillfruit_Orchard_icon.png',
};

const slug = value => String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const wikiFileUrl = name => WIKI_IMAGES + encodeURIComponent(name.replace(/ /g, '_')).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/'/g, '%27');

async function loadPalIconFiles() {
  const html = await readFile(path.join(ROOT, 'index.html'), 'utf8');
  const line = html.split('\n').find(l => l.includes('const PAL_DATA'));
  if (!line) throw new Error('PAL_DATA declaration not found in index.html');
  const data = JSON.parse(line.slice(line.indexOf('{'), line.lastIndexOf('}') + 1));
  return [...new Set(data.pals.map(p => p.iconFile || p.name))];
}

async function loadStructures() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(await readFile(path.join(ROOT, 'assets', 'data', 'structures.js'), 'utf8'), sandbox);
  return sandbox.window.PALBREED_STRUCTURE_DATA.structures;
}

const files = [];

for (const iconFile of await loadPalIconFiles()) {
  files.push({ dest: `assets/pals/${iconFile}.png`, url: `${PALCALC_PALS}${encodeURIComponent(iconFile)}.png` });
}
for (const element of ELEMENTS) {
  files.push({ dest: `assets/elements/${element}.webp`, url: `${SAVE_PAL_IMG}${element}.webp` });
}
for (const rank of RANKS) {
  files.push({ dest: `assets/skills/rank_${rank}.webp`, url: `${SAVE_PAL_IMG}rank_${rank}.webp` });
}
for (const [category, file] of Object.entries(MAP_CATEGORY_ICONS)) {
  files.push({ dest: `assets/map/icons/${category}.png`, url: WIKI_IMAGES + file });
}
for (const structure of await loadStructures()) {
  // Wiki icon naming convention: "<Page title> icon.png". Optional because a
  // handful of pages may lack an uploaded icon; the UI falls back to a glyph.
  files.push({
    dest: `assets/structures/${slug(structure.id || structure.name)}.png`,
    url: wikiFileUrl(`${structure.name} icon.png`),
    optional: true,
  });
}

const config = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  attribution: {
    notice: 'All downloaded imagery is Palworld game art © Pocketpair, Inc., used as a fair-use fan reference for identification. Hosting repositories: tylercamp/palcalc (MIT), oMaN-Rod/palworld-save-pal, and palworld.wiki.gg uploads.',
    pins: { palcalc: PALCALC_COMMIT, 'palworld-save-pal': SAVE_PAL_COMMIT, wiki: 'palworld.wiki.gg live uploads, retrieved 2026-07-14' },
  },
  hostRules: { 'palworld.wiki.gg': { concurrency: 1, delayMs: 1200 } },
  files,
};

await writeFile(OUT, `${JSON.stringify(config, null, 2)}\n`);
console.log(`sources.json: ${files.length} files (${files.filter(f => f.optional).length} optional)`);
