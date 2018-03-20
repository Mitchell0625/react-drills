import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    let foodDisplay = this.state.food
      .filter((element, ind) => {
        return element.includes(this.state.userInput);
      })
      .map((element, ind) => {
        return <h2 key={ind}>{element}</h2>;
      });

    return (
      <div className="App">
        <input
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />

        {foodDisplay}
      </div>
    );
  }
}

export default App;
