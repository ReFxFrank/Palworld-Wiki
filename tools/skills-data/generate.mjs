import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');
const SOURCE_DIR = join(HERE, 'source');
const OUTPUT_FILE = join(ROOT, 'assets', 'data', 'skills.js');

const SOURCE_FILES = {
  palcalc: {
    file: 'palcalc-db.json',
    sha256: '803d891afdb18bd00e24332844a7276bbe5c0855170ef90ef142f2f4d7698ed1',
  },
  pals: {
    file: 'palworld-save-pal-pals.json',
    sha256: 'a36d35ca1f5c6f4383182bd967f1defb808b472dcc63f441ea91c0b6a0353de6',
  },
  active: {
    file: 'palworld-save-pal-active-skills.json',
    sha256: 'b68c1425a9289ed9bf759f445a5b7f38da60c91e8f75bf719cb67ee160e28e02',
  },
  passive: {
    file: 'palworld-save-pal-passive-skills.json',
    sha256: '5a94eb4651e263297f05ed863ad5a18eb39fd75719eb21f4c953fdc7918a321a',
  },
};

const sha256 = value => createHash('sha256').update(value).digest('hex');
const textOrNull = value => {
  if (typeof value !== 'string') return null;
  const normalized = value.replace(/\r\n?/g, '\n').trim();
  return normalized || null;
};
const numberOrNull = value => Number.isFinite(Number(value)) ? Number(value) : null;
const key = value => String(value || '').toLowerCase();
const english = row => textOrNull(row?.LocalizedNames?.en) || textOrNull(row?.Name);

async function loadSource(source) {
  const raw = await readFile(join(SOURCE_DIR, source.file));
  const actual = sha256(raw);
  if (actual !== source.sha256) {
    throw new Error(`${source.file} SHA-256 mismatch: expected ${source.sha256}, received ${actual}`);
  }
  return JSON.parse(raw.toString('utf8'));
}

function normalizeActiveEffects(effects) {
  if (!Array.isArray(effects)) return [];
  return effects.map(effect => ({
    type: textOrNull(effect?.type),
    value: numberOrNull(effect?.value),
    valueEx: numberOrNull(effect?.value_ex),
  }));
}

function normalizePassiveEffects(effects, trackedEffects) {
  if (Array.isArray(effects) && effects.length) {
    return effects.map(effect => ({
      type: textOrNull(effect?.type),
      value: numberOrNull(effect?.value),
      target: textOrNull(effect?.target),
    }));
  }
  if (!Array.isArray(trackedEffects)) return [];
  return trackedEffects.map(effect => ({
    type: textOrNull(effect?.InternalName),
    value: numberOrNull(effect?.EffectStrength),
    target: null,
  }));
}

const [palcalc, secondaryPals, secondaryActive, secondaryPassive] = await Promise.all([
  loadSource(SOURCE_FILES.palcalc),
  loadSource(SOURCE_FILES.pals),
  loadSource(SOURCE_FILES.active),
  loadSource(SOURCE_FILES.passive),
]);

const elementByInternal = new Map(
  (palcalc.Elements || []).map(element => [key(element.InternalName), english(element)]),
);
const secondaryActiveById = new Map(
  Object.entries(secondaryActive).map(([id, value]) => [key(id.replace(/^EPalWazaID::/, '')), value]),
);
const secondaryPalsById = new Map(Object.entries(secondaryPals).map(([id, value]) => [key(id), value]));
const activeIds = new Set((palcalc.ActiveSkills || []).map(skill => key(skill.InternalName)));

const learnersBySkill = new Map();
const unresolvedLearnsetEntries = [];
let learnsetEntries = 0;

for (const pal of palcalc.Pals || []) {
  const sourcePal = secondaryPalsById.get(key(pal.InternalName));
  for (const [skillId, rawLevel] of Object.entries(sourcePal?.skill_set || {})) {
    const normalizedId = key(skillId.replace(/^EPalWazaID::/, ''));
    const learner = { pal: english(pal), level: numberOrNull(rawLevel) };
    learnsetEntries += 1;
    if (!activeIds.has(normalizedId)) {
      unresolvedLearnsetEntries.push({ skillId, ...learner });
      continue;
    }
    if (!learnersBySkill.has(normalizedId)) learnersBySkill.set(normalizedId, []);
    learnersBySkill.get(normalizedId).push(learner);
  }
}

for (const learners of learnersBySkill.values()) {
  learners.sort((a, b) => (a.level ?? Infinity) - (b.level ?? Infinity) || a.pal.localeCompare(b.pal));
}

const active = (palcalc.ActiveSkills || []).map(skill => {
  const detail = secondaryActiveById.get(key(skill.InternalName));
  return {
    id: skill.InternalName,
    name: english(skill),
    element: elementByInternal.get(key(skill.ElementInternalName)) || skill.ElementInternalName || null,
    type: textOrNull(detail?.type),
    power: numberOrNull(skill.Power),
    cooldown: numberOrNull(skill.CooldownSeconds),
    minRange: numberOrNull(detail?.min_range),
    maxRange: numberOrNull(detail?.max_range),
    description: null,
    effects: normalizeActiveEffects(detail?.effects),
    skillFruit: Boolean(skill.HasSkillFruit),
    exclusive: !skill.CanInherit,
    canInherit: Boolean(skill.CanInherit),
    learners: learnersBySkill.get(key(skill.InternalName)) || [],
  };
}).sort((a, b) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id));

const guaranteedByPassive = new Map();
for (const pal of palcalc.Pals || []) {
  for (const passiveId of pal.GuaranteedPassivesInternalIds || []) {
    const normalizedId = key(passiveId);
    if (!guaranteedByPassive.has(normalizedId)) guaranteedByPassive.set(normalizedId, []);
    guaranteedByPassive.get(normalizedId).push(english(pal));
  }
}
for (const pals of guaranteedByPassive.values()) pals.sort((a, b) => a.localeCompare(b));

const passive = (palcalc.PassiveSkills || [])
  .filter(skill => skill.IsStandardPassiveSkill)
  .map(skill => {
    const detail = secondaryPassive?.[skill.InternalName];
    const description = textOrNull(skill.LocalizedDescriptions?.en) || textOrNull(skill.Description);
    const effects = normalizePassiveEffects(detail?.effects, skill.TrackedEffects);
    return {
      id: skill.InternalName,
      name: english(skill),
      tier: numberOrNull(skill.Rank),
      description,
      effects,
      positive: Number(skill.Rank) > 0,
      affectsPlayer: /\bplayer\b/i.test(description || '') || effects.some(effect => effect.target === 'ToTrainer'),
      exclusive: !skill.RandomInheritanceAllowed,
      canInherit: Boolean(skill.RandomInheritanceAllowed),
      randomInheritanceWeight: numberOrNull(skill.RandomInheritanceWeight),
      surgery: {
        cost: numberOrNull(skill.SurgeryCost),
        requiredItem: textOrNull(skill.SurgeryRequiredItem),
      },
      pals: guaranteedByPassive.get(key(skill.InternalName)) || [],
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id));

const partner = [];
const activeWithRanges = active.filter(skill => skill.minRange !== null && skill.maxRange !== null).length;
const activeWithEffects = active.filter(skill => skill.effects.length).length;
const activeWithLearners = active.filter(skill => skill.learners.length).length;
const passiveWithDescriptions = passive.filter(skill => skill.description).length;
const passiveWithEffects = passive.filter(skill => skill.effects.length).length;
const passiveWithPals = passive.filter(skill => skill.pals.length).length;

const data = {
  meta: {
    schemaVersion: 1,
    datasetVersion: `PalCalc ${palcalc.Version || 'unknown'}`,
    gameVersion: '1.0',
    locale: 'en',
    generatedAt: new Date().toISOString(),
    sources: [
      {
        id: 'palcalc',
        role: 'primary skill names, elements, power, cooldown, inheritance, Skill Fruit, passive descriptions',
        version: palcalc.Version || null,
        commit: '8ade7381d0548d0312dbe0d650673e4cebd86fd6',
        commitDate: '2026-07-11T17:47:25Z',
        url: 'https://raw.githubusercontent.com/tylercamp/palcalc/8ade7381d0548d0312dbe0d650673e4cebd86fd6/PalCalc.Model/db.json',
        sha256: SOURCE_FILES.palcalc.sha256,
        license: { spdx: 'MIT', name: 'MIT License' },
      },
      {
        id: 'palworld-save-pal',
        role: 'secondary Pal learnsets, active ranges/types/effects, passive effects',
        commit: '4cd0a85f66cf424b650ef0e886032a6b7419e55b',
        commitDate: '2026-07-10T05:33:50Z',
        urls: {
          pals: 'https://raw.githubusercontent.com/oMaN-Rod/palworld-save-pal/4cd0a85f66cf424b650ef0e886032a6b7419e55b/data/json/pals.json',
          active: 'https://raw.githubusercontent.com/oMaN-Rod/palworld-save-pal/4cd0a85f66cf424b650ef0e886032a6b7419e55b/data/json/active_skills.json',
          passive: 'https://raw.githubusercontent.com/oMaN-Rod/palworld-save-pal/4cd0a85f66cf424b650ef0e886032a6b7419e55b/data/json/passive_skills.json',
        },
        sha256: {
          pals: SOURCE_FILES.pals.sha256,
          active: SOURCE_FILES.active.sha256,
          passive: SOURCE_FILES.passive.sha256,
        },
        license: {
          spdx: 'NOASSERTION',
          note: 'The GitHub repository API did not declare a license at generation time.',
        },
      },
    ],
    counts: {
      pals: (palcalc.Pals || []).length,
      active: active.length,
      passive: passive.length,
      partner: partner.length,
      learnsetEntries,
      resolvedLearnsetEntries: learnsetEntries - unresolvedLearnsetEntries.length,
      unresolvedLearnsetEntries: unresolvedLearnsetEntries.length,
    },
    unresolvedLearnsets: unresolvedLearnsetEntries,
    coverage: {
      activeWithEnglishNames: active.filter(skill => skill.name).length,
      activeWithPowerAndCooldown: active.filter(skill => skill.power !== null && skill.cooldown !== null).length,
      activeWithRanges,
      activeWithTypes: active.filter(skill => skill.type).length,
      activeWithEffects,
      activeWithSkillFruit: active.filter(skill => skill.skillFruit).length,
      activeWithLearners,
      passiveWithEnglishNames: passive.filter(skill => skill.name).length,
      passiveWithDescriptions,
      passiveWithEffects,
      passiveWithPals,
      partnerRecords: partner.length,
    },
    fieldSemantics: {
      activeExclusive: 'True when the primary PalCalc record marks CanInherit=false.',
      passiveExclusive: 'True when the primary PalCalc record marks RandomInheritanceAllowed=false.',
      passivePals: 'Pals whose primary PalCalc record guarantees this passive.',
      learners: 'Natural level-up learnsets joined by Pal internal ID from the pinned secondary source.',
    },
    limitations: [
      'The primary PalCalc snapshot does not provide active-skill descriptions, ranges, types, effects, Pal learnsets, or Partner Skill records.',
      'Active range/type/effect fields are null or empty when no exact internal-ID match exists in the pinned secondary source.',
      'Partner Skill data is intentionally an empty array because neither pinned source exposes a normalized Partner Skill table.',
      'Two pinned secondary learnset entries point to active-skill identifiers absent from the primary PalCalc active-skill roster; they are retained in meta.unresolvedLearnsets and are not fabricated as active records.',
    ],
  },
  active,
  passive,
  partner,
};

await mkdir(dirname(OUTPUT_FILE), { recursive: true });
const banner = [
  '/*',
  ' * Generated by tools/skills-data/generate.mjs. Do not edit by hand.',
  ' * Primary data: PalCalc v26 (MIT). See tools/skills-data/SOURCES.md.',
  ' */',
].join('\n');
await writeFile(OUTPUT_FILE, `${banner}\nwindow.PALBREED_SKILL_DATA = ${JSON.stringify(data, null, 2)};\n`, 'utf8');

console.log(JSON.stringify({ output: OUTPUT_FILE, counts: data.meta.counts, coverage: data.meta.coverage }, null, 2));
