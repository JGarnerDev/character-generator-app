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
          <div className="column">
            <Abilities {...props} />
            <Skills {...props} />
          </div>
          <div className="column">
            <Equipment {...props} />
          </div>
        </div>
      </div>
      <div id="second-page" className="page">
        <div className="column">
          <Proficiencies {...props} />
        </div>
        <div className="column">
          <Features {...props} />
        </div>
        <div className="column">
          <Items {...props} />
        </div>
      </div>
      <div id="third-page" className="page">
        <div className="column">
           <Spells {...props} />
        </div>
      </div>
      <div id="forth-page" className="page">
        <div className="column">
          <Bio {...props} />
        </div>
      </div>
    </div>
  );
}

export default CharSheet;
