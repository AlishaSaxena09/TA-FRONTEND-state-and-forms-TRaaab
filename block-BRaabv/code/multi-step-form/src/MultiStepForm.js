import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class MultiStepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,

      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      address: "",

      message: "",
      choice: "",

      gender: "",

      option1: false,
      option2: false,
    };
  }
  setActiveStep = (step) => {
    this.setState({
      activeStep: step,
    });
  };

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.activeStep}
        {this.state.activeStep === 1 ? (
          <Step1
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            dateOfBirth={this.state.dateOfBirth}
            email={this.state.email}
            address={this.state.address}
            handleChange={this.handleChange}
            setActiveStep={this.setActiveStep}
          />
        ) : null}
        {this.state.activeStep === 2 ? (
          <Step2
            message={this.state.message}
            choice={this.state.choice}
            handleChange={this.handleChange}
            setActiveStep={this.setActiveStep}
          />
        ) : null}
        {this.state.activeStep === 3 ? (
          <Step3
            gender={this.state.gender}
            option1={this.state.option1}
            option2={this.state.option2}
            handleChange={this.handleChange}
            setActiveStep={this.setActiveStep}
          />
        ) : null}
      </div>
    );
  }
}

export default MultiStepForm;
