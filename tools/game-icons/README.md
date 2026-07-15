# Game-icon pipeline

Downloads the real in-game imagery used by the site into `assets/` and records
a SHA-256 manifest, mirroring the pinned-snapshot conventions of the other data
pipelines.

| Asset set | Destination | Source |
|---|---|---|
| Pal portraits (298) | `assets/pals/<iconFile>.png` | tylercamp/palcalc @ `8ade7381` |
| Element icons (9) | `assets/elements/<element>.webp` | oMaN-Rod/palworld-save-pal @ `4cd0a85f` |
| Passive rank arrows (8) | `assets/skills/rank_<-3..4>.webp` | oMaN-Rod/palworld-save-pal @ `4cd0a85f` |
| Map category icons (7) | `assets/map/icons/<category>.png` | palworld.wiki.gg compass/legend uploads |
| Structure icons (~136) | `assets/structures/<id>.png` | palworld.wiki.gg `<Page title>_icon.png` uploads |

## Usage

```powershell
node tools/game-icons/build-sources.mjs     # regenerate the download plan
node tools/game-icons/fetch-game-icons.mjs  # fetch anything missing, write manifest
node tools/game-icons/fetch-game-icons.mjs --force   # refetch everything
node tools/game-icons/fetch-game-icons.mjs --verify  # offline hash check against manifest
```

Notes:

- `build-sources.mjs` derives the Pal list from `PAL_DATA` in `index.html` and
  the structure list from `assets/data/structures.js`; rerun it after either
  dataset changes.
- Structure entries are `optional: true` — a page without an uploaded icon is
  logged in the manifest's `skipped` list, and the UI falls back to the old
  glyph via the images' `onerror` handler. Optional only forgives a clean
  upstream 404; any other fetch error (429, 5xx, network) exits non-zero.
- A plain run compares already-downloaded files against the existing manifest:
  if a local file's hash no longer matches, the run reports the mismatch,
  leaves the manifest untouched, and exits 1 (investigate, or refetch with
  `--force`). This keeps `--verify` meaningful across re-runs.
- `palworld.wiki.gg` is rate-limited (single connection, 1.2 s spacing, custom
  User-Agent) per the host rules in `sources.json`. Expect the wiki portion of
  a cold fetch to take a few minutes.
- Licensing: everything fetched is Pocketpair game art used as a fair-use fan
  reference — see `assets/GAME_ASSETS_NOTICE.md`. Do not fold these files into
  the CC BY-SA or MIT-licensed portions of the project.
