import React from "react";
import '../css/CharSheet.css'

import Header from "./Header";
import Abilities from "./Abilities";
import AttacksAndSpellcasting from "./AttacksAndSpellcasting";
import Bio from "./Bio";
import Equipment from "./Equipment";
import Features from "./Features";
import Items from "./Items";
import Proficiencies from "./Proficiencies";
import Skills from "./Skills";
import Spells from "./Spells";
import VitalStats from "./VitalStats";




function CharSheet(props) {
  return (
    <div id="CharSheet">
    <Header {...props}/>
    <Bio {...props} />
    </div>
  );
}

export default CharSheet;
