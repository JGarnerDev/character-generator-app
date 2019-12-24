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
          <td className="characterCantrips-name">{cantrip.name}</td>
          <td className="characterCantrips-desc">{cantrip.desc} <br></br> <br></br> {cantrip.atHigherLevels}</td>
          <td className="characterCantrips-castingTime">{cantrip.castingTime}</td>
          <td className="characterCantrips-duration">{cantrip.duration}</td>
          <td className="characterCantrips-attackOrSave">{cantrip.attackOrSave}</td>
          <td className="characterCantrips-damageOrEffect">{cantrip.damageOrEffect}</td>
          <td className="characterCantrips-range">{cantrip.range}</td>
          <td className="characterCantrips-area">{cantrip.area}</td>
          <td className="characterCantrips-targets">{cantrip.targets}</td>
          <td className="characterCantrips-components">{cantrip.components}</td>
          <td className="characterCantrips-ritual">{cantrip.ritual}</td>
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
          <td className="character-levelonespell-name">{levelOneSpell.name}</td>
          <td className="character-levelonespell-desc">{levelOneSpell.desc} <br></br> <br></br> {levelOneSpell.atHigherLevels}</td>
          <td className="character-levelonespell-castingTime">{levelOneSpell.castingTime}</td>
          <td className="character-levelonespell-duration">{levelOneSpell.duration}</td>
          <td className="character-levelonespell-attackOrSave">{levelOneSpell.attackOrSave}</td>
          <td className="character-levelonespell-damageOrEffect">{levelOneSpell.damageOrEffect}</td>
          <td className="character-levelonespell-range">{levelOneSpell.range}</td>
          <td className="character-levelonespell-area">{levelOneSpell.area}</td>
          <td className="character-levelonespell-targets">{levelOneSpell.targets}</td>
          <td className="character-levelonespell-components">{levelOneSpell.components}</td>
          <td className="character-levelonespell-ritual">{levelOneSpell.ritual}</td>
        </tr>
      );
      spellsTable.push(levelOneSpell);
    }

    return spellsTable;
  };

  render() {
    return (
        <div id="Spells">
        <h3 id="spells-title">Spells</h3>
      <table className="table" >
        {this.createSpellsTable()}
      </table></div>
    );
  }
}
