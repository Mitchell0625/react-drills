import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userPass: ""
    };

    this.whenClicked = this.whenClicked.bind(this);
  }

  handleName(val) {
    this.setState({ userName: val });
  }

  handlePass(val) {
    this.setState({ userPass: val });
  }
  whenClicked() {
    alert(`Username: ${this.state.userName} Password: ${this.state.userPass}`);
  }

  render() {
    return (
      <div className="Login">
        <input
          className="username"
          onChange={e => {
            this.handleName(e.target.value);
          }}
        />
        <input
          className="password"
          onChange={e => {
            this.handlePass(e.target.value);
          }}
        />
        <button onClick={e => this.whenClicked(e)}>Login</button>
      </div>
    );
  }
}

export default Login;
