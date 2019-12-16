import React, { Component } from "react";
import CharSheet from "./CharSheet";
import makeCharacter from "../generator/characterGenerator";
import "../css/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterGenerated: false
    };
  }

  generateCharacter = () => {
    let newCharacter = makeCharacter();
    this.setState({
        characterGenerated: true,
      character: newCharacter
    });
    console.log(this.state.character);
  };

  render() {
    const isCharacterGenerated = this.state.characterGenerated;
    if (isCharacterGenerated) {
      return (
        <div id="App">
          <button id="generate-button" onClick={this.generateCharacter}>
            Generate a Character!
          </button>
          <CharSheet id="character-sheet" character={this.state.character} />
        </div>
      );
    } else {
        return (
          <div id="App">
            <button id="generate-button" onClick={this.generateCharacter}>
              Generate a Character!
            </button>
          </div>
        );
      }
  }
}
