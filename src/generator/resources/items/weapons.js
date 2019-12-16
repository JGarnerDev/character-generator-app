const weaponProperties = require("./weaponProperties");

function randomFromArr(x) {
  return x[Math.floor(Math.random() * x.length)];
}

////////////////////////////////////////

function anySimple(x) {
    let options = []
  options.push(anySimpleMelee())
  options.push(anySimpleRanged())
  return randomFromArr(options)
}
function anySimpleMelee(x) {
  let weapon = randomFromArr(simpleMelee)
  return weapon(x)
}
function anySimpleRanged(x) {
  let weapon = randomFromArr(simpleRanged)
  return weapon(x);
}
function anyMartial(x) {
    let options = []
    options.push(anyMartialMelee())
    options.push(anyMartialRanged())
    return randomFromArr(options)
}
function anyMartialMelee(x) {
  let weapon = randomFromArr(martialMelee)
  return weapon(x);
}
function anyMartialRanged(x) {
  let weapon = randomFromArr(martialRanged)
  return weapon(x);
}

////////////////////////////////////////

function club(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Club",
    quantity: q,
    type: "Simple melee",
    value: 0.1 * q,
    damage: [1, 4, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.light]
  };
}
function dagger(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Dagger",
    quantity: q,
    type: "Simple melee",
    value: 2 * q,
    damage: [1, 4, "bludgeoning"],
    weight: 1 * q,
    properties: [
      weaponProperties.finesse,
      weaponProperties.light,
      weaponProperties.thrown(20, 60)
    ]
  };
}
function greatClub(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "GreatClub",
    quantity: q,
    type: "Simple melee",
    value: 0.2 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 10 * q,
    properties: [weaponProperties.twoHanded]
  };
}
function handaxe(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Handaxe",
    quantity: q,
    type: "Simple melee",
    value: 5 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.light, weaponProperties.thrown(20, 60)]
  };
}
function javelin(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Javelin",
    quantity: q,
    type: "Simple melee",
    value: 0.5 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.thrown(30, 120)]
  };
}
function lightHammer(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "LightHammer",
    quantity: q,
    type: "Simple melee",
    value: 2 * q,
    damage: [1, 4, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.light, weaponProperties.thrown(20, 60)]
  };
}
function mace(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Mace",
    quantity: q,
    type: "Simple melee",
    value: 5 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 4 * q,
    properties: []
  };
}
function quarterstaff(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Quarterstaff",
    quantity: q,
    type: "Simple melee",
    value: 0.2 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 4 * q,
    properties: [weaponProperties.versatile(1, 8)]
  };
}
function sickle(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Sickle",
    quantity: q,
    type: "Simple melee",
    value: 1 * q,
    damage: [1, 4, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.light]
  };
}
function spear(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Spear",
    quantity: q,
    type: "Simple melee",
    value: 1 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 3 * q,
    properties: [
      weaponProperties.thrown(20, 60),
      weaponProperties.versatile(1, 8)
    ]
  };
}
function lightCrossbow(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "LightCrossbow",
    quantity: q,
    type: "Simple ranged",
    value: 25 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 5 * q,
    properties: [
      weaponProperties.ammunition(80, 320),
      weaponProperties.loading,
      weaponProperties.twoHanded
    ]
  };
}
function dart(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Dart",
    quantity: q,
    type: "Simple ranged",
    value: 0.01 * q,
    damage: [1, 4, "bludgeoning"],
    weight: 0.25 * q,
    properties: [weaponProperties.finesse, weaponProperties.thrown(20, 60)]
  };
}
function shortbow(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Shortbow",
    quantity: q,
    type: "Simple ranged",
    value: 25 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 2 * q,
    properties: [
      weaponProperties.ammunition(80, 320),
      weaponProperties.twoHanded
    ]
  };
}
function sling(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Sling",
    quantity: q,
    type: "Simple ranged",
    value: 0.1 * q,
    damage: [1, 4, "bludgeoning"],
    weight: 0 * q,
    properties: [weaponProperties.ammunition(30, 120)]
  };
}
function battleaxe(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Battleaxe",
    quantity: q,
    type: "Martial melee",
    value: 10 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 4 * q,
    properties: [weaponProperties.versatile(1, 10)]
  };
}
function flail(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Flail",
    quantity: q,
    type: "Martial melee",
    value: 10 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 2 * q,
    properties: []
  };
}
function glaive(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Glaive",
    quantity: q,
    type: "Martial melee",
    value: 20 * q,
    damage: [1, 10, "bludgeoning"],
    weight: 6 * q,
    properties: [
      weaponProperties.heavy,
      weaponProperties.reach,
      weaponProperties.twoHanded
    ]
  };
}
function greataxe(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Greataxe",
    quantity: q,
    type: "Martial melee",
    value: 30 * q,
    damage: [1, 12, "bludgeoning"],
    weight: 7 * q,
    properties: [weaponProperties.heavy, weaponProperties.twoHanded]
  };
}
function greatsword(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Greatsword",
    quantity: q,
    type: "Martial melee",
    value: 50 * q,
    damage: [2, 6, "bludgeoning"],
    weight: 6 * q,
    properties: [weaponProperties.heavy, weaponProperties.twoHanded]
  };
}
function halberd(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Halberd",
    quantity: q,
    type: "Martial melee",
    value: 20 * q,
    damage: [1, 10, "bludgeoning"],
    weight: 6 * q,
    properties: [
      weaponProperties.heavy,
      weaponProperties.reach,
      weaponProperties.twoHanded
    ]
  };
}
function lance(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Lance",
    quantity: q,
    type: "Martial melee",
    value: 10 * q,
    damage: [1, 12, "bludgeoning"],
    weight: 6 * q,
    properties: [weaponProperties.reach, weaponProperties.lance]
  };
}
function longsword(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Longsword",
    quantity: q,
    type: "Martial melee",
    value: 15 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 3 * q,
    properties: [weaponProperties.versatile(1, 10)]
  };
}
function maul(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Maul",
    quantity: q,
    type: "Martial melee",
    value: 10 * q,
    damage: [2, 6, "bludgeoning"],
    weight: 10 * q,
    properties: [weaponProperties.heavy, weaponProperties.twoHanded]
  };
}
function morningstar(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Morningstar",
    quantity: q,
    type: "Martial melee",
    value: 15 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 4 * q,
    properties: []
  };
}
function pike(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Pike",
    quantity: q,
    type: "Martial melee",
    value: 5 * q,
    damage: [1, 10, "bludgeoning"],
    weight: 18 * q,
    properties: [
      weaponProperties.heavy,
      weaponProperties.reach,
      weaponProperties.twoHanded
    ]
  };
}
function rapier(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Rapier",
    quantity: q,
    type: "Martial melee",
    value: 25 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.finesse]
  };
}
function scimitar(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Scimitar",
    quantity: q,
    type: "Martial melee",
    value: 25 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 3 * q,
    properties: [weaponProperties.finesse, weaponProperties.light]
  };
}
function shortsword(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Shortsword",
    quantity: q,
    type: "Martial melee",
    value: 10 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.finesse, weaponProperties.light]
  };
}
function trident(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Trident",
    quantity: q,
    type: "Martial melee",
    value: 5 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 4 * q,
    properties: [
      weaponProperties.thrown(20, 60),
      weaponProperties.versatile(1, 10)
    ]
  };
}
function warPick(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "War Pick quantity: q,",
    type: "Martial melee",
    value: 5 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 2 * q,
    properties: []
  };
}
function warhammer(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Warhammer",
    quantity: q,
    type: "Martial melee",
    value: 15 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 2 * q,
    properties: [weaponProperties.versatile(1, 10)]
  };
}
function whip(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Whip",
    quantity: q,
    type: "Martial melee",
    value: 2 * q,
    damage: [1, 4, "bludgeoning"],
    weight: 3 * q,
    properties: [weaponProperties.finesse, weaponProperties.reach]
  };
}
function blowgun(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Blowgun",
    quantity: q,
    type: "Martial ranged",
    value: 10 * q,
    damage: [1, 1, "bludgeoning"],
    weight: 1 * q,
    properties: [weaponProperties.ammunition(25, 100), weaponProperties.loading]
  };
}
function handCrossbow(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Hand Crossbow",
    type: "Martial ranged",
    value: 75 * q,
    damage: [1, 6, "bludgeoning"],
    weight: 3 * q,
    properties: [
      weaponProperties.ammunition(30, 120),
      weaponProperties.light,
      weaponProperties.loading
    ]
  };
}
function heavyCrossbow(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Heavy Crossbow",
    type: "Martial ranged",
    value: 50 * q,
    damage: [1, 10, "bludgeoning"],
    weight: 18 * q,
    properties: [
      weaponProperties.ammunition(100, 400),
      weaponProperties.heavy,
      weaponProperties.loading,
      weaponProperties.twoHanded
    ]
  };
}
function longbow(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Longbow",
    quantity: q,
    type: "Martial ranged",
    value: 50 * q,
    damage: [1, 8, "bludgeoning"],
    weight: 2 * q,
    properties: [
      weaponProperties.ammunition(100, 400),
      weaponProperties.heavy,
      weaponProperties.twoHanded
    ],
    ammunition: "arrow"
  };
}
function net(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Net",
    quantity: q,
    type: "Martial ranged",
    value: 1 * q,
    damage: [0, 0, "none"],
    weight: 3 * q,
    properties: [weaponProperties.net, weaponProperties.thrown]
  };
}

const simpleMelee = [
  club,
  dagger,
  greatClub,
  handaxe,
  javelin,
  lightHammer,
  mace,
  quarterstaff,
  sickle,
  spear
];

const simpleRanged = [lightCrossbow, dart, shortbow, sling];


const martialMelee = [
  battleaxe,
  flail,
  glaive,
  greataxe,
  greatsword,
  halberd,
  lance,
  longsword,
  maul,
  morningstar,
  pike,
  rapier,
  scimitar,
  shortsword,
  trident,
  warPick,
  warhammer,
  whip
];

const martialRanged = [blowgun, handCrossbow, heavyCrossbow, longbow, net];

const weapons = {
  simple: {
    any: anySimple,
    melee: {
      any: anySimpleMelee,
      weapon: {
        club,
        dagger,
        greatClub,
        handaxe,
        javelin,
        lightHammer,
        mace,
        quarterstaff,
        sickle,
        spear
      }
    },
    ranged: {
      any: anySimpleRanged,
      weapon: {
        lightCrossbow,
        dart,
        shortbow,
        sling
      }
    }
  },
  martial: {
    any: anyMartial,
    melee: {
      any: anyMartialMelee,
      weapon: {
        battleaxe,
        flail,
        glaive,
        greataxe,
        greatsword,
        halberd,
        lance,
        longsword,
        maul,
        morningstar,
        pike,
        rapier,
        scimitar,
        shortsword,
        trident,
        warPick,
        warhammer,
        whip
      }
    },
    ranged: {
      any: anyMartialRanged,
      weapon: { blowgun, handCrossbow, heavyCrossbow, longbow, net }
    }
  }
};

module.exports = weapons;


