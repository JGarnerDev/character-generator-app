import React from "react";
import "../css/Items.css";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  createItemsTable = () => {
    let table = [];
    table.push(
      <tr id="items-headers">
        <th id="items-header-Item">Item</th>
        <th id="items-header-#">#</th>
        <th id="items-header-Value">Value</th>
        <th id="items-header-Weight">Weight</th>
      </tr>
    );

    let characterItems = this.props.character.items;
    let netWorth = 0
    let netWeight = 0

    for (let i = 0; i < characterItems.length; i++) {
      let children = [];
      let itemName = characterItems[i].name;
      let itemQuantity = characterItems[i].quantity;
      let itemValue = characterItems[i].value;
      let itemWeight = characterItems[i].weight;

      netWorth += itemValue
      netWeight += itemWeight

      children.push(
        <tr className="item">
          <td className="item-name">{itemName}</td>
          <td className="item-value">{itemQuantity}</td>
          <td className="item-value">{itemValue}</td>
          <td className="item-value">{itemWeight}</td>
        </tr>
      );

      table.push(children);

    }
    table.push(
        <tr id="items-netValues">
          <td></td>
          <td></td>
          <td className="item-value">{netWorth}</td>
          <td className="item-value">{netWeight}</td>
        </tr>
      );

    return table;
  };

  render() {
    return <table className="table" id="Items">{this.createItemsTable()}</table>;
  }
}
