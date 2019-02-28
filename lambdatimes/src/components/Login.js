import React from "react";
import { Button, Card, CardTitle, CardBody } from "reactstrap";

/*
props:
updateState={this.props.updateState}
*/

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    // Unnecessary multi-account support but...why not?
    this.state = { accounts: {} };
  }
  componentDidMount() {
    if (localStorage.LTaccounts) {
      const storage = JSON.parse(localStorage.getItem("LTaccounts"));
      this.setState({ accounts: storage });
    }
    // componentWillUnmount does *NOT* invoke on page refresh or if the
    // user leaves for another page.  The beforeunload event handler will.
    // so I use these two together to always save data before the user
    // leaves and to kill eventListeners if the user stays on the site
    window.addEventListener("beforeunload", this.saveStateToStorage);
  }
  componentWillUnmount() {
    // User left the page with the component but stayed on the site,
    // kill the eventListener and save their data.
    window.removeEventListener("beforeunload", this.saveStateToStorage);
    this.saveStateToStorage();
  }
  saveStateToStorage = () => {
    let { accounts } = this.state;
    if (Object.keys(accounts).length) {
      localStorage.setItem("LTaccounts", JSON.stringify(accounts));
    }
  };

  onCreateAccount = e => {
    const username = e.target.parentNode.childNodes[0].value;
    const password = e.target.parentNode.childNodes[1].value;

    if (this.state.accounts[username]) {
      // If the user tries to create an account that already exists
      alert("Account already exists!");
    } else if (username.length > 3) {
      // Verify account name is at least 4 characters before creating
      let accounts = Object.assign({}, this.state.accounts);
      accounts[username] = password;
      // After creating account, log the user in by saving name to state
      this.setState({ accounts }, () => this.logUserIn(username));
    } else {
      alert("Account name must be at least 4 characters");
    }
  };

  onLogin = e => {
    e.preventDefault();

    const username = e.target.childNodes[0].value;
    // Not going to use SHA, but you should with passwords
    const password = e.target.childNodes[1].value;

    if (username.length && this.state.accounts.hasOwnProperty(username)) {
      // Check for username in the accounts state

      if (this.state.accounts[username] === password) {
        // If the username exists and matches the password inputted
        this.logUserIn(username);
      } else {
        // If password does not match
        alert("Incorrect password");
      }
    } else {
      // If account was not found
      alert("Account not found");
    }
  };

  logUserIn(username) {
    // Update both states (with one method woo) to reflect login
    this.props.updateState("loggedIn", true);
    this.props.updateState("username", username);
  }
  render() {
    return (
      <div className="loginContainer">
        <Card>
          <CardTitle>Please Login to use your LT Account.</CardTitle>
          <CardBody>
            <form onSubmit={this.onLogin}>
              <input type="text" placeholder="Account Name" />
              <input type="password" placeholder="Password" />
              <Button color="primary" type="submit">
                Login
              </Button>{" "}
              <Button
                color="secondary"
                type="button"
                onClick={this.onCreateAccount}
              >
                Create Account
              </Button>{" "}
            </form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
