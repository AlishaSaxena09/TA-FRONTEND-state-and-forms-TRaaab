import React from "react";
function Step2(props) {
  return (
    <div>
      <nav>
        <div>
          <h2>Message</h2>
        </div>
      </nav>
      <form>
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={props.message}
          onChange={(event) =>
            props.handleChange("message", event.target.value)
          }
        ></textarea>
        <input
          type="radio"
          name="choice"
          id="choice-1"
          value="choice1"
          checked={props.choice === "choice1"}
          onChange={(event) => props.handleChange("choice", event.target.value)}
        />
        <label for="choice-1">The Number One Choice</label>
        <input
          type="radio"
          name="choice"
          id="choice-2"
          value="choice2"
          checked={props.choice === "choice2"}
          onChange={(event) => props.handleChange("choice", event.target.value)}
        />
        <label for="choice-2">The Number Two Choice</label>
        <button type="button" onClick={() => props.setActiveStep(1)}>
          Back
        </button>
        <button type="button" onClick={() => props.setActiveStep(3)}>
          Next Step
        </button>
      </form>
    </div>
  );
}

export default Step2;
