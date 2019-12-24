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
          <div className="weapons-table-property">{property.name + ", "}</div>
        );
      });
      propertiesString = [
        <td className="weapons-table-value">{propertiesString}</td>
      ];
      return propertiesString;
    }

    table.push(
      <tr className="weapons-table-row">
        <th className="weapons-table-header">Weapon</th>
        <th className="weapons-table-header">Attack </th>
        <th className="weapons-table-header">Damage</th>
        <th className="weapons-table-header">Damage Type</th>
        <th className="weapons-table-header">Weapon Type</th>
        <th className="weapons-table-header">Properties</th>
      </tr>
    );

    for (let i = 0; i < equippableWeapons.length; i++) {
      let children = [];
      children.push(
        <tr className="weapons-table-row">
          <td className="weapons-table-value">{equippableWeapons[i].name}</td>
          <td className="weapons-table-value">0</td>
          <td className="weapons-table-value">
            {equippableWeapons[i].damage[0] +
              "d" +
              equippableWeapons[i].damage[1]}
          </td>
          <td className="weapons-table-value">
            {equippableWeapons[i].damage[2]}
          </td>
          <td className="weapons-table-value">{equippableWeapons[i].type}</td>
          {weaponProperties(equippableWeapons[i])}
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
        <th className="armor-table-header">Armor</th>
        <th className="armor-table-header">AC</th>
        <th className="armor-table-header">Type</th>
        <th className="armor-table-header">Max Dex Bonus</th>
        <th className="armor-table-header">Stealth</th>
        <th className="armor-table-header">Str. Req.</th>
      </tr>
    );

    for (let i = 0; i < equippableArmor.length; i++) {
      let children = [];
      children.push(
        <tr className="armor-table-row">
          <td className="armor-table-value">{equippableArmor[i].name}</td>
          <td className="armor-table-value">{equippableArmor[i].ac[0]}</td>
          <td className="armor-table-value">{equippableArmor[i].type}</td>
          <td className="armor-table-value">{equippableArmor[i].ac[1]}</td>
          <td className="armor-table-value">{equippableArmor[i].stealth}</td>
          <td className="armor-table-value">{equippableArmor[i].reqStr}</td>
        </tr>
      );

      table.push(children);
    
    }
    table.push(
        <tr className="armor-table-row">
          <th className="armor-table-value"></th>
          <th className="armor-table-value"></th>
          <th className="armor-table-value"></th>
          <th className="armor-table-value"></th>
          <th className="armor-table-value"></th>
          <th className="armor-table-value"></th>
        </tr>
      );
    return table;
  };

  render() {
    return (
      <div className="table" id="Equipment">
        <div className="equipment-container">
          <h3 id="weapons-header">Weapons</h3>
          <table id="weapons-table">{this.createWeaponTable()}</table>
        </div>
        <div className="equipment-container">
          <h3 id="armor-header">Armor</h3>
          <table id="armor-table">{this.createArmorTable()}</table>
        </div>
      </div>
    );
  }
}
