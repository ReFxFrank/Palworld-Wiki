# Structures + Technology data pipeline

`build-structures-data.mjs` downloads the public Cargo tables maintained by the
Palworld Wiki community and writes byte-identical `assets/data/structures.js`
(the browser entry) and `assets/data/structures-data.js` (the canonical named
artifact). Run the validator after every refresh:

```powershell
node tools/structures-data/build-structures-data.mjs
node tools/structures-data/validate-structures-data.mjs
```

The generated file assigns `window.PALBREED_STRUCTURE_DATA` and contains:

- every row in the wiki's `Structure` Cargo table;
- every canonical technology entry transcluded on the `Technology` page;
- every `Build Menu` recipe and its structured ingredients/workload;
- normalized categories, subcategories, unlock levels, point costs, recipes,
  HP, capacity, support state, and record-level source links; and
- source snapshot, coverage, attribution, and license metadata.

The source tables do not currently expose normalized worker suitability,
powered state, power consumption, or produced outputs. Those fields are
deliberately `null`/empty and are reported as uncovered in `meta.coverage`; the
pipeline does not infer gameplay facts from names or prose.

## License and attribution

The generated dataset is adapted from the [Palworld Wiki](https://palworld.wiki.gg/)
and is licensed under the [Creative Commons Attribution-ShareAlike 4.0
International license](https://creativecommons.org/licenses/by-sa/4.0/).
Redistributions and adaptations must credit **Palworld Wiki contributors** and
remain under CC BY-SA 4.0. Keep the generated file's header and `meta.source`
license/attribution fields intact.
