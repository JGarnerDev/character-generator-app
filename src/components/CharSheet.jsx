import React from "react";
import "../css/CharSheet.css";
import Abilities from "./Abilities";
import Skills from "./Skills";
import Items from "./Items";
import Proficiencies from "./Proficiencies";
import Equipment from "./Equipment";
import Bio from "./Bio";
import Features from "./Features";
import Spells from "./Spells";

function CharSheet(props) {
  const characterSummary = (
    <p>
      {props.character.name.split(" ")[0] +
        " was once a " +
        props.character.background.name.toLowerCase() +
        ", and " +
        props.character.background.intro +
        " But now that adventure calls, they have found that they can answer as a mighty " +
        props.character.class.name.toLowerCase() +
        "."}
    </p>
  );

  return (
    <div id="CharSheet">
      <div id="summary">{characterSummary}</div>
      <div id="page1" className="page">
        <div className="page-column">
          <div className="container">
            <Abilities {...props} />
            <Proficiencies {...props} />
          </div>
          <div className="container">
            <Skills {...props} />
          </div>
        </div>
      </div>
      <div id="page2" className="page"></div>
      <div id="page3" className="page"></div>
    </div>
  );
}

export default CharSheet;
