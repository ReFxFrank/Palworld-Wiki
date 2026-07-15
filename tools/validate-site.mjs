import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const checked = [
  'assets/data/skills.js',
  'assets/data/structures.js',
  'assets/data/map.js',
  'assets/data/map-layers.js',
  'assets/data/spawns.js',
];

for (const relative of checked) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8');
  new Function(source);
}

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const inlineScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)]
  .map((match) => match[1])
  .filter((source) => source.trim());

if (!inlineScripts.length) throw new Error('No inline application script found.');
for (const source of inlineScripts) new Function(source);

const requiredAssets = [
  'assets/map/palpagos-world-map-4096.webp',
  'assets/map/palpagos-stylized.svg',
  ...checked,
];
for (const relative of requiredAssets) {
  if (!fs.existsSync(path.join(root, relative))) throw new Error(`Missing required asset: ${relative}`);
}

console.log(`site syntax valid: ${inlineScripts.length} inline script, ${checked.length} data scripts, ${requiredAssets.length} required assets`);
