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

    table.push(
      <tr className="abilityProficiencies">
        <th className="abilityProficiencies-header">Abilities</th>
      </tr>
    );

    if (Array.isArray(abilityProficiencies) !== true) {
      abilityProficiencies = [abilityProficiencies];
    }

    for (let i = 0; i < abilityProficiencies.length; i++) {
      let children = [];
      children.push(
        <tr className="abilityProficiency">
          <td className="abilityProficiency-name">{abilityProficiencies[i]}</td>
        </tr>
      );

      abilityProficienciesTable.push(children);
    }

    table.push(abilityProficienciesTable);

    table.push(
      <tr className="savingThrowProficiencies">
        <th className="proficiencies-subheader">Saving Throws</th>
      </tr>
    );

    for (let i = 0; i < savingThrowProficiencies.length; i++) {
      let children = [];
      children.push(
        <tr className="savingThrowProficiency">
          <td className="savingThrowProficiency-name">
            {savingThrowProficiencies[i]}
          </td>
        </tr>
      );

      savingThrowProficienciesTable.push(children);
    }

    table.push(savingThrowProficienciesTable);

    table.push(
      <tr className="weaponsProficiencies">
        <th className="proficiencies-subheader">Weapons</th>
      </tr>
    );

    if (weaponsProficiencies.length === 0) {
      weaponsProficiencies[0] = " ";
    }
    for (let i = 0; i < weaponsProficiencies.length; i++) {
      let children = [];
      children.push(
        <tr className="weaponsProficiency">
          <td className="weaponsProficiency-name">{weaponsProficiencies[i]}</td>
        </tr>
      );

      weaponsProficienciesTable.push(children);
    }

    table.push(weaponsProficienciesTable);

    table.push(
      <tr className="armorProficiencies">
        <th className="proficiencies-subheader">Armor</th>
      </tr>
    );

    if (armorProficiencies.length === 0) {
      armorProficiencies[0] = " ";
    }
    for (let i = 0; i < armorProficiencies.length; i++) {
      let children = [];
      children.push(
        <tr className="armorProficiency">
          <td className="armorProficiency-name">{armorProficiencies[i]}</td>
        </tr>
      );

      armorProficienciesTable.push(children);
    }

    table.push(armorProficienciesTable);

    table.push(
      <tr className="skillsProficiencies">
        <th className="proficiencies-subheader">Skills</th>
      </tr>
    );

    for (let i = 0; i < skillsProficiencies.length; i++) {
      let children = [];
      children.push(
        <tr className="skillProficiency">
          <td className="skillProficiency-name">{skillsProficiencies[i]}</td>
        </tr>
      );

      skillsProficienciesTable.push(children);
    }

    table.push(skillsProficienciesTable);

    table.push(
      <tr className="toolsProficiencies">
        <th className="proficiencies-subheader">Tools</th>
      </tr>
    );

    if (toolsProficiencies.length === 0) {
      toolsProficiencies = [{ name: " " }];
    }

    for (let i = 0; i < toolsProficiencies.length; i++) {
      let children = [];
      children.push(
        <tr className="toolProficiency">
          <td className="toolProficiency-name">{toolsProficiencies[i].name}</td>
        </tr>
      );

      toolsProficienciesTable.push(children);
    }

    table.push(toolsProficienciesTable);

    return table;
  };

  render() {
    return (
      <table className="table" id="Proficiencies">
        <tr id="proficiencies-header-row">
          <th id="proficiencies-header">Proficiencies</th>
        </tr>
        {this.createProficienciesTable()}
      </table>
    );
  }
}
