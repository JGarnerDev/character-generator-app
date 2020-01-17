import React from "react";
import "../css/Spells.css";

export default class Spells extends React.Component {
  constructor(props) {
    super(props);
  }

  createSpellsTable = () => {
    let spellsTable = [];
    let characterCantrips = this.props.character.spells[0][1];
    let characterLevelOneSpells = this.props.character.spells[1][1];

    spellsTable.push(
      <tr className="spells-subheader">
        <th className="spells-subheader-title">Cantrips</th>
      </tr>
    );

    for (let i = 0; i < characterCantrips.length; i++) {
      let cantripEle = [];
      let cantrip = characterCantrips[i];
      cantripEle.push(
        <tr className="cantrip">
          <td className="spell-name">{cantrip.name}</td>
          <td className="spell-desc">{cantrip.desc} <br></br> <br></br> {cantrip.atHigherLevels}</td>
          <td className="spell-castingTime">{cantrip.castingTime}</td>
          <td className="spell-duration">{cantrip.duration}</td>
          <td className="spell-attackOrSave">{cantrip.attackOrSave}</td>
          <td className="spell-damageOrEffect">{cantrip.damageOrEffect}</td>
          <td className="spell-range">{cantrip.range}</td>
          <td className="spell-area">{cantrip.area}</td>
          <td className="spell-targets">{cantrip.targets}</td>
          <td className="spell-components">{cantrip.components}</td>
          <td className="spell-ritual">{cantrip.ritual}</td>
        </tr>
      );
      spellsTable.push(cantripEle);
    }

    spellsTable.push(
      <tr className="spells-subheader">
        <th className="spells-subheader-title">1st Level Spells</th>
      </tr>
    );

    for (let i = 0; i < characterLevelOneSpells.length; i++) {
      let levelOneSpell = [];
      levelOneSpell.push(
        <tr className="levelOneSpell">
          <td className="spell-name">{levelOneSpell.name}</td>
          <td className="spell-desc">{levelOneSpell.desc} <br></br> <br></br> {levelOneSpell.atHigherLevels}</td>
          <td className="spell-castingTime">{levelOneSpell.castingTime}</td>
          <td className="spell-duration">{levelOneSpell.duration}</td>
          <td className="spell-attackOrSave">{levelOneSpell.attackOrSave}</td>
          <td className="spell-damageOrEffect">{levelOneSpell.damageOrEffect}</td>
          <td className="spell-range">{levelOneSpell.range}</td>
          <td className="spell-area">{levelOneSpell.area}</td>
          <td className="spell-targets">{levelOneSpell.targets}</td>
          <td className="spell-components">{levelOneSpell.components}</td>
          <td className="spell-ritual">{levelOneSpell.ritual}</td>
        </tr>
      );
      spellsTable.push(levelOneSpell);
    }

    return spellsTable;
  };

  render() {
    return (
        <div id="Spells">
        <h3 id="spells-header">Spells</h3>
      <table id="spells-table" >
        {this.createSpellsTable()}
      </table></div>
    );
  }
}
