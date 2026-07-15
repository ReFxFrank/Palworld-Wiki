# Offline map data pipeline

- `source-markers.json` is the reviewed source-of-truth.
- `build-map-data.mjs` normalizes in-game coordinates and writes `assets/data/map.js`.
- `optimize-basemap.py` converts the archived 8K source image into the 4K offline WebP used by the site.
- `validate-map-data.mjs` checks schema, stable IDs, bounds, normalization, sources, anchor coordinates, category coverage, and both basemap assets.

The normalized marker `x`/`y` values are screen coordinates from 0 through 1. Raw north-positive map coordinates remain available as `marker.coordinates.mapX` and `marker.coordinates.mapY`.

Do not change an existing semantic marker ID when correcting its position. For updates, add the new source revision to `source-markers.json`, revise the data version, regenerate, validate, and record the change in project release notes.
