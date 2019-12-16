let racialFeatures = require("./racialFeatures");
let feats = require("../feats/featsMain");
let skills = require("../skills/skillsMain");
let languages = require("../languages/languagesMain");

const hillDwarf = {
  name: "Hill Dwarf",
  desc:
    "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.",
  abilityMod: { wis: +1 },
  racialFeatures: [racialFeatures.dwarvenToughness]
};
const mountainDwarf = {
  name: "Mountain Dwarf",
  desc:
    "As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.",
  abilityMod: { str: +2 },
  racialFeatures: [racialFeatures.dwarvenArmorTraining]
};
const highElf = {
  name: "High Elf",
  desc:
    "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.",
  abilityMod: { int: +1 },
  racialFeatures: [
    racialFeatures.elfWeaponTraining,
    racialFeatures.cantrip,
    languages
  ]
};
const woodElf = {
  name: "Wood Elf",
  desc:
    "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerun, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. Wood elves' skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.",
  abilityMod: { wis: +1 },
  racialFeatures: [
    racialFeatures.elfWeaponTraining,
    racialFeatures.fleetOfFoot,
    racialFeatures.keenSenses,
    racialFeatures.maskOfTheWild
  ]
};
const darkElf = {
  name: "Dark Elf",
  desc: "Descended from an earlier subrace of dark skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path to evil and corruption. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves, the drow have black skin that resembles polished obsidian and stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of pale lilac, silver, pink, and blue. They tend to be smaller and thinner than most elves.",
  abilityMod: { cha: +1 },
  racialFeatures: [
    racialFeatures.superiorDarkvision,
    racialFeatures.sunlightSensitivity,
    racialFeatures.drowWeaponTraining,
    racialFeatures.drowMagic
  ]
};
const deepGnome = {
  name: "Deep Gnome",
  desc:
    "Forest gnomes and rock gnomes are the gnomes most commonly encountered in the lands of the surface world. There is another subrace of gnomes rarely seen by any surface-dweller: deep gnomes, also known as svirfneblin. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.",
  abilityMod: { dex: +1 },
  racialFeatures: [
    racialFeatures.superiorDarkvision,
    racialFeatures.stoneCamoflauge,
    racialFeatures.undercommon
  ]
};
const rockGnome = {
  name: "Rock Gnome",
  desc:
    "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.",
  abilityMod: { con: +1 },
  racialFeatures: [racialFeatures.artificersLore, racialFeatures.tinker]
};
const lightfootHalfling = {
  name: "Lightfoot Halfling",
  desc:
    "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety.",
  abilityMod: { cha: +1 },
  racialFeatures: [racialFeatures.naturallyStealthy]
};
const stoutHalfling = {
  name: "Stout Halfling",
  desc:
    "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.",
  abilityMod: { con: +1 },
  racialFeatures: [racialFeatures.stoutResilience]
};
const humanVariant = {
  name: "Variant",
  desc:
    "If your campaign uses the optional feat rules from the Player’s Handbook, your Dungeon Master might allow these variant traits, all of which replace the human’s Ability Score Increase trait.",
  abilityMod: { any2Stats: +1 },
  racialFeatures: [skills, feats]
};

const subraces = {
  hillDwarf,
  mountainDwarf,
  highElf,
  darkElf,
  woodElf,
  deepGnome,
  rockGnome,
  lightfootHalfling,
  stoutHalfling,
  humanVariant
};

module.exports = subraces;
