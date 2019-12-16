const artificersLore = {
  name: "Artificer's Lore",
  desc:
    "Whenever you make an intelligence (History) check related to magic items, alchemical Objects, or technological devices, you can add twice your Proficiency Bonus, instead of any Proficiency Bonus you normally apply."
};

const brave = {
  name: "Brave",
  desc: "You have advantage on saving throws against being frightened."
};

const breathWeapon = {
  name: "Breath Weapon",
  desc:
    "You can use your action to exhale destructive energy. Your Draconic Ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your Draconic Ancestry. The DC for this saving throw equals 8 + your constitution modifier + your Proficiency Bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or Long Rest."
};

const cantrip = {
  name: "Cantrip",
  desc:
    "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
};

const darkvision = {
  name: "Darkvision",
  desc:
    "Accustomed to life Underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray."
};

const draconicAncestry = {
  name: "Draconic Ancestry",
  desc:
    "You have Draconic Ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage Resistance are determined by the dragon type, as shown in the table.",
  table: [
    {
      dragonType: "Black",
      DamageType: "Acid",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    {
      dragonType: "Blue",
      DamageType: "Lightning",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    {
      dragonType: "Brass",
      DamageType: "Fire",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    {
      dragonType: "Bronze",
      DamageType: "Lightning",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    {
      dragonType: "Copper",
      DamageType: "Acid",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    {
      dragonType: "Gold",
      DamageType: "Fire",
      BreathWeapon: "15 ft. cone (Dex. save)"
    },
    {
      dragonType: "Green",
      DamageType: "Poison",
      BreathWeapon: "15 ft. cone (Dex. save)"
    },
    {
      dragonType: "Red",
      DamageType: "Fire",
      BreathWeapon: "15 ft. cone (Dex. save)"
    },
    {
      dragonType: "Silver",
      DamageType: "Cold",
      BreathWeapon: "15 ft. cone (Dex. save)"
    },
    {
      dragonType: "White",
      DamageType: "Cold",
      BreathWeapon: "15 ft. cone (Dex. save)"
    }
  ]
};

const draconicDamageResistance = {
  name: "Damage Resistance",
  desc:
    "You have Resistance to the damage type associated with your Draconic Ancestry."
};

const darkElfMagic = {
  name: "Dark Elf Magic",
  desc:
    "You know the dancing lights cantrip and can cast it at will. Starting from 3rd level, you can cast the faerie fire spell once. Starting from 5th level, you can cast the darkness spell once. Charisma is your spellcasting ability for these spells. You regain expended uses of this trait when you complete a long rest."
};

const darkElfWeaponTraining = {
  name: "Dark Elf Weapon Training",
  desc:
    "You are proficient with the rapier, shortsword, scimitar, and hand crossbow."
};

const dwarvenArmorTraining = {
  name: "Dwarven Armor Training",
  desc: "You have proficiency with light and medium armor."
};

const dwarvenCombatTraining = {
  name: "Dwarven Combat Training",
  desc:
    "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
};

const dwarvenResilience = {
  name: "Dwarven Resilience",
  desc:
    "You have advantage on saving throws against poison, and you have resistance against poison damage."
};

const dwarvenToughness = {
  name: "Dwarven Toughness",
  desc:
    "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
};

const elfWeaponTraining = {
  name: "Elf Weapon Training",
  desc:
    "You have proficiency with the longsword, shortsword, shortbow, and longbow."
};

const feyAncestry = {
  name: "Fey Ancestry",
  desc:
    "You have advantage on Saving Throws against being charmed, and magic can’t put you to sleep."
};

const fleetOfFoot = {
  name: "Fleet of Foot",
  desc: "Your base walking speed increases to 35 feet."
};

const gnomeCunning = {
  name: "Gnome Cunning",
  desc:
    "You have advantage on all intelligence, wisdom, and charisma saving throws against magic."
};

const halflingNimbleness = {
  name: "Halfling Nimbleness",
  desc:
    "You can move through the space of any creature that is of a size larger than yours."
};

const heavyArmorSpeed = {
  name: "Heavy Armor Speed",
  desc: "Your speed is not reduced by wearing heavy armor."
};

const hellishResistance = {
  name: "Hellish Resistance",
  desc: "You have resistance to fire damage."
};

const infernalLegacy = {
  name: "Infernal Legacy",
  desc:
    "You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the Hellish Rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a Long Rest. When you reach 5th level, you can cast the Darkness spell once with this trait and regain the ability to do so when you finish a Long Rest. Charisma is your Spellcasting Ability for these Spells."
};

const keenSenses = {
  name: "Keen Senses",
  desc: "You have proficiency in the Perception skill."
};

const lucky = {
  name: "Lucky",
  desc:
    "When you roll a 1 on The D20 for an Attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
};

const maskOfTheWild = {
  name: "Mask of the Wild",
  desc:
    "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
};

const naturallyStealthy = {
  name: "Naturally Stealthy",
  desc:
    "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
};

const relentlessEndurace = {
  name: "Relentless Endurace",
  desc:
    "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a Long Rest."
};

const savageAttacks = {
  name: "Savage Attacks",
  desc:
    "When you score a critical hit with a melee weapon Attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit."
};

const stoutResilience = {
  name: "Stout Resilience",
  desc:
    "You have advantage on saving throws against poison, and you have resistance against poison damage."
};

const stoneCamoflauge = {
  name: "Stone Camoflauge",
  desc:
    "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
};

const stonecunning = {
  name: "Stonecunning",
  desc:
    "Whenever you make an Intelligence (History) check related to the Origin of stonework, you are considered proficient in the History skill and add double your Proficiency Bonus to the check, instead of your normal Proficiency Bonus."
};

const sunlightSensitivity = {
  name: "Sunlight Sensitivity",
  desc:
    "You have disadvantage on attack rolls and Wisdom (Perception) checks when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
};

const superiorDarkvision = {
  name: "Superior Darkvision",
  desc: "Your darkvision has a range of 120 feet."
};

const tinker = {
  name: "Tinker",
  desc: [
    "You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to Construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:",
    [
      [
        "Clockwork Toy",
        "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or Soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
      ],
      [
        "Fire Starter",
        "The device produces a miniature flame, which you can use to light a Candle, torch, or campfire. Using the device requires your action."
      ],
      [
        "Music Box",
        "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed."
      ]
    ]
  ]
};

const toolProficiency = {
  name: "Tool Proficiency",
  desc:
    "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
};

const trance = {
  name: "Trance",
  desc:
    "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
};

const undercommon = {
  name: "Undercommon",
  desc: "You know the Undercommon language."
};

/////////////////////

const racialFeatures = {
  artificersLore,
  brave,
  breathWeapon,
  cantrip,
  darkvision,
  draconicAncestry,
  draconicDamageResistance,
  darkElfMagic,
  darkElfWeaponTraining,
  dwarvenResilience,
  dwarvenArmorTraining,
  dwarvenToughness,
  dwarvenCombatTraining,
  elfWeaponTraining,
  feyAncestry,
  fleetOfFoot,
  gnomeCunning,
  keenSenses,
  maskOfTheWild,
  halflingNimbleness,
  hellishResistance,
  heavyArmorSpeed,
  infernalLegacy,
  lucky,
  naturallyStealthy,
  relentlessEndurace,
  savageAttacks,
  stoutResilience,
  stoneCamoflauge,
  stonecunning,
  sunlightSensitivity,
  superiorDarkvision,
  tinker,
  toolProficiency,
  trance,
  undercommon
};

module.exports = racialFeatures;
