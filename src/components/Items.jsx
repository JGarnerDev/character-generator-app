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
        <th className="items-table-header">Val.</th>
        <th className="items-table-header">Wgt.</th>
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
          <td className="items-table-value" id="item-name">
            {itemName}
          </td>
          <td className="items-table-value">{itemQuantity}</td>
          <td className="items-table-value">{itemValue}</td>
          <td className="items-table-value">{itemWeight}</td>
        </tr>
      );

      table.push(children);
    }
    table.push(
      <tr className="items-table-row">
        <td className="items-table-value" id="item-name"></td>
        <td className="items-table-value" ></td>
        <td className="items-table-netValue">Net value: {netWorth}</td>
        <td className="items-table-netValue">Net weight: {netWeight}</td>
      </tr>
    );
    let table1 = table.slice(0, 14);
    let table2 = table.slice(15, 32);
    table2.unshift(
      <tr className="items-table-row">
        <th className="items-table-header">Item</th>
        <th className="items-table-header">#</th>
        <th className="items-table-header">Val.</th>
        <th className="items-table-header">Wgt.</th>
      </tr>
    );
    let tables = [table1, table2];
    return tables;
  };

  render() {
    return (
      <div id="Items">
        <h3 id="items-header">Inventory</h3>
        <div id="items-container">
          <table id="items-table1">{this.createItemsTable()[0]}</table>{" "}
          <table id="items-table2">{this.createItemsTable()[1]}</table>{" "}
        </div>
      </div>
    );
  }
}
