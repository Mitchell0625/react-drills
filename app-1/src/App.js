import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  render() {
    return (
      <div className="App">
        <input className="" onChange={e => this.handleChange(e.target.value)} />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
