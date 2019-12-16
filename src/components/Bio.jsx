import React from "react";
import "../css/Bio.css";

export default class Bio extends React.Component {
  render() {
    
    return (
      <div id="bio">
        <div className="bio-info" id="race-info">
          <h3>Race: {this.props.character.race.name}</h3>
          <p className="bio-paragraph">{this.props.character.race.details.intro}</p>
        </div>
        <div class="bio-info" id="background-info">
          <h3>Background: {this.props.character.background.name}</h3>
          <p className="bio-paragraph">{this.props.character.background.details}</p>
        </div>
        <div class="bio-info" id="class-info">
          <h3>Class: {this.props.character.class.name} </h3>
          <p className="bio-paragraph">{this.props.character.class.description}</p>
        </div>
      </div>
    );
  }
}
