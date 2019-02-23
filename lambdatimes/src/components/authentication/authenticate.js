import React, { Component } from "react";

/*
props:
loggedIn={this.state.loggedIn}
updateState={this.updateState}
username={this.state.username}
*/

const authenticate = DefaultPage => ContentPage =>
  class extends Component {
    render() {
      if (this.props.loggedIn) {
        {
          /*
          I currently don't use the username but it's here in
          case I update it
          */
        }
        return <ContentPage username={this.props.username} />;
      }
      return <DefaultPage updateState={this.props.updateState} />;
    }
  };

export default authenticate;
