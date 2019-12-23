import React from "react";
import "../css/Abilities.css";

export default class Abilities extends React.Component {
  constructor(props) {
    super(props);
  }

  createAbilitesTable = () => {
    let table = [];
    let characterAbilities = Object.keys(this.props.character.abilities);

    for (let i = 0; i < characterAbilities.length; i++) {
      let children = [];
      let abilityTitle = characterAbilities[i];
      let abilityValue = this.props.character.abilities[abilityTitle];

      children.push(
        <tr className="ability-row">
          <th className="ability-header">{abilityTitle}</th>
          <td className="ability-value">{abilityValue}</td>
        </tr>
      );

      table.push(children);
    }

    table.push(
      <tr className="proficiencyBonus">
        <th className="proficiencyBonus-header">Proficiency Bonus</th>
        <td className="proficiencyBonus-value">
          {this.props.character.proficiencyBonus}
        </td>
      </tr>
    );

    return table;
  };

  render() {
    return <table className="table" id="Abilities">{this.createAbilitesTable()}</table>;
  }
}
