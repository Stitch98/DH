'use strict';

/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {
	koatric: {
		num: 1.5,
		species: "Koatric",
		types: ["Electric"],
		baseStats: {hp: 24, atk: 147, def: 63, spa: 133, spd: 86, spe: 147},
		abilities: {0: "Overgrow", 1: "NA", H: "Tangled Feet"},
		weightkg: 17,
	},
	aquazelle: {
		num: 2.5,
		species: "Aquazelle",
		types: ["Normal", "Water"],
		baseStats: {hp: 107, atk: 53, def: 83, spa: 123, spd: 97, spe: 137},
		abilities: {0: "Heatproof", 1: "Aerilate", H: "Corrosion"},
		weightkg: 5,
	},
	salamalix: {
		num: 3.5,
		species: "Salamalix",
		types: ["Rock", "Dark"],
		baseStats: {hp: 119, atk: 99, def: 122, spa: 49, spd: 76, spe: 135},
		abilities: {0: "Forewarn", 1: "NA", H: "Sheer Force"},
		weightkg: 75,
	},
	brawnkey: {
		num: 4.5,
		species: "Brawnkey",
		types: ["Fighting"],
		baseStats: {hp: 143, atk: 86, def: 144, spa: 76, spd: 37, spe: 114},
		abilities: {0: "Swarm", 1: "Mold Breaker", H: "Intimidate"},
		weightkg: 150,
	},
	stuneleon: {
		num: 5.5,
		species: "Stuneleon",
		types: ["Electric", "Poison"],
		baseStats: {hp: 70, atk: 145, def: 100, spa: 122, spd: 77, spe: 86},
		abilities: {0: "Pixilate", 1: "Insomnia", H: "Prankster"},
		weightkg: 5,
	},
	chillyte: {
		num: 6.5,
		species: "Chillyte",
		types: ["Ice"],
		baseStats: {hp: 95, atk: 110, def: 135, spa: 101, spd: 75, spe: 84},
		abilities: {0: "Grassy Surge", 1: "Natural Cure", H: "Slush Rush"},
		weightkg: 75,
		otherFormes: ["megachillyte"],
	},
	megachillyte: {
		num: 7.5,
		species: "Mega Chillyte",
		baseSpecies: "Chillyte",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ice"],
		baseStats: {hp: 95, atk: 101, def: 192, spa: 134, spd: 79, spe: 99},
		abilities: {0: "Dauntless Shield", 1: "NA"},
		weightkg: 150,
	},
	eartharoo: {
		num: 8.5,
		species: "Eartharoo",
		types: ["Ground", "Normal"],
		baseStats: {hp: 102, atk: 77, def: 37, spa: 138, spd: 110, spe: 136},
		abilities: {0: "Anticipation", 1: "Frisk", H: "Teravolt"},
		weightkg: 300,
	},
	crazefly: {
		num: 9.5,
		species: "Crazefly",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 115, atk: 115, def: 31, spa: 112, spd: 137, spe: 90},
		abilities: {0: "Galvanize", 1: "NA", H: "Gooey"},
		weightkg: 17,
	},
	electritar: {
		num: 10.5,
		species: "Electritar",
		types: ["Steel", "Electric"],
		baseStats: {hp: 70, atk: 49, def: 145, spa: 130, spd: 33, spe: 173},
		abilities: {0: "Unnerve", 1: "Poison Touch", H: "Pixilate"},
		weightkg: 300,
	},
	aquatopus: {
		num: 11.5,
		species: "Aquatopus",
		types: ["Water"],
		baseStats: {hp: 48, atk: 103, def: 185, spa: 54, spd: 90, spe: 120},
		abilities: {0: "Grass Pelt", 1: "Unaware", H: "Flame Body"},
		weightkg: 300,
	},
	scorpita: {
		num: 12.5,
		species: "Scorpita",
		types: ["Poison"],
		baseStats: {hp: 118, atk: 78, def: 98, spa: 122, spd: 66, spe: 118},
		abilities: {0: "Teravolt", 1: "Corrosion", H: "Light Metal"},
		weightkg: 17,
	},
	baloon: {
		num: 13.5,
		species: "Baloon",
		types: ["Fairy"],
		baseStats: {hp: 137, atk: 124, def: 142, spa: 102, spd: 12, spe: 83},
		abilities: {0: "Refrigerate", 1: "Contrary", H: "Symbiosis"},
		weightkg: 300,
	},
	kinesel: {
		num: 14.5,
		species: "Kinesel",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 48, atk: 146, def: 111, spa: 165, spd: 78, spe: 52},
		abilities: {0: "Unaware", 1: "Tangled Feet", H: "Trace"},
		weightkg: 150,
	},
	glacida: {
		num: 15.5,
		species: "Glacida",
		types: ["Fighting", "Ice"],
		baseStats: {hp: 100, atk: 115, def: 157, spa: 46, spd: 146, spe: 36},
		abilities: {0: "Mega Launcher", 1: "NA", H: "Triage"},
		weightkg: 17,
	},
	pidgeotine: {
		num: 16.5,
		species: "Pidgeotine",
		types: ["Normal", "Flying"],
		baseStats: {hp: 71, atk: 124, def: 56, spa: 48, spd: 194, spe: 107},
		abilities: {0: "Full Metal Body", 1: "Torrent", H: "Cheek Pouch"},
		weightkg: 300,
	},
	gorilax: {
		num: 17.5,
		species: "Gorilax",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 116, atk: 61, def: 101, spa: 83, spd: 117, spe: 122},
		abilities: {0: "Aroma Veil", 1: "NA", H: "Sniper"},
		weightkg: 17,
	},
	albatrygon: {
		num: 18.5,
		species: "Albatrygon",
		types: ["Flying"],
		baseStats: {hp: 61, atk: 121, def: 57, spa: 100, spd: 110, spe: 151},
		abilities: {0: "Chlorophyll", 1: "NA", H: "Iron Barbs"},
		weightkg: 300,
	},
	chillvark: {
		num: 19.5,
		species: "Chillvark",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 131, atk: 117, def: 51, spa: 133, spd: 78, spe: 90},
		abilities: {0: "Sheer Force", 1: "Dazzling", H: "Simple"},
		weightkg: 75,
	},
	komodith: {
		num: 20.5,
		species: "Komodith",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 70, atk: 134, def: 101, spa: 123, spd: 103, spe: 69},
		abilities: {0: "Liquid Voice", 1: "Beast Boost", H: "Dancer"},
		weightkg: 150,
	},
	giranium: {
		num: 21.5,
		species: "Giranium",
		types: ["Steel", "Rock"],
		baseStats: {hp: 66, atk: 40, def: 146, spa: 161, spd: 148, spe: 39},
		abilities: {0: "Minus", 1: "NA", H: "Filter"},
		weightkg: 17,
	},
	flamyle: {
		num: 22.5,
		species: "Flamyle",
		types: ["Fire"],
		baseStats: {hp: 103, atk: 99, def: 79, spa: 75, spd: 116, spe: 128},
		abilities: {0: "Magnet Pull", 1: "NA", H: "Electric Surge"},
		weightkg: 150,
	},
	voltecta: {
		num: 23.5,
		species: "Voltecta",
		types: ["Ghost", "Electric"],
		baseStats: {hp: 149, atk: 40, def: 131, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Water Veil", 1: "Rock Head", H: "Slush Rush"},
		weightkg: 17,
	},
	ostria: {
		num: 24.5,
		species: "Ostria",
		types: ["Flying", "Grass"],
		baseStats: {hp: 74, atk: 141, def: 74, spa: 101, spd: 160, spe: 50},
		abilities: {0: "Anticipation", 1: "Protean", H: "Shed Skin"},
		weightkg: 300,
	},
	ninjoth: {
		num: 25.5,
		species: "Ninjoth",
		types: ["Ice", "Dark"],
		baseStats: {hp: 88, atk: 132, def: 56, spa: 66, spd: 159, spe: 99},
		abilities: {0: "Rattled", 1: "Reckless", H: "Liquid Ooze"},
		weightkg: 75,
	},
	herbigator: {
		num: 26.5,
		species: "Herbigator",
		types: ["Grass", "Water"],
		baseStats: {hp: 42, atk: 159, def: 131, spa: 92, spd: 101, spe: 75},
		abilities: {0: "Suction Cups", 1: "Shell Armor", H: "Harvest"},
		weightkg: 37,
	},
	anteros: {
		num: 27.5,
		species: "Anteros",
		types: ["Steel", "Bug"],
		baseStats: {hp: 98, atk: 96, def: 113, spa: 65, spd: 105, spe: 123},
		abilities: {0: "Pickup", 1: "Lightning Rod", H: "Rivalry"},
		weightkg: 37,
	},
	gladiaster: {
		num: 28.5,
		species: "Gladiaster",
		types: ["Steel", "Ice"],
		baseStats: {hp: 118, atk: 110, def: 79, spa: 119, spd: 69, spe: 105},
		abilities: {0: "Rock Head", 1: "Drought", H: "Unaware"},
		weightkg: 5,
	},
	hyperoach: {
		num: 29.5,
		species: "Hyperoach",
		types: ["Bug", "Normal"],
		baseStats: {hp: 136, atk: 114, def: 56, spa: 102, spd: 104, spe: 88},
		abilities: {0: "Power of Alchemy", 1: "NA", H: "Desolate Land"},
		weightkg: 75,
	},
	barracoth: {
		num: 30.5,
		species: "Barracoth",
		types: ["Water", "Ice"],
		baseStats: {hp: 75, atk: 85, def: 146, spa: 70, spd: 139, spe: 85},
		abilities: {0: "Shadow Shield", 1: "NA", H: "Thick Fat"},
		weightkg: 17,
	},
	toados: {
		num: 31.5,
		species: "Toados",
		types: ["Poison"],
		baseStats: {hp: 151, atk: 119, def: 11, spa: 154, spd: 68, spe: 97},
		abilities: {0: "Grassy Surge", 1: "NA", H: "Unburden"},
		weightkg: 5,
	},
	voltarak: {
		num: 32.5,
		species: "Voltarak",
		types: ["Electric", "Ice"],
		baseStats: {hp: 100, atk: 75, def: 87, spa: 130, spd: 128, spe: 80},
		abilities: {0: "Technician", 1: "NA", H: "Gale Wings"},
		weightkg: 150,
	},
	mosqung: {
		num: 33.5,
		species: "Mosqung",
		types: ["Bug", "Flying"],
		baseStats: {hp: 149, atk: 37, def: 100, spa: 106, spd: 148, spe: 60},
		abilities: {0: "Comatose", 1: "NA", H: "Dark Aura"},
		weightkg: 37,
	},
	flamepion: {
		num: 34.5,
		species: "Flamepion",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 81, atk: 169, def: 134, spa: 98, spd: 70, spe: 48},
		abilities: {0: "Grass Pelt", 1: "Sticky Hold", H: "Static"},
		weightkg: 150,
	},
	hyenix: {
		num: 35.5,
		species: "Hyenix",
		types: ["Dark"],
		baseStats: {hp: 60, atk: 147, def: 27, spa: 160, spd: 140, spe: 66},
		abilities: {0: "Skill Link", 1: "SoulHeart", H: "Vital Spirit"},
		weightkg: 17,
	},
	rhinolite: {
		num: 36.5,
		species: "Rhinolite",
		types: ["Rock", "Ground"],
		baseStats: {hp: 113, atk: 126, def: 67, spa: 82, spd: 76, spe: 136},
		abilities: {0: "No Guard", 1: "Poison Point", H: "Analytic"},
		weightkg: 300,
	},
	bellena: {
		num: 37.5,
		species: "Bellena",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 96, atk: 147, def: 101, spa: 90, spd: 112, spe: 54},
		abilities: {0: "Dark Aura", 1: "Weak Armor", H: "Overcoat"},
		weightkg: 75,
	},
	falcola: {
		num: 38.5,
		species: "Falcola",
		types: ["Water"],
		baseStats: {hp: 116, atk: 52, def: 92, spa: 114, spd: 119, spe: 107},
		abilities: {0: "Propeller Tail", 1: "Flower Veil", H: "Overgrow"},
		weightkg: 75,
	},
	beanium: {
		num: 39.5,
		species: "Beanium",
		types: ["Rock", "Normal"],
		baseStats: {hp: 116, atk: 92, def: 90, spa: 123, spd: 138, spe: 41},
		abilities: {0: "Mummy", 1: "NA", H: "Berserk"},
		weightkg: 17,
	},
	lemotic: {
		num: 40.5,
		species: "Lemotic",
		types: ["Grass", "Ground"],
		baseStats: {hp: 139, atk: 146, def: 57, spa: 115, spd: 71, spe: 72},
		abilities: {0: "Minus", 1: "Mega Launcher", H: "Perish Body"},
		weightkg: 150,
	},
	biceon: {
		num: 41.5,
		species: "Biceon",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 95, atk: 122, def: 139, spa: 43, spd: 120, spe: 81},
		abilities: {0: "Sticky Hold", 1: "NA", H: "Leaf Guard"},
		weightkg: 37,
	},
	skeleray: {
		num: 42.5,
		species: "Skeleray",
		types: ["Dragon", "Ghost"],
		baseStats: {hp: 78, atk: 108, def: 127, spa: 103, spd: 151, spe: 33},
		abilities: {0: "Mirror Armor", 1: "Pastel Veil", H: "Victory Star"},
		weightkg: 150,
	},
	specyte: {
		num: 43.5,
		species: "Specyte",
		types: ["Ghost"],
		baseStats: {hp: 119, atk: 150, def: 45, spa: 124, spd: 45, spe: 117},
		abilities: {0: "Sniper", 1: "NA", H: "Early Bird"},
		weightkg: 37,
	},
	ramron: {
		num: 44.5,
		species: "Ramron",
		types: ["Normal"],
		baseStats: {hp: 113, atk: 44, def: 148, spa: 26, spd: 142, spe: 127},
		abilities: {0: "Poison Touch", 1: "Huge Power", H: "Dancer"},
		weightkg: 75,
	},
	balar: {
		num: 45.5,
		species: "Balar",
		types: ["Rock", "Flying"],
		baseStats: {hp: 123, atk: 132, def: 84, spa: 74, spd: 111, spe: 76},
		abilities: {0: "Run Away", 1: "Aerilate", H: "Magic Guard"},
		weightkg: 37,
	},
	panthee: {
		num: 46.5,
		species: "Panthee",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 78, atk: 83, def: 95, spa: 118, spd: 121, spe: 105},
		abilities: {0: "Sand Spit", 1: "NA", H: "White Smoke"},
		weightkg: 300,
	},
	blastora: {
		num: 47.5,
		species: "Blastora",
		types: ["Fire"],
		baseStats: {hp: 63, atk: 126, def: 102, spa: 99, spd: 131, spe: 79},
		abilities: {0: "Light Metal", 1: "Forewarn", H: "Aerilate"},
		weightkg: 5,
	},
	dropacle: {
		num: 48.5,
		species: "Dropacle",
		types: ["Ghost", "Water"],
		baseStats: {hp: 170, atk: 125, def: 22, spa: 57, spd: 113, spe: 113},
		abilities: {0: "Teravolt", 1: "NA", H: "Water Compaction"},
		weightkg: 300,
	},
};

exports.BattlePokedex = BattlePokedex;
