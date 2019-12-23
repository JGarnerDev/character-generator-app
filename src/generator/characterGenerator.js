const resources = require("./resourceAssembler");
const backgrounds = resources.backgrounds;
const classes = resources.classes;
const languages = resources.languages;
const feats = resources.feats;
const names = resources.names;
const races = resources.races;
const skills = resources.skills;
const spells = resources.spells;
const statsRoll = resources.statsRoll;
const genders = ["Male", "Female"];

// a general function to return the value from a random key of an object

function randomFromObj(x) {
  return Object.values(x)[Math.floor(Math.random() * Object.values(x).length)];
}

// a general function to return the value from a random index of an array

function randomFromArr(x) {
  return x[Math.floor(Math.random() * x.length)];
}

// a general function to return the camelCase version of a sentence

function camelCase(x) {
  return x.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

// the structure of a character



////////////////////////////////////////////////////////////////////////////////////////

function makeCharacter() {
    let character = {
        name: null,
        gender: null,
        race: null,
        subrace: null,
        class: null,
        background: null,
        personality: [],
        languages: [],
        proficiencyBonus: null,
        proficiencies: {
          primaryAbility: null,
          savingThrows: [],
          weapons: [],
          armor: [],
          skills: [],
          tools: []
        },
        HP: 0,
        hitDie: 0,
        levels: [],
        abilities: {
          Strength: null,
          Dexterity: null,
          Constitution: null,
          Wisdom: null,
          Intelligence: null,
          Charisma: null
        },
        abilityMod: {
          Strength: 0,
          Dexterity: 0,
          Constitution: 0,
          Wisdom: 0,
          Intelligence: 0,
          Charisma: 0
        },
        equipment: { weapons: [], armor: [], clothes: [], magicItems: [] },
        skills: {
          atheletics: [0, false],
          acrobatics: [0, false],
          sleightOfHand: [0, false],
          stealth: [0, false],
          arcana: [0, false],
          history: [0, false],
          investigation: [0, false],
          nature: [0, false],
          religion: [0, false],
          animalHandling: [0, false],
          insight: [0, false],
          medicine: [0, false],
          perception: [0, false],
          survival: [0, false],
          deception: [0, false],
          intimidation: [0, false],
          performance: [0, false],
          persuasion: [0, false]
        },
        feats: [],
        spellcastingLevel: 0,
        spellsKnown: 0,
        spellcastingAbility: 0,
        spellAttackMod: 0,
        spellSaveDC: 0,
        ritualCaster: false,
        spells: [
          [[0], []],
          [[0], []],
          [[0], []],
          [[0], []],
          [[0], []],
          [[0], []],
          [[0], []],
          [[0], []],
          [[0], []],
          [[0], []]
        ],
        items: []
      };

  // 1. Roll stats --------------------------------------------------------------------

  let stats = statsRoll(1);

  // 2. Assign class ------------------------------------------------------------------

  character.class = Object.values(classes)[
    Math.floor(Math.random() * Object.values(classes).length)
  ];

  character.levels.push(character.class.name);

  //      Assign benefits

  character.proficiencyBonus = Math.floor(character.levels.length / 5) + 2;
  character.proficiencies.savingThrows =
    character.class.savingThrowProficiencies;

  let classSkillsOptions = character.class.skillProficiencies.slice(1);
  if (character.class.name === "Bard") {
    classSkillsOptions = skills.names;
  }
  let classSkillsChoices = character.class.skillProficiencies[0];

  for (let i = 0; i < classSkillsChoices; i++) {
    let skillPick = randomFromArr(classSkillsOptions);
    character.proficiencies.skills.push(skillPick);
    classSkillsOptions = classSkillsOptions.filter(
      option => option !== skillPick
    );
  }

  character.proficiencies.weapons = character.class.weaponProficiencies;
  character.proficiencies.armor = character.class.armorProficiencies;
  character.HP = character.class.hitDie;
  character.hitDie = character.class.hitDie;

  for (let i = 0; i < character.class.startingItems.length; i++) {
    let item = character.class.startingItems[i];
    if (Array.isArray(item)) {
      item = randomFromArr(item);
    }
    character.items.push(item);
  }

  // 3. Assign abilities --------------------------------------------------------------

  //      Sort stats (descending)

  stats.sort((a, b) => a - b).reverse();

  //      Assign higest value(s) to primary abilities of Class

  if (
    character.class.name === "Barbarian" ||
    character.class.name === "Bard" ||
    character.class.name === "Cleric" ||
    character.class.name === "Druid" ||
    character.class.name === "Rogue" ||
    character.class.name === "Sorcerer" ||
    character.class.name === "Warlock" ||
    character.class.name === "Wizard"
  ) {
    let primaryAbility = character.class.primaryAbility;
    character.proficiencies.primaryAbility = primaryAbility;
    character.abilities[primaryAbility] = stats.shift();
  } else if (
    character.class.name === "Monk" ||
    character.class.name === "Paladin" ||
    character.class.name === "Ranger"
  ) {
    let primaryAbilities = character.class.primaryAbility;
    character.proficiencies.primaryAbility = primaryAbilities;
    character.abilities[primaryAbilities[0]] = stats.shift();
    character.abilities[primaryAbilities[1]] = stats.shift();
  } else {
    let primaryAbility = randomFromArr(character.class.primaryAbility);
    character.primaryAbilities = primaryAbility;
    character.proficiencies.primaryAbility = primaryAbility;
    character.abilities[primaryAbility] = stats.shift();
  }

  //      Assign the remaining stats to the remaining abilities randomly

  let abilityValuesArr = Object.values(character.abilities);
  let abilityKeysArr = Object.keys(character.abilities);

  for (let i = 0; i < abilityKeysArr.length; i++) {
    let randomIndex = Math.floor(Math.random() * stats.length);
    if (abilityValuesArr[i] === null) {
      character.abilities[abilityKeysArr[i]] = stats.splice(randomIndex, 1)[0];
    }
  }

  // 4. Assign race -------------------------------------------------------------------

  var randomSourceBook = randomFromObj(races);
  character.race = randomFromObj(randomSourceBook);

  //      Assign Subrace

  character.subrace = randomFromArr(character.race.subraces);

  //      Assign benefits

  character.languages = character.race.details.languages.map(x => {
    if (x === "any") {
      let remaingLanguages = Object.values(languages).filter(function(
        language
      ) {
        return !character.languages.includes(language);
      });
      x = randomFromObj[remaingLanguages];
    }
    return x;
  });

  for (let i = 0; i < Object.keys(character.race.abilityMod).length; i++) {
    let ability = Object.keys(character.race.abilityMod)[i];
    if (ability === "any") {
      ability = randomFromArr(Object.keys(character.abilities));
    }
    if (ability === "all") {
      character.abilities.Strength += 1;
      character.abilities.Dexterity += 1;
      character.abilities.Constitution += 1;
      character.abilities.Wisdom += 1;
      character.abilities.Intelligence += 1;
      character.abilities.Charisma += 1;
      break;
    }
    let modifier = Object.values(character.race.abilityMod)[i];
    character.abilities[ability] = character.abilities[ability] + modifier;
  }

  for (let i = 0; i < Object.values(character.abilityMod).length; i++) {
      let ability = Object.keys(character.abilities)[i]
      let abilityValue =  Object.values(character.abilities)[i]
    character.abilityMod[ability] = Math.floor(((abilityValue - 10)/2))
      
  }

  // Below is a bug fix - occassionally, an undefined element will populate character.languages. This removes it.

  character.languages = character.languages.filter(function(ele) {
    return typeof ele === "object";
  });

  // 5. Assign background -------------------------------------------------------------

  character.background = randomFromObj(backgrounds);

  //      Assign options uniquely offered in background

  character.personality.push(character.background.details);

  for (let i = 0; i < 4; i++) {
    character.personality.push(
      randomFromArr(character.background.personalityTraits[i])
    );
  }

  if (character.background.personalityTraits.length > 4) {
    character.personality.push(character.background.personalityTraits[4]);
    character.personality.push(
      randomFromArr(character.background.personalityTraits[5])
    );
  }

  let remaingLanguages = Object.values(languages).filter(function(language) {
    return !character.languages.includes(language);
  });

  for (let i = 0; i < character.background.languages.length; i++) {
    if (character.background.languages[i] === "any") {
      let randomLanguage = randomFromArr(remaingLanguages);
      character.languages.push(randomLanguage);
      remaingLanguages.splice(remaingLanguages.indexOf(randomLanguage), 1);
    }
  }

  //      Assign benefits

  if (character.background.skillProficiencies.length >= 1) {
    let backgroundSkills = character.background.skillProficiencies;
    backgroundSkills = backgroundSkills.map(function(skill) {
      return camelCase(skill);
    });
    character.proficiencies.skills = character.proficiencies.skills.concat(
      backgroundSkills
    );
  }

  character.proficiencies.tools = character.background.toolProficiencies;

  for (let i = 0; i < character.proficiencies.tools.length; i++) {
    if (Array.isArray(character.proficiencies.tools[i]) === true) {
      character.proficiencies.tools[i] = randomFromObj(
        character.proficiencies.tools[i][0]
      );
    }
  }

  //   for (let i = 0; i < character.proficiencies.tools.length; i++) {
  //     character.proficiencies.tools[i] = character.proficiencies.tools[i].name;
  //   }

  for (let i = 0; i < character.background.startingItems.length; i++) {
    let item = character.background.startingItems[i];
    if (Array.isArray(item)) {
      item = randomFromArr(item);
    }
    if (Array.isArray(item)) {
      item = randomFromArr(item);
    }

    character.items.push(item);
  }

  for (let i = 0; i < character.items.length; i++) {
    if (Array.isArray(character.items[i]) === true) {
      character.items[i].forEach(item => {
        character.items.push(item);
      });
      character.items = character.items.filter(item => {
        return item !== character.items[i];
      });
    }
  }
  for (let i = 0; i < character.items.length; i++) {
    if (character.items[i].contains !== undefined) {
      character.items[i].contains.forEach(item => character.items.push(item));
    }
  }

  // 6. Assign gender, name -----------------------------------------------------------

  character.gender = randomFromArr(genders);

  function pickRandomName(race, gender) {
    let raceNames = names[race];
    if (raceNames["Male"] === undefined) {
      raceNames = raceNames[character.subrace.name];
    }
    let genderedNames = raceNames[gender];
    let familyNames = raceNames.Family;
    return randomFromArr(genderedNames) + " " + randomFromArr(familyNames);
  }

  character.name = pickRandomName(character.race.name, character.gender);

  // 7. Assign skills -----------------------------------------------------------------

  //          Assign skill proficiencies

  for (let i = 0; i < character.proficiencies.skills.length; i++) {
    let skillIdentity = camelCase(character.proficiencies.skills[i]);
    character.skills[skillIdentity][1] = true;
  }

  // 9. Assign feats ------------------------------------------------------------------

  //      At first level, only a variant human can have a feat

  if (character.subrace === resources.subraces.humanVariant) {
    character.feats.push(randomFromObj(feats));
  }

  // 11. Assign equipment -------------------------------------------------------------

  for (let i = 0; i < character.items.length; i++) {
    if (character.items[i].damage !== undefined) {
      character.equipment.weapons.push(character.items[i]);
    }
    if (character.items[i].ac !== undefined) {
      character.equipment.armor.push(character.items[i]);
    }
    if (character.items[i].wearable !== undefined) {
      character.equipment.clothes.push(character.items[i]);
    }
  }

  // 8. Assign spells (if caster) -----------------------------------------------------

  character.spellcastingLevel = Math.floor(character.class.spellcastingLevel);

  if (character.class.name === "Bard" || "Druid" || "Warlock") {
    character.spells[0][0] = 2;
  } else if (character.class.name === "Cleric" || "Wizard") {
    character.spells[0][0] = 3;
  } else if (character.class.name === "Sorcerer") {
    character.spells[0][0] = 4;
  } else {
    character.spells[0][0] = 0;
  }

  if (character.spellcastingLevel > 0) {
    character.spells[1][0] = Math.min(4, 2 + (character.spellcastingLevel - 1));
    character.spells[2][0] = Math.min(3, 2 + (character.spellcastingLevel - 3));
    character.spells[3][0] = Math.min(3, 2 + (character.spellcastingLevel - 5));
    character.spells[4][0] = Math.min(3, 1 + (character.spellcastingLevel - 7));
    character.spells[5][0] = Math.min(3, 1 + (character.spellcastingLevel - 9));
    character.spells[6][0] = Math.min(
      2,
      1 + (character.spellcastingLevel - 11)
    );
    character.spells[7][0] = Math.min(
      2,
      1 + (character.spellcastingLevel - 13)
    );
    character.spells[8][0] = Math.min(
      1,
      1 + (character.spellcastingLevel - 15)
    );
    character.spells[9][0] = Math.min(
      1,
      1 + (character.spellcastingLevel - 17)
    );

    if (character.spells[0][0] > 0) {
      let cantripOptions = spells.cantrips[character.class.name];
      for (let i = 0; i < character.spells[0][0]; i++) {
        let cantripSelection = randomFromArr(cantripOptions);
        character.spells[0][1].push(cantripSelection);
        cantripOptions.filter(spell => {
          return spell !== cantripSelection;
        });
      }
    }
    if (character.spells[1][0] > 0) {
      let levelOneSpellOptions = spells.levelOneSpells[character.class.name];
      for (let i = 0; i < character.spells[1][0]; i++) {
        let levelOneSpellSelection = randomFromArr(levelOneSpellOptions);
        character.spells[1][1].push(levelOneSpellSelection);
        levelOneSpellOptions.filter(spell => {
          return spell !== levelOneSpellSelection;
        });
      }
    }
  }
  return character;
}

makeCharacter();

module.exports = makeCharacter;
