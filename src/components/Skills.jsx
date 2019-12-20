import React from "react";
import "../css/Skills.css";

function abilityModCalculator(abilityValue) {
  return Math.floor((abilityValue - 10) / 2);
}

function savingThrowProficiency(character, abilityName) {
  let proficiencies = character.proficiencies.savingThrows;
  if (proficiencies.find(ability => ability === abilityName) !== undefined) {
    return character.proficiencyBonus;
  } else {
    return 0;
  }
}
function skillProficiency(character, skillName) {
  let proficiencies = character.proficiencies.skills;
  if (proficiencies.find(skill => skill === skillName) !== undefined) {
    return character.proficiencyBonus;
  } else {
    return 0;
  }
}

function Skills(props) {
  return (
    <div id="skillsSavesAndProficiencies">
      <div id="proficiencyBonus-box">
        <div className="skillsSavesAndProficiencies-title">
          Proficiency bonus:
        </div>
        <div id="proficiencyBonus-value"></div>
      </div>
      <div id="savingThrows-container">
        <div className="skillsSavesAndProficiencies-title">Saving Throws</div>
        <div className="savingThrow-box">
          <div className="savingThrow-header">Strength</div>
          <div className="savingThrow-value">
            {savingThrowProficiency(props.character, "Strength") +
              abilityModCalculator(props.character.abilities.Strength)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-header">Dexterity</div>
          <div className="savingThrow-value">
            {savingThrowProficiency(props.character, "Dexterirty") +
              abilityModCalculator(props.character.abilities.Dexterity)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-header">Constitution</div>
          <div className="savingThrow-value">
            {savingThrowProficiency(props.character, "Constitution") +
              abilityModCalculator(props.character.abilities.Constitution)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-header">Wisdom</div>
          <div className="savingThrow-value">
            {savingThrowProficiency(props.character, "Wisdom") +
              abilityModCalculator(props.character.abilities.Wisdom)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-header">Intelligence</div>
          <div className="savingThrow-value">
            {savingThrowProficiency(props.character, "Intelligence") +
              abilityModCalculator(props.character.abilities.Intelligence)}
          </div>
        </div>
        <div className="savingThrow-box">
          <div className="savingThrow-header">Charisma</div>
          <div className="savingThrow-value">
            {savingThrowProficiency(props.character, "Charisma") +
              abilityModCalculator(props.character.abilities.Charisma)}
          </div>
        </div>
      </div>
      <div id="skills-container">
        <div className="skillsSavesAndProficiencies-title">Skills</div>
        <div className="skill-box">
          <div className="skill">Acrobatics</div>
          <div className="skill-value">{skillProficiency(props.character, "Dexterity") +
              abilityModCalculator(props.character.abilities.Dexterity)}</div>
        </div>
        <div className="skill-box">
          <div className="skill">Animal Handling </div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Arcana</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Athletics</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Deception</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">History</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Insight</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Intimidation</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Investigation</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Medicine</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Nature</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Perception</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Performance</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Persuasion</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Religion</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Sleight of Hand</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Stealth</div>
          <div className="skill-value"></div>
        </div>
        <div className="skill-box">
          <div className="skill">Survival</div>
          <div className="skill-value"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
