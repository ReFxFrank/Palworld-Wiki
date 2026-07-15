/*
 * PalBreed Structures + Technology data
 * Generated: 2026-07-14T23:46:00.699Z
 * Source: Palworld Wiki contributors (https://palworld.wiki.gg)
 * License: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)
 * Do not remove attribution or license metadata when redistributing adaptations.
 */
window.PALBREED_STRUCTURE_DATA = {
  "meta": {
    "schemaVersion": 1,
    "datasetVersion": "palworld-1.0-wiki-2026-07-14",
    "gameVersion": "1.0.0.100427",
    "language": "en",
    "generatedAt": "2026-07-14T23:46:00.699Z",
    "source": {
      "name": "Palworld Wiki",
      "siteName": "Palworld Wiki",
      "baseUrl": "https://palworld.wiki.gg",
      "apiUrl": "https://palworld.wiki.gg/api.php",
      "attribution": "Palworld Wiki contributors",
      "retrievedAt": "2026-07-14T23:46:00.699Z",
      "license": {
        "name": "Creative Commons Attribution-ShareAlike 4.0 International",
        "spdx": "CC-BY-SA-4.0",
        "url": "https://creativecommons.org/licenses/by-sa/4.0/",
        "notice": "Adapted from the Palworld Wiki. Redistributed adaptations must retain attribution and the CC BY-SA 4.0 license."
      },
      "declarationRevisions": [
        {
          "page": "Template:Crafting Recipe/Recipe CargoDeclare",
          "revisionId": 24165,
          "revisionTimestamp": "2026-01-02T21:48:03Z",
          "url": "https://palworld.wiki.gg/wiki/Template%3ACrafting_Recipe%2FRecipe_CargoDeclare"
        },
        {
          "page": "Template:Crafting Recipe/RecipeIngredient CargoDeclare",
          "revisionId": 23638,
          "revisionTimestamp": "2026-01-01T15:59:59Z",
          "url": "https://palworld.wiki.gg/wiki/Template%3ACrafting_Recipe%2FRecipeIngredient_CargoDeclare"
        },
        {
          "page": "Template:Technology/CargoDeclare",
          "revisionId": 23684,
          "revisionTimestamp": "2026-01-01T22:04:03Z",
          "url": "https://palworld.wiki.gg/wiki/Template%3ATechnology%2FCargoDeclare"
        },
        {
          "page": "Template:Structure/CargoDeclare",
          "revisionId": 32968,
          "revisionTimestamp": "2026-02-01T14:48:43Z",
          "url": "https://palworld.wiki.gg/wiki/Template%3AStructure%2FCargoDeclare"
        }
      ],
      "gameVersionRevision": {
        "page": "Palworld Wiki/version",
        "url": "https://palworld.wiki.gg/wiki/Palworld_Wiki%2Fversion",
        "revisionId": 36103,
        "revisionTimestamp": "2026-07-12T23:04:42Z"
      },
      "queryUrls": [
        "https://palworld.wiki.gg/api.php?action=cargoquery&format=json&limit=500&offset=0&tables=Structure&fields=_pageName%3Dpage%2CitemName%3Dname%2CitemType%3Dcategory%2Csubtype%3Dsubcategory%2Cdescription%2Chp%2Ccapacity%2CisSupport%2CtechName&order_by=itemName+ASC",
        "https://palworld.wiki.gg/api.php?action=cargoquery&format=json&limit=500&offset=0&tables=Technology&fields=_pageName%3Dpage%2CtechName%2CtechLevel%2CtechCost%2CisAncient%2Crequirement&where=_pageName%3D%27Technology%27&order_by=techLevel+ASC%2CtechName+ASC",
        "https://palworld.wiki.gg/api.php?action=cargoquery&format=json&limit=500&offset=500&tables=Technology&fields=_pageName%3Dpage%2CtechName%2CtechLevel%2CtechCost%2CisAncient%2Crequirement&where=_pageName%3D%27Technology%27&order_by=techLevel+ASC%2CtechName+ASC",
        "https://palworld.wiki.gg/api.php?action=cargoquery&format=json&limit=500&offset=0&tables=Recipe&fields=_pageName%3Dpage%2CrecipeID%2CproductName%2CproductQty%2Cworkbench%2Cworkload%2CproductQuality&where=workbench%3D%27Build+Menu%27&order_by=productName+ASC",
        "https://palworld.wiki.gg/api.php?action=cargoquery&format=json&limit=500&offset=0&tables=Recipe%2CRecipeIngredient&fields=Recipe.recipeID%3DrecipeID%2CRecipe.productName%3DproductName%2CRecipeIngredient.ingredientName%3DingredientName%2CRecipeIngredient.ingredientQty%3DingredientQty&join_on=Recipe.recipeID%3DRecipeIngredient.recipeID&where=Recipe.workbench%3D%27Build+Menu%27&order_by=Recipe.productName+ASC%2CRecipeIngredient.ingredientName+ASC"
      ],
      "metadataQueryUrls": [
        "https://palworld.wiki.gg/api.php?action=query&format=json&meta=siteinfo&siprop=general",
        "https://palworld.wiki.gg/api.php?action=query&format=json&formatversion=2&prop=revisions&rvprop=ids%7Ctimestamp&titles=Template%3AStructure%2FCargoDeclare%7CTemplate%3ATechnology%2FCargoDeclare%7CTemplate%3ACrafting+Recipe%2FRecipe+CargoDeclare%7CTemplate%3ACrafting+Recipe%2FRecipeIngredient+CargoDeclare",
        "https://palworld.wiki.gg/api.php?action=query&format=json&formatversion=2&prop=revisions&rvprop=ids%7Ctimestamp%7Ccontent&rvslots=main&titles=Palworld+Wiki%2Fversion"
      ]
    },
    "coverage": {
      "completeAgainstSourceSnapshot": true,
      "technologyMappingComplete": false,
      "sourceRows": {
        "structures": 136,
        "canonicalTechnology": 502,
        "uniqueTechnology": 502,
        "buildMenuRecipes": 136,
        "buildMenuIngredients": 394
      },
      "normalizedRows": {
        "structures": 136,
        "technology": 502,
        "categories": 10,
        "subcategories": 29
      },
      "structureFields": {
        "descriptions": 136,
        "hp": 133,
        "capacity": 0,
        "technologyUnlocks": 131,
        "recipes": 136,
        "materials": 136,
        "requiredWork": 136,
        "workSuitability": 0,
        "powered": 0,
        "powerConsumption": 0,
        "outputs": 0
      },
      "unmatchedTechnology": [
        "Advanced Weapon Assembly Line",
        "Advanced Workshop",
        "Hexolite Quartz Mine",
        "Mining Cart",
        "Mounted Missile Launcher"
      ],
      "unmatchedRecipes": [],
      "orphanRecipes": [],
      "notes": [
        "All Structure rows and Build Menu recipes exposed by the source Cargo tables at retrieval time are included.",
        "Technology is filtered to the canonical Technology page; the wiki also transcludes the same entries on Technology/Tree.",
        "5 source-declared structure technology name(s) do not match a canonical Technology entry and are intentionally left unmapped rather than guessed.",
        "The source tables do not provide normalized worker suitability, powered state, power consumption, or structure outputs. Those fields are left null or empty instead of being inferred.",
        "Descriptions are CC BY-SA text normalized from the source wiki's Structure table."
      ]
    }
  },
  "categories": [
    {
      "id": "defense",
      "name": "Defense",
      "count": 14,
      "subcategories": [
        {
          "id": "defense--defensive-structure",
          "name": "Defensive Structure",
          "count": 3
        },
        {
          "id": "defense--structure",
          "name": "Structure",
          "count": 3
        },
        {
          "id": "defense--structures",
          "name": "Structures",
          "count": 5
        },
        {
          "id": "defense--walls",
          "name": "Walls",
          "count": 3
        }
      ]
    },
    {
      "id": "food",
      "name": "Food",
      "count": 14,
      "subcategories": [
        {
          "id": "food--cooking",
          "name": "Cooking",
          "count": 4
        },
        {
          "id": "food--farming",
          "name": "Farming",
          "count": 8
        },
        {
          "id": "food--feedbox",
          "name": "Feedbox",
          "count": 2
        }
      ]
    },
    {
      "id": "foundation",
      "name": "Foundation",
      "count": 1,
      "subcategories": [
        {
          "id": "foundation--structure",
          "name": "Structure",
          "count": 1
        }
      ]
    },
    {
      "id": "furniture",
      "name": "Furniture",
      "count": 1,
      "subcategories": [
        {
          "id": "furniture--decoration",
          "name": "Decoration",
          "count": 1
        }
      ]
    },
    {
      "id": "infrastructure",
      "name": "Infrastructure",
      "count": 17,
      "subcategories": [
        {
          "id": "infrastructure--bedding",
          "name": "Bedding",
          "count": 5
        },
        {
          "id": "infrastructure--electricity",
          "name": "Electricity",
          "count": 8
        },
        {
          "id": "infrastructure--health-care",
          "name": "Health Care",
          "count": 4
        }
      ]
    },
    {
      "id": "lighting",
      "name": "Lighting",
      "count": 6,
      "subcategories": [
        {
          "id": "lighting--ceiling",
          "name": "Ceiling",
          "count": 2
        },
        {
          "id": "lighting--placeable",
          "name": "Placeable",
          "count": 3
        },
        {
          "id": "lighting--wall-mount",
          "name": "Wall Mount",
          "count": 1
        }
      ]
    },
    {
      "id": "other-structures",
      "name": "Other Structures",
      "count": 19,
      "subcategories": [
        {
          "id": "other-structures--efficiency-enhancement",
          "name": "Efficiency Enhancement",
          "count": 12
        },
        {
          "id": "other-structures--structure",
          "name": "Structure",
          "count": 4
        }
      ]
    },
    {
      "id": "pal",
      "name": "Pal",
      "count": 17,
      "subcategories": [
        {
          "id": "pal--management",
          "name": "Management",
          "count": 6
        },
        {
          "id": "pal--other",
          "name": "Other",
          "count": 3
        },
        {
          "id": "pal--training",
          "name": "Training",
          "count": 8
        }
      ]
    },
    {
      "id": "production",
      "name": "Production",
      "count": 38,
      "subcategories": [
        {
          "id": "production--crafting-repair",
          "name": "Crafting/Repair",
          "count": 8
        },
        {
          "id": "production--fishing-hole",
          "name": "Fishing Hole",
          "count": 2
        },
        {
          "id": "production--lumbering-mining",
          "name": "Lumbering/Mining",
          "count": 9
        },
        {
          "id": "production--medicine-production",
          "name": "Medicine Production",
          "count": 3
        },
        {
          "id": "production--milling-crushing",
          "name": "Milling/Crushing",
          "count": 3
        },
        {
          "id": "production--refinement",
          "name": "Refinement",
          "count": 4
        },
        {
          "id": "production--sphere",
          "name": "Sphere",
          "count": 4
        },
        {
          "id": "production--weapons",
          "name": "Weapons",
          "count": 4
        }
      ]
    },
    {
      "id": "storage",
      "name": "Storage",
      "count": 6,
      "subcategories": [
        {
          "id": "storage--chest",
          "name": "Chest",
          "count": 6
        }
      ]
    }
  ],
  "subcategories": [
    {
      "id": "defense--defensive-structure",
      "name": "Defensive Structure",
      "count": 3,
      "categoryId": "defense",
      "categoryName": "Defense"
    },
    {
      "id": "defense--structure",
      "name": "Structure",
      "count": 3,
      "categoryId": "defense",
      "categoryName": "Defense"
    },
    {
      "id": "defense--structures",
      "name": "Structures",
      "count": 5,
      "categoryId": "defense",
      "categoryName": "Defense"
    },
    {
      "id": "defense--walls",
      "name": "Walls",
      "count": 3,
      "categoryId": "defense",
      "categoryName": "Defense"
    },
    {
      "id": "food--cooking",
      "name": "Cooking",
      "count": 4,
      "categoryId": "food",
      "categoryName": "Food"
    },
    {
      "id": "food--farming",
      "name": "Farming",
      "count": 8,
      "categoryId": "food",
      "categoryName": "Food"
    },
    {
      "id": "food--feedbox",
      "name": "Feedbox",
      "count": 2,
      "categoryId": "food",
      "categoryName": "Food"
    },
    {
      "id": "foundation--structure",
      "name": "Structure",
      "count": 1,
      "categoryId": "foundation",
      "categoryName": "Foundation"
    },
    {
      "id": "furniture--decoration",
      "name": "Decoration",
      "count": 1,
      "categoryId": "furniture",
      "categoryName": "Furniture"
    },
    {
      "id": "infrastructure--bedding",
      "name": "Bedding",
      "count": 5,
      "categoryId": "infrastructure",
      "categoryName": "Infrastructure"
    },
    {
      "id": "infrastructure--electricity",
      "name": "Electricity",
      "count": 8,
      "categoryId": "infrastructure",
      "categoryName": "Infrastructure"
    },
    {
      "id": "infrastructure--health-care",
      "name": "Health Care",
      "count": 4,
      "categoryId": "infrastructure",
      "categoryName": "Infrastructure"
    },
    {
      "id": "lighting--ceiling",
      "name": "Ceiling",
      "count": 2,
      "categoryId": "lighting",
      "categoryName": "Lighting"
    },
    {
      "id": "lighting--placeable",
      "name": "Placeable",
      "count": 3,
      "categoryId": "lighting",
      "categoryName": "Lighting"
    },
    {
      "id": "lighting--wall-mount",
      "name": "Wall Mount",
      "count": 1,
      "categoryId": "lighting",
      "categoryName": "Lighting"
    },
    {
      "id": "other-structures--efficiency-enhancement",
      "name": "Efficiency Enhancement",
      "count": 12,
      "categoryId": "other-structures",
      "categoryName": "Other Structures"
    },
    {
      "id": "other-structures--structure",
      "name": "Structure",
      "count": 4,
      "categoryId": "other-structures",
      "categoryName": "Other Structures"
    },
    {
      "id": "pal--management",
      "name": "Management",
      "count": 6,
      "categoryId": "pal",
      "categoryName": "Pal"
    },
    {
      "id": "pal--other",
      "name": "Other",
      "count": 3,
      "categoryId": "pal",
      "categoryName": "Pal"
    },
    {
      "id": "pal--training",
      "name": "Training",
      "count": 8,
      "categoryId": "pal",
      "categoryName": "Pal"
    },
    {
      "id": "production--crafting-repair",
      "name": "Crafting/Repair",
      "count": 8,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "production--fishing-hole",
      "name": "Fishing Hole",
      "count": 2,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "production--lumbering-mining",
      "name": "Lumbering/Mining",
      "count": 9,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "production--medicine-production",
      "name": "Medicine Production",
      "count": 3,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "production--milling-crushing",
      "name": "Milling/Crushing",
      "count": 3,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "production--refinement",
      "name": "Refinement",
      "count": 4,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "production--sphere",
      "name": "Sphere",
      "count": 4,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "production--weapons",
      "name": "Weapons",
      "count": 4,
      "categoryId": "production",
      "categoryName": "Production"
    },
    {
      "id": "storage--chest",
      "name": "Chest",
      "count": 6,
      "categoryId": "storage",
      "categoryName": "Storage"
    }
  ],
  "structures": [
    {
      "id": "accumulator",
      "name": "Accumulator",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A facility for storing excess electricity generated by the Power Generator.",
      "hp": null,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "accumulator",
      "technologyName": "Accumulator",
      "unlockLevel": 37,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Accumulator@Build Menu@Common@78071f28",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Electric Organ",
          "quantity": 20
        },
        {
          "name": "Ingot",
          "quantity": 50
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Accumulator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Accumulator"
    },
    {
      "id": "advanced-chest",
      "name": "Advanced Chest",
      "category": "Storage",
      "subcategory": "Chest",
      "description": "A reinforced storage structure that provides high-capacity item storage.",
      "hp": 8000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "advanced-chest",
      "technologyName": "Advanced Chest",
      "unlockLevel": 58,
      "techPoints": 4,
      "ancientPoints": 0,
      "recipeId": "Advanced Chest@Build Menu@Common@57ac990c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Carbon Fiber",
          "quantity": 50
        },
        {
          "name": "Hexolite",
          "quantity": 20
        },
        {
          "name": "Nail",
          "quantity": 20
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Advanced Chest",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Advanced_Chest"
    },
    {
      "id": "advanced-medicine-workbench",
      "name": "Advanced Medicine Workbench",
      "category": "Production",
      "subcategory": "Medicine Production",
      "description": "An advanced production structure used to manufacture high-tier medical items for Pals.",
      "hp": 500000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "advanced-medicine-workbench",
      "technologyName": "Advanced Medicine Workbench",
      "unlockLevel": 59,
      "techPoints": 4,
      "ancientPoints": 0,
      "recipeId": "Advanced Medicine Workbench@Build Menu@Common@8ae0cf36",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 30
        },
        {
          "name": "Hexolite",
          "quantity": 50
        },
        {
          "name": "Plasteel",
          "quantity": 50
        }
      ],
      "requiredWork": 600000,
      "outputs": [],
      "sourcePage": "Advanced Medicine Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Advanced_Medicine_Workbench"
    },
    {
      "id": "advanced-sphere-assembly-line",
      "name": "Advanced Sphere Assembly Line",
      "category": "Production",
      "subcategory": "Sphere",
      "description": "An advanced production structure used to manufacture Pal Spheres at high speed.",
      "hp": null,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "advanced-sphere-assembly-line",
      "technologyName": "Advanced Sphere Assembly Line",
      "unlockLevel": 56,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Advanced Sphere Assembly Line@Build Menu@Common@3af0b24c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 30
        },
        {
          "name": "Hexolite",
          "quantity": 50
        },
        {
          "name": "Nail",
          "quantity": 50
        },
        {
          "name": "Plasteel",
          "quantity": 50
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Advanced Sphere Assembly Line",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Advanced_Sphere_Assembly_Line"
    },
    {
      "id": "advanced-weapon-assembly-line",
      "name": "Advanced Weapon Assembly Line",
      "category": "Production",
      "subcategory": "Weapons",
      "description": "An Assembly Line for producting weapons and ammunition. Advanced machinery has been introduced, enabling high-speed weapon production. Requires Pals that can work with their hands.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": null,
      "technologyName": "Advanced Weapon Assembly Line",
      "unlockLevel": null,
      "techPoints": null,
      "ancientPoints": null,
      "recipeId": "Advanced Weapon Assembly Line@Build Menu@Common@a423aa2c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 30
        },
        {
          "name": "Coralum Ingot",
          "quantity": 50
        },
        {
          "name": "Hexolite",
          "quantity": 50
        },
        {
          "name": "Nail",
          "quantity": 20
        }
      ],
      "requiredWork": 600000,
      "outputs": [],
      "sourcePage": "Advanced Weapon Assembly Line",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Advanced_Weapon_Assembly_Line"
    },
    {
      "id": "advanced-workshop",
      "name": "Advanced Workshop",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "An Assembly Line for production items and gear. Advanced Machinery has been introduced, enabling high-speed production. Requires Pals that work with their hands.",
      "hp": 8000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": null,
      "technologyName": "Advanced Workshop",
      "unlockLevel": null,
      "techPoints": null,
      "ancientPoints": null,
      "recipeId": "Advanced Workshop@Build Menu@Common@6752d2f1",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 30
        },
        {
          "name": "Coralum Ingot",
          "quantity": 50
        },
        {
          "name": "Hexolite",
          "quantity": 50
        },
        {
          "name": "Nail",
          "quantity": 20
        }
      ],
      "requiredWork": 500000,
      "outputs": [],
      "sourcePage": "Advanced Workshop",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Advanced_Workshop"
    },
    {
      "id": "alarm-bell",
      "name": "Alarm Bell",
      "category": "Defense",
      "subcategory": "Structures",
      "description": "A defensive structure used to control Pal alert behavior within a base.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "alarm-bell",
      "technologyName": "Alarm Bell",
      "unlockLevel": 4,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Alarm Bell@Build Menu@Common@048383bd",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 5
        },
        {
          "name": "Stone",
          "quantity": 20
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "Alarm Bell",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Alarm_Bell"
    },
    {
      "id": "alpha-wave-generator",
      "name": "Alpha Wave Generator",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A support structure that reduces the rate at which Pal SAN decreases within a base.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "alpha-wave-generator",
      "technologyName": "Alpha Wave Generator",
      "unlockLevel": 41,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Alpha Wave Generator@Build Menu@Common@6f7ec769",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 20
        },
        {
          "name": "Electric Organ",
          "quantity": 30
        },
        {
          "name": "Paldium Fragment",
          "quantity": 30
        },
        {
          "name": "Refined Ingot",
          "quantity": 50
        }
      ],
      "requiredWork": 50000,
      "outputs": [],
      "sourcePage": "Alpha Wave Generator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Alpha_Wave_Generator"
    },
    {
      "id": "antique-dresser",
      "name": "Antique Dresser",
      "category": "Furniture",
      "subcategory": "Decoration",
      "description": "A decorative furniture item that allows appearance customization.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "antique-dresser",
      "technologyName": "Antique Dresser",
      "unlockLevel": 21,
      "techPoints": 0,
      "ancientPoints": 1,
      "recipeId": "Antique Dresser@Build Menu@Common@ea66744e",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ancient Civilization Parts",
          "quantity": 5
        },
        {
          "name": "Fiber",
          "quantity": 20
        },
        {
          "name": "Stone",
          "quantity": 30
        },
        {
          "name": "Wood",
          "quantity": 100
        }
      ],
      "requiredWork": 25,
      "outputs": [],
      "sourcePage": "Antique Dresser",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Antique_Dresser"
    },
    {
      "id": "bear-trap-large",
      "name": "Bear Trap (Large)",
      "category": "Defense",
      "subcategory": "Structures",
      "description": "A defensive trap designed to immobilize large Pals and improve capture effectiveness.",
      "hp": 500,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "bear-trap-large",
      "technologyName": "Bear Trap (Large)",
      "unlockLevel": 22,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Bear Trap (Large)@Build Menu@Common@90d4d8a4",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 20
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Bear Trap (Large)",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Bear_Trap_(Large)"
    },
    {
      "id": "bear-trap-small",
      "name": "Bear Trap (Small)",
      "category": "Defense",
      "subcategory": "Structures",
      "description": "A defensive trap designed to immobilize small Pals and improve capture effectiveness.",
      "hp": 500,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "bear-trap-small",
      "technologyName": "Bear Trap (Small)",
      "unlockLevel": 10,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Bear Trap (Small)@Build Menu@Common@7276a0f6",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 5
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Bear Trap (Small)",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Bear_Trap_(Small)"
    },
    {
      "id": "berry-plantation",
      "name": "Berry Plantation",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming structure used to grow Red Berries for food production.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "berry-plantation",
      "technologyName": "Berry Plantation",
      "unlockLevel": 5,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Berry Plantation@Build Menu@Common@e2d82a66",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Berry Seeds",
          "quantity": 3
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "Berry Plantation",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Berry_Plantation"
    },
    {
      "id": "beta-wave-generator",
      "name": "Beta Wave Generator",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A support structure that increases the work speed of Pals within a base.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "beta-wave-generator",
      "technologyName": "Beta Wave Generator",
      "unlockLevel": 46,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Beta Wave Generator@Build Menu@Common@a701c55c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 30
        },
        {
          "name": "Electric Organ",
          "quantity": 40
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 40
        }
      ],
      "requiredWork": 120000,
      "outputs": [],
      "sourcePage": "Beta Wave Generator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Beta_Wave_Generator"
    },
    {
      "id": "breeding-farm",
      "name": "Breeding Farm",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A facility used to breed Pals and produce eggs.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "breeding-farm",
      "technologyName": "Breeding Farm",
      "unlockLevel": 19,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Breeding Farm@Build Menu@Common@22338636",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Fiber",
          "quantity": 50
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wooden Board",
          "quantity": 10
        }
      ],
      "requiredWork": 150,
      "outputs": [],
      "sourcePage": "Breeding Farm",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Breeding_Farm"
    },
    {
      "id": "campfire",
      "name": "Campfire",
      "category": "Food",
      "subcategory": "Cooking",
      "description": "A basic cooking structure used to prepare simple food items.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "campfire",
      "technologyName": "Campfire",
      "unlockLevel": 2,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Campfire@Build Menu@Common@8277f529",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Campfire",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Campfire"
    },
    {
      "id": "carrot-plantation",
      "name": "Carrot Plantation",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming structure used to grow carrots for food production.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "carrot-plantation",
      "technologyName": "Carrot Plantation",
      "unlockLevel": 32,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Carrot Plantation@Build Menu@Common@52316b6c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Carrot Seeds",
          "quantity": 3
        },
        {
          "name": "Pal Fluids",
          "quantity": 5
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 70
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "Carrot Plantation",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Carrot_Plantation"
    },
    {
      "id": "ceiling-lamp",
      "name": "Ceiling Lamp",
      "category": "Lighting",
      "subcategory": "Ceiling",
      "description": "A ceiling-mounted lighting structure that provides wide-area illumination.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "ceiling-lamp",
      "technologyName": "Ceiling Lamp",
      "unlockLevel": 27,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Ceiling Lamp@Build Menu@Common@caf5a2df",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Electric Organ",
          "quantity": 3
        },
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Nail",
          "quantity": 3
        }
      ],
      "requiredWork": 70,
      "outputs": [],
      "sourcePage": "Ceiling Lamp",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Ceiling_Lamp"
    },
    {
      "id": "coal-mine",
      "name": "Coal Mine",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "A production structure used to generate coal through Pal labor.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "coal-mine",
      "technologyName": "Coal Mine",
      "unlockLevel": 42,
      "techPoints": 0,
      "ancientPoints": 5,
      "recipeId": "Coal Mine@Build Menu@Common@0f873725",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Coal",
          "quantity": 100
        },
        {
          "name": "Paldium Fragment",
          "quantity": 30
        },
        {
          "name": "Stone",
          "quantity": 70
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Coal Mine",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Coal_Mine"
    },
    {
      "id": "cold-food-box",
      "name": "Cold Food Box",
      "category": "Food",
      "subcategory": "Feedbox",
      "description": "A refrigerated food storage structure that slows food spoilage for Pals.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "cold-food-box",
      "technologyName": "Cold Food Box",
      "unlockLevel": 51,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Cold Food Box@Build Menu@Common@dffee5bc",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ice Organ",
          "quantity": 50
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 20
        },
        {
          "name": "Plasteel",
          "quantity": 20
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Cold Food Box",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Cold_Food_Box"
    },
    {
      "id": "cooking-pot",
      "name": "Cooking Pot",
      "category": "Food",
      "subcategory": "Cooking",
      "description": "A cooking structure that allows preparation of a wider variety of meals.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "cooking-pot",
      "technologyName": "Cooking Pot",
      "unlockLevel": 17,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Cooking Pot@Build Menu@Common@59452075",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Flame Organ",
          "quantity": 3
        },
        {
          "name": "Ingot",
          "quantity": 15
        },
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Cooking Pot",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Cooking_Pot"
    },
    {
      "id": "cooler",
      "name": "Cooler",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A temperature-control structure that provides localized cooling within a base.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "cooler",
      "technologyName": "Cooler",
      "unlockLevel": 18,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Cooler@Build Menu@Common@c5c9b3c4",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ice Organ",
          "quantity": 5
        },
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Stone",
          "quantity": 20
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Cooler",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Cooler"
    },
    {
      "id": "cooler-box",
      "name": "Cooler Box",
      "category": "Storage",
      "subcategory": "Chest",
      "description": "A small storage chest designed to slow food spoilage.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "cooler-box",
      "technologyName": "Cooler Box",
      "unlockLevel": 13,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Cooler Box@Build Menu@Common@ebd373e9",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ice Organ",
          "quantity": 5
        },
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Stone",
          "quantity": 20
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Cooler Box",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Cooler_Box"
    },
    {
      "id": "crude-oil-extractor",
      "name": "Crude Oil Extractor",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "A powered extraction structure used to produce crude oil from oil fields.",
      "hp": 100000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "crude-oil-extractor",
      "technologyName": "Crude Oil Extractor",
      "unlockLevel": 50,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Crude Oil Extractor@Build Menu@Common@e1e45d77",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 50
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 250
        }
      ],
      "requiredWork": 5000,
      "outputs": [],
      "sourcePage": "Crude Oil Extractor",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Crude_Oil_Extractor"
    },
    {
      "id": "crusher",
      "name": "Crusher",
      "category": "Production",
      "subcategory": "Milling/Crushing",
      "description": "A production structure used to process raw materials and convert items into alternate forms.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "crusher",
      "technologyName": "Crusher",
      "unlockLevel": 8,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Crusher@Build Menu@Common@f9c90012",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 80,
      "outputs": [],
      "sourcePage": "Crusher",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Crusher"
    },
    {
      "id": "defensive-wall",
      "name": "Defensive Wall",
      "category": "Defense",
      "subcategory": "Walls",
      "description": "A heavy defensive wall used to block enemy movement and protect a base.",
      "hp": 20000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "defensive-wall",
      "technologyName": "Defensive Wall",
      "unlockLevel": 28,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Defensive Wall@Build Menu@Common@6ee05257",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 1
        },
        {
          "name": "Stone",
          "quantity": 10
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Defensive Wall",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Defensive_Wall"
    },
    {
      "id": "drafting-table",
      "name": "Drafting Table",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "A crafting station used to combine schematics into higher-tier versions.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "drafting-table",
      "technologyName": "Drafting Table",
      "unlockLevel": 45,
      "techPoints": 4,
      "ancientPoints": 0,
      "recipeId": "Drafting Table@Build Menu@Common@be4c881c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Charcoal",
          "quantity": 30
        },
        {
          "name": "Refined Ingot",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 100
        }
      ],
      "requiredWork": 20000,
      "outputs": [],
      "sourcePage": "Drafting Table",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Drafting_Table"
    },
    {
      "id": "egg-incubator",
      "name": "Egg Incubator",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A Pal management structure used to incubate and hatch Pal Eggs.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "egg-incubator",
      "technologyName": "Egg Incubator",
      "unlockLevel": 7,
      "techPoints": 0,
      "ancientPoints": 2,
      "recipeId": "Egg Incubator@Build Menu@Common@160dda8a",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ancient Civilization Parts",
          "quantity": 2
        },
        {
          "name": "Cloth",
          "quantity": 5
        },
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 30
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Egg Incubator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Egg_Incubator"
    },
    {
      "id": "electric-cooler",
      "name": "Electric Cooler",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A powered cooling structure that significantly lowers ambient temperature within a base.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-cooler",
      "technologyName": "Electric Cooler",
      "unlockLevel": 42,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Electric Cooler@Build Menu@Common@c94106a6",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 10
        },
        {
          "name": "Ice Organ",
          "quantity": 10
        },
        {
          "name": "Ingot",
          "quantity": 30
        },
        {
          "name": "Refined Ingot",
          "quantity": 30
        }
      ],
      "requiredWork": 1000,
      "outputs": [],
      "sourcePage": "Electric Cooler",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Cooler"
    },
    {
      "id": "electric-egg-incubator",
      "name": "Electric Egg Incubator",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A powered Pal management structure used to incubate and hatch Pal Eggs at optimal temperatures.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-egg-incubator",
      "technologyName": "Electric Egg Incubator",
      "unlockLevel": 37,
      "techPoints": 0,
      "ancientPoints": 5,
      "recipeId": "Electric Egg Incubator@Build Menu@Common@7afd8aa5",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ancient Civilization Core",
          "quantity": 2
        },
        {
          "name": "Ancient Civilization Parts",
          "quantity": 10
        },
        {
          "name": "Circuit Board",
          "quantity": 15
        },
        {
          "name": "Refined Ingot",
          "quantity": 50
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Electric Egg Incubator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Egg_Incubator"
    },
    {
      "id": "electric-furnace",
      "name": "Electric Furnace",
      "category": "Production",
      "subcategory": "Refinement",
      "description": "A powered refinement structure used to process advanced metal materials.",
      "hp": 8000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-furnace",
      "technologyName": "Electric Furnace",
      "unlockLevel": 44,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Electric Furnace@Build Menu@Common@d6a5bb87",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Carbon Fiber",
          "quantity": 20
        },
        {
          "name": "Circuit Board",
          "quantity": 10
        },
        {
          "name": "Polymer",
          "quantity": 20
        },
        {
          "name": "Refined Ingot",
          "quantity": 50
        }
      ],
      "requiredWork": 1000,
      "outputs": [],
      "sourcePage": "Electric Furnace",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Furnace"
    },
    {
      "id": "electric-heater",
      "name": "Electric Heater",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A powered heating structure that significantly raises ambient temperature within a base.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-heater",
      "technologyName": "Electric Heater",
      "unlockLevel": 41,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Electric Heater@Build Menu@Common@6f12e830",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 10
        },
        {
          "name": "Flame Organ",
          "quantity": 10
        },
        {
          "name": "Ingot",
          "quantity": 30
        },
        {
          "name": "Refined Ingot",
          "quantity": 30
        }
      ],
      "requiredWork": 1000,
      "outputs": [],
      "sourcePage": "Electric Heater",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Heater"
    },
    {
      "id": "electric-kitchen",
      "name": "Electric Kitchen",
      "category": "Food",
      "subcategory": "Cooking",
      "description": "A powered cooking station capable of preparing food at high speed.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-kitchen",
      "technologyName": "Electric Kitchen",
      "unlockLevel": 41,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Electric Kitchen@Build Menu@Common@f187b4ea",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Charcoal",
          "quantity": 20
        },
        {
          "name": "Circuit Board",
          "quantity": 5
        },
        {
          "name": "Flame Organ",
          "quantity": 5
        },
        {
          "name": "Refined Ingot",
          "quantity": 30
        }
      ],
      "requiredWork": 700,
      "outputs": [],
      "sourcePage": "Electric Kitchen",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Kitchen"
    },
    {
      "id": "electric-medicine-workbench",
      "name": "Electric Medicine Workbench",
      "category": "Production",
      "subcategory": "Medicine Production",
      "description": "A powered medicine production station used to craft advanced medical items.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-medicine-workbench",
      "technologyName": "Electric Medicine Workbench",
      "unlockLevel": 43,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Electric Medicine Workbench@Build Menu@Common@0c04fdd7",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Carbon Fiber",
          "quantity": 20
        },
        {
          "name": "Circuit Board",
          "quantity": 10
        },
        {
          "name": "Refined Ingot",
          "quantity": 40
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Electric Medicine Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Medicine_Workbench"
    },
    {
      "id": "electric-mine",
      "name": "Electric Mine",
      "category": "Defense",
      "subcategory": "Structures",
      "description": "A defensive trap that electrocutes hostile Pals when triggered.",
      "hp": 500,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-mine",
      "technologyName": "Electric Mine",
      "unlockLevel": 33,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Electric Mine@Build Menu@Common@cc0cfb73",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Electric Organ",
          "quantity": 2
        },
        {
          "name": "Ingot",
          "quantity": 5
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Electric Mine",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Mine"
    },
    {
      "id": "electric-pylon",
      "name": "Electric Pylon",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases electricity generation efficiency.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "electric-pylon",
      "technologyName": "Electric Pylon",
      "unlockLevel": 48,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Electric Pylon@Build Menu@Common@57b26cdd",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 20
        },
        {
          "name": "Electric Organ",
          "quantity": 30
        },
        {
          "name": "Ingot",
          "quantity": 100
        }
      ],
      "requiredWork": 600,
      "outputs": [],
      "sourcePage": "Electric Pylon",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Electric_Pylon"
    },
    {
      "id": "feed-box",
      "name": "Feed Box",
      "category": "Food",
      "subcategory": "Feedbox",
      "description": "A basic food storage structure that allows Pals to eat when hungry.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "feed-box",
      "technologyName": "Feed Box",
      "unlockLevel": 4,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Feed Box@Build Menu@Common@ce075fdb",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Feed Box",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Feed_Box"
    },
    {
      "id": "fine-bed",
      "name": "Fine Bed",
      "category": "Infrastructure",
      "subcategory": "Bedding",
      "description": "A comfortable bed used by players for rest and recovery.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "fine-bed",
      "technologyName": "Fine Bed",
      "unlockLevel": 29,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Fine Bed@Build Menu@Common@7ba85ab3",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cloth",
          "quantity": 10
        },
        {
          "name": "Fiber",
          "quantity": 20
        },
        {
          "name": "Nail",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 200,
      "outputs": [],
      "sourcePage": "Fine Bed",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Fine_Bed"
    },
    {
      "id": "fishing-pond",
      "name": "Fishing Pond",
      "category": "Production",
      "subcategory": "Fishing Hole",
      "description": "A production structure that automates fishing through assigned Pal labor.",
      "hp": 4500,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "fishing-pond",
      "technologyName": "Fishing Pond",
      "unlockLevel": 31,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Fishing Pond@Build Menu@Common@a2b0816d",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 5
        },
        {
          "name": "Pal Fluids",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 40
        }
      ],
      "requiredWork": 23500,
      "outputs": [],
      "sourcePage": "Fishing Pond",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Fishing_Pond"
    },
    {
      "id": "flame-cauldron",
      "name": "Flame Cauldron",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases kindling efficiency.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "flame-cauldron",
      "technologyName": "Flame Cauldron",
      "unlockLevel": 21,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Flame Cauldron@Build Menu@Common@e42fd125",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Flame Organ",
          "quantity": 20
        },
        {
          "name": "Ingot",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 100
        }
      ],
      "requiredWork": 160,
      "outputs": [],
      "sourcePage": "Flame Cauldron",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Flame_Cauldron"
    },
    {
      "id": "flea-market-items",
      "name": "Flea Market (Items)",
      "category": "Other Structures",
      "subcategory": null,
      "description": "A base structure used for listing and selling items to other players.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "flea-market-items",
      "technologyName": "Flea Market (Items)",
      "unlockLevel": 22,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Flea Market (Items)@Build Menu@Common@ee5dad2e",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cloth",
          "quantity": 3
        },
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 40
        }
      ],
      "requiredWork": 9000,
      "outputs": [],
      "sourcePage": "Flea Market (Items)",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Flea_Market_(Items)"
    },
    {
      "id": "flea-market-pals",
      "name": "Flea Market (Pals)",
      "category": "Other Structures",
      "subcategory": null,
      "description": "A base structure used for listing and selling Pals to other players.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "flea-market-pals",
      "technologyName": "Flea Market (Pals)",
      "unlockLevel": 22,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Flea Market (Pals)@Build Menu@Common@eccba410",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Paldium Fragment",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 40
        }
      ],
      "requiredWork": 9000,
      "outputs": [],
      "sourcePage": "Flea Market (Pals)",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Flea_Market_(Pals)"
    },
    {
      "id": "flower-bed",
      "name": "Flower Bed",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases gathering efficiency.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "flower-bed",
      "technologyName": "Flower Bed",
      "unlockLevel": 24,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Flower Bed@Build Menu@Common@f71d5895",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Beautiful Flower",
          "quantity": 20
        },
        {
          "name": "Cement",
          "quantity": 40
        },
        {
          "name": "Stone",
          "quantity": 100
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 320,
      "outputs": [],
      "sourcePage": "Flower Bed",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Flower_Bed"
    },
    {
      "id": "fluffy-pal-bed",
      "name": "Fluffy Pal Bed",
      "category": "Infrastructure",
      "subcategory": "Bedding",
      "description": "A comfortable bed that allows Pals to rest and recover properly.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "fluffy-pal-bed",
      "technologyName": "Fluffy Pal Bed",
      "unlockLevel": 24,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Fluffy Pal Bed@Build Menu@Common@3b1c8f42",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cloth",
          "quantity": 10
        },
        {
          "name": "Fiber",
          "quantity": 10
        },
        {
          "name": "Nail",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Fluffy Pal Bed",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Fluffy_Pal_Bed"
    },
    {
      "id": "gigantic-furnace",
      "name": "Gigantic Furnace",
      "category": "Production",
      "subcategory": "Refinement",
      "description": "A high-tier smelting facility that refines advanced materials and supports multiple Pals working at once.",
      "hp": null,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "gigantic-furnace",
      "technologyName": "Gigantic Furnace",
      "unlockLevel": 56,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Gigantic Furnace@Build Menu@Common@18b97f1f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ancient Civilization Parts",
          "quantity": 20
        },
        {
          "name": "Flame Organ",
          "quantity": 200
        },
        {
          "name": "Plasteel",
          "quantity": 150
        },
        {
          "name": "Polymer",
          "quantity": 100
        }
      ],
      "requiredWork": 6000,
      "outputs": [],
      "sourcePage": "Gigantic Furnace",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Gigantic_Furnace"
    },
    {
      "id": "global-palbox",
      "name": "Global Palbox",
      "category": "Pal",
      "subcategory": "Management",
      "description": "A facility that stores Pal genetic data and allows Pals to be reconstructed and transferred between worlds.",
      "hp": 20000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "global-palbox",
      "technologyName": "Global Palbox",
      "unlockLevel": 1,
      "techPoints": 0,
      "ancientPoints": 0,
      "recipeId": "Global Palbox@Build Menu@Common@1dea6da9",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 3
        },
        {
          "name": "Stone",
          "quantity": 15
        },
        {
          "name": "Wood",
          "quantity": 5
        }
      ],
      "requiredWork": 1000,
      "outputs": [],
      "sourcePage": "Global Palbox",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Global_Palbox"
    },
    {
      "id": "gold-coin-assembly-line",
      "name": "Gold Coin Assembly Line",
      "category": "Production",
      "subcategory": null,
      "description": "A production assembly line that manufactures Gold Coins from metal ingots.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "gold-coin-assembly-line",
      "technologyName": "Gold Coin Assembly Line",
      "unlockLevel": 48,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Gold Coin Assembly Line@Build Menu@Common@771a0e15",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 30
        },
        {
          "name": "Circuit Board",
          "quantity": 20
        },
        {
          "name": "Nail",
          "quantity": 50
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 100
        }
      ],
      "requiredWork": 10000,
      "outputs": [],
      "sourcePage": "Gold Coin Assembly Line",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Gold_Coin_Assembly_Line"
    },
    {
      "id": "hanging-trap",
      "name": "Hanging Trap",
      "category": "Defense",
      "subcategory": "Structures",
      "description": "Trap that catches Pals and certain humans that walk through it, suspending them so they can be more easily captured or dealt with.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "hanging-trap",
      "technologyName": "Hanging Trap",
      "unlockLevel": 4,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Hanging Trap@Build Menu@Common@61f564c6",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Hanging Trap",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Hanging_Trap"
    },
    {
      "id": "heater",
      "name": "Heater",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A device that emits warm air to raise the ambient temperature of a base, helping counter cold environments and support egg incubation.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "heater",
      "technologyName": "Heater",
      "unlockLevel": 17,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Heater@Build Menu@Common@1e5934c4",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Charcoal",
          "quantity": 10
        },
        {
          "name": "Flame Organ",
          "quantity": 5
        },
        {
          "name": "Ingot",
          "quantity": 20
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Heater",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Heater"
    },
    {
      "id": "hexolite-quartz-mine",
      "name": "Hexolite Quartz Mine",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "Facility that allows Pals to mine and produce Hexolite Quartz through sustained physical labor.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": null,
      "technologyName": "Hexolite Quartz Mining Site",
      "unlockLevel": null,
      "techPoints": null,
      "ancientPoints": null,
      "recipeId": "Hexolite Quartz Mine@Build Menu@Common@5706f40f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Hexolite Quartz",
          "quantity": 100
        },
        {
          "name": "Stone",
          "quantity": 70
        }
      ],
      "requiredWork": 50000,
      "outputs": [],
      "sourcePage": "Hexolite Quartz Mine",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Hexolite_Quartz_Mine"
    },
    {
      "id": "high-quality-hot-spring",
      "name": "High Quality Hot Spring",
      "category": "Infrastructure",
      "subcategory": "Health Care",
      "description": "An upgraded hot spring that allows Pals to rest more comfortably and recover SAN more effectively.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "high-quality-hot-spring",
      "technologyName": "High Quality Hot Spring",
      "unlockLevel": 31,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "High Quality Hot Spring@Build Menu@Common@33faf7ad",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 20
        },
        {
          "name": "Paldium Fragment",
          "quantity": 30
        },
        {
          "name": "Stone",
          "quantity": 100
        },
        {
          "name": "Wood",
          "quantity": 100
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "High Quality Hot Spring",
      "sourceUrl": "https://palworld.wiki.gg/wiki/High_Quality_Hot_Spring"
    },
    {
      "id": "high-quality-workbench",
      "name": "High Quality Workbench",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "An upgraded workbench used to craft a wider range of items and equipment, offering improved efficiency over basic crafting stations.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "high-quality-workbench",
      "technologyName": "High Quality Workbench",
      "unlockLevel": 11,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "High Quality Workbench@Build Menu@Common@7b952673",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 15
        },
        {
          "name": "Nail",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "High Quality Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/High_Quality_Workbench"
    },
    {
      "id": "hot-spring",
      "name": "Hot Spring",
      "category": "Infrastructure",
      "subcategory": "Health Care",
      "description": "A basic hot spring that allows Pals to rest and recover SAN after extended periods of work.",
      "hp": 3000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "hot-spring",
      "technologyName": "Hot Spring",
      "unlockLevel": 9,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Hot Spring@Build Menu@Common@651c88fb",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Pal Fluids",
          "quantity": 10
        },
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 15
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 80,
      "outputs": [],
      "sourcePage": "Hot Spring",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Hot_Spring"
    },
    {
      "id": "human-powered-generator",
      "name": "Human-Powered Generator",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A base structure that converts rotational motion into electrical energy using assigned Pals. It generates a small amount of power but rapidly reduces SAN for the working Pals.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "human-powered-generator",
      "technologyName": "Human-Powered Generator",
      "unlockLevel": 13,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Human-Powered Generator@Build Menu@Common@8ce57ee5",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Electric Organ",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 5000,
      "outputs": [],
      "sourcePage": "Human-Powered Generator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Human-Powered_Generator"
    },
    {
      "id": "ice-mine",
      "name": "Ice Mine",
      "category": "Defense",
      "subcategory": "Structure",
      "description": "A pressure-triggered trap that freezes Pals when stepped on, increasing their capture success with Spheres.",
      "hp": 500,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "ice-mine",
      "technologyName": "Ice Mine",
      "unlockLevel": 38,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Ice Mine@Build Menu@Common@41360f69",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ice Organ",
          "quantity": 2
        },
        {
          "name": "Ingot",
          "quantity": 5
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Ice Mine",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Ice_Mine"
    },
    {
      "id": "improved-furnace",
      "name": "Improved Furnace",
      "category": "Production",
      "subcategory": "Refinement",
      "description": "An upgraded furnace that refines materials more efficiently and enables the production of Refined Ingots using Pal-assisted heat.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "improved-furnace",
      "technologyName": "Improved Furnace",
      "unlockLevel": 34,
      "techPoints": 4,
      "ancientPoints": 0,
      "recipeId": "Improved Furnace@Build Menu@Common@1c0fb7d4",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 30
        },
        {
          "name": "Flame Organ",
          "quantity": 15
        },
        {
          "name": "Stone",
          "quantity": 100
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Improved Furnace",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Improved_Furnace"
    },
    {
      "id": "iron-gate",
      "name": "Iron Gate",
      "category": "Defense",
      "subcategory": "Walls",
      "description": "A heavy metal gate designed to allow large Pals to pass through while providing extremely high durability for base defenses.",
      "hp": 50000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "iron-gate",
      "technologyName": "Iron Gate",
      "unlockLevel": 42,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Iron Gate@Build Menu@Common@93f0d534",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 1
        },
        {
          "name": "Ingot",
          "quantity": 10
        }
      ],
      "requiredWork": 150,
      "outputs": [],
      "sourcePage": "Iron Gate",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Iron_Gate"
    },
    {
      "id": "japanese-style-hotspring",
      "name": "Japanese-Style Hotspring",
      "category": "Infrastructure",
      "subcategory": "Health Care",
      "description": "A high-end hot spring with a traditional Japanese design that allows Pals to rest and recover SAN at an even faster rate.",
      "hp": 15000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "japanese-style-hotspring",
      "technologyName": "Japanese-Style Hotspring",
      "unlockLevel": 62,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Japanese-Style Hotspring@Build Menu@Common@e0df416a",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 40
        },
        {
          "name": "Paldium Fragment",
          "quantity": 50
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 300
        }
      ],
      "requiredWork": 50000,
      "outputs": [],
      "sourcePage": "Japanese-Style Hotspring",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Japanese-Style_Hotspring"
    },
    {
      "id": "ladder",
      "name": "Ladder",
      "category": "Foundation",
      "subcategory": "Structure",
      "description": "A simple wooden ladder used to climb to higher platforms or elevated floors within a base.",
      "hp": 500,
      "capacity": null,
      "supportsOtherStructures": true,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "ladder",
      "technologyName": "Ladder",
      "unlockLevel": 10,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Ladder@Build Menu@Common@9f754f0a",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Ladder",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Ladder"
    },
    {
      "id": "lamp",
      "name": "Lamp",
      "category": "Lighting",
      "subcategory": "Placeable",
      "description": "An electric light source that illuminates a wide area of a base, providing visibility even at night.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "lamp",
      "technologyName": "Lamp",
      "unlockLevel": 26,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Lamp@Build Menu@Common@9e2fb5a3",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Electric Organ",
          "quantity": 3
        },
        {
          "name": "Ingot",
          "quantity": 10
        },
        {
          "name": "Nail",
          "quantity": 3
        },
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 70,
      "outputs": [],
      "sourcePage": "Lamp",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Lamp"
    },
    {
      "id": "large-ceiling-lamp",
      "name": "Large Ceiling Lamp",
      "category": "Lighting",
      "subcategory": "Ceiling",
      "description": "A ceiling-mounted electric light that illuminates a large area, providing powerful lighting even at night.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-ceiling-lamp",
      "technologyName": "Large Ceiling Lamp",
      "unlockLevel": 47,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Large Ceiling Lamp@Build Menu@Common@13fc9e2c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 5
        },
        {
          "name": "Ingot",
          "quantity": 50
        },
        {
          "name": "Nail",
          "quantity": 5
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Large Ceiling Lamp",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large_Ceiling_Lamp"
    },
    {
      "id": "large-fishing-pond",
      "name": "Large Fishing Pond",
      "category": "Production",
      "subcategory": "Fishing Hole",
      "description": "A large fishing pond that allows Pals to automatically fish for items and larger Pals using bait-selected shadows.",
      "hp": 5500,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-fishing-pond",
      "technologyName": "Large Fishing Pond",
      "unlockLevel": 55,
      "techPoints": 4,
      "ancientPoints": 0,
      "recipeId": "Large Fishing Pond@Build Menu@Common@2ca4e0dd",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "High Quality Pal Oil",
          "quantity": 20
        },
        {
          "name": "Plasteel",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 60
        }
      ],
      "requiredWork": 85000,
      "outputs": [],
      "sourcePage": "Large Fishing Pond",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large_Fishing_Pond"
    },
    {
      "id": "large-incubator",
      "name": "Large Incubator",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A multi-slot incubator that hatches Pal Eggs without electricity by maintaining suitable temperatures, allowing multiple eggs to incubate at once.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-incubator",
      "technologyName": "Large Incubator",
      "unlockLevel": 48,
      "techPoints": 0,
      "ancientPoints": 5,
      "recipeId": "Large Incubator@Build Menu@Common@1be402bc",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ancient Civilization Core",
          "quantity": 10
        },
        {
          "name": "Ancient Civilization Parts",
          "quantity": 20
        },
        {
          "name": "Cloth",
          "quantity": 20
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 50
        }
      ],
      "requiredWork": 5000,
      "outputs": [],
      "sourcePage": "Large Incubator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large_Incubator"
    },
    {
      "id": "large-mounted-lamp",
      "name": "Large Mounted Lamp",
      "category": "Lighting",
      "subcategory": "Placeable",
      "description": "A high-output electric light that provides powerful illumination across a wide area, even at night.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-mounted-lamp",
      "technologyName": "Large Mounted Lamp",
      "unlockLevel": 46,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Large Mounted Lamp@Build Menu@Common@13fc9e2c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 5
        },
        {
          "name": "Ingot",
          "quantity": 50
        },
        {
          "name": "Nail",
          "quantity": 5
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Large Mounted Lamp",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large_Mounted_Lamp"
    },
    {
      "id": "large-pal-bed",
      "name": "Large Pal Bed",
      "category": "Infrastructure",
      "subcategory": "Bedding",
      "description": "A large, comfortable bed that allows Pals to sleep soundly, restoring SAN and accommodating even large Pals.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-pal-bed",
      "technologyName": "Large Pal Bed",
      "unlockLevel": 36,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Large Pal Bed@Build Menu@Common@44a38bec",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Fiber",
          "quantity": 30
        },
        {
          "name": "High Quality Cloth",
          "quantity": 10
        },
        {
          "name": "Nail",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 60
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Large Pal Bed",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large_Pal_Bed"
    },
    {
      "id": "large-power-generator",
      "name": "Large Power Generator",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A large-scale power generator that produces electricity using Electric-type Pals, offering greatly improved power generation efficiency.",
      "hp": 100000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-power-generator",
      "technologyName": "Large Power Generator",
      "unlockLevel": 50,
      "techPoints": 0,
      "ancientPoints": 4,
      "recipeId": "Large Power Generator@Build Menu@Common@c1cb96f4",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Electric Organ",
          "quantity": 200
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 200
        }
      ],
      "requiredWork": 5000,
      "outputs": [],
      "sourcePage": "Large Power Generator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large_Power_Generator"
    },
    {
      "id": "large-toolbox",
      "name": "Large Toolbox",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A support structure that improves Handiwork speed for Pals working at a base. Additional toolboxes provide no extra benefit.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-toolbox",
      "technologyName": "Large Toolbox",
      "unlockLevel": 20,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Large Toolbox@Build Menu@Common@1948763e",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 40
        },
        {
          "name": "Nail",
          "quantity": 15
        },
        {
          "name": "Wood",
          "quantity": 100
        }
      ],
      "requiredWork": 120,
      "outputs": [],
      "sourcePage": "Large Toolbox",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large_Toolbox"
    },
    {
      "id": "large-scale-stone-oven",
      "name": "Large-Scale Stone Oven",
      "category": "Food",
      "subcategory": "Cooking",
      "description": "A large cooking station that allows multiple Pals to cooperate when preparing food, greatly increasing cooking efficiency.",
      "hp": 15000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "large-scale-stone-oven",
      "technologyName": "Large-Scale Stone Oven",
      "unlockLevel": 49,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Large-Scale Stone Oven@Build Menu@Common@0ddd47d5",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 200
        },
        {
          "name": "Charcoal",
          "quantity": 200
        },
        {
          "name": "Flame Organ",
          "quantity": 20
        },
        {
          "name": "Stone",
          "quantity": 1000
        }
      ],
      "requiredWork": 2000,
      "outputs": [],
      "sourcePage": "Large-Scale Stone Oven",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Large-Scale_Stone_Oven"
    },
    {
      "id": "lettuce-plantation",
      "name": "Lettuce Plantation",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming plot that allows Pals to grow Lettuce, expanding available ingredients for cooking and meal preparation.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "lettuce-plantation",
      "technologyName": "Lettuce Plantation",
      "unlockLevel": 25,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Lettuce Plantation@Build Menu@Common@833353d4",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Lettuce Seeds",
          "quantity": 3
        },
        {
          "name": "Pal Fluids",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 70
        },
        {
          "name": "Wood",
          "quantity": 100
        }
      ],
      "requiredWork": 400,
      "outputs": [],
      "sourcePage": "Lettuce Plantation",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Lettuce_Plantation"
    },
    {
      "id": "logging-site",
      "name": "Logging Site",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "A production facility that allows Pals to generate Wood through sustained logging work.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "logging-site",
      "technologyName": "Logging Site",
      "unlockLevel": 7,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Logging Site@Build Menu@Common@8497c20c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Logging Site",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Logging_Site"
    },
    {
      "id": "medicine-rack",
      "name": "Medicine Rack",
      "category": "Infrastructure",
      "subcategory": "Health Care",
      "description": "A dedicated rack for storing medicine, allowing sick Pals to automatically retrieve and use the correct treatment.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "medicine-rack",
      "technologyName": "Medicine Rack",
      "unlockLevel": 24,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Medicine Rack@Build Menu@Common@28f72898",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cloth",
          "quantity": 5
        },
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 10000,
      "outputs": [],
      "sourcePage": "Medicine Rack",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Medicine_Rack"
    },
    {
      "id": "medieval-medicine-workbench",
      "name": "Medieval Medicine Workbench",
      "category": "Production",
      "subcategory": "Medicine Production",
      "description": "A basic workbench used to produce simple Pal medicines through Pal-assisted crafting.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": true,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "medieval-medicine-workbench",
      "technologyName": "Medieval Medicine Workbench",
      "unlockLevel": 12,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Medieval Medicine Workbench@Build Menu@Common@95667238",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Nail",
          "quantity": 5
        },
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "Medieval Medicine Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Medieval_Medicine_Workbench"
    },
    {
      "id": "metal-chest",
      "name": "Metal Chest",
      "category": "Storage",
      "subcategory": "Chest",
      "description": "A reinforced storage chest that offers increased durability and expanded item storage capacity.",
      "hp": 6000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "metal-chest",
      "technologyName": "Metal Chest",
      "unlockLevel": 16,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Metal Chest@Build Menu@Common@fcd9fe65",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 15
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 80,
      "outputs": [],
      "sourcePage": "Metal Chest",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Metal_Chest"
    },
    {
      "id": "metal-defensive-wall",
      "name": "Metal Defensive Wall",
      "category": "Defense",
      "subcategory": "Walls",
      "description": "A massive metal wall designed to block enemy intrusions, offering extremely high durability for base defense.",
      "hp": 50000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "metal-defensive-wall",
      "technologyName": "Metal Defensive Wall",
      "unlockLevel": 43,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Metal Defensive Wall@Build Menu@Common@cc94060a",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 1
        },
        {
          "name": "Ingot",
          "quantity": 10
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Metal Defensive Wall",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Metal_Defensive_Wall"
    },
    {
      "id": "mill",
      "name": "Mill",
      "category": "Production",
      "subcategory": "Milling/Crushing",
      "description": "A production facility that mills Wheat into Flour using Pal-powered water turbines.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "mill",
      "technologyName": "Mill",
      "unlockLevel": 15,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Mill@Build Menu@Common@3d75e8c4",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 40
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 80,
      "outputs": [],
      "sourcePage": "Mill",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Mill"
    },
    {
      "id": "mine",
      "name": "Mine",
      "category": "Defense",
      "subcategory": "Structure",
      "description": "A pressure-triggered explosive trap that detonates when a Pal steps on it, dealing area damage.",
      "hp": 500,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "mine",
      "technologyName": "Mine",
      "unlockLevel": 30,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Mine@Build Menu@Common@f3f29e30",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Flame Organ",
          "quantity": 2
        },
        {
          "name": "Ingot",
          "quantity": 5
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Mine",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Mine"
    },
    {
      "id": "mining-cart",
      "name": "Mining Cart",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases the Mining work speed of Pals. Multiple copies do not stack.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": null,
      "technologyName": "Mining Cart",
      "unlockLevel": null,
      "techPoints": null,
      "ancientPoints": null,
      "recipeId": "Mining Cart@Build Menu@Common@21476d77",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 50
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 480,
      "outputs": [],
      "sourcePage": "Mining Cart",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Mining_Cart"
    },
    {
      "id": "monitoring-stand",
      "name": "Monitoring Stand",
      "category": "Pal",
      "subcategory": "Management",
      "description": "A command station that allows players to manage Pal work behavior and permissions within a base.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "monitoring-stand",
      "technologyName": "Monitoring Stand",
      "unlockLevel": 14,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Monitoring Stand@Build Menu@Common@fe84f439",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 20,
      "outputs": [],
      "sourcePage": "Monitoring Stand",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Monitoring_Stand"
    },
    {
      "id": "mounted-crossbow",
      "name": "Mounted Crossbow",
      "category": "Defense",
      "subcategory": "Defensive Structure",
      "description": "A Pal-operated defensive weapon that fires arrows at hostile targets when supplied with ammunition.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "mounted-crossbow",
      "technologyName": "Mounted Crossbow",
      "unlockLevel": 26,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Mounted Crossbow@Build Menu@Common@ab37f80f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 30
        },
        {
          "name": "Nail",
          "quantity": 5
        },
        {
          "name": "Stone",
          "quantity": 15
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Mounted Crossbow",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Mounted_Crossbow"
    },
    {
      "id": "mounted-machine-gun",
      "name": "Mounted Machine Gun",
      "category": "Defense",
      "subcategory": "Defensive Structure",
      "description": "A Pal-operated defensive weapon that fires rifle ammunition at hostile targets when supplied with ammo.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "mounted-machine-gun",
      "technologyName": "Mounted Machine Gun",
      "unlockLevel": 40,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Mounted Machine Gun@Build Menu@Common@7cfc98a9",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 15
        },
        {
          "name": "Ingot",
          "quantity": 30
        },
        {
          "name": "Nail",
          "quantity": 10
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Mounted Machine Gun",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Mounted_Machine_Gun"
    },
    {
      "id": "mounted-missile-launcher",
      "name": "Mounted Missile Launcher",
      "category": "Defense",
      "subcategory": "Defensive Structure",
      "description": "A Pal-operated heavy defensive weapon that launches rockets at hostile targets when supplied with ammunition.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": null,
      "technologyName": "Mounted Missile Launcher",
      "unlockLevel": null,
      "techPoints": null,
      "ancientPoints": null,
      "recipeId": "Mounted Missile Launcher@Build Menu@Common@67342071",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 50
        },
        {
          "name": "Circuit Board",
          "quantity": 20
        },
        {
          "name": "Nail",
          "quantity": 20
        },
        {
          "name": "Refined Ingot",
          "quantity": 100
        }
      ],
      "requiredWork": 1500,
      "outputs": [],
      "sourcePage": "Mounted Missile Launcher",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Mounted_Missile_Launcher"
    },
    {
      "id": "mounted-torch",
      "name": "Mounted Torch",
      "category": "Lighting",
      "subcategory": "Placeable",
      "description": "A wall-mounted light source that provides illumination at night when lit by a Fire Pal.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "mounted-torch",
      "technologyName": "Mounted Torch",
      "unlockLevel": 6,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Mounted Torch@Build Menu@Common@5409cad0",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 2
        },
        {
          "name": "Wood",
          "quantity": 5
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Mounted Torch",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Mounted_Torch"
    },
    {
      "id": "onion-plantation",
      "name": "Onion Plantation",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming plot used to grow Onions, expanding available ingredients for cooking and meal preparation.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "onion-plantation",
      "technologyName": "Onion Plantation",
      "unlockLevel": 36,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Onion Plantation@Build Menu@Common@024a903e",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Onion Seeds",
          "quantity": 3
        },
        {
          "name": "Pal Fluids",
          "quantity": 5
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 70
        }
      ],
      "requiredWork": 200,
      "outputs": [],
      "sourcePage": "Onion Plantation",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Onion_Plantation"
    },
    {
      "id": "ore-mining-site",
      "name": "Ore Mining Site",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "A production facility that allows Pals to mine and generate Ore through sustained physical labor.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "ore-mining-site",
      "technologyName": "Ore Mining Site",
      "unlockLevel": 24,
      "techPoints": 0,
      "ancientPoints": 2,
      "recipeId": "Ore Mining Site@Build Menu@Common@0683f6d5",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 25
        },
        {
          "name": "Paldium Fragment",
          "quantity": 20
        },
        {
          "name": "Stone",
          "quantity": 50
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Ore Mining Site",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Ore_Mining_Site"
    },
    {
      "id": "ore-mining-site-ii",
      "name": "Ore Mining Site II",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "An upgraded production facility that allows Pals to mine and generate larger quantities of Ore through sustained physical labor.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "ore-mining-site-ii",
      "technologyName": "Ore Mining Site II",
      "unlockLevel": 39,
      "techPoints": 0,
      "ancientPoints": 3,
      "recipeId": "Ore Mining Site II@Build Menu@Common@02c81480",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 50
        },
        {
          "name": "Paldium Fragment",
          "quantity": 40
        },
        {
          "name": "Stone",
          "quantity": 100
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Ore Mining Site II",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Ore_Mining_Site_II"
    },
    {
      "id": "pal-disassembly-conveyor",
      "name": "Pal Disassembly Conveyor",
      "category": "Pal",
      "subcategory": "Other",
      "description": "A facility that automatically disassembles captured Pals placed inside, converting them into materials and drops.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pal-disassembly-conveyor",
      "technologyName": "Pal Disassembly Conveyor",
      "unlockLevel": 54,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Pal Disassembly Conveyor@Build Menu@Common@ad1d7938",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Computer",
          "quantity": 15
        },
        {
          "name": "Nail",
          "quantity": 30
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 100
        },
        {
          "name": "Plasteel",
          "quantity": 30
        }
      ],
      "requiredWork": 1200,
      "outputs": [],
      "sourcePage": "Pal Disassembly Conveyor",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pal_Disassembly_Conveyor"
    },
    {
      "id": "pal-dressing-facility",
      "name": "Pal Dressing Facility",
      "category": "Pal",
      "subcategory": "Other",
      "description": "A facility used to customize the appearance of Pals by applying available skins.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pal-dressing-facility",
      "technologyName": "Pal Dressing Facility",
      "unlockLevel": 1,
      "techPoints": 0,
      "ancientPoints": 0,
      "recipeId": "Pal Dressing Facility@Build Menu@Common@a49d3a47",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 10
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "Pal Dressing Facility",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pal_Dressing_Facility"
    },
    {
      "id": "pal-essence-condenser",
      "name": "Pal Essence Condenser",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A training facility used to increase a Pal’s rank by condensing other Pals of the same species into concentrated essence.",
      "hp": 8000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pal-essence-condenser",
      "technologyName": "Pal Essence Condenser",
      "unlockLevel": 14,
      "techPoints": 0,
      "ancientPoints": 2,
      "recipeId": "Pal Essence Condenser@Build Menu@Common@5fd62b48",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ancient Civilization Parts",
          "quantity": 5
        },
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Paldium Fragment",
          "quantity": 20
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Pal Essence Condenser",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pal_Essence_Condenser"
    },
    {
      "id": "pal-expedition-station",
      "name": "Pal Expedition Station",
      "category": "Pal",
      "subcategory": "Management",
      "description": "A management facility that allows Pals to be dispatched on expeditions to explore areas, engage in battles, and gather resources.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pal-expedition-station",
      "technologyName": "Pal Expedition Station",
      "unlockLevel": 15,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Pal Expedition Station@Build Menu@Common@aad935cc",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 5
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 10000,
      "outputs": [],
      "sourcePage": "Pal Expedition Station",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pal_Expedition_Station"
    },
    {
      "id": "pal-gear-workbench",
      "name": "Pal Gear Workbench",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "A specialized workbench used to craft gear and tools for Pals, including saddles and Partner Skill items.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pal-gear-workbench",
      "technologyName": "Pal Gear Workbench",
      "unlockLevel": 6,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Pal Gear Workbench@Build Menu@Common@92c582ba",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cloth",
          "quantity": 2
        },
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Pal Gear Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pal_Gear_Workbench"
    },
    {
      "id": "pal-labor-research-laboratory",
      "name": "Pal Labor Research Laboratory",
      "category": "Pal",
      "subcategory": "Management",
      "description": "A facility for conducting research on various Pal labor tasks to unlock permanent base-wide benefits and efficiency improvements.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pal-labor-research-laboratory",
      "technologyName": "Pal Labor Research Laboratory",
      "unlockLevel": 20,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Pal Labor Research Laboratory@Build Menu@Common@d866541f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 10
        },
        {
          "name": "Paldium Fragment",
          "quantity": 10
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Pal Labor Research Laboratory",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pal_Labor_Research_Laboratory"
    },
    {
      "id": "pal-surgery-table",
      "name": "Pal Surgery Table",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A specialized training facility used to alter a Pal’s gender or modify passive skills through surgical procedures.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pal-surgery-table",
      "technologyName": "Pal Surgery Table",
      "unlockLevel": 36,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Pal Surgery Table@Build Menu@Common@0e8e8902",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "High Quality Cloth",
          "quantity": 20
        },
        {
          "name": "Refined Ingot",
          "quantity": 30
        }
      ],
      "requiredWork": 1000,
      "outputs": [],
      "sourcePage": "Pal Surgery Table",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pal_Surgery_Table"
    },
    {
      "id": "palbox",
      "name": "Palbox",
      "category": "Pal",
      "subcategory": "Management",
      "description": "A central facility used to store captured Pals, establish a base area, and manage Pal activity and progression.",
      "hp": 20000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "palbox",
      "technologyName": "Palbox",
      "unlockLevel": 2,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Palbox@Build Menu@Common@47d20e67",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 1
        },
        {
          "name": "Stone",
          "quantity": 3
        },
        {
          "name": "Wood",
          "quantity": 8
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Palbox",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Palbox"
    },
    {
      "id": "palbox-control-device",
      "name": "Palbox Control Device",
      "category": "Pal",
      "subcategory": "Management",
      "description": "A remote-access terminal that allows interaction with the Palbox without placing a new base core.",
      "hp": 20000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "palbox-control-device",
      "technologyName": "Palbox Control Device",
      "unlockLevel": 32,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Palbox Control Device@Build Menu@Common@ae6a6e1e",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 20
        },
        {
          "name": "Paldium Fragment",
          "quantity": 30
        }
      ],
      "requiredWork": 10000,
      "outputs": [],
      "sourcePage": "Palbox Control Device",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Palbox_Control_Device"
    },
    {
      "id": "potato-plantation",
      "name": "Potato Plantation",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming plot used to grow Potatoes, expanding available ingredients for cooking and meal preparation.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "potato-plantation",
      "technologyName": "Potato Plantation",
      "unlockLevel": 29,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Potato Plantation@Build Menu@Common@7021c3d8",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Pal Fluids",
          "quantity": 5
        },
        {
          "name": "Potato Seeds",
          "quantity": 3
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 70
        }
      ],
      "requiredWork": 200,
      "outputs": [],
      "sourcePage": "Potato Plantation",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Potato_Plantation"
    },
    {
      "id": "power-generator",
      "name": "Power Generator",
      "category": "Infrastructure",
      "subcategory": "Electricity",
      "description": "A power generation facility operated by Electric-type Pals that supplies electricity to powered structures.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "power-generator",
      "technologyName": "Power Generator",
      "unlockLevel": 26,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Power Generator@Build Menu@Common@78071f28",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Electric Organ",
          "quantity": 20
        },
        {
          "name": "Ingot",
          "quantity": 50
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Power Generator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Power_Generator"
    },
    {
      "id": "primitive-furnace",
      "name": "Primitive Furnace",
      "category": "Production",
      "subcategory": "Refinement",
      "description": "A basic smelting facility used to refine Ore into Ingots and produce Charcoal. Processing speed and output quality are limited.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "primitive-furnace",
      "technologyName": "Primitive Furnace",
      "unlockLevel": 10,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Primitive Furnace@Build Menu@Common@6fa58765",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Flame Organ",
          "quantity": 3
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Primitive Furnace",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Primitive_Furnace"
    },
    {
      "id": "primitive-workbench",
      "name": "Primitive Workbench",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "A basic crafting station used to produce simple items during early progression.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "primitive-workbench",
      "technologyName": "Primitive Workbench",
      "unlockLevel": 1,
      "techPoints": 0,
      "ancientPoints": 0,
      "recipeId": "Primitive Workbench@Build Menu@Common@bbf73d20",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 2
        }
      ],
      "requiredWork": 5,
      "outputs": [],
      "sourcePage": "Primitive Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Primitive_Workbench"
    },
    {
      "id": "production-assembly-line",
      "name": "Production Assembly Line",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "An advanced crafting station that allows multiple Pals to work together, increasing production speed for tools and equipment.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "production-assembly-line",
      "technologyName": "Production Assembly Line",
      "unlockLevel": 28,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Production Assembly Line@Build Menu@Common@87389453",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 10
        },
        {
          "name": "Ingot",
          "quantity": 100
        },
        {
          "name": "Nail",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Production Assembly Line",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Production_Assembly_Line"
    },
    {
      "id": "production-assembly-line-ii",
      "name": "Production Assembly Line II",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "An advanced assembly line that significantly increases crafting speed by allowing coordinated work by multiple Pals.",
      "hp": 6000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "production-assembly-line-ii",
      "technologyName": "Production Assembly Line II",
      "unlockLevel": 42,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Production Assembly Line II@Build Menu@Common@8b06d3b2",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 10
        },
        {
          "name": "Nail",
          "quantity": 30
        },
        {
          "name": "Refined Ingot",
          "quantity": 100
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Production Assembly Line II",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Production_Assembly_Line_II"
    },
    {
      "id": "pure-quartz-mine",
      "name": "Pure Quartz Mine",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "A production facility that allows Pals to mine and generate Pure Quartz through sustained physical labor.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "pure-quartz-mine",
      "technologyName": "Pure Quartz Mine",
      "unlockLevel": 51,
      "techPoints": 0,
      "ancientPoints": 5,
      "recipeId": "Pure Quartz Mine@Build Menu@Common@1f78e8df",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 30
        },
        {
          "name": "Pure Quartz",
          "quantity": 100
        },
        {
          "name": "Stone",
          "quantity": 70
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Pure Quartz Mine",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Pure_Quartz_Mine"
    },
    {
      "id": "ranch",
      "name": "Ranch",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A facility that allows certain Pals to graze freely and generate items over time while relaxing at a base.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "ranch",
      "technologyName": "Ranch",
      "unlockLevel": 5,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Ranch@Build Menu@Common@fa7feb3b",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Fiber",
          "quantity": 30
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 150,
      "outputs": [],
      "sourcePage": "Ranch",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Ranch"
    },
    {
      "id": "refined-metal-chest",
      "name": "Refined Metal Chest",
      "category": "Storage",
      "subcategory": "Chest",
      "description": "A durable iron storage container designed to securely hold large quantities of items.",
      "hp": 8000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "refined-metal-chest",
      "technologyName": "Refined Metal Chest",
      "unlockLevel": 39,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Refined Metal Chest@Build Menu@Common@455155fa",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Nail",
          "quantity": 20
        },
        {
          "name": "Refined Ingot",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Refined Metal Chest",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Refined_Metal_Chest"
    },
    {
      "id": "refrigerated-crusher",
      "name": "Refrigerated Crusher",
      "category": "Production",
      "subcategory": "Milling/Crushing",
      "description": "An advanced crushing facility that processes ores, materials, and Pal Souls into refined outputs. It requires power and a Pal with Cooling suitability to operate efficiently.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "refrigerated-crusher",
      "technologyName": "Refrigerated Crusher",
      "unlockLevel": 52,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Refrigerated Crusher@Build Menu@Common@cfe0a57b",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ice Organ",
          "quantity": 50
        },
        {
          "name": "Pal Metal Ingot",
          "quantity": 50
        },
        {
          "name": "Plasteel",
          "quantity": 30
        }
      ],
      "requiredWork": 1000,
      "outputs": [],
      "sourcePage": "Refrigerated Crusher",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Refrigerated_Crusher"
    },
    {
      "id": "refrigerator",
      "name": "Refrigerator",
      "category": "Storage",
      "subcategory": "Chest",
      "description": "A temperature-controlled storage unit designed to slow food spoilage when operated by a Cooling-capable Pal.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "refrigerator",
      "technologyName": "Refrigerator",
      "unlockLevel": 38,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Refrigerator@Build Menu@Common@b7ee6b48",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 5
        },
        {
          "name": "Ice Organ",
          "quantity": 15
        },
        {
          "name": "Polymer",
          "quantity": 20
        },
        {
          "name": "Refined Ingot",
          "quantity": 50
        }
      ],
      "requiredWork": 500,
      "outputs": [],
      "sourcePage": "Refrigerator",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Refrigerator"
    },
    {
      "id": "repair-bench",
      "name": "Repair Bench",
      "category": "Production",
      "subcategory": "Crafting/Repair",
      "description": "A basic workbench used to repair damaged tools, weapons, and armor using raw materials.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "repair-bench",
      "technologyName": "Repair Bench",
      "unlockLevel": 2,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Repair Bench@Build Menu@Common@c4cb851e",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "Repair Bench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Repair_Bench"
    },
    {
      "id": "sandbag",
      "name": "Sandbag",
      "category": "Defense",
      "subcategory": "Structure",
      "description": "A defensive installation that allows an assigned Pal to remain on constant lookout and prepare for combat.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "sandbag",
      "technologyName": "Sandbag",
      "unlockLevel": 9,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Sandbag@Build Menu@Common@c4cb851e",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 30,
      "outputs": [],
      "sourcePage": "Sandbag",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Sandbag"
    },
    {
      "id": "shoddy-bed",
      "name": "Shoddy Bed",
      "category": "Infrastructure",
      "subcategory": "Bedding",
      "description": "A basic human bed that allows resting and recovery, offering minimal comfort without proper shelter.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "shoddy-bed",
      "technologyName": "Shoddy Bed",
      "unlockLevel": 3,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Shoddy Bed@Build Menu@Common@187f3294",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Fiber",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 20
        },
        {
          "name": "Wool",
          "quantity": 1
        }
      ],
      "requiredWork": 20,
      "outputs": [],
      "sourcePage": "Shoddy Bed",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Shoddy_Bed"
    },
    {
      "id": "sign",
      "name": "Sign",
      "category": "Other Structures",
      "subcategory": "Structure",
      "description": "A writable sign used to display short messages for organization or communication.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "sign",
      "technologyName": "Sign",
      "unlockLevel": 7,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Sign@Build Menu@Common@8277f529",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Sign",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Sign"
    },
    {
      "id": "silo",
      "name": "Silo",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases planting efficiency for Pals assigned to agricultural tasks.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "silo",
      "technologyName": "Silo",
      "unlockLevel": 25,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Silo@Build Menu@Common@893ebd5f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Fiber",
          "quantity": 100
        },
        {
          "name": "Stone",
          "quantity": 100
        },
        {
          "name": "Wood",
          "quantity": 300
        }
      ],
      "requiredWork": 400,
      "outputs": [],
      "sourcePage": "Silo",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Silo"
    },
    {
      "id": "skillfruit-orchard",
      "name": "Skillfruit Orchard",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming structure that allows Skillfruits to be cultivated by planting an existing fruit to produce additional harvests.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "skillfruit-orchard",
      "technologyName": "Skillfruit Orchard",
      "unlockLevel": 48,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Skillfruit Orchard@Build Menu@Common@188a1181",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Pal Fluids",
          "quantity": 30
        },
        {
          "name": "Paldium Fragment",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 200
        }
      ],
      "requiredWork": 100000,
      "outputs": [],
      "sourcePage": "Skillfruit Orchard",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Skillfruit_Orchard"
    },
    {
      "id": "snowman",
      "name": "Snowman",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A decorative base enhancement that increases cooling efficiency for Pals assigned to cooling tasks.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "snowman",
      "technologyName": "Snowman",
      "unlockLevel": 33,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Snowman@Build Menu@Common@b38c162f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cloth",
          "quantity": 20
        },
        {
          "name": "Ice Organ",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 400,
      "outputs": [],
      "sourcePage": "Snowman",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Snowman"
    },
    {
      "id": "sphere-assembly-line",
      "name": "Sphere Assembly Line",
      "category": "Production",
      "subcategory": "Sphere",
      "description": "An advanced assembly line used to produce Pal Spheres more efficiently by allowing multiple Pals to work together.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "sphere-assembly-line",
      "technologyName": "Sphere Assembly Line",
      "unlockLevel": 27,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Sphere Assembly Line@Build Menu@Common@dd632a41",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 100
        },
        {
          "name": "Nail",
          "quantity": 20
        },
        {
          "name": "Paldium Fragment",
          "quantity": 30
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Sphere Assembly Line",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Sphere_Assembly_Line"
    },
    {
      "id": "sphere-assembly-line-ii",
      "name": "Sphere Assembly Line II",
      "category": "Production",
      "subcategory": "Sphere",
      "description": "An advanced assembly line used to produce Pal Spheres at greatly increased speeds through improved workflow and coordination.",
      "hp": 8000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "sphere-assembly-line-ii",
      "technologyName": "Sphere Assembly Line II",
      "unlockLevel": 35,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Sphere Assembly Line II@Build Menu@Common@01c9f53b",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 10
        },
        {
          "name": "Nail",
          "quantity": 30
        },
        {
          "name": "Paldium Fragment",
          "quantity": 50
        },
        {
          "name": "Refined Ingot",
          "quantity": 100
        }
      ],
      "requiredWork": 1200,
      "outputs": [],
      "sourcePage": "Sphere Assembly Line II",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Sphere_Assembly_Line_II"
    },
    {
      "id": "sphere-workbench",
      "name": "Sphere Workbench",
      "category": "Production",
      "subcategory": "Sphere",
      "description": "A basic assembly station used to produce Pal Spheres, designed for small-scale crafting by a single Pal.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "sphere-workbench",
      "technologyName": "Sphere Workbench",
      "unlockLevel": 14,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Sphere Workbench@Build Menu@Common@c7bff78c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Nail",
          "quantity": 10
        },
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 30
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Sphere Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Sphere_Workbench"
    },
    {
      "id": "statue-of-power",
      "name": "Statue of Power",
      "category": "Pal",
      "subcategory": "Training",
      "description": "A legendary stone statue used to enhance player capture power and permanently improve Pal base stats through offerings.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "statue-of-power",
      "technologyName": "Statue of Power",
      "unlockLevel": 6,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Statue of Power@Build Menu@Common@1d2be771",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 20
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Statue of Power",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Statue_of_Power"
    },
    {
      "id": "stone-gate",
      "name": "Stone Gate",
      "category": null,
      "subcategory": "Wall",
      "description": "A large stone gate designed to allow passage for large Pals while providing sturdy base defense.",
      "hp": 20000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "stone-gate",
      "technologyName": "Stone Gate",
      "unlockLevel": 31,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Stone Gate@Build Menu@Common@5a8676bc",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Cement",
          "quantity": 1
        },
        {
          "name": "Stone",
          "quantity": 10
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Stone Gate",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Stone_Gate"
    },
    {
      "id": "stone-pit",
      "name": "Stone Pit",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "A production facility that allows Pals to mine and generate Stone through sustained labor.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "stone-pit",
      "technologyName": "Stone Pit",
      "unlockLevel": 7,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Stone Pit@Build Menu@Common@42327709",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Stone Pit",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Stone_Pit"
    },
    {
      "id": "straw-pal-bed",
      "name": "Straw Pal Bed",
      "category": "Infrastructure",
      "subcategory": "Bedding",
      "description": "A basic straw bed that allows Pals to rest and recover sanity while sleeping.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "straw-pal-bed",
      "technologyName": "Straw Pal Bed",
      "unlockLevel": 3,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Straw Pal Bed@Build Menu@Common@d5a7b6bf",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Fiber",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 20,
      "outputs": [],
      "sourcePage": "Straw Pal Bed",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Straw_Pal_Bed"
    },
    {
      "id": "stump-and-axe",
      "name": "Stump and Axe",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases lumbering efficiency for Pals assigned to woodcutting tasks.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "stump-and-axe",
      "technologyName": "Stump and Axe",
      "unlockLevel": 28,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Stump and Axe@Build Menu@Common@ad6f4113",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 40
        },
        {
          "name": "Stone",
          "quantity": 30
        },
        {
          "name": "Wood",
          "quantity": 150
        }
      ],
      "requiredWork": 320,
      "outputs": [],
      "sourcePage": "Stump and Axe",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Stump_and_Axe"
    },
    {
      "id": "sulfur-mine",
      "name": "Sulfur Mine",
      "category": "Production",
      "subcategory": "Lumbering/Mining",
      "description": "A production facility that allows Pals to extract sulfur through sustained mining labor.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "sulfur-mine",
      "technologyName": "Sulfur Mine",
      "unlockLevel": 46,
      "techPoints": 0,
      "ancientPoints": 5,
      "recipeId": "Sulfur Mine@Build Menu@Common@a514620c",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 30
        },
        {
          "name": "Stone",
          "quantity": 70
        },
        {
          "name": "Sulfur",
          "quantity": 100
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Sulfur Mine",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Sulfur_Mine"
    },
    {
      "id": "summoning-altar",
      "name": "Summoning Altar",
      "category": "Other Structures",
      "subcategory": "Structure",
      "description": "A ritual structure used to summon powerful Raid Boss Pals by offering Pal Slabs.",
      "hp": 10000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "summoning-altar",
      "technologyName": "Summoning Altar",
      "unlockLevel": 33,
      "techPoints": 0,
      "ancientPoints": 3,
      "recipeId": "Summoning Altar@Build Menu@Common@be684d32",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 20
        },
        {
          "name": "Stone",
          "quantity": 100
        }
      ],
      "requiredWork": 100,
      "outputs": [],
      "sourcePage": "Summoning Altar",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Summoning_Altar"
    },
    {
      "id": "tomato-plantation",
      "name": "Tomato Plantation",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming structure used to grow tomatoes, expanding available cooking ingredients through crop cultivation.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "tomato-plantation",
      "technologyName": "Tomato Plantation",
      "unlockLevel": 21,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Tomato Plantation@Build Menu@Common@30c7a55d",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Pal Fluids",
          "quantity": 5
        },
        {
          "name": "Stone",
          "quantity": 50
        },
        {
          "name": "Tomato Seeds",
          "quantity": 3
        },
        {
          "name": "Wood",
          "quantity": 70
        }
      ],
      "requiredWork": 200,
      "outputs": [],
      "sourcePage": "Tomato Plantation",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Tomato_Plantation"
    },
    {
      "id": "tombstone",
      "name": "Tombstone",
      "category": "Other Structures",
      "subcategory": "Structure",
      "description": "A writable gravestone used for decorative or record-keeping purposes.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "tombstone",
      "technologyName": "Tombstone",
      "unlockLevel": 17,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Tombstone@Build Menu@Common@ec43b08f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 10
        }
      ],
      "requiredWork": 1000,
      "outputs": [],
      "sourcePage": "Tombstone",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Tombstone"
    },
    {
      "id": "training-dummy",
      "name": "Training Dummy",
      "category": "Other Structures",
      "subcategory": null,
      "description": "A durable training dummy shaped like a Pengullet, used to test weapon damage and combat behavior.",
      "hp": 50000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "training-dummy",
      "technologyName": "Training Dummy",
      "unlockLevel": 13,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Training Dummy@Build Menu@Common@d4b419b5",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Fiber",
          "quantity": 5
        },
        {
          "name": "Paldium Fragment",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 20
        }
      ],
      "requiredWork": 20,
      "outputs": [],
      "sourcePage": "Training Dummy",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Training_Dummy"
    },
    {
      "id": "viewing-cage",
      "name": "Viewing Cage",
      "category": "Pal",
      "subcategory": "Other",
      "description": "A containment structure used to store and observe captured Pals without allowing them to participate in combat or work.",
      "hp": 20000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "viewing-cage",
      "technologyName": "Viewing Cage",
      "unlockLevel": 15,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Viewing Cage@Build Menu@Common@efd532f7",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Paldium Fragment",
          "quantity": 10
        },
        {
          "name": "Stone",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Viewing Cage",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Viewing_Cage"
    },
    {
      "id": "wall-torch",
      "name": "Wall Torch",
      "category": "Lighting",
      "subcategory": "Wall Mount",
      "description": "A wall-mounted light source that illuminates a base during nighttime when lit by a Fire-capable Pal.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "wall-torch",
      "technologyName": "Wall Torch",
      "unlockLevel": 14,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Wall Torch@Build Menu@Common@5409cad0",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 2
        },
        {
          "name": "Wood",
          "quantity": 5
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Wall Torch",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Wall_Torch"
    },
    {
      "id": "wall-mounted-sign",
      "name": "Wall-Mounted Sign",
      "category": "Other Structures",
      "subcategory": "Structure",
      "description": "A wall-mounted signboard that can be written on for communication or organization.",
      "hp": 1000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "wall-mounted-sign",
      "technologyName": "Wall-Mounted Sign",
      "unlockLevel": 19,
      "techPoints": 0,
      "ancientPoints": 0,
      "recipeId": "Wall-Mounted Sign@Build Menu@Common@8277f529",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Wall-Mounted Sign",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Wall-Mounted_Sign"
    },
    {
      "id": "water-fountain",
      "name": "Water Fountain",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases watering efficiency for Pals assigned to farming tasks.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "water-fountain",
      "technologyName": "Water Fountain",
      "unlockLevel": 23,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Water Fountain@Build Menu@Common@47636d4f",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 100
        },
        {
          "name": "Pal Fluids",
          "quantity": 20
        },
        {
          "name": "Stone",
          "quantity": 200
        }
      ],
      "requiredWork": 200,
      "outputs": [],
      "sourcePage": "Water Fountain",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Water_Fountain"
    },
    {
      "id": "weapon-assembly-line",
      "name": "Weapon Assembly Line",
      "category": "Production",
      "subcategory": "Weapons",
      "description": "An advanced assembly line used to produce weapons and ammunition more efficiently through coordinated Pal labor.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "weapon-assembly-line",
      "technologyName": "Weapon Assembly Line",
      "unlockLevel": 32,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Weapon Assembly Line@Build Menu@Common@4a6b1714",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "High Quality Pal Oil",
          "quantity": 10
        },
        {
          "name": "Ingot",
          "quantity": 100
        },
        {
          "name": "Nail",
          "quantity": 20
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 300,
      "outputs": [],
      "sourcePage": "Weapon Assembly Line",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Weapon_Assembly_Line"
    },
    {
      "id": "weapon-assembly-line-ii",
      "name": "Weapon Assembly Line II",
      "category": "Production",
      "subcategory": "Weapons",
      "description": "A high-end assembly line designed to produce top-tier weapons and ammunition with maximum efficiency.",
      "hp": 8000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "weapon-assembly-line-ii",
      "technologyName": "Weapon Assembly Line II",
      "unlockLevel": 47,
      "techPoints": 5,
      "ancientPoints": 0,
      "recipeId": "Weapon Assembly Line II@Build Menu@Common@59b48b78",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Circuit Board",
          "quantity": 10
        },
        {
          "name": "Nail",
          "quantity": 30
        },
        {
          "name": "Refined Ingot",
          "quantity": 100
        }
      ],
      "requiredWork": 1200,
      "outputs": [],
      "sourcePage": "Weapon Assembly Line II",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Weapon_Assembly_Line_II"
    },
    {
      "id": "weapon-workbench",
      "name": "Weapon Workbench",
      "category": "Production",
      "subcategory": "Weapons",
      "description": "A specialized workbench used to craft weapons and ammunition at an early stage of production.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "weapon-workbench",
      "technologyName": "Weapon Workbench",
      "unlockLevel": 20,
      "techPoints": 3,
      "ancientPoints": 0,
      "recipeId": "Weapon Workbench@Build Menu@Common@2702aae5",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Ingot",
          "quantity": 15
        },
        {
          "name": "Nail",
          "quantity": 10
        },
        {
          "name": "Wood",
          "quantity": 50
        }
      ],
      "requiredWork": 50,
      "outputs": [],
      "sourcePage": "Weapon Workbench",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Weapon_Workbench"
    },
    {
      "id": "wheat-plantation",
      "name": "Wheat Plantation",
      "category": "Food",
      "subcategory": "Farming",
      "description": "A farming structure used to grow wheat, providing a reliable crop for food and crafting.",
      "hp": 2000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "wheat-plantation",
      "technologyName": "Wheat Plantation",
      "unlockLevel": 15,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Wheat Plantation@Build Menu@Common@d0a362b7",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 35
        },
        {
          "name": "Wheat Seeds",
          "quantity": 3
        },
        {
          "name": "Wood",
          "quantity": 35
        }
      ],
      "requiredWork": 80,
      "outputs": [],
      "sourcePage": "Wheat Plantation",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Wheat_Plantation"
    },
    {
      "id": "witch-cauldron",
      "name": "Witch Cauldron",
      "category": "Other Structures",
      "subcategory": "Efficiency Enhancement",
      "description": "A base enhancement structure that increases the speed of medicine production performed by Pals.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "witch-cauldron",
      "technologyName": "Witch Cauldron",
      "unlockLevel": 32,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Witch Cauldron@Build Menu@Common@ea7a2943",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "High Quality Pal Oil",
          "quantity": 15
        },
        {
          "name": "Ingot",
          "quantity": 50
        },
        {
          "name": "Pal Fluids",
          "quantity": 15
        },
        {
          "name": "Stone",
          "quantity": 50
        }
      ],
      "requiredWork": 600,
      "outputs": [],
      "sourcePage": "Witch Cauldron",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Witch_Cauldron"
    },
    {
      "id": "wooden-chest",
      "name": "Wooden Chest",
      "category": "Storage",
      "subcategory": "Chest",
      "description": "A basic wooden storage container with limited capacity and low durability.",
      "hp": 4000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "wooden-chest",
      "technologyName": "Wooden Chest",
      "unlockLevel": 2,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Wooden Chest@Build Menu@Common@7d7bceeb",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Stone",
          "quantity": 5
        },
        {
          "name": "Wood",
          "quantity": 15
        }
      ],
      "requiredWork": 10,
      "outputs": [],
      "sourcePage": "Wooden Chest",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Wooden_Chest"
    },
    {
      "id": "wooden-defensive-wall",
      "name": "Wooden Defensive Wall",
      "category": null,
      "subcategory": "Wall Mount",
      "description": "A large wooden defensive wall used to block enemy movement, offering basic protection with limited durability.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "wooden-defensive-wall",
      "technologyName": "Wooden Defensive Wall",
      "unlockLevel": 16,
      "techPoints": 1,
      "ancientPoints": 0,
      "recipeId": "Wooden Defensive Wall@Build Menu@Common@9f754f0a",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 0,
      "outputs": [],
      "sourcePage": "Wooden Defensive Wall",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Wooden_Defensive_Wall"
    },
    {
      "id": "wooden-gate",
      "name": "Wooden Gate",
      "category": null,
      "subcategory": "Wall Mount",
      "description": "A basic wooden gate that allows large Pals to pass through but provides minimal defensive strength.",
      "hp": 5000,
      "capacity": null,
      "supportsOtherStructures": false,
      "work": null,
      "powered": null,
      "powerConsumption": null,
      "technologyId": "wooden-gate",
      "technologyName": "Wooden Gate",
      "unlockLevel": 11,
      "techPoints": 2,
      "ancientPoints": 0,
      "recipeId": "Wooden Gate@Build Menu@Common@6e788e4a",
      "productQuantity": 1,
      "recipeQuality": "Common",
      "materials": [
        {
          "name": "Wood",
          "quantity": 10
        }
      ],
      "requiredWork": 20,
      "outputs": [],
      "sourcePage": "Wooden Gate",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Wooden_Gate"
    }
  ],
  "technology": [
    {
      "id": "blank",
      "name": "Blank",
      "level": 0,
      "points": 0,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "global-palbox",
      "name": "Global Palbox",
      "level": 1,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "global-palbox"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hand-held-torch",
      "name": "Hand-held Torch",
      "level": 1,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-dressing-facility",
      "name": "Pal Dressing Facility",
      "level": 1,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "pal-dressing-facility"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "primitive-workbench",
      "name": "Primitive Workbench",
      "level": 1,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "primitive-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stone-axe",
      "name": "Stone Axe",
      "level": 1,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stone-pickaxe",
      "name": "Stone Pickaxe",
      "level": 1,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-club",
      "name": "Wooden Club",
      "level": 1,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "campfire",
      "name": "Campfire",
      "level": 2,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "campfire"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-sphere",
      "name": "Pal Sphere",
      "level": 2,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "palbox",
      "name": "Palbox",
      "level": 2,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "palbox"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "repair-bench",
      "name": "Repair Bench",
      "level": 2,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "repair-bench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-chest",
      "name": "Wooden Chest",
      "level": 2,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "wooden-chest"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-structure-set",
      "name": "Wooden Structure Set",
      "level": 2,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "arrow",
      "name": "Arrow",
      "level": 3,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cloth",
      "name": "Cloth",
      "level": 3,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "old-bow",
      "name": "Old Bow",
      "level": 3,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "repair-kit",
      "name": "Repair Kit",
      "level": 3,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "shoddy-bed",
      "name": "Shoddy Bed",
      "level": 3,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "shoddy-bed"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "straw-pal-bed",
      "name": "Straw Pal Bed",
      "level": 3,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "straw-pal-bed"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "alarm-bell",
      "name": "Alarm Bell",
      "level": 4,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "alarm-bell"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cloth-outfit",
      "name": "Cloth Outfit",
      "level": 4,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "common-shield",
      "name": "Common Shield",
      "level": 4,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "feed-box",
      "name": "Feed Box",
      "level": 4,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "feed-box"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hanging-trap",
      "name": "Hanging Trap",
      "level": 4,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "hanging-trap"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stone-spear",
      "name": "Stone Spear",
      "level": 4,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "berry-plantation",
      "name": "Berry Plantation",
      "level": 5,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "berry-plantation"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fire-arrow",
      "name": "Fire Arrow",
      "level": 5,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fire-bow",
      "name": "Fire Bow",
      "level": 5,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "normal-parachute",
      "name": "Normal Parachute",
      "level": 5,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ranch",
      "name": "Ranch",
      "level": 5,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "ranch"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-living-room-furniture-set",
      "name": "Wooden Living Room Furniture Set",
      "level": 5,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-tavern-furniture-set",
      "name": "Wooden Tavern Furniture Set",
      "level": 5,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "foxparks-s-harness",
      "name": "Foxparks's Harness",
      "level": 6,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "houseplant-set",
      "name": "Houseplant Set",
      "level": 6,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mounted-torch",
      "name": "Mounted Torch",
      "level": 6,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "mounted-torch"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-gear-workbench",
      "name": "Pal Gear Workbench",
      "level": 6,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "pal-gear-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "rushoar-saddle",
      "name": "Rushoar Saddle",
      "level": 6,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "statue-of-power",
      "name": "Statue of Power",
      "level": 6,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "statue-of-power"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-tavern-cabinet-furniture-set",
      "name": "Wooden Tavern Cabinet Furniture Set",
      "level": 6,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "bat",
      "name": "Bat",
      "level": 7,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "celaray-s-gloves",
      "name": "Celaray's Gloves",
      "level": 7,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "egg-incubator",
      "name": "Egg Incubator",
      "level": 7,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [
        "egg-incubator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "logging-site",
      "name": "Logging Site",
      "level": 7,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "logging-site"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "melpaca-saddle",
      "name": "Melpaca Saddle",
      "level": 7,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sign",
      "name": "Sign",
      "level": 7,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "sign"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stone-pit",
      "name": "Stone Pit",
      "level": 7,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "stone-pit"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wall-mounted-houseplant-set",
      "name": "Wall-Mounted Houseplant Set",
      "level": 7,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-storage-set",
      "name": "Antique Storage Set",
      "level": 8,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "crusher",
      "name": "Crusher",
      "level": 8,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "crusher"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "daedream-s-necklace",
      "name": "Daedream's Necklace",
      "level": 8,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fireplace-set",
      "name": "Fireplace Set",
      "level": 8,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "jolthog-s-gloves",
      "name": "Jolthog's Gloves",
      "level": 8,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "poison-arrow",
      "name": "Poison Arrow",
      "level": 8,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "poison-bow",
      "name": "Poison Bow",
      "level": 8,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "carpet-set",
      "name": "Carpet Set",
      "level": 9,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "direhowl-s-saddled-harness",
      "name": "Direhowl's Saddled Harness",
      "level": 9,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hot-spring",
      "name": "Hot Spring",
      "level": 9,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "hot-spring"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "killamari-s-gloves",
      "name": "Killamari's Gloves",
      "level": 9,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sandbag",
      "name": "Sandbag",
      "level": 9,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "sandbag"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "tropical-outfit",
      "name": "Tropical Outfit",
      "level": 9,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "tundra-outfit",
      "name": "Tundra Outfit",
      "level": 9,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "bear-trap-small",
      "name": "Bear Trap (Small)",
      "level": 10,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "bear-trap-small"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "feathered-hair-band",
      "name": "Feathered Hair Band",
      "level": 10,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ladder",
      "name": "Ladder",
      "level": 10,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "ladder"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "nail",
      "name": "Nail",
      "level": 10,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "primitive-furnace",
      "name": "Primitive Furnace",
      "level": 10,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "primitive-furnace"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "small-feed-bag",
      "name": "Small Feed Bag",
      "level": 10,
      "points": 1,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 1,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "surfent-saddle",
      "name": "Surfent Saddle",
      "level": 10,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "three-shot-bow",
      "name": "Three Shot Bow",
      "level": 10,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heavy-weight-module",
      "name": "Heavy Weight Module",
      "level": 11,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "high-quality-workbench",
      "name": "High Quality Workbench",
      "level": 11,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "high-quality-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "jolthog-cryst-s-gloves",
      "name": "Jolthog Cryst's Gloves",
      "level": 11,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lifmunk-s-submachine-gun",
      "name": "Lifmunk's Submachine Gun",
      "level": 11,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-axe",
      "name": "Metal Axe",
      "level": 11,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-pickaxe",
      "name": "Metal Pickaxe",
      "level": 11,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-gate",
      "name": "Wooden Gate",
      "level": 11,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "wooden-gate"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-chair-set",
      "name": "Antique Chair Set",
      "level": 12,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "eikthyrdeer-saddle",
      "name": "Eikthyrdeer Saddle",
      "level": 12,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "grappling-gun",
      "name": "Grappling Gun",
      "level": 12,
      "points": 1,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 1,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "grintale-saddle",
      "name": "Grintale Saddle",
      "level": 12,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "meat-cleaver",
      "name": "Meat Cleaver",
      "level": 12,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "medieval-medicine-workbench",
      "name": "Medieval Medicine Workbench",
      "level": 12,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "medieval-medicine-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pelt-armor",
      "name": "Pelt Armor",
      "level": 12,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "tanzee-s-assault-rifle",
      "name": "Tanzee's Assault Rifle",
      "level": 12,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-storage-cabinet-set",
      "name": "Antique Storage Cabinet Set",
      "level": 13,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "chillet-saddle",
      "name": "Chillet Saddle",
      "level": 13,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cooler-box",
      "name": "Cooler Box",
      "level": 13,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "cooler-box"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "crossbow",
      "name": "Crossbow",
      "level": 13,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "human-powered-generator",
      "name": "Human-Powered Generator",
      "level": 13,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "human-powered-generator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-spear",
      "name": "Metal Spear",
      "level": 13,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "training-dummy",
      "name": "Training Dummy",
      "level": 13,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "training-dummy"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-desk-set",
      "name": "Antique Desk Set",
      "level": 14,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mega-sphere",
      "name": "Mega Sphere",
      "level": 14,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "monitoring-stand",
      "name": "Monitoring Stand",
      "level": 14,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "monitoring-stand"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-essence-condenser",
      "name": "Pal Essence Condenser",
      "level": 14,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [
        "pal-essence-condenser"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sphere-workbench",
      "name": "Sphere Workbench",
      "level": 14,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "sphere-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sweepa-saddle",
      "name": "Sweepa Saddle",
      "level": 14,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "univolt-saddle",
      "name": "Univolt Saddle",
      "level": 14,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wall-torch",
      "name": "Wall Torch",
      "level": 14,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "wall-torch"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "beginner-fishing-set",
      "name": "Beginner Fishing Set",
      "level": 15,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fire-arrow-crossbow",
      "name": "Fire Arrow Crossbow",
      "level": 15,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hip-lantern",
      "name": "Hip Lantern",
      "level": 15,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": "Defeat Zoe and Grizzbolt",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mill",
      "name": "Mill",
      "level": 15,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "mill"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "nitewing-saddle",
      "name": "Nitewing Saddle",
      "level": 15,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-expedition-station",
      "name": "Pal Expedition Station",
      "level": 15,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "pal-expedition-station"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "viewing-cage",
      "name": "Viewing Cage",
      "level": 15,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "viewing-cage"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wheat-plantation",
      "name": "Wheat Plantation",
      "level": 15,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "wheat-plantation"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-bath-set",
      "name": "Antique Bath Set",
      "level": 16,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-mirror-set",
      "name": "Antique Mirror Set",
      "level": 16,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "arsox-saddle",
      "name": "Arsox Saddle",
      "level": 16,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heat-resistant-pelt-armor",
      "name": "Heat Resistant Pelt Armor",
      "level": 16,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lockpicking-tool-v1",
      "name": "Lockpicking Tool v1",
      "level": 16,
      "points": 1,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 1,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mega-shield",
      "name": "Mega Shield",
      "level": 16,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-chest",
      "name": "Metal Chest",
      "level": 16,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "metal-chest"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wooden-defensive-wall",
      "name": "Wooden Defensive Wall",
      "level": 16,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "wooden-defensive-wall"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cooking-pot",
      "name": "Cooking Pot",
      "level": 17,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "cooking-pot"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "flopie-s-necklace",
      "name": "Flopie's Necklace",
      "level": 17,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heater",
      "name": "Heater",
      "level": 17,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "heater"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mega-grappling-gun",
      "name": "Mega Grappling Gun",
      "level": 17,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": "Unlock Grappling Gun",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pengullet-s-rocket-launcher",
      "name": "Pengullet's Rocket Launcher",
      "level": 17,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "piano-furniture-set",
      "name": "Piano Furniture Set",
      "level": 17,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "poison-arrow-crossbow",
      "name": "Poison Arrow Crossbow",
      "level": 17,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "tombstone",
      "name": "Tombstone",
      "level": 17,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "tombstone"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "bathroom-set",
      "name": "Bathroom Set",
      "level": 18,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cold-resistant-pelt-armor",
      "name": "Cold Resistant Pelt Armor",
      "level": 18,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cooler",
      "name": "Cooler",
      "level": 18,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "cooler"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mega-glider",
      "name": "Mega Glider",
      "level": 18,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-shelf-set",
      "name": "Metal Shelf Set",
      "level": 18,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ring-of-mercy",
      "name": "Ring of Mercy",
      "level": 18,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stone-structure-set",
      "name": "Stone Structure Set",
      "level": 18,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "tocotoco-s-gloves",
      "name": "Tocotoco's Gloves",
      "level": 18,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-high-quality-furniture-set",
      "name": "Antique High Quality Furniture Set",
      "level": 19,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "average-feed-bag",
      "name": "Average Feed Bag",
      "level": 19,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": "Unlock Small Feed Bag",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "breeding-farm",
      "name": "Breeding Farm",
      "level": 19,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "breeding-farm"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "broncherry-saddle",
      "name": "Broncherry Saddle",
      "level": 19,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cement",
      "name": "Cement",
      "level": 19,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "digtoise-s-headband",
      "name": "Digtoise's Headband",
      "level": 19,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dinossom-saddle",
      "name": "Dinossom Saddle",
      "level": 19,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wall-mounted-sign",
      "name": "Wall-Mounted Sign",
      "level": 19,
      "points": 0,
      "pointType": "technology",
      "technologyPoints": 0,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "wall-mounted-sign"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-couch-set",
      "name": "Antique Couch Set",
      "level": 20,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dimensional-pal-storage",
      "name": "Dimensional Pal Storage",
      "level": 20,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "elphidran-saddle",
      "name": "Elphidran Saddle",
      "level": 20,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "giga-sphere",
      "name": "Giga Sphere",
      "level": 20,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hangyu-s-gloves",
      "name": "Hangyu's Gloves",
      "level": 20,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-toolbox",
      "name": "Large Toolbox",
      "level": 20,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "large-toolbox"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-labor-research-laboratory",
      "name": "Pal Labor Research Laboratory",
      "level": 20,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "pal-labor-research-laboratory"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "weapon-workbench",
      "name": "Weapon Workbench",
      "level": 20,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "weapon-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-dresser",
      "name": "Antique Dresser",
      "level": 21,
      "points": 1,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 1,
      "requirement": null,
      "structureIds": [
        "antique-dresser"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "coarse-ammo",
      "name": "Coarse Ammo",
      "level": 21,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "flame-cauldron",
      "name": "Flame Cauldron",
      "level": 21,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "flame-cauldron"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "gunpowder",
      "name": "Gunpowder",
      "level": 21,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "kingpaca-saddle",
      "name": "Kingpaca Saddle",
      "level": 21,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "musket",
      "name": "Musket",
      "level": 21,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "tomato-plantation",
      "name": "Tomato Plantation",
      "level": 21,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "tomato-plantation"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "vanwyrm-saddle",
      "name": "Vanwyrm Saddle",
      "level": 21,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "bear-trap-large",
      "name": "Bear Trap (Large)",
      "level": 22,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "bear-trap-large"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dazemu-saddle",
      "name": "Dazemu Saddle",
      "level": 22,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dazzi-s-necklace",
      "name": "Dazzi's Necklace",
      "level": 22,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "flea-market-items",
      "name": "Flea Market (Items)",
      "level": 22,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "flea-market-items"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "flea-market-pals",
      "name": "Flea Market (Pals)",
      "level": 22,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "flea-market-pals"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "high-quality-bait",
      "name": "High Quality Bait",
      "level": 22,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "homeward-thundercloud",
      "name": "Homeward Thundercloud",
      "level": 22,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stun-baton",
      "name": "Stun Baton",
      "level": 22,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "curve-module",
      "name": "Curve Module",
      "level": 23,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "galeclaw-s-gloves",
      "name": "Galeclaw's Gloves",
      "level": 23,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "killamari-primo-s-gloves",
      "name": "Killamari Primo's Gloves",
      "level": 23,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-feed-bag",
      "name": "Large Feed Bag",
      "level": 23,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": "Unlock Average Feed Bag",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "maraith-saddle",
      "name": "Maraith Saddle",
      "level": 23,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-armor",
      "name": "Metal Armor",
      "level": 23,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-helm",
      "name": "Metal Helm",
      "level": 23,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "water-fountain",
      "name": "Water Fountain",
      "level": 23,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "water-fountain"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "azurobe-saddle",
      "name": "Azurobe Saddle",
      "level": 24,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "flower-bed",
      "name": "Flower Bed",
      "level": 24,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "flower-bed"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fluffy-pal-bed",
      "name": "Fluffy Pal Bed",
      "level": 24,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "fluffy-pal-bed"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "foxparks-cryst-s-harness",
      "name": "Foxparks Cryst's Harness",
      "level": 24,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "makeshift-handgun",
      "name": "Makeshift Handgun",
      "level": 24,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "medicine-rack",
      "name": "Medicine Rack",
      "level": 24,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "medicine-rack"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mossanda-s-grenade-launcher",
      "name": "Mossanda's Grenade Launcher",
      "level": 24,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ore-mining-site",
      "name": "Ore Mining Site",
      "level": 24,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": "Defeat Lily and Lyleen",
      "structureIds": [
        "ore-mining-site"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "boost-gun",
      "name": "Boost Gun",
      "level": 25,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "boost-gun-ammo",
      "name": "Boost Gun Ammo",
      "level": 25,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "eikthyrdeer-terra-saddle",
      "name": "Eikthyrdeer Terra Saddle",
      "level": 25,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "frag-grenade",
      "name": "Frag Grenade",
      "level": 25,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heat-resistant-metal-armor",
      "name": "Heat Resistant Metal Armor",
      "level": 25,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lettuce-plantation",
      "name": "Lettuce Plantation",
      "level": 25,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "lettuce-plantation"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lockpicking-tool-v2",
      "name": "Lockpicking Tool v2",
      "level": 25,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "silo",
      "name": "Silo",
      "level": 25,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "silo"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "surfent-terra-saddle",
      "name": "Surfent Terra Saddle",
      "level": 25,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "celaray-lux-s-gloves",
      "name": "Celaray Lux's Gloves",
      "level": 26,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fenglope-saddle",
      "name": "Fenglope Saddle",
      "level": 26,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lamp",
      "name": "Lamp",
      "level": 26,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "lamp"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "makeshift-smg",
      "name": "Makeshift SMG",
      "level": 26,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mossanda-lux-s-grenade-launcher",
      "name": "Mossanda Lux's Grenade Launcher",
      "level": 26,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mounted-crossbow",
      "name": "Mounted Crossbow",
      "level": 26,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "mounted-crossbow"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "power-generator",
      "name": "Power Generator",
      "level": 26,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "power-generator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "single-shot-sphere-launcher",
      "name": "Single-shot Sphere Launcher",
      "level": 26,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "broncherry-aqua-saddle",
      "name": "Broncherry Aqua Saddle",
      "level": 27,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ceiling-lamp",
      "name": "Ceiling Lamp",
      "level": 27,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "ceiling-lamp"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cold-resistant-metal-armor",
      "name": "Cold Resistant Metal Armor",
      "level": 27,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "herbil-s-harness",
      "name": "Herbil's Harness",
      "level": 27,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hyper-sphere",
      "name": "Hyper Sphere",
      "level": 27,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "rayhound-saddle",
      "name": "Rayhound Saddle",
      "level": 27,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "shock-grenade",
      "name": "Shock Grenade",
      "level": 27,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "small-pouch",
      "name": "Small Pouch",
      "level": 27,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sphere-assembly-line",
      "name": "Sphere Assembly Line",
      "level": 27,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "sphere-assembly-line"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "anti-gravity-belt",
      "name": "Anti-Gravity Belt",
      "level": 28,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "defensive-wall",
      "name": "Defensive Wall",
      "level": 28,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "defensive-wall"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "elphidran-aqua-saddle",
      "name": "Elphidran Aqua Saddle",
      "level": 28,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "giga-shield",
      "name": "Giga Shield",
      "level": 28,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "handgun",
      "name": "Handgun",
      "level": 28,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "handgun-ammo",
      "name": "Handgun Ammo",
      "level": 28,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "production-assembly-line",
      "name": "Production Assembly Line",
      "level": 28,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "production-assembly-line"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stump-and-axe",
      "name": "Stump and Axe",
      "level": 28,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "stump-and-axe"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "tarantriss-saddle",
      "name": "Tarantriss Saddle",
      "level": 28,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "azurobe-cryst-saddle",
      "name": "Azurobe Cryst Saddle",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "enhanced-hip-lantern",
      "name": "Enhanced Hip Lantern",
      "level": 29,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": "Unlock Hip Lantern",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fine-bed",
      "name": "Fine Bed",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "fine-bed"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ice-grenade",
      "name": "Ice Grenade",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "intermediate-fishing-rod-cattiva",
      "name": "Intermediate Fishing Rod (Cattiva)",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "katana",
      "name": "Katana",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mammorest-saddle",
      "name": "Mammorest Saddle",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "potato-plantation",
      "name": "Potato Plantation",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "potato-plantation"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "reindrix-saddle",
      "name": "Reindrix Saddle",
      "level": 29,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dinossom-lux-saddle",
      "name": "Dinossom Lux Saddle",
      "level": 30,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "kitsun-saddle",
      "name": "Kitsun Saddle",
      "level": 30,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "makeshift-shotgun",
      "name": "Makeshift Shotgun",
      "level": 30,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "meowmere",
      "name": "Meowmere",
      "level": 30,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-structure-set",
      "name": "Metal Structure Set",
      "level": 30,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mine",
      "name": "Mine",
      "level": 30,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "mine"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pickaxe-and-helmet",
      "name": "Pickaxe and Helmet",
      "level": 30,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "vanwyrm-cryst-saddle",
      "name": "Vanwyrm Cryst Saddle",
      "level": 30,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fishing-pond",
      "name": "Fishing Pond",
      "level": 31,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "fishing-pond"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "giga-grappling-gun",
      "name": "Giga Grappling Gun",
      "level": 31,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": "Unlock Mega Grappling Gun",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hangyu-cryst-s-glove",
      "name": "Hangyu Cryst's Glove",
      "level": 31,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "high-quality-hot-spring",
      "name": "High Quality Hot Spring",
      "level": 31,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "high-quality-hot-spring"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "incendiary-grenade",
      "name": "Incendiary Grenade",
      "level": 31,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "makeshift-assault-rifle",
      "name": "Makeshift Assault Rifle",
      "level": 31,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pyrin-saddle",
      "name": "Pyrin Saddle",
      "level": 31,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sniper-module",
      "name": "Sniper Module",
      "level": 31,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "stone-gate",
      "name": "Stone Gate",
      "level": 31,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "stone-gate"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "carrot-plantation",
      "name": "Carrot Plantation",
      "level": 32,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "carrot-plantation"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "compound-bow",
      "name": "Compound Bow",
      "level": 32,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-recovery-grenade",
      "name": "Pal Recovery Grenade",
      "level": 32,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "palbox-control-device",
      "name": "Palbox Control Device",
      "level": 32,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "palbox-control-device"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "reinforced-arrow",
      "name": "Reinforced Arrow",
      "level": 32,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "reptyro-saddle",
      "name": "Reptyro Saddle",
      "level": 32,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ultrakill-collab-set-1",
      "name": "ULTRAKILL Collab Set 1",
      "level": 32,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "weapon-assembly-line",
      "name": "Weapon Assembly Line",
      "level": 32,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "weapon-assembly-line"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "witch-cauldron",
      "name": "Witch Cauldron",
      "level": 32,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "witch-cauldron"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "blazehowl-saddle",
      "name": "Blazehowl Saddle",
      "level": 33,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "clock-set",
      "name": "Clock Set",
      "level": 33,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-mine",
      "name": "Electric Mine",
      "level": 33,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "electric-mine"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "helzephyr-saddle",
      "name": "Helzephyr Saddle",
      "level": 33,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "old-revolver",
      "name": "Old Revolver",
      "level": 33,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "polymer",
      "name": "Polymer",
      "level": 33,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "snowman",
      "name": "Snowman",
      "level": 33,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "snowman"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "summoning-altar",
      "name": "Summoning Altar",
      "level": 33,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": null,
      "structureIds": [
        "summoning-altar"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "water-grenade",
      "name": "Water Grenade",
      "level": 33,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ability-glasses",
      "name": "Ability Glasses",
      "level": 34,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "beakon-saddle",
      "name": "Beakon Saddle",
      "level": 34,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "improved-furnace",
      "name": "Improved Furnace",
      "level": 34,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "improved-furnace"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "polapup-s-harness",
      "name": "Polapup's Harness",
      "level": 34,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pyrin-noct-saddle",
      "name": "Pyrin Noct Saddle",
      "level": 34,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refined-metal-axe",
      "name": "Refined Metal Axe",
      "level": 34,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refined-metal-pickaxe",
      "name": "Refined Metal Pickaxe",
      "level": 34,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refined-metal-spear",
      "name": "Refined Metal Spear",
      "level": 34,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "storage-container-set",
      "name": "Storage Container Set",
      "level": 34,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "air-dash-boots",
      "name": "Air Dash Boots",
      "level": 35,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "blazehowl-noct-saddle",
      "name": "Blazehowl Noct Saddle",
      "level": 35,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "carbon-fiber",
      "name": "Carbon Fiber",
      "level": 35,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "circuit-board",
      "name": "Circuit Board",
      "level": 35,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "grass-grenade",
      "name": "Grass Grenade",
      "level": 35,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-chair-and-desk-set",
      "name": "Metal Chair and Desk Set",
      "level": 35,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sphere-assembly-line-ii",
      "name": "Sphere Assembly Line II",
      "level": 35,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "sphere-assembly-line-ii"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ultra-sphere",
      "name": "Ultra Sphere",
      "level": 35,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "whalaska-saddle",
      "name": "Whalaska Saddle",
      "level": 35,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "antique-lamp-set",
      "name": "Antique Lamp Set",
      "level": 36,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "high-quality-cloth",
      "name": "High Quality Cloth",
      "level": 36,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "huge-feed-bag",
      "name": "Huge Feed Bag",
      "level": 36,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": "Unlock Large Feed Bag",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-pal-bed",
      "name": "Large Pal Bed",
      "level": 36,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "large-pal-bed"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "onion-plantation",
      "name": "Onion Plantation",
      "level": 36,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "onion-plantation"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-surgery-table",
      "name": "Pal Surgery Table",
      "level": 36,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "pal-surgery-table"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "quivern-saddle",
      "name": "Quivern Saddle",
      "level": 36,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "rifle-ammo",
      "name": "Rifle Ammo",
      "level": 36,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "single-shot-rifle",
      "name": "Single-shot Rifle",
      "level": 36,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "accumulator",
      "name": "Accumulator",
      "level": 37,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "accumulator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-egg-incubator",
      "name": "Electric Egg Incubator",
      "level": 37,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": null,
      "structureIds": [
        "electric-egg-incubator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ghangler-saddle",
      "name": "Ghangler Saddle",
      "level": 37,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ironwood-table-set",
      "name": "Ironwood Table Set",
      "level": 37,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ragnahawk-saddle",
      "name": "Ragnahawk Saddle",
      "level": 37,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refined-metal-armor",
      "name": "Refined Metal Armor",
      "level": 37,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refined-metal-helm",
      "name": "Refined Metal Helm",
      "level": 37,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "smg",
      "name": "SMG",
      "level": 37,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "deluxe-bait",
      "name": "Deluxe Bait",
      "level": 38,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "faleris-saddle",
      "name": "Faleris Saddle",
      "level": 38,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ground-grenade",
      "name": "Ground Grenade",
      "level": 38,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ice-mine",
      "name": "Ice Mine",
      "level": 38,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "ice-mine"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "meteor-launcher",
      "name": "Meteor Launcher",
      "level": 38,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "outdoor-furniture-set",
      "name": "Outdoor Furniture Set",
      "level": 38,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refrigerator",
      "name": "Refrigerator",
      "level": 38,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "refrigerator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "reptyro-cryst-saddle",
      "name": "Reptyro Cryst Saddle",
      "level": 38,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "scatter-sphere-launcher",
      "name": "Scatter Sphere Launcher",
      "level": 38,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "double-barreled-shotgun",
      "name": "Double-barreled Shotgun",
      "level": 39,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "glass-structure-set",
      "name": "Glass Structure Set",
      "level": 39,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "jormuntide-saddle",
      "name": "Jormuntide Saddle",
      "level": 39,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-barrel-set",
      "name": "Metal Barrel Set",
      "level": 39,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ore-mining-site-ii",
      "name": "Ore Mining Site II",
      "level": 39,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": null,
      "structureIds": [
        "ore-mining-site-ii"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pengullet-lux-s-rocket-launcher",
      "name": "Pengullet Lux's Rocket Launcher",
      "level": 39,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refined-metal-chest",
      "name": "Refined Metal Chest",
      "level": 39,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "refined-metal-chest"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "shotgun-shell",
      "name": "Shotgun Shell",
      "level": 39,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "slider-module",
      "name": "Slider Module",
      "level": 39,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "blazamut",
      "name": "Blazamut",
      "level": 40,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dark-grenade",
      "name": "Dark Grenade",
      "level": 40,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "double-jump-boots",
      "name": "Double Jump Boots",
      "level": 40,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "giga-glider",
      "name": "Giga Glider",
      "level": 40,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "grizzbolt-s-minigun",
      "name": "Grizzbolt's Minigun",
      "level": 40,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heat-resistant-refined-metal-armor",
      "name": "Heat Resistant Refined Metal Armor",
      "level": 40,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "leather-chair-set",
      "name": "Leather Chair Set",
      "level": 40,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mounted-machine-gun",
      "name": "Mounted Machine Gun",
      "level": 40,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "mounted-machine-gun"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "alpha-wave-generator",
      "name": "Alpha Wave Generator",
      "level": 41,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "alpha-wave-generator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cold-resistant-refined-metal-armor",
      "name": "Cold Resistant Refined Metal Armor",
      "level": 41,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-heater",
      "name": "Electric Heater",
      "level": 41,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "electric-heater"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-kitchen",
      "name": "Electric Kitchen",
      "level": 41,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "electric-kitchen"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "guild-chest",
      "name": "Guild Chest",
      "level": 41,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "semi-auto-rifle",
      "name": "Semi-Auto Rifle",
      "level": 41,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "street-lamp-set",
      "name": "Street Lamp Set",
      "level": 41,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "suzaku",
      "name": "Suzaku",
      "level": 41,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "amusement-furniture-set",
      "name": "Amusement Furniture Set",
      "level": 42,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "coal-mine",
      "name": "Coal Mine",
      "level": 42,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": "Defeat Axel and Orserk",
      "structureIds": [
        "coal-mine"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dragon-grenade",
      "name": "Dragon Grenade",
      "level": 42,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-cooler",
      "name": "Electric Cooler",
      "level": 42,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "electric-cooler"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "emergency-exit-sign-set",
      "name": "Emergency Exit Sign Set",
      "level": 42,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "iron-gate",
      "name": "Iron Gate",
      "level": 42,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "iron-gate"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "kingpaca-cryst-saddle",
      "name": "Kingpaca Cryst Saddle",
      "level": 42,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "palumba-saddle",
      "name": "Palumba Saddle",
      "level": 42,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "production-assembly-line-ii",
      "name": "Production Assembly Line II",
      "level": 42,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "production-assembly-line-ii"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-medicine-workbench",
      "name": "Electric Medicine Workbench",
      "level": 43,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "electric-medicine-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hyper-shield",
      "name": "Hyper Shield",
      "level": 43,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "jormuntide-ignis-saddle",
      "name": "Jormuntide Ignis Saddle",
      "level": 43,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "medium-pouch",
      "name": "Medium Pouch",
      "level": 43,
      "points": 2,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 2,
      "requirement": "Unlock Small Pouch",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-defensive-wall",
      "name": "Metal Defensive Wall",
      "level": 43,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "metal-defensive-wall"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pump-action-shotgun",
      "name": "Pump-Action Shotgun",
      "level": 43,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "suzaku-aqua-saddle",
      "name": "Suzaku Aqua Saddle",
      "level": 43,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "yakumo-saddle",
      "name": "Yakumo Saddle",
      "level": 43,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-furnace",
      "name": "Electric Furnace",
      "level": 44,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "electric-furnace"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "legendary-sphere",
      "name": "Legendary Sphere",
      "level": 44,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lily-s-spear",
      "name": "Lily's Spear",
      "level": 44,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": "Defeat Lily and Lyleen",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-metal-axe",
      "name": "Pal Metal Axe",
      "level": 44,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-metal-pickaxe",
      "name": "Pal Metal Pickaxe",
      "level": 44,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "relaxaurus-s-missile-launcher",
      "name": "Relaxaurus's Missile Launcher",
      "level": 44,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sword",
      "name": "Sword",
      "level": 44,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wumpo-saddle",
      "name": "Wumpo Saddle",
      "level": 44,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-fishing-rod-pengullet",
      "name": "Advanced Fishing Rod (Pengullet)",
      "level": 45,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "assault-rifle",
      "name": "Assault Rifle",
      "level": 45,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "assault-rifle-ammo",
      "name": "Assault Rifle Ammo",
      "level": 45,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "chillet-ignis-saddle",
      "name": "Chillet Ignis Saddle",
      "level": 45,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "decal-gun-set",
      "name": "Decal Gun Set",
      "level": 45,
      "points": 1,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 1,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "drafting-table",
      "name": "Drafting Table",
      "level": 45,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "drafting-table"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "mammorest-cryst-saddle",
      "name": "Mammorest Cryst Saddle",
      "level": 45,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "traffic-control-set",
      "name": "Traffic Control Set",
      "level": 45,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "wumpo-botan-saddle",
      "name": "Wumpo Botan Saddle",
      "level": 45,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "beta-wave-generator",
      "name": "Beta Wave Generator",
      "level": 46,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "beta-wave-generator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "braloha-saddle",
      "name": "Braloha Saddle",
      "level": 46,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-mounted-lamp",
      "name": "Large Mounted Lamp",
      "level": 46,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "large-mounted-lamp"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-metal-armor",
      "name": "Pal Metal Armor",
      "level": 46,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-metal-helm",
      "name": "Pal Metal Helm",
      "level": 46,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "relaxaurus-lux-s-missile-launcher",
      "name": "Relaxaurus Lux's Missile Launcher",
      "level": 46,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "road-sign-set",
      "name": "Road Sign Set",
      "level": 46,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "shroomer-saddle",
      "name": "Shroomer Saddle",
      "level": 46,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sulfur-mine",
      "name": "Sulfur Mine",
      "level": 46,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": "Defeat Marcus and Faleris",
      "structureIds": [
        "sulfur-mine"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "astegon-saddle",
      "name": "Astegon Saddle",
      "level": 47,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "giant-feed-bag",
      "name": "Giant Feed Bag",
      "level": 47,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": "Unlock Huge Feed Bag",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-ceiling-lamp",
      "name": "Large Ceiling Lamp",
      "level": 47,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "large-ceiling-lamp"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "semi-auto-shotgun",
      "name": "Semi-Auto Shotgun",
      "level": 47,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "shadowbeak-saddle",
      "name": "Shadowbeak Saddle",
      "level": 47,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "shroomer-noct-saddle",
      "name": "Shroomer Noct Saddle",
      "level": 47,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "sniper-module-ii",
      "name": "Sniper Module II",
      "level": 47,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "weapon-assembly-line-ii",
      "name": "Weapon Assembly Line II",
      "level": 47,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "weapon-assembly-line-ii"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "barricade-set",
      "name": "Barricade Set",
      "level": 48,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "electric-pylon",
      "name": "Electric Pylon",
      "level": 48,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "electric-pylon"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "frostallion-noct-saddle",
      "name": "Frostallion Noct Saddle",
      "level": 48,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "frostallion-saddle",
      "name": "Frostallion Saddle",
      "level": 48,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "gold-coin-assembly-line",
      "name": "Gold Coin Assembly Line",
      "level": 48,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "gold-coin-assembly-line"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heat-resistant-pal-metal-armor",
      "name": "Heat Resistant Pal Metal Armor",
      "level": 48,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-incubator",
      "name": "Large Incubator",
      "level": 48,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": null,
      "structureIds": [
        "large-incubator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "skillfruit-orchard",
      "name": "Skillfruit Orchard",
      "level": 48,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "skillfruit-orchard"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hyper-grappling-gun",
      "name": "Hyper Grappling Gun",
      "level": 49,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": "Unlock Giga Grappling Gun",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "item-retrieval-machine",
      "name": "Item Retrieval Machine",
      "level": 49,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-scale-stone-oven",
      "name": "Large-Scale Stone Oven",
      "level": 49,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "large-scale-stone-oven"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "necromus-saddle",
      "name": "Necromus Saddle",
      "level": 49,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "paladius-saddle",
      "name": "Paladius Saddle",
      "level": 49,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "quivern-botan-saddle",
      "name": "Quivern Botan Saddle",
      "level": 49,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "rocket-ammo",
      "name": "Rocket Ammo",
      "level": 49,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "rocket-launcher",
      "name": "Rocket Launcher",
      "level": 49,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cold-resistant-pal-metal-armor",
      "name": "Cold Resistant Pal Metal Armor",
      "level": 50,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "crude-oil-extractor",
      "name": "Crude Oil Extractor",
      "level": 50,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "crude-oil-extractor"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "japanese-style-structure-set",
      "name": "Japanese-Style Structure Set",
      "level": 50,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "jetragon-s-missile-launcher",
      "name": "Jetragon's Missile Launcher",
      "level": 50,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-power-generator",
      "name": "Large Power Generator",
      "level": 50,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": null,
      "structureIds": [
        "large-power-generator"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "plasteel",
      "name": "Plasteel",
      "level": 50,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "xenogard-saddle",
      "name": "Xenogard Saddle",
      "level": 50,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cold-food-box",
      "name": "Cold Food Box",
      "level": 51,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "cold-food-box"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "dazzi-noct-s-necklace",
      "name": "Dazzi Noct's Necklace",
      "level": 51,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "energy-cartridge",
      "name": "Energy Cartridge",
      "level": 51,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "laser-rifle",
      "name": "Laser Rifle",
      "level": 51,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "plasteel-armor",
      "name": "Plasteel Armor",
      "level": 51,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "plasteel-helmet",
      "name": "Plasteel Helmet",
      "level": 51,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pure-quartz-mine",
      "name": "Pure Quartz Mine",
      "level": 51,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": "Defeat Victor and Shadowbeak",
      "structureIds": [
        "pure-quartz-mine"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ultimate-sphere",
      "name": "Ultimate Sphere",
      "level": 51,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "alluring-bait",
      "name": "Alluring Bait",
      "level": 52,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "fenglope-lux-saddle",
      "name": "Fenglope Lux Saddle",
      "level": 52,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "flamethrower",
      "name": "Flamethrower",
      "level": 52,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "flamethrower-fuel",
      "name": "Flamethrower Fuel",
      "level": 52,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "helzephyr-lux-saddle",
      "name": "Helzephyr Lux Saddle",
      "level": 52,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hyper-glider",
      "name": "Hyper Glider",
      "level": 52,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lockpicking-tool-v3",
      "name": "Lockpicking Tool v3",
      "level": 52,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "refrigerated-crusher",
      "name": "Refrigerated Crusher",
      "level": 52,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "refrigerated-crusher"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "frag-grenade-mk2",
      "name": "Frag Grenade Mk2",
      "level": 53,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "grenade-ammo",
      "name": "Grenade Ammo",
      "level": 53,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "grenade-launcher",
      "name": "Grenade Launcher",
      "level": 53,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heat-resistant-plasteel-armor",
      "name": "Heat Resistant Plasteel Armor",
      "level": 53,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "kitsun-noct-saddle",
      "name": "Kitsun Noct Saddle",
      "level": 53,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-pouch",
      "name": "Large Pouch",
      "level": 53,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": "Unlock Medium Pouch",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "nyafia-s-shotgun",
      "name": "Nyafia's Shotgun",
      "level": 53,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "selyne-saddle",
      "name": "Selyne Saddle",
      "level": 53,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cold-resistant-plasteel-armor",
      "name": "Cold Resistant Plasteel Armor",
      "level": 54,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "double-air-dash-boots",
      "name": "Double Air Dash Boots",
      "level": 54,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": "Defeat Saya and Selyne",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "gatling-gun",
      "name": "Gatling Gun",
      "level": 54,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "gatling-gun-ammo",
      "name": "Gatling Gun Ammo",
      "level": 54,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "gildane-saddle",
      "name": "Gildane Saddle",
      "level": 54,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "japanese-style-furniture-set",
      "name": "Japanese-Style Furniture Set",
      "level": 54,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-disassembly-conveyor",
      "name": "Pal Disassembly Conveyor",
      "level": 54,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "pal-disassembly-conveyor"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "blazamut-ryu-saddle",
      "name": "Blazamut Ryu Saddle",
      "level": 55,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "faleris-aqua-saddle",
      "name": "Faleris Aqua Saddle",
      "level": 55,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "guided-missile-launcher",
      "name": "Guided Missile Launcher",
      "level": 55,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "homing-sphere-launcher",
      "name": "Homing Sphere Launcher",
      "level": 55,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-fishing-pond",
      "name": "Large Fishing Pond",
      "level": 55,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "large-fishing-pond"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lightweight-plasteel-armor",
      "name": "Lightweight Plasteel Armor",
      "level": 55,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "missile-ammo",
      "name": "Missile Ammo",
      "level": 55,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ultra-shield",
      "name": "Ultra Shield",
      "level": 55,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-sphere-assembly-line",
      "name": "Advanced Sphere Assembly Line",
      "level": 56,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "advanced-sphere-assembly-line"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "azurmane-saddle",
      "name": "Azurmane Saddle",
      "level": 56,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "exotic-sphere",
      "name": "Exotic Sphere",
      "level": 56,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "gigantic-furnace",
      "name": "Gigantic Furnace",
      "level": 56,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "gigantic-furnace"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hexolite",
      "name": "Hexolite",
      "level": 56,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "metal-detector",
      "name": "Metal Detector",
      "level": 56,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "smokie-s-harness",
      "name": "Smokie's Harness",
      "level": 56,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ultrakill-collab-set-2",
      "name": "ULTRAKILL Collab Set 2",
      "level": 56,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-arrow",
      "name": "Advanced Arrow",
      "level": 57,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-bow",
      "name": "Advanced Bow",
      "level": 57,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "beam-sword",
      "name": "Beam Sword",
      "level": 57,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "giant-pouch",
      "name": "Giant Pouch",
      "level": 57,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": "Unlock Large Pouch",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hexolite-armor",
      "name": "Hexolite Armor",
      "level": 57,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "homing-module",
      "name": "Homing Module",
      "level": 57,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-pod",
      "name": "Pal Pod",
      "level": 57,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "starryon-saddle",
      "name": "Starryon Saddle",
      "level": 57,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-chest",
      "name": "Advanced Chest",
      "level": 58,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "advanced-chest"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "celesdir-saddle",
      "name": "Celesdir Saddle",
      "level": 58,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hexolite-helmet",
      "name": "Hexolite Helmet",
      "level": 58,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "laser-gatling-cartridge",
      "name": "Laser Gatling Cartridge",
      "level": 58,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "laser-gatling-gun",
      "name": "Laser Gatling Gun",
      "level": 58,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "silvegis-saddle",
      "name": "Silvegis Saddle",
      "level": 58,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "triple-jump-boots",
      "name": "Triple Jump Boots",
      "level": 58,
      "points": 3,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 3,
      "requirement": "Defeat Bjorn and Bastigor",
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-medicine-workbench",
      "name": "Advanced Medicine Workbench",
      "level": 59,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "advanced-medicine-workbench"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-recovery-meds",
      "name": "Advanced Recovery Meds",
      "level": 59,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "bastigor-s-hammer",
      "name": "Bastigor's Hammer",
      "level": 59,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "cold-resistant-hexolite-armor",
      "name": "Cold Resistant Hexolite Armor",
      "level": 59,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "heat-resistant-hexolite-armor",
      "name": "Heat Resistant Hexolite Armor",
      "level": 59,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "revival-potion",
      "name": "Revival Potion",
      "level": 59,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-shield",
      "name": "Advanced Shield",
      "level": 60,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "large-scale-electric-egg-incubator",
      "name": "Large-Scale Electric Egg Incubator",
      "level": 60,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "lightweight-hexolite-armor",
      "name": "Lightweight Hexolite Armor",
      "level": 60,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "plasma-cannon",
      "name": "Plasma Cannon",
      "level": 60,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "plasma-cartridge",
      "name": "Plasma Cartridge",
      "level": 60,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "xenolord-saddle",
      "name": "Xenolord Saddle",
      "level": 60,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-civilization-workshop",
      "name": "Advanced Civilization Workshop",
      "level": 61,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "coralum-ingot",
      "name": "Coralum Ingot",
      "level": 61,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "futuristic-structure-set",
      "name": "Futuristic Structure Set",
      "level": 61,
      "points": 2,
      "pointType": "technology",
      "technologyPoints": 2,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ghangler-ignis-saddle",
      "name": "Ghangler Ignis Saddle",
      "level": 61,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hexolite-quartz-mine",
      "name": "Hexolite Quartz Mine",
      "level": 61,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "powerful-fishing-magnet",
      "name": "Powerful Fishing Magnet",
      "level": 61,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "advanced-civilization-weapon-assembly-line",
      "name": "Advanced Civilization Weapon Assembly Line",
      "level": 62,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "energy-shotgun",
      "name": "Energy Shotgun",
      "level": 62,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "energy-shotgun-ammo",
      "name": "Energy Shotgun Ammo",
      "level": 62,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "japanese-style-hotspring",
      "name": "Japanese-Style Hotspring",
      "level": 62,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [
        "japanese-style-hotspring"
      ],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "triple-air-dash-boots",
      "name": "Triple Air Dash Boots",
      "level": 62,
      "points": 4,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 4,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "whalaska-ignis-saddle",
      "name": "Whalaska Ignis Saddle",
      "level": 62,
      "points": 4,
      "pointType": "technology",
      "technologyPoints": 4,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "free-pal-alliance-flag-set",
      "name": "Free Pal Alliance Flag Set",
      "level": 63,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "megaboost-gun",
      "name": "Megaboost Gun",
      "level": 63,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "neptilius-saddle",
      "name": "Neptilius Saddle",
      "level": 63,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "rayne-syndicate-flag-set",
      "name": "Rayne Syndicate Flag Set",
      "level": 63,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "ultra-grappling-gun",
      "name": "Ultra Grappling Gun",
      "level": 63,
      "points": 5,
      "pointType": "ancient",
      "technologyPoints": 0,
      "ancientPoints": 5,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "brothers-of-the-eternal-pyre-flag-set",
      "name": "Brothers of the Eternal Pyre Flag Set",
      "level": 64,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "overheat-rifle",
      "name": "Overheat Rifle",
      "level": 64,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "overheat-rifle-ammo",
      "name": "Overheat Rifle Ammo",
      "level": 64,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pidf-flag-set",
      "name": "PIDF Flag Set",
      "level": 64,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "charge-rifle",
      "name": "Charge Rifle",
      "level": 65,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "charge-rifle-ammo",
      "name": "Charge Rifle Ammo",
      "level": 65,
      "points": 1,
      "pointType": "technology",
      "technologyPoints": 1,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "hartalis-saddle",
      "name": "Hartalis Saddle",
      "level": 65,
      "points": 5,
      "pointType": "technology",
      "technologyPoints": 5,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "moonflower-flag-set",
      "name": "Moonflower Flag Set",
      "level": 65,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    },
    {
      "id": "pal-genetic-research-unit-flag-set",
      "name": "PAL Genetic Research Unit Flag Set",
      "level": 65,
      "points": 3,
      "pointType": "technology",
      "technologyPoints": 3,
      "ancientPoints": 0,
      "requirement": null,
      "structureIds": [],
      "sourcePage": "Technology",
      "sourceUrl": "https://palworld.wiki.gg/wiki/Technology"
    }
  ]
};
