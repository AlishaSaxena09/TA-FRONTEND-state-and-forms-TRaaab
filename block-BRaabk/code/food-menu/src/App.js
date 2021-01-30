import "./App.css";
import React from "react";
import FoodItem from "./Foodtem";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "all",
    };
  }
  handleActiveCategory = (categoryName) => {
    this.setState({ activeCategory: categoryName });
  };
  render() {
    return (
      <div className="app">
        <h1>Our Menu</h1>
        <nav className="nav">
          <button
            className="btn"
            onClick={() => this.handleActiveCategory("all")}
          >
            All
          </button>
          <button
            className="btn"
            onClick={() => this.handleActiveCategory("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn"
            onClick={() => this.handleActiveCategory("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn"
            onClick={() => this.handleActiveCategory("shakes")}
          >
            Shakes
          </button>
        </nav>
        {data
          .filter((item) => {
            if (this.state.activeCategory === "all") {
              return true;
            } else {
              return item.category === this.state.activeCategory;
            }
          })
          .map((foodItem) => (
            <FoodItem foodItem={foodItem} />
          ))}
      </div>
    );
  }
}
export default App;
