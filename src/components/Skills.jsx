import React from "react";
import "../css/Skills.css";

function abilityModCalculator(abilityValue) {
  return Math.floor((abilityValue - 10) / 2);
}

function proficiency(character, abilityName) {
  if (
    character.proficiencies.savingThrows.find(function(ability) {
      return ability === abilityName;
    }) !== undefined
  ) {
    return character.proficiencyBonus;
  } else {
    return 0;
  }
}

function Skills(props) {
  return (
    <div id="skillsSavesAndProficiencies">
      <div id="proficiencyBonus-box">
        <div id="proficiencyBonus-title">Proficiency bonus:</div>
        <div id="proficiencyBonus-value">
          {props.character.proficiencyBonus}
        </div>
      </div>
      <div id="savingThrows-container">
      <div className="characterSheet-title-small">Saving Throws</div>
        <div className="savingThrow-box">
          <div className="savingThrow-title">Strength</div>
          <div className="savingThrow-value">
            {proficiency(props.character, "Strength") +
              abilityModCalculator(props.character.abilities.Strength)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-title">Dexterity</div>
          <div className="savingThrow-value">
            {proficiency(props.character, "Dexterirty") +
              abilityModCalculator(props.character.abilities.Dexterity)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-title">Constitution</div>
          <div className="savingThrow-value">
            {proficiency(props.character, "Constitution") +
              abilityModCalculator(props.character.abilities.Constitution)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-title">Wisdom</div>
          <div className="savingThrow-value">
            {proficiency(props.character, "Wisdom") +
              abilityModCalculator(props.character.abilities.Wisdom)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-title">Intelligence</div>
          <div className="savingThrow-value">
            {proficiency(props.character, "Intelligence") +
              abilityModCalculator(props.character.abilities.Intelligence)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-title">Charisma</div>
          <div className="savingThrow-value">
            {proficiency(props.character, "Charisma") +
              abilityModCalculator(props.character.abilities.Charisma)}
          </div>
        </div>
      </div>
      <div id="skills-container">
      <div className="characterSheet-title-small">Skills</div>
        <div className="skill-box">
          <div className="skill-title">Acrobatics</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Animal Handling </div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Arcana</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Athletics</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Deception</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">History</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Insight</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Intimidation</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Investigation</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Medicine</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Nature</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Perception</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Performance</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Persuasion</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Religion</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Sleight of Hand</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Stealth</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
        <div className="skill-box">
          <div className="skill-title">Survival</div>
          <div className="skill-value">{props.character.proficiencyBonus}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
