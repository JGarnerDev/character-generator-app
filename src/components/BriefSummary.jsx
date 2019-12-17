import React from "react";
import "../css/BriefSummary.css";

export default class BriefSummary extends React.Component {
  render() {
    let charFirstName = this.props.character.name.split(" ")[0];
    let charBackgroundName = this.props.character.background.name.toLowerCase();
    if (
      charBackgroundName.charAt(0) === "a" ||
      charBackgroundName.charAt(0) === "e" ||
      charBackgroundName.charAt(0) === "i" ||
      charBackgroundName.charAt(0) === "o" ||
      charBackgroundName.charAt(0) === "u"
    ) {
      charBackgroundName = "an " + charBackgroundName;
    } else {
      charBackgroundName = "a " + charBackgroundName;
    }
    let charBackgroundDesc = this.props.character.background.details.replace(/your/g, "their").replace(/Your/g, "Their").replace(/you/g, "they").replace(/You/g, "They")


    return (
      <div id="briefSummary">
        <h2>
          {charFirstName} is {charBackgroundName}
        </h2>
        <p>{charBackgroundDesc}</p>
      </div>
    );
  }
}
