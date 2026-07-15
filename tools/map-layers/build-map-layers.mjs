#!/usr/bin/env node
/**
 * PalBreed bulk map layers + pal spawn data pipeline.
 *
 * Produces two generated runtime datasets:
 *   - assets/data/map-layers.js  (PALBREED_MAP_LAYER_DATA): ore / resource /
 *     POI marker layers extracted from pinned datamine repositories and the
 *     Palworld Wiki cargo tables.
 *   - assets/data/spawns.js      (PALBREED_SPAWN_DATA): per-Pal wild-spawn
 *     area clusters for the map's "Find a Pal" feature.
 *
 * Pinned sources (recorded per-file with SHA-256 in the output meta):
 *   - Pixnop/CairnMap @ 930d77e2d3757235a7beb977057ee2ce32776d07 (MIT) —
 *     per-node world positions regenerated from the Palworld 1.0 game pak.
 *   - oMaN-Rod/palworld-save-pal @ 4cd0a85f66cf424b650ef0e886032a6b7419e55b
 *     (no declared license; same pinned status as the skills pipeline) —
 *     Lifmunk Effigies and dungeon entrances.
 *   - Awy64/palworld-atlas-data @ 807c84cd5b779bc7af6ab491c29a55f6d6467505
 *     (MIT) — Palworld 1.0 dedicated-server spawner extraction, Steam build
 *     24088465. Verified: its precomputed palpagos map coords equal this
 *     project's transform to full float precision.
 *   - palworld.wiki.gg LocationEntity cargo table (CC BY-SA 4.0) — bounty
 *     target locations, fetched live at build time.
 *
 * World-coordinate transform (identical to tools/map-data):
 *   mapX = (worldY - 158000) / 459 ; mapY = (worldX + 123888) / 459
 * then screen-normalized against the palpagos bounds from source-markers.json.
 */
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const cacheDir = path.join(here, 'source');
fs.mkdirSync(cacheDir, { recursive: true });

const CAIRN = 'https://raw.githubusercontent.com/Pixnop/CairnMap/930d77e2d3757235a7beb977057ee2ce32776d07/Content/Mods/MapCollectablesMod/Data/';
const SAVE_PAL = 'https://raw.githubusercontent.com/oMaN-Rod/palworld-save-pal/4cd0a85f66cf424b650ef0e886032a6b7419e55b/data/json/';
const ATLAS = 'https://raw.githubusercontent.com/Awy64/palworld-atlas-data/807c84cd5b779bc7af6ab491c29a55f6d6467505/published/v1/builds/24088465/maps/palpagos/spawns.json';
const CARGO = 'https://palworld.wiki.gg/api.php?action=cargoquery&tables=LocationEntity&fields=locationName,entityName,entityType,variantType,level,coords&where=coords!=%27%27%20AND%20variantType=%27Bounty%20Target%27&limit=500&format=json';
const USER_AGENT = 'PalBreedWiki-map-layers/1.0 (offline fan companion)';

const sourceMarkers = JSON.parse(fs.readFileSync(path.join(root, 'tools/map-data/source-markers.json'), 'utf8'));
const bounds = sourceMarkers.bounds;
const spanX = bounds.maxX - bounds.minX;
const spanY = bounds.maxY - bounds.minY;
const worldToMap = (wx, wy) => ({ mapX: (wy - 158000) / 459, mapY: (wx + 123888) / 459 });
const normalize = (mapX, mapY) => ({ x: (mapX - bounds.minX) / spanX, y: (bounds.maxY - mapY) / spanY });
const inRange = p => p.x >= 0 && p.x <= 1 && p.y >= 0 && p.y <= 1;
const round4 = n => Number(n.toFixed(4));
const sha256 = buffer => createHash('sha256').update(buffer).digest('hex');

const sourceHashes = {};
async function fetchCached(url, cacheName) {
  const cachePath = path.join(cacheDir, cacheName);
  if (!fs.existsSync(cachePath)) {
    const response = await fetch(url, { headers: { 'user-agent': USER_AGENT } });
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
    fs.writeFileSync(cachePath, Buffer.from(await response.arrayBuffer()));
  }
  const buffer = fs.readFileSync(cachePath);
  sourceHashes[cacheName] = { url, sha256: sha256(buffer), bytes: buffer.length };
  return JSON.parse(buffer.toString('utf8'));
}

// Layer definitions. Every bulk layer starts unchecked (defaultOff) and is
// excluded from global search (searchable:false); the UI falls back to the
// glyph when no real icon file exists for the category.
const CAIRN_LAYERS = [
  { id: 'node-copper', file: 'CopperLocations.json', name: 'Ore (Copper)', group: 'Ore', color: '#d29a6b', glyph: '⛏', description: 'Standard metal ore nodes extracted from the 1.0 game pak.' },
  { id: 'node-coal', file: 'CoalLocations.json', name: 'Coal', group: 'Ore', color: '#9aa3b2', glyph: '●', description: 'Coal nodes extracted from the 1.0 game pak.' },
  { id: 'node-quartz', file: 'QuartzLocations.json', name: 'Pure Quartz', group: 'Ore', color: '#bfe8f5', glyph: '◆', description: 'Pure Quartz nodes extracted from the 1.0 game pak.' },
  { id: 'node-sulfur', file: 'SulfurLocations.json', name: 'Sulfur', group: 'Ore', color: '#e8d24f', glyph: '▲', description: 'Sulfur nodes extracted from the 1.0 game pak.' },
  { id: 'node-hexolite', file: 'HexoliteLocations.json', name: 'Hexolite Quartz', group: 'Ore', color: '#7fd9c9', glyph: '⬡', description: 'Hexolite Quartz nodes extracted from the 1.0 game pak.' },
  { id: 'node-sky-ore', file: 'SkyIslandOreLocations.json', name: 'Sky Island Ore', group: 'Ore', color: '#9db9ff', glyph: '☁', description: 'Datamined SkyIslandOre nodes on the 1.0 sky islands — the Soralite ore family (label from the datamine file name, not confirmed in-game text).' },
  { id: 'node-nightstone', file: 'NightStoneLocations.json', name: 'Night Stone', group: 'Ore', color: '#b48cf0', glyph: '☾', description: 'Datamined NightStone nodes — the Nightstar Sand family (label from the datamine file name, not confirmed in-game text).' },
  { id: 'node-magma', file: 'MagmaRockLocations.json', name: 'Magma Rock', group: 'Ore', color: '#ff8a5c', glyph: '♨', description: 'Datamined magma rock nodes; the source lists only a handful, so treat this layer as partial.' },
  { id: 'node-oil', file: 'OilLocations.json', name: 'Crude Oil', group: 'Resources', color: '#b0b7c3', glyph: '◉', description: 'Crude oil extraction spots from the 1.0 game pak.' },
  { id: 'node-dogcoin', file: 'DogCoinLocations.json', name: 'Dog Coins', group: 'Resources', color: '#f0c04a', glyph: '¤', description: 'Dog Coin pickup locations from the 1.0 game pak.' },
  { id: 'node-junk', file: 'JunkLocations.json', name: 'Junk Piles', group: 'Resources', color: '#a3b18a', glyph: '♻', description: 'Junk pile gathering spots from the 1.0 game pak.' },
  { id: 'node-mushroom', file: 'CaveMushroomLocations.json', name: 'Cave Mushrooms', group: 'Resources', color: '#e0a3c4', glyph: '⚘', description: 'Cave mushroom gathering spots from the 1.0 game pak.' },
  { id: 'node-fruit-tree', file: 'FruitTreeLocations.json', name: 'Fruit Trees', group: 'Resources', color: '#86efac', glyph: '❀', description: 'Wild fruit tree locations from the 1.0 game pak (food fruit, not Skill Fruit).' },
  { id: 'poi-chest', file: 'TreasureChestLocations.json', name: 'Treasure Chests', group: 'Points of Interest', color: '#ffd166', glyph: '▣', description: 'Fixed treasure chest spawn locations from the 1.0 game pak.' },
  { id: 'poi-note', file: 'NoteLocations.json', name: 'Journals & Notes', group: 'Points of Interest', color: '#d9c9a3', glyph: '✎', description: 'Journal and lore note pickup locations from the 1.0 game pak.' },
  { id: 'poi-outpost', file: 'OutpostLocations.json', name: 'Poacher Outposts', group: 'Points of Interest', color: '#ff9d9d', glyph: '⚑', description: 'Poacher camp / outpost locations from the 1.0 game pak.' },
];

const categories = [];
const markers = [];
const dropped = {};

function addLayer(def, points, sourceId, extra = {}) {
  let kept = 0;
  points.forEach(point => {
    const normalized = normalize(point.mapX, point.mapY);
    if (!inRange(normalized)) { dropped[def.id] = (dropped[def.id] || 0) + 1; return; }
    markers.push({
      id: `palpagos.${def.id}.${kept}`,
      mapId: 'palpagos',
      category: def.id,
      name: point.name || def.name,
      x: round4(normalized.x),
      y: round4(normalized.y),
      ...(point.level != null ? { level: point.level } : {}),
      ...(point.description ? { description: point.description } : {}),
      ...(point.region ? { region: point.region } : {}),
    });
    kept++;
  });
  if (!kept) { console.warn(`layer ${def.id}: 0 markers in range — skipping category`); return; }
  categories.push({
    id: def.id, name: def.name, group: def.group, color: def.color, glyph: def.glyph,
    description: def.description, defaultOff: true, size: 'sm', searchable: false, sourceId, count: kept, ...extra,
  });
}

for (const def of CAIRN_LAYERS) {
  const data = await fetchCached(CAIRN + def.file, `cairn-${def.file}`);
  const points = (data.Locations || []).map(p => worldToMap(p.x, p.y));
  addLayer(def, points, 'cairnmap');
}

const effigies = await fetchCached(SAVE_PAL + 'effigies.json', 'save-pal-effigies.json');
addLayer(
  { id: 'poi-effigy', name: 'Lifmunk Effigies', group: 'Points of Interest', color: '#74e69a', glyph: '✚', description: 'All Lifmunk Effigy locations (605 in the 1.0 dataset).' },
  Object.values(effigies).map(p => worldToMap(p.x, p.y)),
  'palworld-save-pal',
);

const mapObjects = await fetchCached(SAVE_PAL + 'map_objects.json', 'save-pal-map-objects.json');
addLayer(
  { id: 'poi-dungeon', name: 'Dungeons', group: 'Points of Interest', color: '#c98bff', glyph: '◍', description: 'Dungeon entrance locations from the 1.0 dataset; entrances rotate which interior they open.' },
  mapObjects.filter(o => o.type === 'dungeon').map(p => worldToMap(p.x, p.y)),
  'palworld-save-pal',
);

// Bounty targets: wiki cargo rows carry in-game map-grid coordinates already.
const cargo = await fetchCached(CARGO, 'wiki-bounty-cargo.json');
// The wiki occasionally records the same wanted NPC twice with readings a few
// map units apart — dedupe on identity (name + location + level), keep first.
const seenBounties = new Set();
const bountyPoints = (cargo.cargoquery || []).filter(({ title }) => {
  const key = `${title.entityName}|${title.locationName}|${title.level}`;
  if (seenBounties.has(key)) return false;
  seenBounties.add(key);
  return true;
}).map(({ title }) => {
  const match = /\(?\s*(-?\d+)\s*,\s*(-?\d+)\s*\)?/.exec(title.coords || '');
  if (!match) return null;
  return {
    mapX: Number(match[1]), mapY: Number(match[2]),
    name: `Bounty: ${title.entityName}`,
    level: title.level ? Number(title.level) : null,
    region: title.locationName || null,
    description: `Wanted bounty target${title.level ? ` (Lv. ${title.level})` : ''} — location data CC BY-SA 4.0 from the Palworld Wiki.`,
  };
}).filter(Boolean);
addLayer(
  { id: 'poi-bounty', name: 'Bounty Targets', group: 'Points of Interest', color: '#ffb3c1', glyph: '☠', description: 'Wanted bounty-target NPC locations from the Palworld Wiki (CC BY-SA 4.0).' },
  bountyPoints,
  'wiki-location-entity',
);

// ---------------------------------------------------------------------------
// Pal spawn clusters
// ---------------------------------------------------------------------------
const spawnsRaw = await fetchCached(ATLAS, 'atlas-palpagos-spawns.json');
const spawnPoints = Array.isArray(spawnsRaw) ? spawnsRaw : spawnsRaw.spawns || [];
const wild = spawnPoints.filter(s => s.kind === 'wild');
const byPalId = new Map();
for (const s of wild) {
  if (!byPalId.has(s.palId)) byPalId.set(s.palId, []);
  byPalId.get(s.palId).push(s);
}

const TIME_CODE = { both: 0, day: 1, night: 2 };
const byPal = {};
let clusterTotal = 0, offMapSpawns = 0;
for (const [palId, points] of byPalId) {
  let cell = 42;
  let clusters;
  do {
    const bins = new Map();
    for (const p of points) {
      const m = worldToMap(p.worldX, p.worldY);
      const n = normalize(m.mapX, m.mapY);
      if (!inRange(n)) { offMapSpawns++; continue; }
      const key = `${Math.round(m.mapX / cell)}|${Math.round(m.mapY / cell)}`;
      if (!bins.has(key)) bins.set(key, { xs: 0, ys: 0, n: 0, minLv: Infinity, maxLv: 0, times: new Set() });
      const b = bins.get(key);
      b.xs += n.x; b.ys += n.y; b.n++;
      // Upstream occasionally ships inverted ranges (e.g. Pengullet 35/34) —
      // normalize so minLv <= maxLv always holds.
      const lo = Math.min(p.minLevel || 1, p.maxLevel || 1), hi = Math.max(p.minLevel || 1, p.maxLevel || 1);
      b.minLv = Math.min(b.minLv, lo); b.maxLv = Math.max(b.maxLv, hi);
      b.times.add(p.availability || 'both');
    }
    clusters = [...bins.values()];
    cell *= 1.35;
  } while (clusters.length > 70 && cell < 500);
  if (!clusters.length) continue;
  byPal[palId] = clusters.map(b => [
    round4(b.xs / b.n), round4(b.ys / b.n), b.n, b.minLv, b.maxLv,
    b.times.size > 1 ? 0 : TIME_CODE[[...b.times][0]] ?? 0,
  ]);
  clusterTotal += clusters.length;
}

// ---------------------------------------------------------------------------
// Emit runtime files
// ---------------------------------------------------------------------------
const generatedAt = new Date().toISOString();
const layerMeta = {
  schemaVersion: 'palbreed.map-layers.v1',
  dataVersion: '2026.07.15-layers1',
  gameVersion: '1.0 (Steam build 24088465 era)',
  generatedAt,
  markerCount: markers.length,
  categoryCount: categories.length,
  droppedOutOfBounds: dropped,
  license: {
    cairnmap: 'MIT — Pixnop/CairnMap @ 930d77e2 (node positions extracted from the Palworld 1.0 game pak).',
    'palworld-save-pal': 'No declared license — oMaN-Rod/palworld-save-pal @ 4cd0a85f, same pinned status as the skills pipeline.',
    'wiki-location-entity': 'CC BY-SA 4.0 — palworld.wiki.gg LocationEntity cargo table.',
    palworldNotice: 'Unofficial community dataset. Palworld © Pocketpair, Inc.',
  },
  sources: sourceHashes,
  limitations: [
    'All bulk layers are datamined object positions; in-game respawn timing and one-time pickups are not modeled.',
    'Sky Island Ore and Night Stone layer names come from datamine file names; in-game item names are believed to be the Soralite and Nightstar Sand families.',
    'Pal Crystal / Palium has no static node data in any licensed source and is intentionally absent.',
    'Fishing spots and supply drops are not fixed world objects with public coordinates; they are intentionally absent rather than guessed.',
    'The Magma Rock source lists only a handful of nodes; the layer is partial.',
  ],
};
const layerRuntime = { meta: layerMeta, categories, markers };
const layerBanner = `/*\n * PalBreed bulk map layers — ${layerMeta.dataVersion}\n * Generated by tools/map-layers/build-map-layers.mjs. Do not hand-edit.\n * Licenses per source in PALBREED_MAP_LAYER_DATA.meta.license.\n */\n`;
fs.writeFileSync(path.join(root, 'assets/data/map-layers.js'), `${layerBanner}window.PALBREED_MAP_LAYER_DATA = ${JSON.stringify(layerRuntime)};\n`);

const spawnMeta = {
  schemaVersion: 'palbreed.spawns.v1',
  dataVersion: '2026.07.15-spawns1',
  build: '24088465',
  generatedAt,
  license: 'MIT — Awy64/palworld-atlas-data @ 807c84cd; spawner data extracted from the Palworld 1.0 dedicated server files.',
  palCount: Object.keys(byPal).length,
  clusterCount: clusterTotal,
  wildPointCount: wild.length,
  offMapPoints: offMapSpawns,
  clusterFormat: '[x, y, pointCount, minLevel, maxLevel, time(0=both,1=day,2=night)] — x/y screen-normalized; keys are internal pal ids.',
  note: 'Palpagos region only; World Tree interior spawns use a different map and are not included.',
  source: sourceHashes['atlas-palpagos-spawns.json'],
};
const spawnBanner = `/*\n * PalBreed wild-spawn clusters — ${spawnMeta.dataVersion}\n * Generated by tools/map-layers/build-map-layers.mjs. Do not hand-edit.\n * Data: MIT (Awy64/palworld-atlas-data). Palworld © Pocketpair, Inc.\n */\n`;
fs.writeFileSync(path.join(root, 'assets/data/spawns.js'), `${spawnBanner}window.PALBREED_SPAWN_DATA = ${JSON.stringify({ meta: spawnMeta, byPal })};\n`);

console.log(`map-layers.js: ${markers.length} markers across ${categories.length} categories`);
console.log(JSON.stringify(Object.fromEntries(categories.map(c => [c.id, c.count]))));
console.log(`dropped out-of-bounds: ${JSON.stringify(dropped)}`);
console.log(`spawns.js: ${Object.keys(byPal).length} pals, ${clusterTotal} clusters from ${wild.length} wild points (${offMapSpawns} off-map)`);
