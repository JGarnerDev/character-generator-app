import React from "react";
import "../css/Abilities.css";

function Abilities(props) {
  return (
    <div id="abilities">
      <div className="ability-box">
        <h4 className="ability-header">Strength</h4>
        <div className="ability-value">{props.character.abilities.Strength}</div>
      </div>
      <div className="ability-box">
        <h4 className="ability-header">Dexterity</h4>
        <div className="ability-value">{props.character.abilities.Dexterity}</div>
      </div>
      <div className="ability-box">
        <h4 className="ability-header">Constitution</h4>
        <div className="ability-value">{props.character.abilities.Constitution}</div>
      </div>
      <div className="ability-box">
        <h4 className="ability-header">Wisdom</h4>
        <div className="ability-value">{props.character.abilities.Wisdom}</div>
      </div>
      <div className="ability-box">
        <h4 className="ability-header">Intelligence</h4>
        <div className="ability-value">{props.character.abilities.Intelligence}</div>
      </div>
      <div className="ability-box">
        <h4 className="ability-header">Charisma</h4>
        <div className="ability-value">{props.character.abilities.Charisma}</div>
      </div>
    </div>
  );
}

export default Abilities;
