import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }
  render() {
    let displayData = this.state.data.map((element, ind) => {
      return <h2 key={ind}>{element}</h2>;
    });
    return <div className="App">{displayData}</div>;
  }
}

export default App;
