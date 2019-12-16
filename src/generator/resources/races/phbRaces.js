const racialFeatures = require("./racialFeatures");
const languages = require("../languages/languagesMain");
const phbSubraces = require("./phbSubRaces");

function movement(base) {
  let walking = base;
  let swimming = Math.floor(base / 2);
  let climbing = Math.floor(base / 2);
  let flying = 0;
  return {
    walking: walking,
    swimming: swimming,
    climbing: climbing,
    flying: flying
  };
}

const dragonborn = {
  name: "Dragonborn",
  subraces: [{name:"Standard"}],
  abilityMod: { str: +2, cha: +1 },
  movement: movement(30),
  details: {
    intro:
      "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.",
    desc:
      "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand. The blood of a particular type of dragon runs very strong through some dragonborn clans. These dragonborn often boast scales that more closely match those of their dragon ancestor—bright red, green, blue, or white, lustrous black, or gleaming metallic gold, silver, brass, copper, or bronze.",
    age:
      "Young dragonborn grow quickly. They walk hours after hatching, attain the size and Development of a 10-year-old human child by the age of 3, and reach Adulthood by 15. They live to be around 80.",
    alignment:
      "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
    languages: [languages.common, languages.draconic],
    size:
      "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 2 pounds. Their size is Medium."
  },
  racialFeatures: [
    racialFeatures.draconicAncestry,
    racialFeatures.breathWeapon,
    racialFeatures.draconicDamageResistance
  ],
  source: "PHB"
};

const dwarf = {
  name: "Dwarf",
  subraces: [phbSubraces.hillDwarf, phbSubraces.mountainDwarf],
  abilityMod: { con: +2 },
  movement: movement(25),
  details: {
    intro:
      "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.",
    desc:
      "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk. Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.",
    age:
      "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
    alignment:
      "Most Dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of Fair Play and a belief that everyone deserves to share in the benefits of a just order.",
    languages: [languages.common, languages.dwarvish],
    size:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Their size is Medium."
  },
  racialFeatures: [
    racialFeatures.hvyArmrSpeed,
    racialFeatures.darkvision,
    racialFeatures.dwarvenResilience,
    racialFeatures.dwarvenCombatTraining,
    racialFeatures.toolProficiency,
    racialFeatures.stonecunning
  ],
  source: "EEPC"
};
const elf = {
  name: "Elf",
  subraces: [phbSubraces.highElf, phbSubraces.woodElf, phbSubraces.darkElf],
  abilityMod: { dex: +2 },
  movement: movement(30),
  details: {
    intro:
      "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.",
    desc:
      "With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females. Elves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry.",
    age:
      "Although elves reach physical maturity at about the same age as humans, the elven understanding of Adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims Adulthood and an adult name around the age of 100 and can live to be 750 years old.",
    alignment:
      "Elves love freedom, variety, and self- expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not.",
    languages: [languages.common, languages.elvish],
    size:
      "Elves range from under 5 to over 6 feet tall and have slender builds. Their size is Medium."
  },
  racialFeatures: [
    racialFeatures.darkvision,
    racialFeatures.keenSenses,
    racialFeatures.feyAncestry,
    racialFeatures.trance
  ],
  source: "EEPC"
};
const gnome = {
  name: "Gnome",
  subraces: [phbSubraces.deepGnome, phbSubraces.rockGnome],
  abilityMod: { int: +2 },
  movement: movement(30),
  details: {
    intro:
      "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
    desc:
      "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome’s insatiable interest in everything around. A gnome’s personality is writ large in his or her appearance. A male gnome’s beard, in contrast to his wild hair, is kept carefully trimmed but often styled into curious forks or neat points. A gnome’s clothing, though usually made in modest earth tones, is elaborately decorated with embroidery, embossing, or gleaming jewels.",
    age:
      "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
    alignment:
      "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than Vicious.",
    languages: [languages.common, languages.gnomish],
    size:
      "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Their size is Small."
  },
  racialFeatures: [racialFeatures.darkvision, racialFeatures.gnomeCunning],
  source: "EEPC"
};
const halfElf = {
  name: "Half-Elf",
  subraces: [{name:"Standard"}],
  abilityMod: { cha: +2, any: +1 },
  movement: movement(30),
  details: {
    intro:
      "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.",
    desc:
      "To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par with both parents, though they’re neither as slender as elves nor as broad as humans. They range from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their elven ancestry. Half-elven coloration and features lie somewhere between their human and elf parents, and thus show a variety even more pronounced than that found among either race. They tend to have the eyes of their elven parents.",
    age:
      "Half-elves mature at the same rate humans do and reach Adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
    alignment:
      "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.",
    languages: [languages.common, languages.elvish, "any"],
    size:
      "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Their size is Medium."
  },
  racialFeatures: [racialFeatures.darkvision, racialFeatures.feyAncestry],
  source: "EEPC"
};
const halfOrc = {
  name: "Half-Orc",
  subraces: [{name:"Standard"}],
  abilityMod: { str: +2, con: +1 },
  movement: movement(30),
  details: {
    intro:
      "Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.",
    desc:
      "Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. Half-orcs stand between 5 and 7 feet tall and usually weigh between 180 and 250 pounds. Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former slave or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries. Such a half-orc living among humans might display these scars proudly or hide them in shame.",
    age:
      "Half-Orcs mature a little faster than humans, reaching Adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
    alignment:
      "Half-Orcs inherit a tendency toward chaos from their orc Parents and are not strongly inclined toward good. Half-Orcs raised among orcs and willing to live out their lives among them are usually evil.",
    languages: [languages.common, languages.orc],
    size:
      "Half-Orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Their size is Medium."
  },
  racialFeatures: [
    racialFeatures.darkvision,
    racialFeatures.menacing,
    racialFeatures.relentlessEndurace,
    racialFeatures.savageAttacks
  ],
  source: "EEPC"
};
const halfling = {
  name: "Halfling",
  subraces: [phbSubraces.lightfootHalfling, phbSubraces.stoutHalfling],
  abilityMod: { dex: +2 },
  movement: movement(30),
  details: {
    intro:
      "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.",
    desc:
      "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds. Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors. Halfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little patience for dithering.",
    age:
      "A halfling reaches Adulthood at the age of 20 and generally lives into the middle of his or her second century.",
    alignment:
      "Most Halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
    languages: [languages.common, languages.halfling],
    size:
      "Halflings average about 3 feet tall and weigh about 40 pounds. Their size is Small."
  },
  racialFeatures: [
    racialFeatures.lucky,
    racialFeatures.brave,
    racialFeatures.halflingNimbleness
  ],
  source: "EEPC"
};
const human = {
  name: "Human",
  subraces: [{name:"Standard"},phbSubraces.humanVariant],
  abilityMod: { all: +1 },
  movement: movement(30),
  details: {
    intro:
      "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    desc:
      "With their penchant for migration and conquest, humans are more physically diverse than other common races. There is no typical human. An individual can stand from 5 feet to a little over 6 feet tall and weigh from 125 to 250 pounds. Human skin shades range from nearly black to very pale, and hair colors from black to blond (curly, kinky, or straight); males might sport facial hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc, or other lineages. Humans reach adulthood in their late teens and rarely live even a single century.",
    age:
      "Humans reach adulthood in their late teens and live less than a century.",
    alignment:
      " Humans tend toward no particular alignment. The best and the worst are found among them.",
    languages: [languages.common, "any"],
    size:
      "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, Their size is Medium."
  },
  racialFeatures: [],
  source: "EEPC"
};
const tiefling = {
  name: "Tiefling",
  subraces: [{name:"Standard"}],
  abilityMod: { cha: +2, int: +1 },
  movement: movement(30),
  details: {
    intro:
      "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.",
    desc:
      "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.",
    age:
      "Tieflings mature at the same rate as humans but live a few years longer.",
    alignment:
      "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent Nature inclines many Tieflings toward a chaotic Alignment.",
    languages: [languages.common, languages.infernal],
    size:
      "Tieflings are about the same size and build as humans. Their size is Medium."
  },
  racialFeatures: [
    racialFeatures.darkvision,
    racialFeatures.hellishResistance,
    racialFeatures.infernalLegacy
  ],
  source: "EEPC"
};

const races = {
   dragonborn,
   dwarf,
   elf,
   gnome,
   halfElf,
   halfOrc,
   halfling,
   human,
   tiefling
};

module.exports = races;
