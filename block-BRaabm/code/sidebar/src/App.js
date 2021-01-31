import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  handleClick = () => {
    this.setState((state) => {
      return { isVisible: !state.isVisible };
    });
  };
  render() {
    return (
      <div>
        <aside className="header">
          <nav className={this.state.isVisible ? "show" : "hide"}>
            <a href="google.com">Home</a>
            <a href="google.com">About</a>
            <a href="google.com">Contact</a>
            <button onClick={this.handleClick}>Hide</button>
          </nav>
        </aside>
        <main>
          <h1>This is a sidebar.</h1>
        </main>
      </div>
    );
  }
}

export default App;
