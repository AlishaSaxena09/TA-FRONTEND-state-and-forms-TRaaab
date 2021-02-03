import React from "react";
import "./App.css";
// import Card from "./font-card";
import fontData from "./font.json";
import FontCard from "./FontCard";

function App() {
  return (
    <div className="App">
      <Input />
    </div>
  );
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "The quick brown fox jumps over the lazy dog.",
      size: 30,
    };
  }
  handleText = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };
  handleSize = (e) => {
    this.setState({
      size: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <h4>Custom</h4>
          <input
            onChange={this.handleText}
            value={this.state.inputText}
            placeholder="Type Something"
          />
          <p>{this.state.size}px</p>
          <div className="slidecontainer">
            <input
              type="range"
              min="10"
              max="100"
              onChange={this.handleSize}
              value={this.state.size}
              className="slider"
              step="1"
            />
          </div>
        </div>
        <div className="grid">
          {fontData.map((font) => (
            <FontCard
              font={font}
              fontSize={this.state.size}
              text={this.state.inputText}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
