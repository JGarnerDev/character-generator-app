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
  const characterSummary =
    props.character.name.split(" ")[0] +
    " was once a " +
    props.character.background.name.toLowerCase() +
    ", and " +
    props.character.background.intro +
    " But now that adventure calls, they have found that they can answer as a mighty " +
    props.character.class.name.toLowerCase() +
    ".";
  return (
    <div id="CharSheet">
      <div id="first-page" className="page">
        <div id="summary">{characterSummary}</div>
        <div className="column-container">
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
      <div id="second-page" className="page">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div id="third-page" className="page">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default CharSheet;
