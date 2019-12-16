function thrown(x, y) {
  return {
    name: "Thrown",
    desc:
      "This weapon can be thrown at targets up to " +
      x +
      " feet away without any penalties, while targeting " +
      (x + 1) +
      " to " +
      y +
      " feet away will be with a disadvantage. Targets farther than " +
      y +
      " feet away cannot be targeted by throwing this weapon."
  };
}
const twoHanded = {
  name: "Two handed",
  desc: "This weapon requires two hands when you attack with it."
};
const light = {
  name: "Light",
  desc:
    "A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons."
};
function versatile(x, y) {
  return {
    name: "Versatile",
    desc:
      "This weapon can be used with one or two hands. If you use it with two hands, roll " +
      x +
      "d" +
      y +
      " when determining the damage."
  };
}
function ammunition(x, y) {
  return {
    name: "Ammunition",
    desc: [
      "This weapon can target up to " +
        x +
        " feet away without any penalties, while targeting " +
        (x + 1) +
        " to " +
        y +
        " feet away will be with a disadvantage. Targets farther than " +
        y +
        " feet away cannot be targeted by this weapon.",
      "You can use a weapon that has the 'Ammunition' property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to Search the battlefield."
    ]
  };
}
const loading = {
  name: "Loading",
  desc:
    "Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make."
};
const finesse = {
  name: "Finesse",
  desc:
    "When Making an attack with a finesse weapon, you use your choice of your 'Strength' or 'Dexterity' modifier for the attack and damage Rolls. You must use the same modifier for both rolls."
};
const heavy = {
  name: "Heavy",
  desc:
    "Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon’s size and bulk make it too large for a small creature to use effectively."
};
const reach = {
  name: "Reach",
  desc:
    "This weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for opportunity attacks with it."
};
const lance = {
  name: "Lance",
  desc:
    "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren’t mounted."
};
const net = {
  name: "Net",
  desc:
    "A large or smaller creature hit by a net is Restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make."
};

const weaponProperties = {
   thrown,
   twoHanded,
   versatile,
   ammunition,
   loading,
   finesse,
   heavy,
   reach,
   lance,
   light,
   net
};

module.exports = weaponProperties;
