import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
      <Validation />
    </div>
  );
}

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      passWord: "",
      confirm: "",
    };
  }
  validateEmail = (value) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(value) == false) {
      return false;
    }
    return true;
  };
  handleUser = (e) =>
    this.setState({
      userName: e.target.value,
    });
  handleemail = (e) =>
    this.setState({
      email: e.target.value,
    });
  handlepass = (e) =>
    this.setState({
      passWord: e.target.value,
    });
  handleconfirm = (e) =>
    this.setState({
      confirm: e.target.value,
    });
  render() {
    return (
      <div>
        <form className="validation-form">
          <h1>Register With Us</h1>
          <label for="text">UserName</label>
          <input
            onChange={this.handleUser}
            value={this.state.userName}
            type="text"
            className={` ${this.state.userName.length > 3 ? null : "error"}`}
            id="text"
            name="text"
          />
          {this.state.userName.length > 3 ? null : (
            <p>UserName must be atleast 3 characters</p>
          )}
          <label for="email">Email</label>
          <input
            onChange={this.handleemail}
            value={this.state.email}
            type="email"
            className={` ${
              this.validateEmail(this.state.email) ? null : "error"
            }`}
            id="email"
            name="email"
          />
          {this.validateEmail(this.state.email) ? null : (
            <p>Email is not valid</p>
          )}
          {/*  */}
          <label for="password">Password</label>
          <input
            onChange={this.handlepass}
            value={this.state.passWord}
            className={` ${this.state.passWord.length > 6 ? null : "error"}`}
            type="password"
            id="password"
            name="password"
          />
          {this.state.passWord.length > 6 ? null : (
            <p>Password must be atleast 6 characters</p>
          )}
          <label for="password">Confirm Password</label>
          <input
            onChange={this.handleconfirm}
            value={this.state.confirm}
            className={` ${
              this.state.confirm === this.state.passWord ? null : "error"
            }`}
            type="password"
            id="password"
            name="password"
          />
          {this.state.confirm === this.state.passWord ? null : (
            <p>Password2 is required</p>
          )}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="flex">
        <form className="form">
          <label for="text-input">Text input</label>
          <input type="text" id="text-input" name="text-input" />
          <label for="date">Date Input</label>
          <input type="date" id="date" name="date" />
          <label for="file">File Input</label>
          <input type="file" id="file" name="file" />
          <label for="read-only">Read ONly Input</label>
          <input
            type="text"
            id="read-only"
            name="read-only"
            value="read-only"
          />
          <label for="disabled">Disabled Input </label>
          <input type="text" id="disabled" name="disabled" disabled={true} />
          <label for="textarea">Textarea</label>
          <textarea id="textarea"></textarea>
          <label for="disabled">Textarea Disabled</label>
          <textarea disabled={true}></textarea>
        </form>
      </div>
    );
  }
}

export default App;
