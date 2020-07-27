import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  static contextType = MechContext;

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const { username, nickname, password } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      nickname: nickname.value,
      password: password.value,
    })
      .then(() => {
        username.value = "";
        nickname.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  }

  handleError = (error) => {
    if (error) {
      return (
        /*(
          <div className="RegistrationForm__orange">
            Error: {error.message}.{" "}
          </div>
        ) ||*/ <div className="RegistrationForm__orange">Error: {error}</div>
      );
    } else {
      return null;
    }
  };

  render() {
    const { error } = this.state;

    return (
      <form
        className="RegistrationForm__username-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div role="alert">{this.handleError(error)}</div>
        <div className="RegistrationForm__username">Username (Use Email)</div>
        <input
          required
          type="text"
          id="RegistrationForm__username-input"
          name="username"
        />
        <div className="RegistrationForm__nickname-label">Nickname</div>
        <input
          required
          type="text"
          id="RegistrationForm__nickname-input"
          name="nickname"
        />
        <div className="RegistrationForm__password">Password</div>
        <input
          required
          type="text"
          id="RegistrationForm__password-input"
          name="password"
        />
        <div className="RegistrationForm__button-div">
          <button className="RegistrationForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
