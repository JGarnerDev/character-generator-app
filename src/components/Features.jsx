import React from "react";
import "../css/Features.css";

export default class Features extends React.Component {
  constructor(props) {
    super(props);
  }
  characterFeatures = () => {
    let featuresArr = [];
    let features = [];
    let characterRacialFeatures = this.props.character.race.racialFeatures;
    let characterSubRacialFeatures = this.props.character.subrace
      .racialFeatures;
    let characterBackgroundFeatures = this.props.character.background.feature;
    if (characterRacialFeatures.length > 0) {
      characterRacialFeatures.forEach(feature => {
        featuresArr.push(feature);
      });
    }
    if (Array.isArray(characterSubRacialFeatures) === true ) {
      characterSubRacialFeatures.forEach(feature => {
        featuresArr.push(feature);
      });
    }
    featuresArr.push(characterBackgroundFeatures);

    for (let i = 0; i < featuresArr.length; i++) {
      if (typeof featuresArr[i] === "object") {
        features.push(
          <div>
            <h3>{featuresArr[i].name}</h3>
            <div>{featuresArr[i].desc}</div>
          </div>
        );
      }
    }
    return features;
  };

  render() {
    return <div className="table" id="Features">{this.characterFeatures()}</div>;
  }
}
