import { render } from "react-dom";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "basketball.jpg",
    };
  }

  handleClick = (image) => {
    this.setState({
      img: image,
    });
  };

  render() {
    return (
      <div className="buttons">
        <button onClick={() => this.handleClick("basketball.jpg")}>
          Basketball
        </button>
        <button onClick={() => this.handleClick("cricket.jpeg")}>
          Cricket
        </button>
        <button onClick={() => this.handleClick("laptop.jpg")}>Laptop</button>
        <button onClick={() => this.handleClick("phone.jpg")}>Phone</button>
        <button onClick={() => this.handleClick("pubg.jpeg")}>Pubg</button>
        <button onClick={() => this.handleClick("tiger.jpg")}>Tiger</button>
        <div className="img-div">
          <img src={`../assets/${this.state.img}`} />
        </div>
      </div>
    );
  }
}

export default App;
