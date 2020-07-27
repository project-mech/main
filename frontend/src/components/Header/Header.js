import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick(e) {
    TokenService.clearAuthToken();
  }

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/" className="Header__home">
          Home
        </Link>
        <Link to="/garage" className="Header__garage">
          Garage
        </Link>
        <Link
          to="/home"
          onClick={(e) => this.handleLogoutClick(e)}
          className="Header__logout"
        >
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/" className="Header__home">
          Home
        </Link>
        <Link to="/register" className="Header__register">
          Register
        </Link>
        <Link to="/login" className="Header__login">
          Log in
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header__header">
        <div className="Header__gear-keep-driving">
          <Link to="/home">
            <img id="Header__gear" src={require("../../gear.png")} alt="gear" />
          </Link>
          <div className="Header__brand">
            Mech
          </div>
        </div>
        <div className="Header__logged-in-not-logged-in">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    );
  }
}
