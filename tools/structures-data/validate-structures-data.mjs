#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "../..");
const dataPath = path.join(projectRoot, "assets/data/structures-data.js");
const runtimePath = path.join(projectRoot, "assets/data/structures.js");
const [source, runtimeSource] = await Promise.all([readFile(dataPath, "utf8"), readFile(runtimePath, "utf8")]);
const readDataset = (code, filename) => {
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename, timeout: 5_000 });
  return sandbox.window.PALBREED_STRUCTURE_DATA;
};
const data = readDataset(source, dataPath);
const runtimeData = readDataset(runtimeSource, runtimePath);

const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};
const isNullableNumber = (value) => value === null || (typeof value === "number" && Number.isFinite(value));
const unique = (values) => new Set(values).size === values.length;

assert(data && typeof data === "object", "window.PALBREED_STRUCTURE_DATA must be an object");
assert(source === runtimeSource, "structures.js must remain byte-identical to structures-data.js");
assert(JSON.stringify(data) === JSON.stringify(runtimeData), "runtime and canonical structure datasets must be equivalent");
assert(data?.meta?.schemaVersion === 1, "meta.schemaVersion must be 1");
assert(/^1\.0(?:\.|$)/.test(data?.meta?.gameVersion || ""), "meta.gameVersion must identify the current 1.0 patch");
assert(data?.meta?.source?.license?.spdx === "CC-BY-SA-4.0", "CC BY-SA 4.0 source license metadata is required");
assert(data?.meta?.source?.attribution === "Palworld Wiki contributors", "Palworld Wiki contributor attribution is required");
assert(Array.isArray(data?.structures), "structures must be an array");
assert(Array.isArray(data?.technology), "technology must be an array");
assert(Array.isArray(data?.categories), "categories must be an array");
assert(Array.isArray(data?.subcategories), "subcategories must be an array");

if (Array.isArray(data?.structures)) {
  assert(data.structures.length >= 120, "expected at least 120 structures from the source snapshot");
  assert(unique(data.structures.map((row) => row.id)), "structure ids must be unique");
  assert(unique(data.structures.map((row) => row.name)), "structure names must be unique");

  for (const structure of data.structures) {
    const prefix = `structure ${structure?.name || structure?.id || "<unknown>"}`;
    assert(typeof structure.id === "string" && structure.id.length > 0, `${prefix}: id is required`);
    assert(typeof structure.name === "string" && structure.name.length > 0, `${prefix}: name is required`);
    assert(structure.category === null || typeof structure.category === "string", `${prefix}: category must be string or null`);
    assert(structure.subcategory === null || typeof structure.subcategory === "string", `${prefix}: subcategory must be string or null`);
    assert(structure.description === null || typeof structure.description === "string", `${prefix}: description must be string or null`);
    assert(!structure.description || !/[{}]|\[\[|\]\]/.test(structure.description), `${prefix}: description contains unnormalized wikitext`);
    assert(isNullableNumber(structure.hp) && (structure.hp === null || structure.hp >= 0), `${prefix}: hp must be a non-negative number or null`);
    assert(isNullableNumber(structure.unlockLevel) && (structure.unlockLevel === null || structure.unlockLevel >= 0), `${prefix}: unlockLevel must be non-negative or null`);
    assert(isNullableNumber(structure.techPoints) && (structure.techPoints === null || structure.techPoints >= 0), `${prefix}: techPoints must be non-negative or null`);
    assert(isNullableNumber(structure.ancientPoints) && (structure.ancientPoints === null || structure.ancientPoints >= 0), `${prefix}: ancientPoints must be non-negative or null`);
    assert(structure.requiredWork === null || (Number.isInteger(structure.requiredWork) && structure.requiredWork >= 0), `${prefix}: requiredWork must be a non-negative integer or null`);
    assert(structure.work === null, `${prefix}: work must remain null until a structured source is added`);
    assert(structure.powered === null, `${prefix}: powered must remain null until a structured source is added`);
    assert(structure.powerConsumption === null, `${prefix}: powerConsumption must remain null until a structured source is added`);
    assert(Array.isArray(structure.materials), `${prefix}: materials must be an array`);
    assert(Array.isArray(structure.outputs), `${prefix}: outputs must be an array`);
    assert(typeof structure.sourceUrl === "string" && structure.sourceUrl.startsWith("https://palworld.wiki.gg/wiki/"), `${prefix}: sourceUrl is required`);
    for (const material of structure.materials || []) {
      assert(typeof material.name === "string" && material.name.length > 0, `${prefix}: material name is required`);
      assert(Number.isInteger(material.quantity) && material.quantity > 0, `${prefix}: material quantity must be a positive integer`);
    }
    assert(unique((structure.materials || []).map((material) => material.name)), `${prefix}: material names must be unique`);
  }
}

const structureIds = new Set((data?.structures || []).map((row) => row.id));
const technologyIds = new Set((data?.technology || []).map((row) => row.id));
if (Array.isArray(data?.technology)) {
  assert(data.technology.length >= 450, "expected at least 450 canonical technology entries from the source snapshot");
  assert(unique(data.technology.map((row) => row.id)), "technology ids must be unique");
  assert(unique(data.technology.map((row) => row.name)), "technology names must be unique");
  for (const technology of data.technology) {
    const prefix = `technology ${technology?.name || technology?.id || "<unknown>"}`;
    assert(typeof technology.id === "string" && technology.id.length > 0, `${prefix}: id is required`);
    assert(typeof technology.name === "string" && technology.name.length > 0, `${prefix}: name is required`);
    assert(Number.isInteger(technology.level) && technology.level >= 0, `${prefix}: level must be a non-negative integer`);
    assert(Number.isInteger(technology.points) && technology.points >= 0, `${prefix}: points must be a non-negative integer`);
    assert(["technology", "ancient"].includes(technology.pointType), `${prefix}: invalid pointType`);
    assert(Number.isInteger(technology.technologyPoints) && technology.technologyPoints >= 0, `${prefix}: technologyPoints must be a non-negative integer`);
    assert(Number.isInteger(technology.ancientPoints) && technology.ancientPoints >= 0, `${prefix}: ancientPoints must be a non-negative integer`);
    assert(technology.pointType !== "technology" || (technology.technologyPoints === technology.points && technology.ancientPoints === 0), `${prefix}: normal point split is inconsistent`);
    assert(technology.pointType !== "ancient" || (technology.ancientPoints === technology.points && technology.technologyPoints === 0), `${prefix}: ancient point split is inconsistent`);
    assert(Array.isArray(technology.structureIds), `${prefix}: structureIds must be an array`);
    for (const structureId of technology.structureIds || []) {
      assert(structureIds.has(structureId), `${prefix}: unknown structure id ${structureId}`);
    }
  }
}

for (const structure of data?.structures || []) {
  if (structure.technologyId !== null) {
    assert(technologyIds.has(structure.technologyId), `structure ${structure.name}: unknown technologyId ${structure.technologyId}`);
  }
}

if (Array.isArray(data?.categories)) {
  assert(unique(data.categories.map((row) => row.id)), "category ids must be unique");
  assert(unique(data.categories.map((row) => row.name)), "category names must be unique");
  for (const category of data.categories) {
    const matchingStructures = (data.structures || []).filter((structure) => structure.category === category.name);
    assert(category.count === matchingStructures.length, `category ${category.name}: count does not match structures`);
    for (const subcategory of category.subcategories || []) {
      const matchingSubcategories = matchingStructures.filter((structure) => structure.subcategory === subcategory.name);
      assert(subcategory.count === matchingSubcategories.length, `subcategory ${category.name}/${subcategory.name}: count does not match structures`);
    }
  }
}
if (Array.isArray(data?.subcategories)) {
  assert(unique(data.subcategories.map((row) => row.id)), "subcategory ids must be unique");
}

const coverage = data?.meta?.coverage;
assert(coverage?.completeAgainstSourceSnapshot === true, "the generated structure and recipe snapshot must be complete");
assert(coverage?.sourceRows?.structures === data?.structures?.length, "source and normalized structure counts must match");
assert(coverage?.sourceRows?.uniqueTechnology === data?.technology?.length, "source and normalized technology counts must match");
assert(coverage?.sourceRows?.buildMenuRecipes === data?.structures?.length, "every source structure must have one Build Menu recipe");
assert(coverage?.sourceRows?.buildMenuIngredients === (data?.structures || []).reduce((count, structure) => count + structure.materials.length, 0), "source and normalized ingredient counts must match");
assert(coverage?.unmatchedRecipes?.length === 0, "all source structures must have a Build Menu recipe");
assert(coverage?.orphanRecipes?.length === 0, "all Build Menu recipes must match a source structure");
const derivedUnmatchedTechnology = (data?.structures || [])
  .filter((structure) => structure.technologyName && !structure.technologyId)
  .map((structure) => structure.name)
  .sort();
const reportedUnmatchedTechnology = [...(coverage?.unmatchedTechnology || [])].sort();
assert(JSON.stringify(derivedUnmatchedTechnology) === JSON.stringify(reportedUnmatchedTechnology), "unmatched technology coverage must match the normalized structures");
assert(reportedUnmatchedTechnology.length <= Math.ceil((data?.structures?.length || 0) * 0.05), "more than 5% of structure technology mappings are unresolved");
assert(coverage?.technologyMappingComplete === (reportedUnmatchedTechnology.length === 0), "technologyMappingComplete must reflect unresolved source mappings");

if (errors.length) {
  console.error(`Structure dataset validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${data.structures.length} structures, ${data.technology.length} technology entries, ${data.categories.length} categories, and ${data.subcategories.length} subcategories.`);
