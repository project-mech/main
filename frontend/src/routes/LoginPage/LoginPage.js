import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess() {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    history.push(destination);
  }

  render() {
    return (
      <main className="LoginPage__main">
        <div className="LoginPage__screen-wrapper">
          <div className="LoginPage__login-section">
            <h2>Log in</h2>
            <div className="LoginPage__login-description">
              <LoginForm
                onLoginSuccess={() => {
                  this.handleLoginSuccess();
                }}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
