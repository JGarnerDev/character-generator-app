import React from "react";
import "../css/CharSheet.css";

import Header from "./Header";
import BriefSummary from "./BriefSummary";
import Abilities from "./Abilities";
import Proficiencies from "./Proficiencies";
import Skills from "./Skills";
import AttacksAndSpellcasting from "./AttacksAndSpellcasting";
import Equipment from "./Equipment";
// import ShortBio from './ShortBio'
import Bio from "./Bio";
import Features from "./Features";
import Items from "./Items";
import Spells from "./Spells";

function CharSheet(props) {
  return (
    <div id="CharSheet">
      <Header {...props} />
      {/* <BriefSummary {...props} /> */}
      <div id="CharSheet-main">
        <div className="column">
          <Abilities {...props} />
          <Skills {...props} />
        </div>
        {/* <div className="column">
        
        </div>
        <div className="column"> 
        
        </div> */}
      </div>
      <Bio {...props} />
      <Items {...props} />
      <Spells {...props} />
    </div>
  );
}

export default CharSheet;
