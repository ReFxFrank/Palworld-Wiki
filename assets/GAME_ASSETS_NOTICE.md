# PalBreed game imagery notice

The directories `assets/pals/`, `assets/elements/`, `assets/skills/`,
`assets/structures/`, and `assets/map/icons/` contain Palworld in-game icons —
Pal portraits, element symbols, passive-skill rank arrows, structure build-menu
icons, and map/compass legend icons.

All of this imagery is copyrighted by **Pocketpair, Inc.** It is included here
solely for identification, orientation, and commentary in an unofficial,
non-commercial fan reference tool, under the same fair-use rationale as the
world-map texture (see `assets/data/MAP_DATA_NOTICE.md`). It is **not** covered
by any open license used elsewhere in this project, and it must not be
redistributed as if it were.

## Provenance

Every file is downloaded by `tools/game-icons/fetch-game-icons.mjs` from a
pinned, recorded source and hash-logged in `tools/game-icons/manifest.json`:

- **Pal portraits** — bundled art in [tylercamp/palcalc](https://github.com/tylercamp/palcalc)
  at commit `8ade7381d0548d0312dbe0d650673e4cebd86fd6` (repository code is MIT;
  the artwork itself remains © Pocketpair).
- **Element icons and passive rank arrows** — bundled art in
  [oMaN-Rod/palworld-save-pal](https://github.com/oMaN-Rod/palworld-save-pal)
  at commit `4cd0a85f66cf424b650ef0e886032a6b7419e55b` (artwork © Pocketpair).
- **Structure icons and map category icons** — file uploads hosted by
  [The Palworld Wiki](https://palworld.wiki.gg/) (wiki text is CC BY-SA 4.0;
  these game images are hosted there under the wiki's own fair-use notices and
  remain © Pocketpair).

To refresh or verify the set:

```powershell
node tools/game-icons/build-sources.mjs
node tools/game-icons/fetch-game-icons.mjs
node tools/game-icons/fetch-game-icons.mjs --verify
```
