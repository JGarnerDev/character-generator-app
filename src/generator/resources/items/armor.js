function padded(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Padded",
    quantity: q,
    desc: "Consists of quilted layers of cloth and batting.",
    type: "Light",
    metal: false,
    cost: 5 * q,
    ac: [11, 0],
    reqStr: 0,
    stealth: [false, "Disadvantage"],
    weight: 8 * q
  };
}
function leather(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Leather",
    quantity: q,
    desc:
      "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",
    type: "Light",
    metal: false,
    cost: 10 * q,
    ac: [11, 0],
    reqStr: 0,
    stealth: true,
    weight: 10 * q
  };
}
function studdedLeather(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Studded leather",
    quantity: q,
    desc:
      "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",
    type: "Light",
    metal: true,
    cost: 45 * q,
    ac: [12, 0],
    reqStr: 0,
    stealth: true,
    weight: 13 * q
  };
}
function hide(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Hide",
    quantity: q,
    desc:
      "This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor.",
    type: "Light",
    metal: false,
    cost: 10 * q,
    ac: [12, 2],
    reqStr: 0,
    stealth: true,
    weight: 12 * q
  };
}
function chainShirt(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Chain shirt",
    quantity: q,
    desc:
      "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer’s upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
    type: "Light",
    metal: true,
    cost: 50 * q,
    ac: [13, 2],
    reqStr: 0,
    stealth: true,
    weight: 20 * q
  };
}
function scaleMail(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Scale mail",
    quantity: q,
    desc:
      "This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.",
    type: "Light",
    metal: true,
    cost: 50 * q,
    ac: [14, 2],
    reqStr: 0,
    stealth: [false, "Disadvantage"],
    weight: 45 * q
  };
}
function breastplate(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Breast plate",
    quantity: q,
    desc:
      "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer’s vital organs while leaving the wearer relatively unencumbered.",
    type: "Light",
    metal: true,
    cost: 400 * q,
    ac: [14, 2],
    reqStr: 0,
    stealth: true,
    weight: 20 * q
  };
}
function halfPlate(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Half plate",
    quantity: q,
    desc:
      "Half Plate consists of shaped metal plates that cover most of the wearer’s body. It does not include leg protection beyond simple greaves that are attached with leather straps.",
    type: "Light",
    metal: true,
    cost: 750 * q,
    ac: [15, 2],
    reqStr: 0,
    stealth: [false, "Disadvantage"],
    weight: 40 * q
  };
}
function ringMail(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Ring mail",
    quantity: q,
    desc:
      "This armor is Leather Armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to Chain Mail, and it's usually worn only by those who can’t afford better armor.",
    type: "Light",
    metal: true,
    cost: 30 * q,
    ac: [14],
    reqStr: 0,
    stealth: [false, "Disadvantage"],
    weight: 40 * q
  };
}
function chainMail(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Chain mail",
    quantity: q,
    desc:
      "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.",
    type: "Light",
    metal: true,
    cost: 75 * q,
    ac: [16],
    reqStr: 13,
    stealth: [false, "Disadvantage"],
    weight: 55 * q
  };
}
function splint(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Splint",
    quantity: q,
    desc:
      "This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints.",
    type: "Light",
    metal: true,
    cost: 200 * q,
    ac: [17],
    reqStr: 15,
    stealth: [false, "Disadvantage"],
    weight: 60 * q
  };
}
function plate(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Plate",
    quantity: q,
    desc:
      "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
    type: "Light",
    metal: true,
    cost: 1500 * q,
    ac: [18],
    reqStr: 15,
    stealth: [false, "Disadvantage"],
    weight: 65 * q
  };
}
function shield(x) {
  let q = 1;
  if (x > q) {
    q = x;
  }
  return {
    name: "Shield",
    quantity: q,
    desc:
      "A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.",
    type: "Shield",
    metal: false,
    cost: 10 * q,
    ac: [2],
    reqStr: 0,
    stealth: true,
    weight: 6 * q
  };
}

const armor = {
  light: {
    padded,
    leather,
    studdedLeather
  },
  medium: {
    hide,
    chainShirt,
    scaleMail,
    breastplate,
    halfPlate
  },
  heavy: {
    ringMail,
    chainMail,
    splint,
    plate
  },
  shield
};

module.exports = armor;
