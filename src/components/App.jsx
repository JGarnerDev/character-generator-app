import React, { Component } from "react";
import CharSheet from "./CharSheet";
import makeCharacter from "../generator/characterGenerator";
import resources from "../generator/resourceAssembler";
import "../css/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterGenerated: false,
      character: null,
      resources: resources
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
          <div id="header-after">
            <div id="character-title">
              <div id="character-title-name">{this.state.character.name}</div>
              <div id="the">the</div>
              <div id="character-title-desc">
                {this.state.character.subrace.name}{" "}
                {this.state.character.class.name}
              </div>
            </div>
            <button
              className="generate-button"
              id="generate-button-after"
              onClick={this.handleGenerateClick}
            >
              Generate a Character!
            </button>
          </div>

          <CharSheet
            character={this.state.character}
            resources={this.state.resources}
          />
          <img id="background-img" src="https://i.imgur.com/M5S6kHv.jpg"></img>
        </div>
      );
    } else {
      return (
        <div id="App">
          <img id="background-img" src="https://i.imgur.com/M5S6kHv.jpg"></img>

          <div id="logo-container">
            <img id="logo" src="https://i.imgur.com/RahOwe9.png" alt=""></img>
            <div id="logo-text">
              <h1 id="logo-text-Character">Character</h1>
              <h1 id="logo-text-Generator">Generator</h1>
            </div>
          </div>
          <div id="header-before">
            <button
              className="generate-button"
              id="generate-button-before"
              onClick={this.handleGenerateClick}
            >
              Generate a Character!
            </button>
          </div>
        </div>
      );
    }
  }
}
