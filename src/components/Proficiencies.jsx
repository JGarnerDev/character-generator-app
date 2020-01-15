import React from "react";
import "../css/Proficiencies.css";

export default class Proficiencies extends React.Component {
  constructor(props) {
    super(props);
  }

  createProficienciesTable = () => {
    let table = [];
    let abilityProficiencies = this.props.character.proficiencies
      .primaryAbility;
    let savingThrowProficiencies = this.props.character.proficiencies
      .savingThrows;
    let weaponsProficiencies = this.props.character.proficiencies.weapons;
    let armorProficiencies = this.props.character.proficiencies.armor;
    let skillsProficiencies = this.props.character.proficiencies.skills;
    let toolsProficiencies = Object.values(
      this.props.character.proficiencies.tools
    );

    let abilityProficienciesTable = [];
    let savingThrowProficienciesTable = [];
    let weaponsProficienciesTable = [];
    let armorProficienciesTable = [];
    let skillsProficienciesTable = [];
    let toolsProficienciesTable = [];

    if (Array.isArray(abilityProficiencies) !== true) {
      abilityProficiencies = [abilityProficiencies];
    }

    for (let i = 0; i < abilityProficiencies.length; i++) {
      let children = [];
      if (abilityProficiencies[i] !== undefined) {
        children.push(
          <li className="proficiency">
            {abilityProficiencies[i]} (ability checks)
          </li>
        );
      }
      abilityProficienciesTable.push(children);
    }

    table.push(abilityProficienciesTable);

    for (let i = 0; i < savingThrowProficiencies.length; i++) {
      let children = [];
      if (savingThrowProficiencies[i] !== undefined) {
        children.push(
          <li className="proficiency">
            {savingThrowProficiencies[i]} (saving throws)
          </li>
        );
      }

      savingThrowProficienciesTable.push(children);
    }

    table.push(savingThrowProficienciesTable);

    if (weaponsProficiencies.length === 0) {
      weaponsProficiencies[0] = " ";
    }
    for (let i = 0; i < weaponsProficiencies.length; i++) {
      let children = [];
      if (weaponsProficiencies[i] !== undefined) {
        children.push(
          <li className="proficiency">{weaponsProficiencies[i]}</li>
        );
      }
      weaponsProficienciesTable.push(children);
    }

    table.push(weaponsProficienciesTable);

    if (armorProficiencies.length === 0) {
      armorProficiencies[0] = " ";
    }
    for (let i = 0; i < armorProficiencies.length; i++) {
      let children = [];
      if (armorProficiencies[i] !== undefined) {
        children.push(
          <li className="proficiency">{armorProficiencies[i]}</li>
        );
      }

      armorProficienciesTable.push(children);
    }

    table.push(armorProficienciesTable);

    for (let i = 0; i < skillsProficiencies.length; i++) {
      let children = [];
      if (skillsProficiencies[i] !== undefined) {
        children.push(
          <li className="proficiency">{skillsProficiencies[i]} (skill)</li>
        );
      }

      skillsProficienciesTable.push(children);
    }

    table.push(skillsProficienciesTable);

    if (toolsProficiencies.length === 0) {
      toolsProficiencies = [{ name: " " }];
    }

    for (let i = 0; i < toolsProficiencies.length; i++) {
      let children = [];
      if (toolsProficiencies[i].name !== undefined) {
        children.push(
          <li className="proficiency">{toolsProficiencies[i].name}</li>
        );
      }

      toolsProficienciesTable.push(children);
    }

    table.push(toolsProficienciesTable);

    return table;
  };

  render() {
    return (
      <div id="Proficiencies">
        <h1 id="proficiencies-header">Proficiencies</h1>
        <ul id="proficiencies-list">{this.createProficienciesTable()}</ul>
      </div>
    );
  }
}
