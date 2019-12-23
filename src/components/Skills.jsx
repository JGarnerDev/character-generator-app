import React from "react";
import "../css/Skills.css";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  reverseCamelCase(string) {
    var lowerCasedString = string.replace(/([A-Z])/g, " $1");
    return (
      lowerCasedString.charAt(0).toUpperCase() + lowerCasedString.slice(1)
    );
  }

  createSkillsTable = () => {
    let table = [];
    table.push(
      <tr id="skills-headers">
        <th className="skills-header">Skill</th>
        <th className="skills-header">Total</th>
        <th className="skills-header">Mod.</th>
        <th className="skills-header">Prof.</th>
      </tr>
    );

    let characterSkillNames = Object.keys(this.props.character.skills);
    let characterSkillValues = Object.values(this.props.character.skills);

    for (let i = 0; i < characterSkillNames.length; i++) {
      let children = [];
      let proficiencyBonus =
        characterSkillValues[i][1] * this.props.character.proficiencyBonus;
      let abilityModifier = this.props.character.abilityMod[
        this.props.resources.skills[characterSkillNames[i]].abilityAssoc
      ];
      let skillValue =
        characterSkillValues[i][0] + proficiencyBonus + abilityModifier;

      children.push(
        <tr className="skill">
          <td className="skill-name">{this.reverseCamelCase(characterSkillNames[i])}</td>
          <td className="skill-value">{skillValue}</td>
          <td className="skill-value">{abilityModifier}</td>
          <td className="skill-value">{proficiencyBonus}</td>
        </tr>
      );

      table.push(children);

    }

    return table;
  };

  render() {
    return <table className="table" id="Skills">{this.createSkillsTable()}</table>;
  }
}
