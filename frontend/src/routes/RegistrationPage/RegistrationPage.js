import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess() {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/login";
    history.push(destination);
  }

  render() {
    return (
      <main className="RegistrationPage__main">
        <div className="RegistrationPage__screen-wrapper">
          <div className="RegistrationPage__registration-section">
            <h2>Register</h2>
            <div className="RegistrationPage__registration-form">
              <RegistrationForm
                onRegistrationSuccess={() => this.handleRegistrationSuccess()}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
