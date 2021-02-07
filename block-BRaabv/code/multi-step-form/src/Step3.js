import React from "react";
function Step3(props) {
  return (
    <div>
      <nav>
        <div>
          <h2>Checkbox</h2>
        </div>
      </nav>
      <button onClick={() => props.handleChange("gender", "male")}>
        <img src="./male.svg" />
      </button>
      <button onClick={() => props.handleChange("gender", "female")}>
        <img src="./female.svg" />
      </button>
      GENDER SELECTED: {props.gender}
      <input
        type="checkbox"
        name="option-1"
        id="option-1"
        checked={props.option1}
        onChange={(event) =>
          props.handleChange("option1", event.target.checked)
        }
      />
      <label for="option-1">I want to add this option</label>
      <input
        type="checkbox"
        name="option-2"
        id="option-2"
        checked={props.option2}
        onChange={(event) =>
          props.handleChange("option2", event.target.checked)
        }
      />
      <label for="option-2">I want to add this option</label>
      <button type="button" onClick={() => props.setActiveStep(2)}>
        Back
      </button>
      <button type="button">Submit</button>
    </div>
  );
}

export default Step3;
