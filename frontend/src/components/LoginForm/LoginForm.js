import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import "./LoginForm.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ error: null });
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(this.context.addUser)
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  }

  render() {
    const { error } = this.state;

    return (
      <form
        className="LoginForm__login-form"
        onSubmit={(e) => this.handleSubmitJwtAuth(e)}
      >
        <div role="alert">
          {error && <div className="LoginForm__orange">{error}</div>}
        </div>
        <div className="LoginForm__username">Username (Use Email)</div>
        <input
          required
          type="text"
          id="LoginForm__username-input"
          name="username"
        />
        <div className="password">Password</div>
        <input
          required
          type="password"
          id="LoginForm__password-input"
          name="password"
        />
        <div className="LoginForm__button-div">
          <button className="LoginForm__button" type="submit">
            Submit
          </button>
        </div>
        <div className="LoginForm__forgot-div">
          <Link to={"/forgot"}>Forgot?</Link>
        </div>
      </form>
    );
  }
}
