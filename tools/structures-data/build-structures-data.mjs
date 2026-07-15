#!/usr/bin/env node

/**
 * Build PalBreed's normalized Structures + Technology dataset from the
 * Palworld Wiki's public Cargo tables.
 *
 * Source content is CC BY-SA 4.0. The generated dataset preserves attribution
 * and license metadata and is itself distributed under CC BY-SA 4.0.
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_BASE = "https://palworld.wiki.gg/api.php";
const SOURCE_BASE = "https://palworld.wiki.gg";
const USER_AGENT = "PalBreed data importer/1.0 (local development; attribution-compliant)";
const PAGE_SIZE = 500;

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "../..");
const outputPaths = [
  path.join(projectRoot, "assets/data/structures-data.js"),
  path.join(projectRoot, "assets/data/structures.js"),
];

async function apiRequest(parameters) {
  const url = new URL(API_BASE);
  for (const [key, value] of Object.entries(parameters)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": USER_AGENT,
    },
  });
  if (!response.ok) {
    throw new Error(`Palworld Wiki API returned ${response.status} for ${url}`);
  }
  const json = await response.json();
  if (json.error) {
    throw new Error(`Palworld Wiki API error: ${json.error.info || json.error.code}`);
  }
  return { json, url: url.toString() };
}

async function cargoQuery(parameters) {
  const rows = [];
  const urls = [];
  let offset = 0;

  for (;;) {
    const { json, url } = await apiRequest({
      action: "cargoquery",
      format: "json",
      limit: PAGE_SIZE,
      offset,
      ...parameters,
    });
    urls.push(url);
    const page = (json.cargoquery || []).map((entry) => entry.title || {});
    rows.push(...page);
    if (page.length < PAGE_SIZE) break;
    offset += page.length;
  }

  return { rows, urls };
}

function toNullableString(value) {
  if (value === undefined || value === null) return null;
  const normalized = String(value).trim();
  return normalized || null;
}

function toNullableNumber(value) {
  const normalized = toNullableString(value);
  if (normalized === null) return null;
  const number = Number(normalized.replace(/,/g, ""));
  return Number.isFinite(number) ? number : null;
}

function toNullableBoolean(value) {
  const normalized = toNullableString(value)?.toLowerCase();
  if (normalized === null || normalized === undefined) return null;
  if (["1", "true", "yes"].includes(normalized)) return true;
  if (["0", "false", "no"].includes(normalized)) return false;
  return null;
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function plainWikitext(value) {
  const normalized = toNullableString(value);
  if (normalized === null) return null;
  const text = decodeEntities(normalized)
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/''+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text || null;
}

function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sourceUrl(page) {
  return `${SOURCE_BASE}/wiki/${encodeURIComponent(String(page).replace(/ /g, "_"))}`;
}

function countPresent(rows, field) {
  return rows.reduce((count, row) => {
    const value = row[field];
    const present = Array.isArray(value) ? value.length > 0 : value !== null && value !== undefined && value !== "";
    return count + (present ? 1 : 0);
  }, 0);
}

function uniqueByName(rows, label) {
  const byName = new Map();
  for (const row of rows) {
    const name = toNullableString(row.techName);
    if (!name) throw new Error(`${label} contains a row without a name`);
    const normalized = {
      name,
      level: toNullableNumber(row.techLevel),
      points: toNullableNumber(row.techCost),
      ancient: toNullableBoolean(row.isAncient),
      requirement: plainWikitext(row.requirement),
    };
    const existing = byName.get(name);
    if (existing && JSON.stringify(existing) !== JSON.stringify(normalized)) {
      throw new Error(`${label} contains conflicting rows for ${name}`);
    }
    byName.set(name, normalized);
  }
  return [...byName.values()];
}

async function getDeclarationRevisions() {
  const pages = [
    "Template:Structure/CargoDeclare",
    "Template:Technology/CargoDeclare",
    "Template:Crafting Recipe/Recipe CargoDeclare",
    "Template:Crafting Recipe/RecipeIngredient CargoDeclare",
  ];
  const { json, url } = await apiRequest({
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "revisions",
    rvprop: "ids|timestamp",
    titles: pages.join("|"),
  });
  const revisions = (json.query?.pages || []).map((page) => ({
    page: page.title,
    revisionId: page.revisions?.[0]?.revid ?? null,
    revisionTimestamp: page.revisions?.[0]?.timestamp ?? null,
    url: sourceUrl(page.title),
  }));
  return { revisions, url };
}

async function getCurrentGameVersion() {
  const pageTitle = "Palworld Wiki/version";
  const { json, url } = await apiRequest({
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "revisions",
    rvprop: "ids|timestamp|content",
    rvslots: "main",
    titles: pageTitle,
  });
  const page = json.query?.pages?.[0];
  const revision = page?.revisions?.[0];
  const content = revision?.slots?.main?.content || "";
  const match = content.match(/Current Patch:\s*\[\[([^\]|]+)/i);
  if (!match) throw new Error(`Could not parse the current game version from ${pageTitle}`);
  return {
    version: match[1].trim(),
    page: pageTitle,
    url: sourceUrl(pageTitle),
    revisionId: revision?.revid ?? null,
    revisionTimestamp: revision?.timestamp ?? null,
    queryUrl: url,
  };
}

async function build() {
  const retrievedAt = new Date().toISOString();

  const [siteInfoResult, declarationResult, gameVersionResult, structureResult, technologyResult, recipeResult, ingredientResult] = await Promise.all([
    apiRequest({ action: "query", format: "json", meta: "siteinfo", siprop: "general" }),
    getDeclarationRevisions(),
    getCurrentGameVersion(),
    cargoQuery({
      tables: "Structure",
      fields: "_pageName=page,itemName=name,itemType=category,subtype=subcategory,description,hp,capacity,isSupport,techName",
      order_by: "itemName ASC",
    }),
    cargoQuery({
      tables: "Technology",
      fields: "_pageName=page,techName,techLevel,techCost,isAncient,requirement",
      where: "_pageName='Technology'",
      order_by: "techLevel ASC,techName ASC",
    }),
    cargoQuery({
      tables: "Recipe",
      fields: "_pageName=page,recipeID,productName,productQty,workbench,workload,productQuality",
      where: "workbench='Build Menu'",
      order_by: "productName ASC",
    }),
    cargoQuery({
      tables: "Recipe,RecipeIngredient",
      fields: "Recipe.recipeID=recipeID,Recipe.productName=productName,RecipeIngredient.ingredientName=ingredientName,RecipeIngredient.ingredientQty=ingredientQty",
      join_on: "Recipe.recipeID=RecipeIngredient.recipeID",
      where: "Recipe.workbench='Build Menu'",
      order_by: "Recipe.productName ASC,RecipeIngredient.ingredientName ASC",
    }),
  ]);

  const rawStructures = structureResult.rows;
  const rawTechnology = uniqueByName(technologyResult.rows, "Technology");
  const rawRecipes = recipeResult.rows;
  const rawIngredients = ingredientResult.rows;

  const recipesByProduct = new Map();
  for (const row of rawRecipes) {
    const productName = toNullableString(row.productName);
    if (!productName) throw new Error("Build Menu recipe without a product name");
    if (recipesByProduct.has(productName)) throw new Error(`Duplicate Build Menu recipe for ${productName}`);
    recipesByProduct.set(productName, row);
  }

  const ingredientsByRecipe = new Map();
  for (const row of rawIngredients) {
    const recipeId = toNullableString(row.recipeID);
    const name = toNullableString(row.ingredientName);
    const quantity = toNullableNumber(row.ingredientQty);
    if (!recipeId || !name || quantity === null) continue;
    const ingredients = ingredientsByRecipe.get(recipeId) || [];
    ingredients.push({ name, quantity });
    ingredientsByRecipe.set(recipeId, ingredients);
  }
  for (const ingredients of ingredientsByRecipe.values()) {
    ingredients.sort((a, b) => a.name.localeCompare(b.name));
  }

  const technologySeed = rawTechnology.map((row) => {
    const id = slugify(row.name);
    return {
      id,
      name: row.name,
      level: row.level,
      points: row.points,
      pointType: row.ancient ? "ancient" : "technology",
      technologyPoints: row.ancient ? 0 : row.points,
      ancientPoints: row.ancient ? row.points : 0,
      requirement: row.requirement,
      structureIds: [],
      sourcePage: "Technology",
      sourceUrl: sourceUrl("Technology"),
    };
  });
  const technologyByName = new Map(technologySeed.map((technology) => [technology.name, technology]));

  const structures = rawStructures.map((row) => {
    const name = toNullableString(row.name) || toNullableString(row.page);
    if (!name) throw new Error("Structure row without a name");
    const id = slugify(name);
    const recipe = recipesByProduct.get(name) || null;
    const recipeId = toNullableString(recipe?.recipeID);
    const techName = toNullableString(row.techName);
    const tech = techName ? technologyByName.get(techName) || null : null;
    if (tech) tech.structureIds.push(id);

    return {
      id,
      name,
      category: toNullableString(row.category),
      subcategory: toNullableString(row.subcategory),
      description: plainWikitext(row.description),
      hp: toNullableNumber(row.hp),
      capacity: toNullableString(row.capacity),
      supportsOtherStructures: toNullableBoolean(row.isSupport),
      work: null,
      powered: null,
      powerConsumption: null,
      technologyId: tech?.id ?? null,
      technologyName: techName,
      unlockLevel: tech?.level ?? null,
      techPoints: tech ? (tech.pointType === "technology" ? tech.points : 0) : null,
      ancientPoints: tech ? (tech.pointType === "ancient" ? tech.points : 0) : null,
      recipeId,
      productQuantity: toNullableNumber(recipe?.productQty),
      recipeQuality: toNullableString(recipe?.productQuality),
      materials: recipeId ? ingredientsByRecipe.get(recipeId) || [] : [],
      requiredWork: toNullableNumber(recipe?.workload),
      outputs: [],
      sourcePage: toNullableString(row.page) || name,
      sourceUrl: sourceUrl(toNullableString(row.page) || name),
    };
  });

  structures.sort((a, b) => a.name.localeCompare(b.name));
  for (const technology of technologySeed) technology.structureIds.sort();
  const technology = technologySeed.sort((a, b) => (a.level ?? Number.MAX_SAFE_INTEGER) - (b.level ?? Number.MAX_SAFE_INTEGER) || a.name.localeCompare(b.name));

  const categoryMap = new Map();
  for (const structure of structures) {
    if (!structure.category) continue;
    const category = categoryMap.get(structure.category) || { id: slugify(structure.category), name: structure.category, count: 0, subcategories: new Map() };
    category.count += 1;
    if (structure.subcategory) {
      category.subcategories.set(structure.subcategory, (category.subcategories.get(structure.subcategory) || 0) + 1);
    }
    categoryMap.set(structure.category, category);
  }

  const categories = [...categoryMap.values()]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((category) => ({
      id: category.id,
      name: category.name,
      count: category.count,
      subcategories: [...category.subcategories.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, count]) => ({ id: `${category.id}--${slugify(name)}`, name, count })),
    }));
  const subcategories = categories.flatMap((category) => category.subcategories.map((subcategory) => ({
    ...subcategory,
    categoryId: category.id,
    categoryName: category.name,
  })));

  const unmatchedTechnology = structures.filter((structure) => structure.technologyName && !structure.technologyId).map((structure) => structure.name);
  const unmatchedRecipes = structures.filter((structure) => !structure.recipeId).map((structure) => structure.name);
  const orphanRecipes = [...recipesByProduct.keys()].filter((name) => !structures.some((structure) => structure.name === name));
  const siteGeneral = siteInfoResult.json.query?.general || {};
  const queryUrls = [
    ...structureResult.urls,
    ...technologyResult.urls,
    ...recipeResult.urls,
    ...ingredientResult.urls,
  ];

  const data = {
    meta: {
      schemaVersion: 1,
      datasetVersion: `palworld-1.0-wiki-${retrievedAt.slice(0, 10)}`,
      gameVersion: gameVersionResult.version,
      language: "en",
      generatedAt: retrievedAt,
      source: {
        name: "Palworld Wiki",
        siteName: siteGeneral.sitename || "Palworld Wiki",
        baseUrl: SOURCE_BASE,
        apiUrl: API_BASE,
        attribution: "Palworld Wiki contributors",
        retrievedAt,
        license: {
          name: "Creative Commons Attribution-ShareAlike 4.0 International",
          spdx: "CC-BY-SA-4.0",
          url: "https://creativecommons.org/licenses/by-sa/4.0/",
          notice: "Adapted from the Palworld Wiki. Redistributed adaptations must retain attribution and the CC BY-SA 4.0 license.",
        },
        declarationRevisions: declarationResult.revisions,
        gameVersionRevision: {
          page: gameVersionResult.page,
          url: gameVersionResult.url,
          revisionId: gameVersionResult.revisionId,
          revisionTimestamp: gameVersionResult.revisionTimestamp,
        },
        queryUrls,
        metadataQueryUrls: [siteInfoResult.url, declarationResult.url, gameVersionResult.queryUrl],
      },
      coverage: {
        completeAgainstSourceSnapshot: unmatchedRecipes.length === 0 && orphanRecipes.length === 0,
        technologyMappingComplete: unmatchedTechnology.length === 0,
        sourceRows: {
          structures: rawStructures.length,
          canonicalTechnology: technologyResult.rows.length,
          uniqueTechnology: technology.length,
          buildMenuRecipes: rawRecipes.length,
          buildMenuIngredients: rawIngredients.length,
        },
        normalizedRows: {
          structures: structures.length,
          technology: technology.length,
          categories: categories.length,
          subcategories: subcategories.length,
        },
        structureFields: {
          descriptions: countPresent(structures, "description"),
          hp: countPresent(structures, "hp"),
          capacity: countPresent(structures, "capacity"),
          technologyUnlocks: countPresent(structures, "technologyId"),
          recipes: countPresent(structures, "recipeId"),
          materials: countPresent(structures, "materials"),
          requiredWork: countPresent(structures, "requiredWork"),
          workSuitability: 0,
          powered: 0,
          powerConsumption: 0,
          outputs: 0,
        },
        unmatchedTechnology,
        unmatchedRecipes,
        orphanRecipes,
        notes: [
          "All Structure rows and Build Menu recipes exposed by the source Cargo tables at retrieval time are included.",
          "Technology is filtered to the canonical Technology page; the wiki also transcludes the same entries on Technology/Tree.",
          `${unmatchedTechnology.length} source-declared structure technology name(s) do not match a canonical Technology entry and are intentionally left unmapped rather than guessed.`,
          "The source tables do not provide normalized worker suitability, powered state, power consumption, or structure outputs. Those fields are left null or empty instead of being inferred.",
          "Descriptions are CC BY-SA text normalized from the source wiki's Structure table.",
        ],
      },
    },
    categories,
    subcategories,
    structures,
    technology,
  };

  const header = `/*\n * PalBreed Structures + Technology data\n * Generated: ${retrievedAt}\n * Source: Palworld Wiki contributors (${SOURCE_BASE})\n * License: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)\n * Do not remove attribution or license metadata when redistributing adaptations.\n */\n`;
  const body = `window.PALBREED_STRUCTURE_DATA = ${JSON.stringify(data, null, 2)};\n`;
  await mkdir(path.dirname(outputPaths[0]), { recursive: true });
  await Promise.all(outputPaths.map((outputPath) => writeFile(outputPath, header + body, "utf8")));

  console.log(`Wrote ${structures.length} structures and ${technology.length} technology entries to ${outputPaths.map((outputPath) => path.relative(projectRoot, outputPath)).join(" and ")}`);
  console.log(`Coverage: ${rawRecipes.length} build recipes, ${rawIngredients.length} ingredients, ${unmatchedTechnology.length} unmatched unlocks`);
}

await build();
