import React from "react";
import "../css/Equipment.css";

export default class Equipment extends React.Component {
  constructor(props) {
    super(props);
  }

  createWeaponTable = () => {
    let table = [];

    let equippableWeapons = this.props.character.equipment.weapons;

    function weaponProperties(weapon) {
      let propertiesString = [];
      weapon.properties.forEach(property => {
        propertiesString.push(
          property.name + ", "
        );
      });
      propertiesString = [
        <td className="weapons-table-value">{propertiesString}</td>
      ];
      return propertiesString;
    }

    table.push(
      <tr className="weapons-table-row">
        <th id="weapons-header-name" className="weapons-table-header">Weapon</th>
        <th id="weapons-header-attack" className="weapons-table-header">Attack </th>
        <th id="weapons-header-damage" className="weapons-table-header">Dmg.</th>
        <th id="weapons-header-damageType" className="weapons-table-header">Dmg. Type</th>
        <th id="weapons-header-weaponType" className="weapons-table-header">Wpn. Type</th>
        <th id="weapons-header-properties" className="weapons-table-header">Properties</th>
      </tr>
    );

    for (let i = 0; i < equippableWeapons.length; i++) {
      let children = [];
      children.push(
        <tr className="weapons-table-row">
          <td className="weapons-value-weaponName">
            {equippableWeapons[i].name}
          </td>
          <td className="weapons-value-attackBonus">0</td>
          <td className="weapons-value-damage">
            {equippableWeapons[i].damage[0] +
              "d" +
              equippableWeapons[i].damage[1]}
          </td>
          <td className="weapons-value-damageType">
            {equippableWeapons[i].damage[2]}
          </td>
          <td className="weapons-value-weaponType">{equippableWeapons[i].type}</td>
          <td className="weapons-value-weaponProperties">{weaponProperties(equippableWeapons[i])}</td>
        </tr>
      );

      table.push(children);
    }

    return table;
  };

  createArmorTable = () => {
    let table = [];
    let equippableArmor = this.props.character.equipment.armor;

    table.push(
      <tr className="armor-table-row">
        <th id="armor-header-name" className="armor-table-header">Armor</th>
        <th id="armor-header-ac" className="armor-table-header">AC</th>
        <th id="armor-header-type" className="armor-table-header">Type</th>
        <th id="armor-header-maxDex" className="armor-table-header">Max Dex Bonus</th>
        <th id="armor-header-stealth" className="armor-table-header">Stealth</th>
        <th id="armor-header-strReq" className="armor-table-header">Str. Req.</th>
      </tr>
    );

    for (let i = 0; i < equippableArmor.length; i++) {
      let children = [];
      children.push(
        <tr className="armor-table-row">
          <td className="armor-value-name">{equippableArmor[i].name}</td>
          <td className="armor-value-ac">{equippableArmor[i].ac[0]}</td>
          <td className="armor-value-type">{equippableArmor[i].type}</td>
          <td className="armor-value-maxDex">{equippableArmor[i].ac[1]}</td>
          <td className="armor-value-stealth">{equippableArmor[i].stealth}</td>
          <td className="armor-value-strReq">{equippableArmor[i].reqStr}</td>
        </tr>
      );

      table.push(children);
    }
  
    return table;
  };

  render() {
    return (
      <div id="Equipment">
        <div id="weapon-container">
          <h3 className="equipment-header">Weapons</h3>
          <table id="weapons-table">{this.createWeaponTable()}</table>
        </div>
        <div id="armor-container">
          <h3 className="equipment-header">Armor</h3>
          <table id="armor-table">{this.createArmorTable()}</table>
        </div>
      </div>
    );
  }
}
