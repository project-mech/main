import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer__container">
        <div className="Footer__footer">
          <div id="Footer__beep-beep">Beep beep</div>
          <br />
          <div className="Footer__contact-us">
            <a
              className="Footer__email-connect"
              href="mailto:peteryyoon@gmail.com"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}
