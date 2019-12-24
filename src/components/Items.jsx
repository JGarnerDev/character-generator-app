import React from "react";
import "../css/Items.css";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  createItemsTable = () => {
    let table = [];
    table.push(
      <tr className="items-table-row">
        <th className="items-table-header">Item</th>
        <th className="items-table-header">#</th>
        <th className="items-table-header">Value</th>
        <th className="items-table-header">Weight</th>
      </tr>
    );

    let characterItems = this.props.character.items;
    let netWorth = 0;
    let netWeight = 0;

    for (let i = 0; i < characterItems.length; i++) {
      let children = [];
      let itemName = characterItems[i].name;
      let itemQuantity = characterItems[i].quantity;
      let itemValue = characterItems[i].value;
      let itemWeight = characterItems[i].weight;

      netWorth += itemValue;
      netWeight += itemWeight;

      children.push(
        <tr className="items-table-row">
          <td className="items-table-value" id="item-name">{itemName}</td>
          <td className="items-table-value">{itemQuantity}</td>
          <td className="items-table-value">{itemValue}</td>
          <td className="items-table-value">{itemWeight}</td>
        </tr>
      );

      table.push(children);
    }
    table.push(
      <tr className="items-table-row">
        <td className="items-table-value"></td>
        <td className="items-table-value"></td>
        <td className="items-table-value">Net value:{netWorth}</td>
        <td className="items-table-value">Net weight:{netWeight}</td>
      </tr>
    );

    return table;
  };

  render() {
    return (
      <div className="table" id="Items">
        <h3 id="items-header">Inventory</h3>
        <table  id="items-table">
          {this.createItemsTable()}
        </table>{" "}
      </div>
    );
  }
}
