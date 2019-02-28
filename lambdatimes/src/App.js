import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import ContentLoader from "./components/ContentLoader/ContentLoader.js";
import Login from "./components/Login.js";

import authenticate from "./components/authentication/authenticate.js";

const PleaseLogin = () => {
  return "Please Login to View Your Content";
};

export default class App extends Component {
  constructor() {
    super();
    // loggedIn will tell me if the user has logged in yet.  It'll
    // default to false and send the user to login via "authenticate"
    // there the user will login/create their account and "authenticate"
    // will switch to the ContentLoader comp
    this.state = { loggedIn: false, username: "", loggingIn: false };
  }

  updateState = (state, value) => {
    // Update state for both loggedIn and username with one method
    this.setState({ [state]: value });
  };

  render() {
    let defaultDisplay = PleaseLogin;
    if (this.state && this.state.loggingIn) {
      defaultDisplay = Login;
    }
    const Authenticate = authenticate(defaultDisplay)(ContentLoader);
    return (
      <div className="App">
        <TopBar login={this.updateState} />
        <Header />
        <Authenticate
          loggedIn={this.state.loggedIn}
          updateState={this.updateState}
          username={this.state.username}
        />
      </div>
    );
  }
}
