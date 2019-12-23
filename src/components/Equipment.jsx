import React from "react";
import "../css/Equipment.css";

export default class Equipment extends React.Component {
  constructor(props) {
    super(props);
  }

  
  createEquipmentTable = () => {
    let table = [];

    let equippableWeapons = this.props.character.equipment.weapons;

    function weaponProperties(weapon) {
      let propertiesString = "";
      weapon.properties.forEach(property => {
        propertiesString += property.name + ", ";
      });
      return propertiesString;
    }

    let equippableArmor = this.props.character.equipment.armor;

    table.push(
      <tr className="equipment-row-header">
        <th className="table-header">Weapon</th>
        <th className="table-header">Attack Bonus</th>
        <th className="table-header">Damage</th>
        <th className="table-header">Damage Type</th>
        <th className="table-header">Weapon Type</th>
        <th className="table-header">Properties</th>
      </tr>
    );

    for (let i = 0; i < equippableWeapons.length; i++) {
      let children = [];
      children.push(
        <tr className="equipment-row">
          <td className="equipment-value">{equippableWeapons[i].name}</td>
          <td className="equipment-value">{}</td>
          <td className="equipment-value">
            {equippableWeapons[i].damage[0] +
              "d" +
              equippableWeapons[i].damage[1]}
          </td>
          <td className="equipment-value">{equippableWeapons[i].damage[2]}</td>
          <td className="equipment-value">{equippableWeapons[i].type}</td>
          <td className="equipment-value">
            {weaponProperties(equippableWeapons[i])}
          </td>
        </tr>
      );

      table.push(children);
    }

    table.push(
      <tr className="equipment-row-header">
        <th className="table-header">Armor</th>
        <th className="table-header">AC</th>
        <th className="table-header">Type</th>
        <th className="table-header">Stealth</th>
        <th className="table-header">Str. Req.</th>
      </tr>
    );

    for (let i = 0; i < equippableArmor.length; i++) {
      let children = [];
      children.push(
        <tr className="equipment-row">
          <td className="equipment-value">{equippableArmor[i].name}</td>
          <td className="equipment-value">{equippableArmor[i].ac[0]}</td>
          <td className="equipment-value">{equippableArmor[i].type}</td>
          <td className="equipment-value">{equippableArmor[i].stealth}</td>
          <td className="equipment-value">{equippableArmor[i].reqStr}</td>
        </tr>
      );

      table.push(children);
    }
    return table;
  };;

  render() {
    return (
      <div>
        <table className="table" id="Equipment">
          {this.createEquipmentTable()}
        </table>
      </div>
    );
  }
}
