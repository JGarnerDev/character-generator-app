const alarm = {
  name: "Alarm",
  desc:
    "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet",
  concentration: "No",
  school: "Abjuration",
  castingTime: "1 minute",
  duration: "8 Hours",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Detection"]],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a tiny bell and a piece of fine silver wire"],
  ritual: "Yes",
  atHigherLevels: ""
};
const animalFriendship = {
  name: "Animal Friendship",
  desc:
    "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends.",
  concentration: "No",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "24 Hours",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [[], ["Charmed"], []],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "* - (a morsel of food)"],
  ritual: "No",
  atHigherLevels:
    " When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."
};
const armorOfAgathys = {
  name: "Armor of Agathys",
  desc:
    "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.",
  concentration: "No",
  school: "Abjuration",
  castingTime: "1 action",
  duration: "1 hour",
  attackOrSave: ["None"],
  damageOrEffect: [["Cold"], [], ["Healing", "Protection"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a cup of water"],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot."
};
const armsOfHadar = {
  name: "Arms of Hadar",
  desc:
    "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can’t take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect. ",
  concentration: "No",
  school: "Conjuration",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["STR Save"],
  damageOrEffect: [["Necrotic"], [], ["Debuff"]],
  range: 0,
  area: "10 feet",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
const bane = {
  name: "Bane",
  desc:
    "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
  concentration: "Yes",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["CHA Save"],
  damageOrEffect: [[], [], ["Debuff"]],
  range: 30,
  area: "NA",
  targets: "Up to 3 creature",
  components: [0, "V", "S", "M", "* - (a drop of blood)"],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
};
const bless = {
  name: "Bless",
  desc:
    "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.",
  concentration: "Yes",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Buff"]],
  range: 30,
  area: "NA",
  targets: "Up to 3 creature",
  components: [0, "V", "S", "M", "* - (a sprinkling of holy water)"],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
};
const burningHands = {
  name: "Burning Hands",
  desc:
    "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["DEX Save"],
  damageOrEffect: [["Fire"], [], []],
  range: 0,
  area: "15 feet cone",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
const charmPerson = {
  name: "Charm Person",
  desc:
    "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
  concentration: "No",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [[], ["Charmed"], []],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
};
const chromaticOrb = {
  name: "Chromatic Orb",
  desc: "",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 action",
  duration: "",
  attackOrSave: [""],
  damageOrEffect: [[], [], []],
  range: 90,
  area: "NA",
  targets: "1 creature",
  components: [111, "V", "S", "M", ""],
  ritual: "No",
  atHigherLevels: ""
};
const colorSpray = {
  name: "Color Spray",
  desc:
    "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can affect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the end of your next turn. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.",
  concentration: "No",
  school: "Illusion",
  castingTime: "1 action",
  duration: "1 Round",
  attackOrSave: ["None"],
  damageOrEffect: [[], ["Blinded"], ["Debuff"]],
  range: 0,
  area: "15 feet cone",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "* - (a pinch of powder or sand that is colored red, yellow, and blue)"
  ],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
};
const command = {
  name: "Command",
  desc: [
    "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the GM determines how the target behaves. If the target can't follow your command, the spell ends.",
    "Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.",
    "Drop. The target drops whatever it is holding and then ends its turn.",
    "Flee. The target spends its turn moving away from you by the fastest available means.",
    "Grovel. The target falls prone and then ends its turn.",
    "Halt. The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air."
  ],
  concentration: "No",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "1 Round",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [[], ["Prone"], []], /////////
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
};
const compelledDuel = {
  name: "Compelled Duel",
  desc:
    "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn. The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.",
  concentration: "Yes",
  school: "Enchantment",
  castingTime: "1 bonus action",
  duration: "",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [[], [], ["Debuff", "Control"]],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const comprehendLanguages = {
  name: "Comprehend Languages",
  desc:
    "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.",
  concentration: "No",
  school: "Divination",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Social"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a pinch of soot and salt"],
  ritual: "Yes",
  atHigherLevels: ""
};
const createOrDestroyWater = {
  name: "Create or Destroy Water",
  desc: [
    "You either create or destroy water.",
    "Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area.",
    "Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range."
  ],
  concentration: "No",
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Creation"]],
  range: 30,
  area: "30 foot cube",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "a drop of water if creating water or a few grains of sand if destroying it"
  ],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
};
const cureWounds = {
  name: "Cure Wounds",
  desc:
    "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Healing"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    " When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
};
const detectEvilAndGood = {
  name: "Detect Evil and Good",
  desc:
    "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  concentration: "Yes",
  school: "Divination",
  castingTime: "1 action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Detection"]],
  range: 0,
  area: "30 foot sphere",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const detectMagic = {
  name: "Detect Magic",
  desc:
    "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  concentration: "Yes",
  school: "Divination",
  castingTime: "1 action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Detection"]],
  range: 0,
  area: "30 foot sphere",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "Yes",
  atHigherLevels: ""
};
const detectPoisonAndDisease = {
  name: "Detect Poison and Disease",
  desc:
    "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  concentration: "Yes",
  school: "Divination",
  castingTime: "1 action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Detection"]],
  range: 0,
  area: "30 foot sphere",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a yew leaf"],
  ritual: "Yes",
  atHigherLevels: ""
};
const disguiseSelf = {
  name: "Disguise Self",
  desc:
    "You make yourself - including your clothing, armor, weapons, and other belongings on your person - look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
  concentration: "No",
  school: "Illusion",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Shapechanging"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const dissonantWhispers = {
  name: "Dissonant Whispers",
  desc:
    "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction , if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save. ",
  concentration: "No",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [["Psychic"], [], ["Control"]],
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st"
};
const divineFavor = {
  name: "Divine Favor",
  desc:
    "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.",
  concentration: "Yes",
  school: "Evocation",
  castingTime: "1 bonus action",
  duration: "1 Minute",
  attackOrSave: ["None"],
  damageOrEffect: [["Radiant"], [], ["Buff"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const ensnaringStrike = {
  name: "Ensnaring Strike",
  desc:
    "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away. While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.",
  concentration: "Yes",
  school: "Conjuration",
  castingTime: "1 bonus action",
  duration: "1 Minute",
  attackOrSave: ["STR Save"],
  damageOrEffect: [["Piercing"], [], ["Control"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels:
    "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
const entangle = {
  name: "Entangle",
  desc:
    "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away.",
  concentration: "Yes",
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["STR Save"],
  damageOrEffect: [[], ["Restrained"], ["Control", "Debuff"]],
  range: 90,
  area: "20 foot surface",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const expeditiousRetreat = {
  name: "Expeditious Retreat",
  desc:
    "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.",
  concentration: "Yes",
  school: "Transmutation",
  castingTime: "1 bonus action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Movement", "Buff"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const faerieFire = {
  name: "Faerie Fire",
  desc:
    "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
  concentration: "Yes",
  school: "Evocation",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["DEX Save"],
  damageOrEffect: [[], [], ["Debuff"]],
  range: 60,
  area: "20 foot cube",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const falseLife = {
  name: "False Life",
  desc:
    "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.",
  concentration: "No",
  school: "Necromancy",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Healing"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "a small amount of alcohol or distilled spirits"
  ],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
};
const featherFall = {
  name: "Feather Fall",
  desc:
    "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
  concentration: "No",
  school: "Transmutation",
  castingTime: "1 reaction",
  duration: "1 Minute",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Damage Prevention"]],
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [0, "", "S", "M", "a small feather or piece of down"],
  ritual: "No",
  atHigherLevels: ""
};
const findFamiliar = {
  name: "Find Familiar",
  desc:
    "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast. Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal. When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses. As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature. Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll. ",
  concentration: "No",
  school: "Conjuration",
  castingTime: "1 hour",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Summoning"]],
  range: 10,
  area: "NA",
  targets: "1 creature",
  components: [
    10,
    "V",
    "S",
    "M",
    "charcoal, incense, and herbs that must be consumed by fire in a brass brazier"
  ],
  ritual: "Yes",
  atHigherLevels: ""
};
const fogCloud = {
  name: "Fog Cloud",
  desc:
    "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
  concentration: "Yes",
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Control"]],
  range: 120,
  area: "20 foot sphere",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
};
const goodberry = {
  name: "Goodberry",
  desc:
    "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.",
  concentration: "No",
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Healing"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a sprig of mistletoe"],
  ritual: "No",
  atHigherLevels: ""
};
const grease = {
  name: "Grease",
  desc:
    "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.",
  concentration: "No",
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["DEX Save"],
  damageOrEffect: [[], ["Prone"], []],
  range: 60,
  area: "10 foot surface",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a bit of pork rind or butter"],
  ritual: "No",
  atHigherLevels: ""
};
const guidingBolt = {
  name: "Guiding Bolt",
  desc:
    "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 action",
  duration: "1 Round",
  attackOrSave: ["Ranged"],
  damageOrEffect: [["Radiant"], [], []],
  range: 120,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
const hailOfThorns = {
  name: "Hail of Thorns",
  desc:
    "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.",
  concentration: "Yes",
  school: "Conjuration",
  castingTime: "1 bonus action",
  duration: "1 Minute",
  attackOrSave: ["DEX Save"],
  damageOrEffect: [["Piercing"], [], []],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels:
    "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10)."
};
const healingWord = {
  name: "Healing Word",
  desc:
    "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 bonus action",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Healing"]],
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st."
};
const hellishRebuke = {
  name: "Hellish Rebuke",
  desc:
    "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 reaction",
  duration: "Instantaneous",
  attackOrSave: ["DEX Save"],
  damageOrEffect: [["Fire"], [], []],
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
};
const heroism = {
  name: "Heroism",
  desc:
    "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.",
  concentration: "Yes",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Buff"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
};
const hex = {
  name: "Hex",
  desc:
    "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature. A remove curse cast on the target ends this spell early.",
  concentration: "Yes",
  school: "Enchantment",
  castingTime: "1 bonus action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [["Necrotic"], [], ["Buff", "Debuff"]],
  range: 90,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "the petrified eye of a newt"],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
};
const huntersMark = {
  name: "Hunters Mark",
  desc:
    "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.",
  concentration: "Yes",
  school: "Divination",
  castingTime: "1 bonus action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [["Bludgeoning"], [], []],
  range: 90,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
};
const identify = {
  name: "Identify",
  desc:
    "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
  concentration: "No",
  school: "Divination",
  castingTime: "1 minute",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Detection"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [
    100,
    "V",
    "S",
    "M",
    "a pearl worth at least 100 gp and an owl feather"
  ],
  ritual: "Yes",
  atHigherLevels: ""
};
const illusoryScript = {
  name: "Illusory Script",
  desc:
    "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know. Should the spell be dispelled, the original script and the illusion both disappear. A creature with truesight can read the hidden message.",
  concentration: "No",
  school: "Illusion",
  castingTime: "1 minute",
  duration: "10 Days",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Communication"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [
    10,
    "",
    "S",
    "M",
    "a lead-based ink worth at least 10 gp, which the spell consumes"
  ],
  ritual: "Yes",
  atHigherLevels: ""
};
const inflictWounds = {
  name: "Inflict Wounds",
  desc:
    "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.",
  concentration: "No",
  school: "Necromancy",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["Melee"],
  damageOrEffect: [["Necrotic"], [], []],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    " When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
};
const jump = {
  name: "Jump",
  desc:
    "You touch a creature. The creature's jump distance is tripled until the spell ends.",
  concentration: "No",
  school: "Transmutation",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Movement"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a grasshopper's hind leg"],
  ritual: "No",
  atHigherLevels: ""
};
const longstrider = {
  name: "Longstrider",
  desc:
    "You touch a creature. The target's speed increases by 10 feet until the spell ends.",
  concentration: "No",
  school: "Transmutation",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Buff"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a pinch of dirt"],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
};
const mageArmor = {
  name: "Mage Armor",
  desc:
    "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
  concentration: "No",
  school: "Abjuration",
  castingTime: "1 action",
  duration: "8 Hours",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Buff"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a piece of cured leather"],
  ritual: "No",
  atHigherLevels: ""
};
const magicMissile = {
  name: "Magic Missile",
  desc:
    "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [["Force"], [], []],
  range: 120,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
};
const protectionFromEvilAndGood = {
  name: "Protection From Evil and Good",
  desc:
    "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
  concentration: "Yes",
  school: "Abjuration",
  castingTime: "1 action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Buff"]],
  range: 5,
  area: "NA",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "holy water or powdered silver and iron, which the spell consumes"
  ],
  ritual: "No",
  atHigherLevels: ""
};
const purifyFoodAndDrink = {
  name: "Purify Food and Drink",
  desc:
    "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.",
  concentration: "No",
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Utility"]],
  range: 10,
  area: "5 foot sphere",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "Yes",
  atHigherLevels: ""
};
const rayOfSickness = {
  name: "Ray of Sickness",
  desc:
    "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.",
  concentration: "No",
  school: "Necromancy",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["CON Save"],
  damageOrEffect: [["Poison"], ["Poisoned"], ["Debuff"]],
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
const sanctuary = {
  name: "Sanctuary",
  desc:
    "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends.",
  concentration: "No",
  school: "Abjuration",
  castingTime: "1 bonus action",
  duration: "1 Minute",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [[], [], ["Buff"]],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a small silver mirror"],
  ritual: "No",
  atHigherLevels: ""
};
const searingSmite = {
  name: "Searing Smite",
  desc:
    "The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensitity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spells ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.",
  concentration: "Yes",
  school: "Evocation",
  castingTime: "1 bonus action",
  duration: "1 Minute",
  attackOrSave: ["CON Save"],
  damageOrEffect: [["Fire"], ["Ignited"], []],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot"
};
const shield = {
  name: "Shield",
  desc:
    "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
  concentration: "No",
  school: "Abjuration",
  castingTime: "1 reaction",
  duration: "1 Round",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Warding", "Buff"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const shieldOfFaith = {
  name: "Shield of Faith",
  desc:
    "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
  concentration: "Yes",
  school: "Abjuration",
  castingTime: "1 bonus action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Buff"]],
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "a small parchment with a bit of holy text written on it"
  ],
  ritual: "No",
  atHigherLevels: ""
};
const silentImage = {
  name: "Silent Image",
  desc:
    "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects. You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
  concentration: "Yes",
  school: "Illusion",
  castingTime: "1 action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Control"]],
  range: 60,
  area: "15 foot cube",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a bit of fleece"],
  ritual: "No",
  atHigherLevels: ""
};
const sleep = {
  name: "Sleep",
  desc:
    "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell.",
  concentration: "No",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["None"],
  damageOrEffect: [[], ["Unconscious"], ["Debuff", "Control"]],
  range: 90,
  area: "20 foot sphere",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "a pinch of fine sand, rose petals, or a cricket"
  ],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
};
const speakWithAnimals = {
  name: "Speak with Animals",
  desc:
    "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the GM's discretion.",
  concentration: "No",
  school: "Divination",
  castingTime: "1 action",
  duration: "10 Minutes",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Communication", "Animals"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "Yes",
  atHigherLevels: ""
};
const tashasHideousLaughter = {
  name: "Tashas Hideous Laughter",
  desc:
    "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected. At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw ifit’s triggered by damage. On a success, the spell ends.",
  concentration: "Yes",
  school: "Enchantment",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [[], ["Prone", "Incapacitated"], ["Control", "Debuff"]],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "tiny tarts and a feather that is waved in the air"
  ],
  ritual: "No",
  atHigherLevels: ""
};
const tensersFloatingDisk = {
  name: "Tensers Floating Disk",
  desc:
    "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground. The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can’t cross an elevation change of 10 feet or more. For example, the disk can’t move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom. If you move more than 100 feet from the disk (typically because it can’t move around an obstacle to follow you), the spell ends.",
  concentration: "No",
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Movement"]],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "A drop of mercury"],
  ritual: "Yes",
  atHigherLevels: ""
};
const thunderousSmite = {
  name: "Thunderous Smite",
  desc:
    "The first time you hit with a melee weapon attack during this spell’s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.",
  concentration: "Yes",
  school: "Evocation",
  castingTime: "1 bonus action",
  duration: "1 Minute",
  attackOrSave: ["STR Save"],
  damageOrEffect: [["Thunder"], ["Prone"], ["Control"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels: ""
};
const thunderwave = {
  name: "Thunderwave",
  desc:
    "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
  concentration: "No",
  school: "Evocation",
  castingTime: "1 action",
  duration: "Instantaneous",
  attackOrSave: ["CON Save"],
  damageOrEffect: [["Thunder"], [], []],
  range: 0,
  area: "15 feet cube",
  targets: "1 creature",
  components: [0, "V", "S", "", ""],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
const unseenServant = {
  name: "Unseen Servant",
  desc:
    "This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
  concentration: "No",
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 Hour",
  attackOrSave: ["None"],
  damageOrEffect: [[], [], ["Control"]],
  range: 60,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "S", "M", "a bit of string and of wood"],
  ritual: "Yes",
  atHigherLevels: ""
};
const witchBolt = {
  name: "Witch Bolt",
  desc:
    "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell’s range or if it has total cover from you.",
  concentration: "Yes",
  school: "Evocation",
  castingTime: "1 action",
  duration: "1 Minute",
  attackOrSave: ["Ranged"],
  damageOrEffect: [["Thunder"], [], []],
  range: 30,
  area: "NA",
  targets: "1 creature",
  components: [
    0,
    "V",
    "S",
    "M",
    "a twig from a tree that has been struck by lightning"
  ],
  ritual: "No",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
};
const wrathfulSmite = {
  name: "Wrathful Smite",
  desc:
    "The next time you hit with a melee weapon attack during this spell’s duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.",
  concentration: "Yes",
  school: "Evocation",
  castingTime: "1 bonus action",
  duration: "1 Minute",
  attackOrSave: ["WIS Save"],
  damageOrEffect: [["Psychic"], ["Frightened"], ["Debuff", "Control"]],
  range: 0,
  area: "NA",
  targets: "1 creature",
  components: [0, "V", "", "", ""],
  ritual: "No",
  atHigherLevels: ""
};

const Bard = [
  animalFriendship,
  bane,
  charmPerson,
  comprehendLanguages,
  cureWounds,
  detectMagic,
  disguiseSelf,
  dissonantWhispers,
  faerieFire,
  featherFall,
  healingWord,
  heroism,
  identify,
  illusoryScript,
  longstrider,
  silentImage,
  sleep,
  speakWithAnimals,
  tashasHideousLaughter,
  thunderwave,
  unseenServant
];
const Cleric = [
  bane,
  bless,
  command,
  createOrDestroyWater,
  cureWounds,
  detectEvilAndGood,
  detectMagic,
  detectPoisonAndDisease,
  guidingBolt,
  healingWord,
  inflictWounds,
  protectionFromEvilAndGood,
  purifyFoodAndDrink,
  sanctuary,
  shieldOfFaith
];

const Druid = [
  animalFriendship,
  charmPerson,
  createOrDestroyWater,
  cureWounds,
  detectMagic,
  detectPoisonAndDisease,
  entangle,
  faerieFire,
  fogCloud,
  goodberry,
  healingWord,
  jump,
  longstrider,
  purifyFoodAndDrink,
  speakWithAnimals,
  thunderwave
];
const Paladin = [
  bless,
  command,
  compelledDuel,
  cureWounds,
  detectEvilAndGood,
  detectMagic,
  detectPoisonAndDisease,
  divineFavor,
  heroism,
  protectionFromEvilAndGood,
  purifyFoodAndDrink,
  searingSmite,
  shieldOfFaith,
  thunderousSmite,
  wrathfulSmite
];
const Ranger = [
  alarm,
  animalFriendship,
  cureWounds,
  detectMagic,
  detectPoisonAndDisease,
  ensnaringStrike,
  fogCloud,
  goodberry,
  hailOfThorns,
  huntersMark,
  jump,
  longstrider,
  speakWithAnimals
];
const Sorcerer = [
  burningHands,
  charmPerson,
  chromaticOrb,
  colorSpray,
  comprehendLanguages,
  detectMagic,
  disguiseSelf,
  expeditiousRetreat,
  falseLife,
  featherFall,
  fogCloud,
  jump,
  mageArmor,
  magicMissile,
  rayOfSickness,
  shield,
  silentImage,
  sleep,
  thunderwave,
  witchBolt
];
const Warlock = [
  armorOfAgathys,
  armsOfHadar,
  charmPerson,
  comprehendLanguages,
  expeditiousRetreat,
  hellishRebuke,
  hex,
  illusoryScript,
  protectionFromEvilAndGood,
  unseenServant,
  witchBolt
];
const Wizard = [
  alarm,
  burningHands,
  charmPerson,
  chromaticOrb,
  colorSpray,
  comprehendLanguages,
  detectMagic,
  disguiseSelf,
  expeditiousRetreat,
  falseLife,
  featherFall,
  findFamiliar,
  fogCloud,
  grease,
  identify,
  illusoryScript,
  jump,
  longstrider,
  mageArmor,
  magicMissile,
  protectionFromEvilAndGood,
  rayOfSickness,
  shield,
  silentImage,
  sleep,
  tashasHideousLaughter,
  tensersFloatingDisk,
  thunderwave,
  unseenServant,
  witchBolt
];

const levelOneSpells = {
  Bard,
  Cleric,
  Druid,
  Paladin,
  Ranger,
  Sorcerer,
  Warlock,
  Wizard
};

module.exports = levelOneSpells;
