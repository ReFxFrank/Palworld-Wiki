import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const dataPath = path.join(root, "assets/data/map.js");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(dataPath, "utf8"), sandbox, { filename: dataPath });
const data = sandbox.window.PALBREED_MAP_DATA;

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const readWebpDimensions = (buffer) => {
  if (buffer.length < 30 || buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") return null;
  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const type = buffer.toString("ascii", offset, offset + 4);
    const size = buffer.readUInt32LE(offset + 4);
    const data = offset + 8;
    if (type === "VP8X" && data + 10 <= buffer.length) return { width: buffer.readUIntLE(data + 4, 3) + 1, height: buffer.readUIntLE(data + 7, 3) + 1 };
    if (type === "VP8 " && data + 10 <= buffer.length) return { width: buffer.readUInt16LE(data + 6) & 0x3fff, height: buffer.readUInt16LE(data + 8) & 0x3fff };
    if (type === "VP8L" && data + 5 <= buffer.length) {
      const bits = buffer.readUInt32LE(data + 1);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    offset = data + size + (size % 2);
  }
  return null;
};
assert(data && typeof data === "object", "PALBREED_MAP_DATA was not assigned.");

if (data) {
  const mapIds = new Set(data.maps.map((map) => map.id));
  const categoryIds = new Set(data.categories.map((category) => category.id));
  const sourceIds = new Set(data.meta.sources.map((source) => source.id));
  const markerIds = new Set();
  const bounds = data.meta.bounds;
  const spanX = bounds.maxX - bounds.minX;
  const spanY = bounds.maxY - bounds.minY;

  assert(data.meta.schemaVersion === "palbreed.map.v1", "Unexpected schemaVersion.");
  assert(data.maps.length >= 1, "At least one map is required.");
  assert(data.categories.length >= 7, "Expected the seven MVP categories.");
  assert(data.markers.length >= 100, "MVP should contain at least 100 verified markers.");
  assert(data.meta.markerCount === data.markers.length, "meta.markerCount is stale.");
  assert(sourceIds.has("wiki-world-map-image"), "Missing primary basemap attribution source.");

  for (const marker of data.markers) {
    assert(/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(marker.id), `Invalid stable id: ${marker.id}`);
    assert(!markerIds.has(marker.id), `Duplicate stable id: ${marker.id}`);
    markerIds.add(marker.id);
    assert(mapIds.has(marker.mapId), `Unknown mapId on ${marker.id}: ${marker.mapId}`);
    assert(categoryIds.has(marker.category), `Unknown category on ${marker.id}: ${marker.category}`);
    assert(Number.isFinite(marker.x) && marker.x >= 0 && marker.x <= 1, `x out of range on ${marker.id}`);
    assert(Number.isFinite(marker.y) && marker.y >= 0 && marker.y <= 1, `y out of range on ${marker.id}`);
    assert(marker.coordinates && Number.isFinite(marker.coordinates.mapX), `Missing raw mapX on ${marker.id}`);
    assert(marker.coordinates && Number.isFinite(marker.coordinates.mapY), `Missing raw mapY on ${marker.id}`);
    const expectedX = (marker.coordinates.mapX - bounds.minX) / spanX;
    const expectedY = (bounds.maxY - marker.coordinates.mapY) / spanY;
    assert(Math.abs(marker.x - expectedX) < 1e-7, `Normalized x mismatch on ${marker.id}`);
    assert(Math.abs(marker.y - expectedY) < 1e-7, `Normalized y mismatch on ${marker.id}`);
    assert(Array.isArray(marker.sourceIds) && marker.sourceIds.length > 0, `Missing sources on ${marker.id}`);
    for (const id of marker.sourceIds || []) assert(sourceIds.has(id), `Unknown source ${id} on ${marker.id}`);
  }

  for (const category of data.categories) {
    assert(data.markers.some((marker) => marker.category === category.id), `Empty category: ${category.id}`);
  }

  const anchors = new Map([
    ["palpagos.tower.rayne-syndicate", [113, -431]],
    ["palpagos.watchtower.sunreach", [-292, -1494]],
    ["palpagos.sealed.glacial-core", [139, 651]],
    ["palpagos.alpha.paladius", [445, 680]],
    ["palpagos.oil-rig.platform", [-1730, -1450]]
  ]);
  for (const [id, coords] of anchors) {
    const marker = data.markers.find((candidate) => candidate.id === id);
    assert(marker, `Missing anchor marker: ${id}`);
    assert(marker && marker.coordinates.mapX === coords[0] && marker.coordinates.mapY === coords[1], `Anchor coordinates changed: ${id}`);
  }

  for (const map of data.maps) {
    const imagePath = path.join(root, map.image.replaceAll("/", path.sep));
    const fallbackPath = path.join(root, String(map.fallbackImage || "").replaceAll("/", path.sep));
    assert(Number(map.width) > 0 && Number(map.height) > 0 && Number(map.width) === Number(map.height), `Invalid logical map dimensions: ${map.id}`);
    assert(fs.existsSync(imagePath), `Missing basemap asset: ${map.image}`);
    if (fs.existsSync(imagePath)) {
      const dimensions = readWebpDimensions(fs.readFileSync(imagePath));
      assert(dimensions && dimensions.width === dimensions.height && dimensions.width >= 2048, `Unexpected primary basemap dimensions: ${map.image}`);
    }
    assert(Boolean(map.fallbackImage), `Missing fallbackImage on ${map.id}`);
    assert(fs.existsSync(fallbackPath), `Missing fallback basemap asset: ${map.fallbackImage}`);
    if (fs.existsSync(fallbackPath)) {
      const fallback = fs.readFileSync(fallbackPath, "utf8");
      assert(/viewBox=["']0 0 1600 1600["']/.test(fallback), `Unexpected fallback basemap viewBox: ${map.fallbackImage}`);
    }
  }
}

if (failures.length) {
  console.error(`Map data validation failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  const counts = Object.fromEntries(data.categories.map((category) => [category.id, data.markers.filter((marker) => marker.category === category.id).length]));
  console.log(`Map data valid: ${data.markers.length} markers across ${data.maps.length} map and ${data.categories.length} categories.`);
  console.log(JSON.stringify(counts));
}
