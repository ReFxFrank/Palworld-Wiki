# PalBreed offline map data notice

`map.js` is a generated, file-protocol-safe runtime dataset. Loading it with a normal script tag assigns `window.PALBREED_MAP_DATA`; no fetch request, server, package, or network connection is required.

## License and attribution

Location coordinates and short factual descriptions are adapted from pages maintained by contributors to [The Palworld Wiki](https://palworld.wiki.gg/). Those pages are published under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This derived dataset is distributed under the same license. Exact page URLs, revision IDs where available, access dates, and each marker's source IDs are embedded in `PALBREED_MAP_DATA.meta.sources`.

The primary basemap at `assets/map/palpagos-world-map-4096.webp` is a performance-optimized derivative of the 8,192px `World Map.webp` game texture published on [The Palworld Wiki file page](https://palworld.wiki.gg/wiki/File:World_Map.webp). The image is copyrighted by Pocketpair and is used here for identification, orientation, and commentary under the source page's fair-use notice; it is **not** distributed under CC BY-SA. The original project artwork at `assets/map/palpagos-stylized.svg` remains as the load-failure fallback. No Palpedia screenshots or live map tiles are included.

## Coverage

The MVP includes the Palpagos coordinate model and bounds, all seven faction towers, all 20 Palworld 1.0 watchtowers, all 18 listed Sealed Realms, the current fixed overworld Alpha Pal table, three oil rigs, selected verified Great Eagle fast-travel points, and selected verified Skill Fruit Trees.

The package intentionally does not claim exhaustive coverage for random dungeon entrances, collectibles, merchants, fishing spots, habitats, or individual ore/coal/sulfur/quartz nodes. The in-game texture is the visual orientation layer; marker positions and their raw in-game map coordinates are the authoritative interactive layer. Some Palworld 1.0-only markers can sit beyond the land visible in this basemap snapshot until an updated, correctly sourced world texture is available.

## Rebuilding and validating

Edit `tools/map-data/source-markers.json`, then run:

```text
node tools/map-data/build-map-data.mjs
node tools/map-data/validate-map-data.mjs
```

Stable marker IDs are semantic and must not change when only a marker's coordinates or description are corrected. Add a qualifier only for genuinely distinct locations, such as the two Jormuntide encounters.
