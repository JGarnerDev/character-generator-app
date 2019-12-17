import React, { Component } from "react";
import CharSheet from "./CharSheet";
import makeCharacter from "../generator/characterGenerator";
import "../css/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterGenerated: false,
      character: null
    };
  }

  handleGenerateClick = () => {
    this.setState({
      characterGenerated: true,
      character: makeCharacter()
    });
  };

  render() {
    const isCharacterGenerated = this.state.characterGenerated;
    if (isCharacterGenerated) {
      return (
        <div id="App">
          <button id="generate-button" onClick={this.handleGenerateClick}>
            Generate a Character!
          </button>
          <CharSheet id="character-sheet" character={this.state.character} />
        </div>
      );
    } else {
      return (
        <div id="App">
          <button id="generate-button" onClick={this.handleGenerateClick}>
            Generate a Character!
          </button>
        </div>
      );
    }
  }
}
