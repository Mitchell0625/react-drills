import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  constructor() {
    super();

    this.state = {
      src:
        "https://images.pexels.com/photos/116024/pexels-photo-116024.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Image</h2>
        <Image src={this.state.src} />
      </div>
    );
  }
}

export default App;
