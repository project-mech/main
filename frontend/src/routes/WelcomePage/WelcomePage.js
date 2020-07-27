import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

export default class WelcomePage extends Component {
  render() {
    return (
      <main className="WelcomePage__main">
        <div className="WelcomePage__screen-wrapper">
          <div className="WelcomePage__welcome-section">
            <h2>Welcome to Mech</h2>
          </div>
          <div className="WelcomePage__notice">
            <h3>Notice: Currently we only support Toyota, Honda, Chevrolet.</h3>
          </div>
          <div className="WelcomePage__notice">
            <h4>
              You may use
              <br />
              l: testaccount@gmail.com / p: @ABCabc123
              <br />
              for the login credentials.
            </h4>
          </div>
          <div id="WelcomePage__login-logout-link">
            <Link to="/home">Rev! Enter >></Link>
          </div>
          <div id="WelcomePage__intro">
            <ul className="WelcomePage__intro-ul">
              <li>
                Mech is a community for car owners and mechanics to discuss
                problems and solutions based on car manufacturers and diagnostic
                trouble codes (DTC). <br />
                <br />
                Enter your VIN or Make and Model of your car. Then, enter your
                DTC. Find solutions! Chat with car owners and mechanics.
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}
