import { render } from "react-dom";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      steps: 1,
      max: Infinity,
    };
  }
  handleIncrement = () => {
    this.setState({
      count: Math.min(this.state.count + this.state.steps, this.state.max),
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.steps,
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  handleStep = (steps) => {
    this.setState({
      steps: steps,
    });
  };
  handleMax = (max) => {
    this.setState({
      max,
    });
  };
  render() {
    return (
      <div className="center">
        <h1>{this.state.count}</h1>
        <div className="count">
          <div className="step-buttons">
            <button
              className={`steps ${this.state.steps === 5 ? "active" : ""}`}
              onClick={() => this.handleStep(5)}
            >
              5
            </button>
            <button
              className={`steps ${this.state.steps === 10 ? "active" : ""}`}
              onClick={() => this.handleStep(10)}
            >
              10
            </button>
            <button
              className={` steps ${this.state.steps === 15 ? "active" : ""}`}
              onClick={() => this.handleStep(15)}
            >
              15
            </button>
          </div>
          <div className="max">
            <button
              className={`steps ${this.state.max === 15 ? "active" : ""}`}
              onClick={() => this.handleMax(15)}
            >
              15
            </button>
            <button
              className={`steps ${this.state.max === 100 ? "active" : ""}`}
              onClick={() => this.handleMax(100)}
            >
              100
            </button>
            <button
              className={`steps ${this.state.max === 200 ? "active" : ""}`}
              onClick={() => this.handleMax(200)}
            >
              200
            </button>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleIncrement(this.state)}>
            Increment
          </button>
          <button onClick={() => this.handleDecrement(this.state)}>
            Decrement
          </button>
          <button onClick={() => this.handleReset(this.state)}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
