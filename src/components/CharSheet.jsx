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
          <Abilities {...props} />
          <Proficiencies {...props} />
          <Skills {...props} />
        </div>
        <div className="page-column">
          <Equipment {...props} />
          <Items {...props} />
        </div>
      </div>
      <div id="page2" className="page">
        <div className="page-column">
          <Features {...props} />
        </div>
        <div className="page-column">
          <Bio {...props} />
        </div>
      </div>
      <div id="page3" className="page">
        <Spells {...props} />
      </div>
    </div>
  );
}

export default CharSheet;
