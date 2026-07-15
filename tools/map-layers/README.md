# Bulk map layers + pal spawn pipeline

`build-map-layers.mjs` generates the two bulk runtime datasets that power the
Palpedia-style layer system and the map's "Find a Pal" feature:

- `assets/data/map-layers.js` (`PALBREED_MAP_LAYER_DATA`) — ore, resource, and
  POI marker layers (19 categories, ~7,000 markers).
- `assets/data/spawns.js` (`PALBREED_SPAWN_DATA`) — wild-spawn area clusters
  for 250 pals, keyed by internal pal id.

```powershell
node tools/map-layers/build-map-layers.mjs
node tools/validate-site.mjs
```

Downloaded inputs are cached in `tools/map-layers/source/` (gitignored; the
17 MB atlas spawn dump does not belong in the repo). Every input's URL,
SHA-256, and byte size is recorded in the emitted `meta.sources`.

## Pinned sources

| Source | Pin | License | Provides |
|---|---|---|---|
| [Pixnop/CairnMap](https://github.com/Pixnop/CairnMap) | `930d77e2` | MIT | Ore/resource/POI node positions extracted from the Palworld 1.0 game pak |
| [oMaN-Rod/palworld-save-pal](https://github.com/oMaN-Rod/palworld-save-pal) | `4cd0a85f` | none declared (same accepted status as the skills pipeline) | 605 Lifmunk Effigies, 140 dungeon entrances |
| [Awy64/palworld-atlas-data](https://github.com/Awy64/palworld-atlas-data) | `807c84cd` (build 24088465) | MIT | 64k wild spawner points; its palpagos map coords were verified equal to this project's transform at full float precision |
| palworld.wiki.gg `LocationEntity` cargo table | live at build time | CC BY-SA 4.0 | 34 bounty-target locations |

Coordinates flow through the same model as `tools/map-data`
(`mapX=(worldY-158000)/459`, `mapY=(worldX+123888)/459`, then screen-normalized
against the palpagos bounds in `source-markers.json`). Markers that normalize
outside [0,1] (e.g. World Tree interior objects) are dropped and counted in
`meta.droppedOutOfBounds`.

Spawn clustering: per pal, points are grid-binned starting at a 42-map-unit
cell, growing ×1.35 until ≤70 clusters, emitting
`[x, y, pointCount, minLevel, maxLevel, time(0=both,1=day,2=night)]` tuples.

## Honest limitations (also recorded in `meta.limitations`)

- **Fishing spots** and **supply drops** are absent by design: no fixed public
  coordinates exist (drops are random events), and interactive-map sites'
  proprietary databases are off-limits.
- **Pal Crystal / Palium** has no static node data in any licensed source.
- **Sky Island Ore** and **Night Stone** layer names come from datamine file
  names; in-game these are believed to be the Soralite and Nightstar Sand
  families.
- The **Magma Rock** source lists only ~10 nodes; the layer is partial.
- 49 roster pals have no wild spawn data (breeding/egg/boss-only); the UI says
  so instead of guessing.
