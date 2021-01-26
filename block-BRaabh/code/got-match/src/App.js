import "./App.css";
import React from "react";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseSelected: null,
      personSelected: null,
    };
  }
  handleActiveHouse = (houseName) => {
    this.setState({
      houseSelected: houseName,
    });
  };
  handleActivePerson = (person) => {
    this.setState({
      personSelected: person,
    });
  };
  render() {
    const peopleInHouseSelected = this.state.houseSelected
      ? data
          .find((house) => house.name === this.state.houseSelected)
          .people.map((person) => person.name)
      : [];
    return (
      <>
        <h1>People of GOT</h1>
        <ul>
          {data.map((house) => (
            <li>
              <button
                className={`btn ${
                  this.state.houseSelected === house.name ? "active" : ""
                }`}
                onClick={() => this.handleActiveHouse(house.name)}
              >
                {house.name}
              </button>
            </li>
          ))}
        </ul>
        <ul>
          {data
            .reduce((arr, house) => {
              return arr.concat(house.people);
            }, [])
            .map((person) => (
              <li>
                <button
                  className={`person-btn ${
                    this.state.personSelected === person.name ? "active" : ""
                  }`}
                  onClick={() => this.handleActivePerson(person.name)}
                >
                  <img src={person.image} />
                </button>
              </li>
            ))}
        </ul>
        <div>
          <h3>
            {this.state.houseSelected && this.state.personSelected
              ? peopleInHouseSelected.includes(this.state.personSelected)
                ? "It's a Match"
                : "Sorry Try Again"
              : null}
          </h3>
        </div>
      </>
    );
  }
}

export default App;
