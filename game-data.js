// Axis & Allies Revised (2004) — verified game data
// Source: official rulebook (axisallies.com/rules/axis-allies-rules-revised.pdf)
//         + TripleA world_war_ii_revised/ww2v2.xml (cross-checked, not trusted blindly)
// All unit costs/stats, starting IPCs, territory income, and 12 victory cities
// have been verified against the published rulebook and official setup chart.

const GAME_DATA = {
  "meta": {
    "edition": "Axis & Allies Revised (2004)",
    "source": "Cross-verified against official rulebook (axisallies.com/rules/axis-allies-rules-revised.pdf) and TripleA world_war_ii_revised/ww2v2.xml",
    "victoryConditions": {
      "minor": 8,
      "major": 10,
      "total": 12
    }
  },
  "players": [
    {
      "id": "Russians",
      "name": "Soviet Union",
      "color": "#8B2E2E",
      "startingIPC": 24,
      "side": "Allies"
    },
    {
      "id": "Germans",
      "name": "Germany",
      "color": "#5A5A5A",
      "startingIPC": 40,
      "side": "Axis"
    },
    {
      "id": "British",
      "name": "United Kingdom",
      "color": "#C4A567",
      "startingIPC": 30,
      "side": "Allies"
    },
    {
      "id": "Japanese",
      "name": "Japan",
      "color": "#D4822A",
      "startingIPC": 30,
      "side": "Axis"
    },
    {
      "id": "Americans",
      "name": "United States",
      "color": "#5A7A3A",
      "startingIPC": 42,
      "side": "Allies"
    }
  ],
  "units": {
    "infantry": {
      "id": "infantry",
      "attack": 1,
      "defense": 2,
      "movement": 1,
      "isSea": false,
      "isAir": false,
      "artillerySupportable": true,
      "isInfantry": true,
      "cost": 3
    },
    "artillery": {
      "id": "artillery",
      "attack": 2,
      "defense": 2,
      "movement": 1,
      "isSea": false,
      "isAir": false,
      "artillery": true,
      "cost": 4
    },
    "armour": {
      "id": "armour",
      "attack": 3,
      "defense": 3,
      "movement": 2,
      "isSea": false,
      "isAir": false,
      "canBlitz": true,
      "cost": 5
    },
    "fighter": {
      "id": "fighter",
      "attack": 3,
      "defense": 4,
      "movement": 4,
      "isSea": false,
      "isAir": true,
      "cost": 10
    },
    "bomber": {
      "id": "bomber",
      "attack": 4,
      "defense": 1,
      "movement": 6,
      "isSea": false,
      "isAir": true,
      "cost": 15
    },
    "transport": {
      "id": "transport",
      "attack": 0,
      "defense": 1,
      "movement": 2,
      "isSea": true,
      "isAir": false,
      "transportCapacity": 5,
      "cost": 8
    },
    "battleship": {
      "id": "battleship",
      "attack": 4,
      "defense": 4,
      "movement": 2,
      "isSea": true,
      "isAir": false,
      "canBombard": true,
      "hitPoints": 2,
      "cost": 24
    },
    "destroyer": {
      "id": "destroyer",
      "attack": 3,
      "defense": 3,
      "movement": 2,
      "isSea": true,
      "isAir": false,
      "isDestroyer": true,
      "cost": 12
    },
    "carrier": {
      "id": "carrier",
      "attack": 1,
      "defense": 3,
      "movement": 2,
      "isSea": true,
      "isAir": false,
      "carrierCapacity": 2,
      "cost": 16
    },
    "submarine": {
      "id": "submarine",
      "attack": 2,
      "defense": 2,
      "movement": 2,
      "isSea": true,
      "isAir": false,
      "isSub": true,
      "cost": 8
    },
    "factory": {
      "id": "factory",
      "attack": 0,
      "defense": 0,
      "movement": 0,
      "isSea": false,
      "isAir": false,
      "isFactory": true,
      "cost": 15
    },
    "aaGun": {
      "id": "aaGun",
      "attack": 0,
      "defense": 0,
      "movement": 1,
      "isSea": false,
      "isAir": false,
      "isAA": true,
      "cost": 5
    }
  },
  "territories": {
    "Eastern Canada": {
      "name": "Eastern Canada",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "1 Sea Zone",
        "9 Sea Zone",
        "Eastern United States",
        "Western Canada"
      ]
    },
    "Germany": {
      "name": "Germany",
      "isSea": false,
      "income": 10,
      "isVictoryCity": true,
      "capitalOf": "Germans",
      "originalOwner": "Germans",
      "connections": [
        "Switzerland",
        "5 Sea Zone",
        "Western Europe",
        "Southern Europe",
        "Balkans",
        "Eastern Europe"
      ]
    },
    "Midway": {
      "name": "Midway",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "56 Sea Zone"
      ]
    },
    "Greenland": {
      "name": "Greenland",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "2 Sea Zone"
      ]
    },
    "Union of South Africa": {
      "name": "Union of South Africa",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Angola",
        "Mozambique",
        "27 Sea Zone",
        "28 Sea Zone",
        "Kenya"
      ]
    },
    "Australia": {
      "name": "Australia",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "38 Sea Zone",
        "39 Sea Zone",
        "40 Sea Zone",
        "46 Sea Zone"
      ]
    },
    "Kenya": {
      "name": "Kenya",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Angola",
        "Mozambique",
        "33 Sea Zone",
        "Belgian Congo",
        "Italian East Africa",
        "Union of South Africa"
      ]
    },
    "Manchuria": {
      "name": "Manchuria",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "Mongolia",
        "61 Sea Zone",
        "Buryatia S.S.R.",
        "China",
        "Kwantung"
      ]
    },
    "Alaska": {
      "name": "Alaska",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "63 Sea Zone",
        "64 Sea Zone",
        "Western Canada"
      ]
    },
    "Persia": {
      "name": "Persia",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Afghanistan",
        "Turkey",
        "34 Sea Zone",
        "Caucasus",
        "Kazakh S.S.R.",
        "India",
        "Trans-Jordan"
      ]
    },
    "French West Africa": {
      "name": "French West Africa",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Sahara",
        "Rio De Oro",
        "17 Sea Zone",
        "French Equatorial Africa"
      ]
    },
    "Turkey": {
      "name": "Turkey",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "15 Sea Zone",
        "16 Sea Zone",
        "Caucasus",
        "Persia",
        "Trans-Jordan"
      ]
    },
    "Belgian Congo": {
      "name": "Belgian Congo",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Angola",
        "23 Sea Zone",
        "Anglo Egypt",
        "French Equatorial Africa",
        "Italian East Africa",
        "Kenya"
      ]
    },
    "India": {
      "name": "India",
      "isSea": false,
      "income": 3,
      "isVictoryCity": true,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Afghanistan",
        "Himalaya",
        "35 Sea Zone",
        "French Indochina",
        "Persia"
      ]
    },
    "Soviet Far East": {
      "name": "Soviet Far East",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "62 Sea Zone",
        "Yakut S.S.R.",
        "Buryatia S.S.R."
      ]
    },
    "Southern Europe": {
      "name": "Southern Europe",
      "isSea": false,
      "income": 6,
      "isVictoryCity": true,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "Switzerland",
        "14 Sea Zone",
        "Western Europe",
        "Germany",
        "Balkans"
      ]
    },
    "Mexico": {
      "name": "Mexico",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "54 Sea Zone",
        "Western United States",
        "Central United States",
        "Panama"
      ]
    },
    "Spain": {
      "name": "Spain",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "12 Sea Zone",
        "13 Sea Zone",
        "Gibraltar",
        "Western Europe"
      ]
    },
    "Afghanistan": {
      "name": "Afghanistan",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Kazakh S.S.R.",
        "Himalaya",
        "India",
        "Persia"
      ]
    },
    "Philipine Islands": {
      "name": "Philipine Islands",
      "isSea": false,
      "income": 3,
      "isVictoryCity": true,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "49 Sea Zone"
      ]
    },
    "Archangel": {
      "name": "Archangel",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "4 Sea Zone",
        "Karelia S.S.R.",
        "West Russia",
        "Russia"
      ]
    },
    "Novosibirsk": {
      "name": "Novosibirsk",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "Mongolia",
        "Russia",
        "Kazakh S.S.R.",
        "Evenki National Okrug",
        "Yakut S.S.R.",
        "Sinkiang"
      ]
    },
    "Eire": {
      "name": "Eire",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "2 Sea Zone",
        "United Kingdom"
      ]
    },
    "Mozambique": {
      "name": "Mozambique",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "33 Sea Zone",
        "Kenya",
        "Union of South Africa"
      ]
    },
    "Italian East Africa": {
      "name": "Italian East Africa",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "34 Sea Zone",
        "Anglo Egypt",
        "Belgian Congo",
        "Kenya"
      ]
    },
    "Eastern Europe": {
      "name": "Eastern Europe",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "5 Sea Zone",
        "Germany",
        "Balkans",
        "Ukraine S.S.R.",
        "Belorussia",
        "Karelia S.S.R."
      ]
    },
    "Western United States": {
      "name": "Western United States",
      "isSea": false,
      "income": 10,
      "isVictoryCity": true,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "54 Sea Zone",
        "55 Sea Zone",
        "Central United States",
        "Mexico",
        "Western Canada"
      ]
    },
    "Karelia S.S.R.": {
      "name": "Karelia S.S.R.",
      "isSea": false,
      "income": 2,
      "isVictoryCity": true,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "4 Sea Zone",
        "5 Sea Zone",
        "Eastern Europe",
        "Norway",
        "Belorussia",
        "Archangel",
        "West Russia"
      ]
    },
    "Kwantung": {
      "name": "Kwantung",
      "isSea": false,
      "income": 3,
      "isVictoryCity": true,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "59 Sea Zone",
        "Manchuria",
        "China",
        "French Indochina"
      ]
    },
    "Brazil": {
      "name": "Brazil",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "Venezuela",
        "Peru",
        "Argentina",
        "18 Sea Zone",
        "22 Sea Zone"
      ]
    },
    "Borneo": {
      "name": "Borneo",
      "isSea": false,
      "income": 4,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "48 Sea Zone"
      ]
    },
    "French Madagascar": {
      "name": "French Madagascar",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "28 Sea Zone",
        "29 Sea Zone",
        "32 Sea Zone",
        "33 Sea Zone"
      ]
    },
    "Yakut S.S.R.": {
      "name": "Yakut S.S.R.",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "Mongolia",
        "Evenki National Okrug",
        "Novosibirsk",
        "Soviet Far East",
        "Buryatia S.S.R."
      ]
    },
    "Hawaiian Islands": {
      "name": "Hawaiian Islands",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "52 Sea Zone"
      ]
    },
    "East Indies": {
      "name": "East Indies",
      "isSea": false,
      "income": 4,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "37 Sea Zone"
      ]
    },
    "Saudi Arabia": {
      "name": "Saudi Arabia",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "34 Sea Zone",
        "Trans-Jordan"
      ]
    },
    "Switzerland": {
      "name": "Switzerland",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Germany",
        "Western Europe",
        "Southern Europe"
      ]
    },
    "Norway": {
      "name": "Norway",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "Sweden",
        "3 Sea Zone",
        "5 Sea Zone",
        "6 Sea Zone",
        "Karelia S.S.R."
      ]
    },
    "French Indochina": {
      "name": "French Indochina",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "Himalaya",
        "36 Sea Zone",
        "India",
        "Kwantung",
        "China"
      ]
    },
    "West Indies": {
      "name": "West Indies",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "19 Sea Zone"
      ]
    },
    "Kazakh S.S.R.": {
      "name": "Kazakh S.S.R.",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "Afghanistan",
        "Caucasus",
        "Russia",
        "Novosibirsk",
        "Sinkiang",
        "Persia"
      ]
    },
    "Venezuela": {
      "name": "Venezuela",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "19 Sea Zone",
        "20 Sea Zone",
        "Panama",
        "Brazil",
        "Peru"
      ]
    },
    "Trans-Jordan": {
      "name": "Trans-Jordan",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Turkey",
        "Saudi Arabia",
        "15 Sea Zone",
        "34 Sea Zone",
        "Persia",
        "Anglo Egypt"
      ]
    },
    "United Kingdom": {
      "name": "United Kingdom",
      "isSea": false,
      "income": 8,
      "isVictoryCity": true,
      "capitalOf": "British",
      "originalOwner": "British",
      "connections": [
        "Eire",
        "2 Sea Zone",
        "3 Sea Zone",
        "6 Sea Zone",
        "7 Sea Zone",
        "8 Sea Zone"
      ]
    },
    "Western Europe": {
      "name": "Western Europe",
      "isSea": false,
      "income": 6,
      "isVictoryCity": true,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "Switzerland",
        "Spain",
        "5 Sea Zone",
        "6 Sea Zone",
        "7 Sea Zone",
        "13 Sea Zone",
        "Germany",
        "Southern Europe"
      ]
    },
    "Rio De Oro": {
      "name": "Rio De Oro",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "17 Sea Zone",
        "French West Africa"
      ]
    },
    "Angola": {
      "name": "Angola",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "27 Sea Zone",
        "Belgian Congo",
        "Kenya",
        "Union of South Africa"
      ]
    },
    "New Zealand": {
      "name": "New Zealand",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "41 Sea Zone"
      ]
    },
    "Sahara": {
      "name": "Sahara",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Anglo Egypt",
        "Libya",
        "Algeria",
        "French West Africa",
        "French Equatorial Africa"
      ]
    },
    "French Equatorial Africa": {
      "name": "French Equatorial Africa",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Sahara",
        "23 Sea Zone",
        "Anglo Egypt",
        "French West Africa",
        "Belgian Congo"
      ]
    },
    "Gibraltar": {
      "name": "Gibraltar",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Spain",
        "13 Sea Zone"
      ]
    },
    "Solomon Islands": {
      "name": "Solomon Islands",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "45 Sea Zone"
      ]
    },
    "Caucasus": {
      "name": "Caucasus",
      "isSea": false,
      "income": 4,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "Turkey",
        "16 Sea Zone",
        "Ukraine S.S.R.",
        "Persia",
        "West Russia",
        "Russia",
        "Kazakh S.S.R."
      ]
    },
    "Sinkiang": {
      "name": "Sinkiang",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "Himalaya",
        "Mongolia",
        "Kazakh S.S.R.",
        "Novosibirsk",
        "China"
      ]
    },
    "Algeria": {
      "name": "Algeria",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "Sahara",
        "12 Sea Zone",
        "13 Sea Zone",
        "Libya"
      ]
    },
    "Balkans": {
      "name": "Balkans",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "16 Sea Zone",
        "Germany",
        "Southern Europe",
        "Eastern Europe",
        "Ukraine S.S.R."
      ]
    },
    "Wake Island": {
      "name": "Wake Island",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "51 Sea Zone"
      ]
    },
    "Himalaya": {
      "name": "Himalaya",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Afghanistan",
        "India",
        "Sinkiang",
        "China",
        "French Indochina"
      ]
    },
    "Evenki National Okrug": {
      "name": "Evenki National Okrug",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "Russia",
        "Yakut S.S.R.",
        "Novosibirsk"
      ]
    },
    "Sweden": {
      "name": "Sweden",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Norway",
        "5 Sea Zone"
      ]
    },
    "Libya": {
      "name": "Libya",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "Sahara",
        "14 Sea Zone",
        "Anglo Egypt",
        "Algeria"
      ]
    },
    "Ukraine S.S.R.": {
      "name": "Ukraine S.S.R.",
      "isSea": false,
      "income": 3,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "16 Sea Zone",
        "Balkans",
        "Eastern Europe",
        "Belorussia",
        "West Russia",
        "Caucasus"
      ]
    },
    "Mongolia": {
      "name": "Mongolia",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Novosibirsk",
        "Sinkiang",
        "Manchuria",
        "China",
        "Yakut S.S.R.",
        "Buryatia S.S.R."
      ]
    },
    "West Russia": {
      "name": "West Russia",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "Karelia S.S.R.",
        "Belorussia",
        "Ukraine S.S.R.",
        "Caucasus",
        "Russia",
        "Archangel"
      ]
    },
    "Peru": {
      "name": "Peru",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "21 Sea Zone",
        "Venezuela",
        "Brazil",
        "Argentina"
      ]
    },
    "Eastern United States": {
      "name": "Eastern United States",
      "isSea": false,
      "income": 12,
      "isVictoryCity": true,
      "capitalOf": "Americans",
      "originalOwner": "Americans",
      "connections": [
        "10 Sea Zone",
        "Eastern Canada",
        "Central United States",
        "Panama"
      ]
    },
    "Belorussia": {
      "name": "Belorussia",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Germans",
      "connections": [
        "Eastern Europe",
        "Karelia S.S.R.",
        "West Russia",
        "Ukraine S.S.R."
      ]
    },
    "Buryatia S.S.R.": {
      "name": "Buryatia S.S.R.",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Russians",
      "connections": [
        "Mongolia",
        "60 Sea Zone",
        "62 Sea Zone",
        "Yakut S.S.R.",
        "Manchuria",
        "Soviet Far East"
      ]
    },
    "Russia": {
      "name": "Russia",
      "isSea": false,
      "income": 8,
      "isVictoryCity": true,
      "capitalOf": "Russians",
      "originalOwner": "Russians",
      "connections": [
        "Caucasus",
        "West Russia",
        "Archangel",
        "Evenki National Okrug",
        "Novosibirsk",
        "Kazakh S.S.R."
      ]
    },
    "Anglo Egypt": {
      "name": "Anglo Egypt",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "Sahara",
        "15 Sea Zone",
        "34 Sea Zone",
        "Trans-Jordan",
        "Libya",
        "Italian East Africa",
        "French Equatorial Africa",
        "Belgian Congo"
      ]
    },
    "New Guinea": {
      "name": "New Guinea",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "47 Sea Zone"
      ]
    },
    "Okinawa": {
      "name": "Okinawa",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "58 Sea Zone"
      ]
    },
    "Panama": {
      "name": "Panama",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "Venezuela",
        "10 Sea Zone",
        "19 Sea Zone",
        "20 Sea Zone",
        "Eastern United States",
        "Mexico"
      ]
    },
    "Western Canada": {
      "name": "Western Canada",
      "isSea": false,
      "income": 1,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "British",
      "connections": [
        "55 Sea Zone",
        "63 Sea Zone",
        "64 Sea Zone",
        "Eastern Canada",
        "Central United States",
        "Western United States",
        "Alaska"
      ]
    },
    "Central United States": {
      "name": "Central United States",
      "isSea": false,
      "income": 6,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "Eastern United States",
        "Western Canada",
        "Western United States",
        "Mexico"
      ]
    },
    "Argentina": {
      "name": "Argentina",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "21 Sea Zone",
        "25 Sea Zone",
        "Brazil",
        "Peru"
      ]
    },
    "China": {
      "name": "China",
      "isSea": false,
      "income": 2,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Americans",
      "connections": [
        "Himalaya",
        "Mongolia",
        "Sinkiang",
        "Manchuria",
        "Kwantung",
        "French Indochina"
      ]
    },
    "Japan": {
      "name": "Japan",
      "isSea": false,
      "income": 8,
      "isVictoryCity": true,
      "capitalOf": "Japanese",
      "originalOwner": "Japanese",
      "connections": [
        "60 Sea Zone",
        "61 Sea Zone"
      ]
    },
    "Caroline Islands": {
      "name": "Caroline Islands",
      "isSea": false,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": "Japanese",
      "connections": [
        "50 Sea Zone"
      ]
    },
    "28 Sea Zone": {
      "name": "28 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "27 Sea Zone",
        "29 Sea Zone",
        "33 Sea Zone",
        "Union of South Africa",
        "French Madagascar"
      ]
    },
    "56 Sea Zone": {
      "name": "56 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "52 Sea Zone",
        "55 Sea Zone",
        "57 Sea Zone",
        "63 Sea Zone",
        "64 Sea Zone",
        "Midway"
      ]
    },
    "7 Sea Zone": {
      "name": "7 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "6 Sea Zone",
        "8 Sea Zone",
        "12 Sea Zone",
        "United Kingdom",
        "Western Europe"
      ]
    },
    "31 Sea Zone": {
      "name": "31 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "30 Sea Zone",
        "32 Sea Zone",
        "35 Sea Zone",
        "37 Sea Zone",
        "38 Sea Zone"
      ]
    },
    "27 Sea Zone": {
      "name": "27 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Angola",
        "23 Sea Zone",
        "24 Sea Zone",
        "26 Sea Zone",
        "28 Sea Zone",
        "Union of South Africa"
      ]
    },
    "5 Sea Zone": {
      "name": "5 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Sweden",
        "6 Sea Zone",
        "Norway",
        "Karelia S.S.R.",
        "Eastern Europe",
        "Germany",
        "Western Europe"
      ]
    },
    "23 Sea Zone": {
      "name": "23 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "17 Sea Zone",
        "22 Sea Zone",
        "24 Sea Zone",
        "27 Sea Zone",
        "French Equatorial Africa",
        "Belgian Congo"
      ]
    },
    "53 Sea Zone": {
      "name": "53 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "43 Sea Zone",
        "44 Sea Zone",
        "52 Sea Zone",
        "54 Sea Zone",
        "55 Sea Zone"
      ]
    },
    "42 Sea Zone": {
      "name": "42 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "25 Sea Zone",
        "41 Sea Zone",
        "43 Sea Zone",
        "44 Sea Zone"
      ]
    },
    "59 Sea Zone": {
      "name": "59 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "36 Sea Zone",
        "49 Sea Zone",
        "60 Sea Zone",
        "61 Sea Zone",
        "Kwantung"
      ]
    },
    "30 Sea Zone": {
      "name": "30 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "29 Sea Zone",
        "31 Sea Zone",
        "32 Sea Zone",
        "38 Sea Zone",
        "39 Sea Zone"
      ]
    },
    "50 Sea Zone": {
      "name": "50 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "45 Sea Zone",
        "47 Sea Zone",
        "48 Sea Zone",
        "49 Sea Zone",
        "58 Sea Zone",
        "51 Sea Zone",
        "Caroline Islands"
      ]
    },
    "54 Sea Zone": {
      "name": "54 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "20 Sea Zone",
        "43 Sea Zone",
        "53 Sea Zone",
        "55 Sea Zone",
        "Mexico",
        "Western United States"
      ]
    },
    "43 Sea Zone": {
      "name": "43 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "21 Sea Zone",
        "42 Sea Zone",
        "44 Sea Zone",
        "53 Sea Zone",
        "54 Sea Zone"
      ]
    },
    "41 Sea Zone": {
      "name": "41 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "40 Sea Zone",
        "46 Sea Zone",
        "45 Sea Zone",
        "42 Sea Zone",
        "44 Sea Zone",
        "New Zealand"
      ]
    },
    "4 Sea Zone": {
      "name": "4 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "3 Sea Zone",
        "Karelia S.S.R.",
        "Archangel"
      ]
    },
    "44 Sea Zone": {
      "name": "44 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "41 Sea Zone",
        "42 Sea Zone",
        "43 Sea Zone",
        "45 Sea Zone",
        "52 Sea Zone",
        "53 Sea Zone"
      ]
    },
    "11 Sea Zone": {
      "name": "11 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "9 Sea Zone",
        "10 Sea Zone",
        "12 Sea Zone",
        "18 Sea Zone",
        "19 Sea Zone"
      ]
    },
    "51 Sea Zone": {
      "name": "51 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "45 Sea Zone",
        "50 Sea Zone",
        "52 Sea Zone",
        "58 Sea Zone",
        "57 Sea Zone",
        "60 Sea Zone",
        "Wake Island"
      ]
    },
    "25 Sea Zone": {
      "name": "25 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Argentina",
        "21 Sea Zone",
        "22 Sea Zone",
        "24 Sea Zone",
        "26 Sea Zone",
        "42 Sea Zone"
      ]
    },
    "29 Sea Zone": {
      "name": "29 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "28 Sea Zone",
        "32 Sea Zone",
        "30 Sea Zone",
        "French Madagascar"
      ]
    },
    "34 Sea Zone": {
      "name": "34 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Saudi Arabia",
        "15 Sea Zone",
        "32 Sea Zone",
        "33 Sea Zone",
        "35 Sea Zone",
        "Italian East Africa",
        "Anglo Egypt",
        "Trans-Jordan",
        "Persia"
      ]
    },
    "12 Sea Zone": {
      "name": "12 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Spain",
        "7 Sea Zone",
        "8 Sea Zone",
        "9 Sea Zone",
        "11 Sea Zone",
        "13 Sea Zone",
        "17 Sea Zone",
        "18 Sea Zone",
        "Algeria"
      ]
    },
    "32 Sea Zone": {
      "name": "32 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "29 Sea Zone",
        "30 Sea Zone",
        "31 Sea Zone",
        "33 Sea Zone",
        "34 Sea Zone",
        "35 Sea Zone",
        "French Madagascar"
      ]
    },
    "46 Sea Zone": {
      "name": "46 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "38 Sea Zone",
        "40 Sea Zone",
        "41 Sea Zone",
        "45 Sea Zone",
        "47 Sea Zone",
        "Australia"
      ]
    },
    "63 Sea Zone": {
      "name": "63 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "56 Sea Zone",
        "57 Sea Zone",
        "62 Sea Zone",
        "64 Sea Zone",
        "Alaska",
        "Western Canada"
      ]
    },
    "8 Sea Zone": {
      "name": "8 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "1 Sea Zone",
        "2 Sea Zone",
        "7 Sea Zone",
        "9 Sea Zone",
        "12 Sea Zone",
        "United Kingdom"
      ]
    },
    "26 Sea Zone": {
      "name": "26 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "24 Sea Zone",
        "25 Sea Zone",
        "27 Sea Zone"
      ]
    },
    "38 Sea Zone": {
      "name": "38 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "30 Sea Zone",
        "31 Sea Zone",
        "46 Sea Zone",
        "37 Sea Zone",
        "39 Sea Zone",
        "47 Sea Zone",
        "Australia"
      ]
    },
    "3 Sea Zone": {
      "name": "3 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "2 Sea Zone",
        "4 Sea Zone",
        "6 Sea Zone",
        "United Kingdom",
        "Norway"
      ]
    },
    "37 Sea Zone": {
      "name": "37 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "31 Sea Zone",
        "35 Sea Zone",
        "36 Sea Zone",
        "48 Sea Zone",
        "47 Sea Zone",
        "38 Sea Zone",
        "East Indies"
      ]
    },
    "6 Sea Zone": {
      "name": "6 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "3 Sea Zone",
        "5 Sea Zone",
        "7 Sea Zone",
        "United Kingdom",
        "Norway",
        "Western Europe"
      ]
    },
    "9 Sea Zone": {
      "name": "9 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "1 Sea Zone",
        "8 Sea Zone",
        "10 Sea Zone",
        "11 Sea Zone",
        "12 Sea Zone",
        "Eastern Canada"
      ]
    },
    "61 Sea Zone": {
      "name": "61 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "59 Sea Zone",
        "60 Sea Zone",
        "Japan",
        "Manchuria"
      ]
    },
    "39 Sea Zone": {
      "name": "39 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "30 Sea Zone",
        "38 Sea Zone",
        "40 Sea Zone",
        "Australia"
      ]
    },
    "36 Sea Zone": {
      "name": "36 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "35 Sea Zone",
        "37 Sea Zone",
        "48 Sea Zone",
        "49 Sea Zone",
        "59 Sea Zone",
        "French Indochina"
      ]
    },
    "49 Sea Zone": {
      "name": "49 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "36 Sea Zone",
        "48 Sea Zone",
        "50 Sea Zone",
        "58 Sea Zone",
        "59 Sea Zone",
        "60 Sea Zone",
        "Philipine Islands"
      ]
    },
    "64 Sea Zone": {
      "name": "64 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "55 Sea Zone",
        "56 Sea Zone",
        "63 Sea Zone",
        "Alaska",
        "Western Canada"
      ]
    },
    "45 Sea Zone": {
      "name": "45 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "41 Sea Zone",
        "44 Sea Zone",
        "46 Sea Zone",
        "47 Sea Zone",
        "50 Sea Zone",
        "51 Sea Zone",
        "52 Sea Zone",
        "Solomon Islands"
      ]
    },
    "57 Sea Zone": {
      "name": "57 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "51 Sea Zone",
        "52 Sea Zone",
        "56 Sea Zone",
        "60 Sea Zone",
        "62 Sea Zone",
        "63 Sea Zone"
      ]
    },
    "52 Sea Zone": {
      "name": "52 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "56 Sea Zone",
        "44 Sea Zone",
        "45 Sea Zone",
        "51 Sea Zone",
        "53 Sea Zone",
        "55 Sea Zone",
        "57 Sea Zone",
        "Hawaiian Islands"
      ]
    },
    "1 Sea Zone": {
      "name": "1 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Eastern Canada",
        "2 Sea Zone",
        "8 Sea Zone",
        "9 Sea Zone"
      ]
    },
    "48 Sea Zone": {
      "name": "48 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "36 Sea Zone",
        "37 Sea Zone",
        "47 Sea Zone",
        "49 Sea Zone",
        "50 Sea Zone",
        "Borneo"
      ]
    },
    "17 Sea Zone": {
      "name": "17 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Rio De Oro",
        "12 Sea Zone",
        "18 Sea Zone",
        "22 Sea Zone",
        "23 Sea Zone",
        "French West Africa"
      ]
    },
    "10 Sea Zone": {
      "name": "10 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "9 Sea Zone",
        "11 Sea Zone",
        "19 Sea Zone",
        "Eastern United States",
        "Panama"
      ]
    },
    "15 Sea Zone": {
      "name": "15 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Turkey",
        "14 Sea Zone",
        "16 Sea Zone",
        "34 Sea Zone",
        "Trans-Jordan",
        "Anglo Egypt"
      ]
    },
    "2 Sea Zone": {
      "name": "2 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Eire",
        "1 Sea Zone",
        "Greenland",
        "United Kingdom",
        "3 Sea Zone",
        "8 Sea Zone"
      ]
    },
    "33 Sea Zone": {
      "name": "33 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Mozambique",
        "28 Sea Zone",
        "32 Sea Zone",
        "34 Sea Zone",
        "French Madagascar",
        "Kenya"
      ]
    },
    "14 Sea Zone": {
      "name": "14 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "13 Sea Zone",
        "15 Sea Zone",
        "16 Sea Zone",
        "Southern Europe",
        "Libya"
      ]
    },
    "13 Sea Zone": {
      "name": "13 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Spain",
        "12 Sea Zone",
        "14 Sea Zone",
        "Gibraltar",
        "Western Europe",
        "Algeria"
      ]
    },
    "55 Sea Zone": {
      "name": "55 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "52 Sea Zone",
        "53 Sea Zone",
        "54 Sea Zone",
        "56 Sea Zone",
        "64 Sea Zone",
        "Western United States",
        "Western Canada"
      ]
    },
    "35 Sea Zone": {
      "name": "35 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "31 Sea Zone",
        "32 Sea Zone",
        "34 Sea Zone",
        "36 Sea Zone",
        "37 Sea Zone",
        "India"
      ]
    },
    "16 Sea Zone": {
      "name": "16 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Turkey",
        "14 Sea Zone",
        "15 Sea Zone",
        "Balkans",
        "Ukraine S.S.R.",
        "Caucasus"
      ]
    },
    "19 Sea Zone": {
      "name": "19 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Venezuela",
        "10 Sea Zone",
        "11 Sea Zone",
        "18 Sea Zone",
        "20 Sea Zone",
        "Panama",
        "West Indies"
      ]
    },
    "60 Sea Zone": {
      "name": "60 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "49 Sea Zone",
        "51 Sea Zone",
        "57 Sea Zone",
        "58 Sea Zone",
        "59 Sea Zone",
        "61 Sea Zone",
        "62 Sea Zone",
        "Japan",
        "Buryatia S.S.R."
      ]
    },
    "62 Sea Zone": {
      "name": "62 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "57 Sea Zone",
        "60 Sea Zone",
        "63 Sea Zone",
        "Buryatia S.S.R.",
        "Soviet Far East"
      ]
    },
    "21 Sea Zone": {
      "name": "21 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Peru",
        "Argentina",
        "20 Sea Zone",
        "25 Sea Zone",
        "43 Sea Zone"
      ]
    },
    "22 Sea Zone": {
      "name": "22 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "17 Sea Zone",
        "18 Sea Zone",
        "23 Sea Zone",
        "24 Sea Zone",
        "25 Sea Zone",
        "Brazil"
      ]
    },
    "18 Sea Zone": {
      "name": "18 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "11 Sea Zone",
        "12 Sea Zone",
        "17 Sea Zone",
        "19 Sea Zone",
        "22 Sea Zone",
        "Brazil"
      ]
    },
    "47 Sea Zone": {
      "name": "47 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "37 Sea Zone",
        "38 Sea Zone",
        "45 Sea Zone",
        "46 Sea Zone",
        "48 Sea Zone",
        "50 Sea Zone",
        "New Guinea"
      ]
    },
    "58 Sea Zone": {
      "name": "58 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "49 Sea Zone",
        "50 Sea Zone",
        "51 Sea Zone",
        "60 Sea Zone",
        "Okinawa"
      ]
    },
    "40 Sea Zone": {
      "name": "40 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "39 Sea Zone",
        "41 Sea Zone",
        "46 Sea Zone",
        "Australia"
      ]
    },
    "24 Sea Zone": {
      "name": "24 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "22 Sea Zone",
        "23 Sea Zone",
        "25 Sea Zone",
        "26 Sea Zone",
        "27 Sea Zone"
      ]
    },
    "20 Sea Zone": {
      "name": "20 Sea Zone",
      "isSea": true,
      "income": 0,
      "isVictoryCity": false,
      "capitalOf": null,
      "originalOwner": null,
      "connections": [
        "Venezuela",
        "19 Sea Zone",
        "21 Sea Zone",
        "54 Sea Zone",
        "Panama"
      ]
    }
  },
  "startingSetup": {
    "Karelia S.S.R.": [
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Russians"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Russians"
      }
    ],
    "Archangel": [
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Russians"
      },
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Russians"
      }
    ],
    "Caucasus": [
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "Russians"
      },
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Russians"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Russians"
      },
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Russians"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Russians"
      }
    ],
    "Russia": [
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "Russians"
      },
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Russians"
      },
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Russians"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Russians"
      },
      {
        "unitType": "armour",
        "quantity": 2,
        "owner": "Russians"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Russians"
      }
    ],
    "Evenki National Okrug": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Russians"
      }
    ],
    "Novosibirsk": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Russians"
      }
    ],
    "Yakut S.S.R.": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Russians"
      }
    ],
    "Soviet Far East": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Russians"
      }
    ],
    "Buryatia S.S.R.": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Russians"
      }
    ],
    "Kazakh S.S.R.": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Russians"
      }
    ],
    "4 Sea Zone": [
      {
        "unitType": "submarine",
        "quantity": 1,
        "owner": "Russians"
      }
    ],
    "Western Europe": [
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Germans"
      },
      {
        "unitType": "armour",
        "quantity": 2,
        "owner": "Germans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Southern Europe": [
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Germans"
      }
    ],
    "Germany": [
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Germans"
      },
      {
        "unitType": "armour",
        "quantity": 2,
        "owner": "Germans"
      },
      {
        "unitType": "bomber",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Norway": [
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Germans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Balkans": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Germans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Eastern Europe": [
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Germans"
      }
    ],
    "Ukraine S.S.R.": [
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Germans"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Belorussia": [
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Germans"
      }
    ],
    "West Russia": [
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Germans"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Libya": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Algeria": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "5 Sea Zone": [
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "submarine",
        "quantity": 2,
        "owner": "Germans"
      },
      {
        "unitType": "destroyer",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "8 Sea Zone": [
      {
        "unitType": "submarine",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "14 Sea Zone": [
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "Germans"
      },
      {
        "unitType": "battleship",
        "quantity": 1,
        "owner": "Germans"
      }
    ],
    "Eastern Canada": [
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "United Kingdom": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "British"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "fighter",
        "quantity": 2,
        "owner": "British"
      },
      {
        "unitType": "bomber",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "Persia": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "India": [
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "British"
      }
    ],
    "Trans-Jordan": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "Anglo Egypt": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "Union of South Africa": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "Australia": [
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "British"
      }
    ],
    "New Zealand": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "Western Canada": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "1 Sea Zone": [
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "2 Sea Zone": [
      {
        "unitType": "battleship",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "13 Sea Zone": [
      {
        "unitType": "battleship",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "15 Sea Zone": [
      {
        "unitType": "destroyer",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "35 Sea Zone": [
      {
        "unitType": "carrier",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "destroyer",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "40 Sea Zone": [
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "British"
      },
      {
        "unitType": "submarine",
        "quantity": 1,
        "owner": "British"
      }
    ],
    "Manchuria": [
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Japanese"
      }
    ],
    "Kwantung": [
      {
        "unitType": "infantry",
        "quantity": 3,
        "owner": "Japanese"
      }
    ],
    "French Indochina": [
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Japanese"
      }
    ],
    "Solomon Islands": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "New Guinea": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "Borneo": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "East Indies": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Japanese"
      }
    ],
    "Philipine Islands": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Japanese"
      }
    ],
    "Caroline Islands": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "Okinawa": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "Wake Island": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "Japan": [
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "infantry",
        "quantity": 4,
        "owner": "Japanese"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "bomber",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "37 Sea Zone": [
      {
        "unitType": "battleship",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "fighter",
        "quantity": 2,
        "owner": "Japanese"
      },
      {
        "unitType": "carrier",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "59 Sea Zone": [
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "60 Sea Zone": [
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "battleship",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "50 Sea Zone": [
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "destroyer",
        "quantity": 1,
        "owner": "Japanese"
      },
      {
        "unitType": "carrier",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "45 Sea Zone": [
      {
        "unitType": "submarine",
        "quantity": 1,
        "owner": "Japanese"
      }
    ],
    "Eastern United States": [
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "armour",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Americans"
      },
      {
        "unitType": "artillery",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "bomber",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "China": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Americans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "Sinkiang": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Americans"
      }
    ],
    "Midway": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "Hawaiian Islands": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Americans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "Alaska": [
      {
        "unitType": "infantry",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "Western United States": [
      {
        "unitType": "aaGun",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "factory",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Americans"
      },
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "Central United States": [
      {
        "unitType": "infantry",
        "quantity": 2,
        "owner": "Americans"
      }
    ],
    "10 Sea Zone": [
      {
        "unitType": "transport",
        "quantity": 2,
        "owner": "Americans"
      },
      {
        "unitType": "destroyer",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "20 Sea Zone": [
      {
        "unitType": "destroyer",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "55 Sea Zone": [
      {
        "unitType": "battleship",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "transport",
        "quantity": 1,
        "owner": "Americans"
      }
    ],
    "52 Sea Zone": [
      {
        "unitType": "fighter",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "carrier",
        "quantity": 1,
        "owner": "Americans"
      },
      {
        "unitType": "submarine",
        "quantity": 1,
        "owner": "Americans"
      }
    ]
  }
};

// Prevent accidental mutation of the base data during gameplay;
// game state should be a separate deep-copied object built from this.
Object.freeze(GAME_DATA);
