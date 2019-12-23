import React from "react";
import "../css/Bio.css";

export default class Bio extends React.Component {
  constructor(props) {
    super(props);
  }
  bioFromBackground = () => {
    let bio = this.props.character.personality;
    let bioArr = [];
    for (let i = 1; i < bio.length; i++) {
      bioArr.push(<p className="bio-paragraph">{bio[i]}</p>);
    }
    return bioArr;
  };

  render() {
    return (
      <div id="Bio">
        <h3>Personality Traits</h3>
          {this.bioFromBackground()}
       
        <h3>Race: {this.props.character.race.name}</h3>
        <p className="bio-paragraph">
          {this.props.character.race.details.intro}
        </p>
        <h3>Background: {this.props.character.background.name}</h3>
        <p className="bio-paragraph">
          {this.props.character.background.details}
        </p>
        <h3>Class: {this.props.character.class.name} </h3>
        <p className="bio-paragraph">
          {this.props.character.class.description}
        </p>
      </div>
    );
  }
}
