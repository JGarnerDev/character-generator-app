const items = require("../items/itemsMain");

const barbarian = {
  name: "Barbarian",
  description:
    "A fierce warrior of primitive background who can enter a battle rage",
  hitDie: 12,
  primaryAbility: "str",
  spellcastingLevel: 0,
  savingThrowProficiencies: ["str", "con"],
  skillProficiencies: [
    2,
    "Animal Handling",
    "Atheletics",
    "Intimidation",
    "Nature",
    "Perception",
    "Survival"
  ],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: ["weapons simple", "weapons martial "],
  startingItems: [
    [
      items.weapons.martial.melee.weapon.greataxe(),
      items.weapons.martial.melee.any(1)
    ],
    [
      items.weapons.simple.melee.weapon.handaxe(2),
      items.weapons.simple.melee.any(1)
    ],
    items.weapons.simple.melee.weapon.javelin(4),
    items.adventuringGear.explorersPack()
  ]
};
const bard = {
  name: "Bard",
  description: "An inspiring magician whose power echoes the music of creation",
  hitDie: 8,
  primaryAbility: "cha",
  spellcastingLevel: 1,
  savingThrowProficiencies: ["cha", "dex"],
  skillProficiencies: [3],
  armorProficiencies: ["armor light"],
  weaponProficiencies: [
    "weapons simple",
    "weapons martial ranged handCrossbow",
    "weapons martial melee longsword",
    "weapons martial melee rapier",
    "weapons martial melee shortsword"
  ],
  startingItems: [
    [
      items.weapons.martial.melee.weapon.rapier(),
      items.weapons.martial.melee.weapon.longsword(),
      items.weapons.simple.melee.any(1)
    ],
    [
      items.adventuringGear.diplomatsPack(),
      items.adventuringGear.entertainersPack()
    ],
    [
      items.adventuringGear.lute(),
      items.adventuringGear.musicalInstrument.any(1)
    ],
    items.armor.light.leather(),
    items.weapons.simple.melee.weapon.dagger()
  ]
};
const cleric = {
  name: "Cleric",
  description:
    "A priestly champion who wields divine magic in service of a higher power",
  hitDie: 8,
  primaryAbility: "wis",
  spellcastingLevel: 1,
  savingThrowProficiencies: ["wis", "cha"],
  skillProficiencies: [
    2,
    "History",
    "Insight",
    "Medicine",
    "Persuasion",
    "Religion"
  ],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: ["weapons simple"],
  startingItems: [
    [
      items.weapons.simple.melee.weapon.mace(),
      items.weapons.martial.melee.weapon.warhammer()
    ],
    [
      items.armor.medium.scaleMail(),
      items.armor.light.leather(),
      items.armor.heavy.chainMail()
    ],
    [
      [
        items.weapons.simple.ranged.weapon.lightCrossbow(),
        items.adventuringGear.crossbowBoltCase()
      ],
      items.weapons.simple.any(1)
    ],
    [
      items.adventuringGear.priestsPack(),
      items.adventuringGear.explorersPack()
    ],
    items.armor.shield(),
    items.adventuringGear.holySymbol()
  ]
};
const druid = {
  name: "Druid",
  description:
    "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms",
  hitDie: 8,
  primaryAbility: "wis",
  spellcastingLevel: 1,
  savingThrowProficiencies: ["int", "wis"],
  skillProficiencies: [
    2,
    "Arcana",
    "Animal Handling",
    "Insight",
    "Medicine",
    "Nature",
    "Perception",
    "Religion",
    "Survival"
  ],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: [
    "weapons simple melee club",
    "weapons simple melee dagger",
    "weapons simple ranged dart",
    "weapons simple melee javelin",
    "weapons martial melee mace",
    "weapons simple melee quarterstaff",
    "weapons martial melee scimitar",
    "weapons simple melee sickle",
    "weapons simple ranged sling",
    "weapons simple melee spear"
  ],
  startingItems: [
    [items.armor.shield(), items.weapons.simple.any(1)],
    [
      items.weapons.martial.melee.weapon.scimitar(),
      items.weapons.simple.melee.any(1)
    ],
    items.armor.light.leather(),
    items.adventuringGear.explorersPack(),
    items.adventuringGear.druidicFocus()
  ]
};
const fighter = {
  name: "Fighter",
  description:
    "A master of martial combat, skilled with a variety of weapons and armor",
  hitDie: 10,
  primaryAbility: ["str", "dex"], /// OR
  spellcastingLevel: 0,
  savingThrowProficiencies: ["str", "con"],
  skillProficiencies: [
    2,
    "Acrobatics",
    "Animal Handling",
    "Atheletics",
    "History",
    "Insight",
    "Intimidation",
    "Perception",
    "Survival"
  ],
  armorProficiencies: [
    "armor light",
    "armor medium",
    "armor heavy ",
    "armor shield"
  ],
  weaponProficiencies: ["weapons simple", "weapons martial"],
  startingItems: [
    [
      items.armor.heavy.chainMail(),
      [
        items.armor.light.leather(),
        items.weapons.martial.ranged.weapon.longbow(),
        items.adventuringGear.quiver()
      ]
    ],
    [
      [items.weapons.martial.any(1), items.armor.shield()],
      items.weapons.martial.any(2)
    ],
    [
      [
        items.weapons.simple.ranged.weapon.lightCrossbow(),
        items.adventuringGear.crossbowBoltCase()
      ],

      items.weapons.simple.melee.weapon.handaxe(2)
    ],
    [
      items.adventuringGear.dungeoneersPack(),
      items.adventuringGear.explorersPack()
    ]
  ]
};
const monk = {
  name: "Monk",
  description:
    "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
  hitDie: 8,
  primaryAbility: ["dex", "wis"], //// AND
  spellcastingLevel: 0,
  savingThrowProficiencies: ["str", "dex"],
  skillProficiencies: [
    2,
    "Acrobatics",
    "Atheletics",
    "History",
    "Insight",
    "Religion",
    "Stealth"
  ],
  armorProficiencies: [],
  weaponProficiencies: ["weapons simple", "weapons martial melee shortsword"],
  startingItems: [
    [
      items.weapons.martial.melee.weapon.shortsword(),
      items.weapons.simple.any(1)
    ],
    [
      items.adventuringGear.dungeoneersPack(),
      items.adventuringGear.explorersPack()
    ],
    items.weapons.simple.ranged.weapon.dart(10)
  ]
};
const paladin = {
  name: "Paladin",
  description: "A holy warrior bound to a sacred oath",
  hitDie: 10,
  primaryAbility: ["str", "cha"], /// AND
  spellcastingLevel: 0.5,
  savingThrowProficiencies: ["wis", "cha"],
  skillProficiencies: [
    2,
    "Atheletics",
    "Insight",
    "Intimidation",
    "Medicine",
    "Persuasion",
    "Religion"
  ],
  armorProficiencies: [
    "armor light",
    "armor medium",
    "armor heavy",
    "armor shield"
  ],
  weaponProficiencies: ["weapons simple", "weapons martial"],
  startingItems: [
    [
      [items.weapons.martial.any(), items.armor.shield()],
      items.weapons.martial.any(2)
    ],
    [
      items.weapons.simple.melee.weapon.javelin(5),
      items.weapons.simple.melee.any(1)
    ],
    [
      items.adventuringGear.priestsPack(),
      items.adventuringGear.explorersPack()
    ],
    items.armor.heavy.chainMail(),
    items.adventuringGear.holySymbol()
  ]
};
const ranger = {
  name: "Ranger",
  description:
    "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
  hitDie: 10,
  primaryAbility: ["dex", "wis"], /// AND
  spellcastingLevel: 0.5,
  savingThrowProficiencies: ["str", "dex"],
  skillProficiencies: [
    3,
    "Animal Handling",
    "Atheletics",
    "Insight",
    "Investigation",
    "Nature",
    "Perception",
    "Stealth",
    "Survival"
  ],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: ["weapons simple", "weapons martial"],
  startingItems: [
    [items.armor.medium.scaleMail(), items.armor.light.leather()],
    [
      items.weapons.martial.melee.weapon.shortsword(2),
      items.weapons.simple.melee.any(2)
    ],
    [
      items.adventuringGear.dungeoneersPack(),
      items.adventuringGear.explorersPack()
    ],
    items.weapons.martial.ranged.weapon.longbow(),
    items.adventuringGear.quiver()
  ]
};
const rogue = {
  name: "Rogue",
  description:
    "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
  hitDie: 8,
  primaryAbility: "dex",
  spellcastingLevel: 0,
  savingThrowProficiencies: ["dex", "int"],
  skillProficiencies: [
    4,
    "Acrobatics",
    "Atheletics",
    "Deception",
    "Insight",
    "Intimidation",
    "Investigation",
    "Perception",
    "Performance",
    "Persuasion",
    "Sleight of Hand",
    "Stealth"
  ],
  armorProficiencies: ["armor light"],
  weaponProficiencies: [
    "weapons simple",
    "weapons martial ranged handCrossbow",
    "weapons martial melee longsword",
    "weapons martial melee rapier",
    "weapons martial melee shortsword"
  ],
  startingItems: [
    [
      items.weapons.martial.melee.weapon.rapier(),
      items.weapons.martial.melee.weapon.shortsword()
    ],
    [
      [
        items.weapons.simple.ranged.weapon.shortbow(),
        items.adventuringGear.quiver(),
        items.adventuringGear.arrow(20)
      ],
      items.weapons.martial.melee.weapon.shortsword()
    ],
    [
      items.adventuringGear.burglarsPack(),
      items.adventuringGear.dungeoneersPack(),
      items.adventuringGear.explorersPack()
    ],
    items.armor.light.leather(),
    items.weapons.simple.melee.weapon.dagger(2),
    items.adventuringGear.thievesTools()
  ]
};
const sorcerer = {
  name: "Sorcerer",
  description:
    "A spellcaster who draws on inherent magic from a gift or bloodline",
  hitDie: 6,
  primaryAbility: "cha",
  spellcastingLevel: 1,
  savingThrowProficiencies: ["con", "cha"],
  skillProficiencies: [
    2,
    "Arcana",
    "Deception",
    "Insight",
    "Intimidation",
    "Persuasion",
    "Religion"
  ],
  armorProficiencies: [],
  weaponProficiencies: [
    "weapons simple melee dagger",
    "weapons simple ranged dart",
    "weapons simple ranged sling",
    "weapons simple melee quarterstaff",
    "weapons simple ranged lightCrossbow"
  ],
  startingItems: [
    [
      [
        items.weapons.simple.ranged.weapon.lightCrossbow(),
        items.adventuringGear.crossbowBoltCase(),
        items.adventuringGear.bolt(20)
      ],
      items.weapons.simple.any(1)
    ],
    [
      items.adventuringGear.componentPouch(),
      items.adventuringGear.arcaneFocus()
    ],
    [
      items.adventuringGear.dungeoneersPack(),
      items.adventuringGear.explorersPack()
    ],
    items.weapons.simple.melee.weapon.dagger(2)
  ]
};
const warlock = {
  name: "Warlock",
  description:
    "A wielder of magic that is derived from a bargain with an extraplanar entity",
  hitDie: 8,
  primaryAbility: "cha",
  spellcastingLevel: 0.3,
  savingThrowProficiencies: ["wis", "cha"],
  skillProficiencies: [
    2,
    "Arcana",
    "Deception",
    "History",
    "Intimidation",
    "Investigation",
    "Nature",
    "Religion"
  ],
  armorProficiencies: ["armor light"],
  weaponProficiencies: ["weapons simple"],
  startingItems: [
    [
      [
        items.weapons.simple.ranged.weapon.lightCrossbow(),
        items.adventuringGear.crossbowBoltCase(),
        items.adventuringGear.bolt(20)
      ],
      items.weapons.simple.any(1)
    ],
    [
      items.adventuringGear.componentPouch(),
      items.adventuringGear.arcaneFocus()
    ],
    [
      items.adventuringGear.scholarsPack(),
      items.adventuringGear.dungeoneersPack()
    ],
    items.armor.light.leather(),
    items.weapons.simple.any(1),
    items.weapons.simple.melee.weapon.dagger(2)
  ]
};
const wizard = {
  name: "Wizard",
  description:
    "A scholarly magic-user capable of manipulating the structures of reality",
  hitDie: 6,
  primaryAbility: "int",
  spellcastingLevel: 1,
  savingThrowProficiencies: ["int", "wis"],
  skillProficiencies: [
    2,
    "Arcana",
    "History",
    "Insight",
    "Investigation",
    "Medicine",
    "Religion"
  ],
  armorProficiencies: [],
  weaponProficiencies: [
    "weapons simple melee dagger",
    "weapons simple ranged dart",
    "weapons simple ranged sling",
    "weapons simple melee quarterstaff",
    "weapons simple ranged lightCrossbow"
  ],
  startingItems: [
    [
      items.weapons.simple.melee.weapon.quarterstaff(),
      items.weapons.simple.melee.weapon.dagger()
    ],
    [
      items.adventuringGear.componentPouch(),
      items.adventuringGear.arcaneFocus()
    ],
    [
      items.adventuringGear.scholarsPack(),
      items.adventuringGear.explorersPack()
    ],
    items.adventuringGear.spellbook()
  ]
};

const classes = {
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard
};

module.exports = classes;
