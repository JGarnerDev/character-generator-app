var atheletics = {
  name: "Atheletics",
  desc: "Example: climbing, jumping, or swimming.",
  abilityAssoc: "Strength",
  bonus: 0,
  proficiency: false
};
var acrobatics = {
  name: "Acrobatics",
  desc:
    "Example: running across a sheet of ice, balancing on a tightrope, or staying upright on a rocking ship's deck.",
  abilityAssoc: "Dexterity",
  bonus: 0,
  proficiency: false
};
var sleightOfHand = {
  name: "Sleight of Hand",
  desc:
    "Example: planting something on someone else or concealing an object on your person.",
  abilityAssoc: "Dexterity",
  bonus: 0,
  proficiency: false
};
var stealth = {
  name: "Stealth",
  desc:
    "Example: conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.",
  abilityAssoc: "Dexterity",
  bonus: 0,
  proficiency: false
};
var arcana = {
  name: "Arcana",
  desc:
    "Example: recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes",
  abilityAssoc: "Intelligence",
  bonus: 0,
  proficiency: false
};
var history = {
  name: "History",
  desc:
    "Example: recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations",
  abilityAssoc: "Intelligence",
  bonus: 0,
  proficiency: false
};
var investigation = {
  name: "Investigation",
  desc:
    "Example: deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse.",
  abilityAssoc: "Intelligence",
  bonus: 0,
  proficiency: false
};
var nature = {
  name: "Nature",
  desc:
    "Example: recall lore about terrain, plants and animals, the weather, and natural cycles",
  abilityAssoc: "Intelligence",
  bonus: 0,
  proficiency: false
};
var religion = {
  name: "Religion",
  desc:
    "Example: recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults",
  abilityAssoc: "Intelligence",
  bonus: 0,
  proficiency: false
};
var animalHandling = {
  name: "Animal Handling",
  desc:
    "Example: calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions",
  abilityAssoc: "Wisdom",
  bonus: 0,
  proficiency: false
};
var insight = {
  name: "Insight",
  desc:
    "Example: determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move",
  abilityAssoc: "Wisdom",
  bonus: 0,
  proficiency: false
};
var medicine = {
  name: "Medicine",
  desc: "Example: stabilize a dying companion or diagnose an illness",
  abilityAssoc: "Wisdom",
  bonus: 0,
  proficiency: false
};
var perception = {
  name: "Perception",
  desc: "Example: spot, hear, or otherwise detect the presence of something",
  abilityAssoc: "Wisdom",
  bonus: 0,
  proficiency: false
};
var survival = {
  name: "Survival",
  desc:
    "Example: follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards",
  abilityAssoc: "Wisdom",
  bonus: 0,
  proficiency: false
};
var deception = {
  name: "Deception",
  desc:
    "Example: trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie",
  abilityAssoc: "Charisma",
  bonus: 0,
  proficiency: false
};
var intimidation = {
  name: "Intimidation",
  desc:
    "Example: trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision",
  abilityAssoc: "Charisma",
  bonus: 0,
  proficiency: false
};
var performance = {
  name: "Performance",
  desc:
    "Example: delighting an audience with music, dance, acting, storytelling, or some other form of entertainment",
  abilityAssoc: "Charisma",
  bonus: 0,
  proficiency: false
};
var persuasion = {
  name: "Persuasion",
  desc:
    "Example: convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk",
  abilityAssoc: "Charisma",
  bonus: 0,
  proficiency: false
};

let skills = {
  atheletics,
  acrobatics,
  sleightOfHand,
  stealth,
  arcana,
  history,
  investigation,
  nature,
  religion,
  animalHandling,
  insight,
  medicine,
  perception,
  survival,
  deception,
  intimidation,
  performance,
  persuasion,
  byAbility: {
    str: [atheletics],
    dex: [acrobatics, sleightOfHand, stealth],
    con: [],
    wis: [animalHandling, insight, medicine, perception, survival],
    int: [arcana, history, investigation, nature, religion],
    cha: [deception, intimidation, performance, persuasion]
  },
  names:[ "atheletics",
    "acrobatics",
    "sleightOfHand",
    "stealth",
    "arcana",
    "history",
    "investigation",
    "nature",
    "religion",
    "animalHandling",
    "insight",
    "medicine",
    "perception",
    "survival",
    "deception",
    "intimidation",
    "performance",
    "persuasion"]
};

module.exports = skills;
