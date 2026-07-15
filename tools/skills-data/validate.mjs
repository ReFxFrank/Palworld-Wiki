import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');
const OUTPUT_FILE = join(ROOT, 'assets', 'data', 'skills.js');
const PRIMARY_FILE = join(HERE, 'source', 'palcalc-db.json');

const fail = message => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const finiteOrNull = value => value === null || Number.isFinite(value);

const sandbox = { window: {} };
vm.runInNewContext(await readFile(OUTPUT_FILE, 'utf8'), sandbox, { filename: OUTPUT_FILE });
const data = sandbox.window.PALBREED_SKILL_DATA;
const primary = JSON.parse(await readFile(PRIMARY_FILE, 'utf8'));

assert(data && typeof data === 'object', 'window.PALBREED_SKILL_DATA was not assigned');
assert(data.meta?.schemaVersion === 1, 'Unexpected schema version');
assert(data.meta?.datasetVersion === 'PalCalc v26', 'Unexpected dataset version');
assert(Array.isArray(data.active), 'active must be an array');
assert(Array.isArray(data.passive), 'passive must be an array');
assert(Array.isArray(data.partner), 'partner must be an array');
assert(data.active.length === 320, `Expected 320 active skills; received ${data.active.length}`);
assert(data.passive.length === 115, `Expected 115 standard passive skills; received ${data.passive.length}`);
assert(data.partner.length === 0, `Expected zero partner records from the pinned sources; received ${data.partner.length}`);
assert(data.meta.counts.pals === 299, 'Expected 299 source Pals');
assert(data.meta.counts.learnsetEntries === 2356, 'Expected 2,356 source learnset entries');
assert(data.meta.counts.resolvedLearnsetEntries === 2354, 'Expected 2,354 resolved learnset entries');
assert(data.meta.counts.unresolvedLearnsetEntries === 2, 'Expected exactly two source-version learnset gaps');
assert(Array.isArray(data.meta.unresolvedLearnsets) && data.meta.unresolvedLearnsets.length === 2, 'Unresolved learnsets must be retained in metadata');
assert(data.meta.unresolvedLearnsets.some(row => row.skillId === 'Unique_PyramidTurtle_PyramidPress' && row.pal === 'Tetroise' && row.level === 50), 'Missing the known Tetroise learnset gap');
assert(data.meta.unresolvedLearnsets.some(row => row.skillId === 'Unique_PyramidTurtle_Neutral_HolyPress' && row.pal === 'Tetroise Primo' && row.level === 70), 'Missing the known Tetroise Primo learnset gap');
assert(data.meta.coverage.activeWithRanges === 237, 'Expected 237 exact active range matches');
assert(data.meta.coverage.activeWithTypes === 237, 'Expected 237 exact active type matches');
assert(data.meta.coverage.activeWithSkillFruit === 93, 'Expected 93 Skill Fruit skills');
assert(data.meta.coverage.passiveWithDescriptions === 115, 'Every standard passive must have an English description');

const palNames = new Set(primary.Pals.map(pal => pal.LocalizedNames?.en || pal.Name));
const activeIds = new Set();
for (const skill of data.active) {
  assert(typeof skill.id === 'string' && skill.id, 'Active skill id is required');
  assert(typeof skill.name === 'string' && skill.name, `Active ${skill.id} needs an English name`);
  assert(typeof skill.element === 'string' && skill.element, `Active ${skill.id} needs an element`);
  assert(finiteOrNull(skill.power), `Active ${skill.id} has invalid power`);
  assert(finiteOrNull(skill.cooldown), `Active ${skill.id} has invalid cooldown`);
  assert(finiteOrNull(skill.minRange), `Active ${skill.id} has invalid minRange`);
  assert(finiteOrNull(skill.maxRange), `Active ${skill.id} has invalid maxRange`);
  assert(typeof skill.skillFruit === 'boolean', `Active ${skill.id} needs a skillFruit boolean`);
  assert(typeof skill.exclusive === 'boolean', `Active ${skill.id} needs an exclusive boolean`);
  assert(Array.isArray(skill.effects), `Active ${skill.id} effects must be an array`);
  assert(Array.isArray(skill.learners), `Active ${skill.id} learners must be an array`);
  assert(!activeIds.has(skill.id), `Duplicate active skill id ${skill.id}`);
  activeIds.add(skill.id);
  for (const learner of skill.learners) {
    assert(palNames.has(learner.pal), `Active ${skill.id} references unknown learner ${learner.pal}`);
    assert(Number.isInteger(learner.level) && learner.level >= 1, `Active ${skill.id} has invalid learner level`);
  }
}

const passiveIds = new Set();
for (const skill of data.passive) {
  assert(typeof skill.id === 'string' && skill.id, 'Passive skill id is required');
  assert(typeof skill.name === 'string' && skill.name, `Passive ${skill.id} needs an English name`);
  assert(Number.isInteger(skill.tier) && skill.tier !== 0, `Passive ${skill.id} has invalid tier`);
  assert(typeof skill.description === 'string' && skill.description, `Passive ${skill.id} needs an English description`);
  assert(typeof skill.positive === 'boolean', `Passive ${skill.id} needs a positive boolean`);
  assert(typeof skill.affectsPlayer === 'boolean', `Passive ${skill.id} needs an affectsPlayer boolean`);
  assert(typeof skill.exclusive === 'boolean', `Passive ${skill.id} needs an exclusive boolean`);
  assert(Array.isArray(skill.effects), `Passive ${skill.id} effects must be an array`);
  assert(Array.isArray(skill.pals), `Passive ${skill.id} pals must be an array`);
  assert(!passiveIds.has(skill.id), `Duplicate passive skill id ${skill.id}`);
  passiveIds.add(skill.id);
  for (const pal of skill.pals) assert(palNames.has(pal), `Passive ${skill.id} references unknown Pal ${pal}`);
}

assert(activeIds.size === primary.ActiveSkills.length, 'Active IDs do not cover the primary source');
assert(passiveIds.size === primary.PassiveSkills.filter(skill => skill.IsStandardPassiveSkill).length, 'Passive IDs do not cover all standard source passives');
assert(data.meta.counts.active === data.active.length, 'meta active count mismatch');
assert(data.meta.counts.passive === data.passive.length, 'meta passive count mismatch');
assert(data.meta.counts.partner === data.partner.length, 'meta partner count mismatch');

console.log(JSON.stringify({
  valid: true,
  dataset: data.meta.datasetVersion,
  active: data.active.length,
  passive: data.passive.length,
  partner: data.partner.length,
  learnsetEntries: data.meta.counts.learnsetEntries,
  rangeMatches: data.meta.coverage.activeWithRanges,
  activeWithLearners: data.meta.coverage.activeWithLearners,
  passiveWithPalLinks: data.meta.coverage.passiveWithPals,
}, null, 2));
