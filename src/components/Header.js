import React from "react";
import "../css/Header.css";

export default class Header extends React.Component {
    
  
  render(){
      let characterDescription = this.props.character.subrace.name + " " + this.props.character.class.name
      if(this.props.character.subrace.name === "Standard" ){
          characterDescription = this.props.character.race.name + " " + this.props.character.class.name
      }
      if(this.props.character.subrace.name === "Variant" ){
          characterDescription = this.props.character.race.name + " " + this.props.character.class.name
      }


    return (
      <div id="header">
        <div id="character-name">{this.props.character.name}</div>
        <div id="the">the</div>
        <div id="character-description">{characterDescription}</div>
      </div>
    );}
  
}


