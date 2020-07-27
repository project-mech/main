import React, { Component } from "react";
import { FaCarCrash } from "react-icons/fa";
import { Section } from "../../components/Utility/Utility";
import "./NotFoundPage.css";

export default class NotFoundPage extends Component {
  render() {
    return (
      <main className="NotFoundPage__main">
        <div className="NotFoundPage__screen-wrapper">
          <Section className="NotFoundPage__section">
            <FaCarCrash/>
            <h2>404</h2>
            <h3 className="NotFoundPage__page-not-found">Page not found</h3>
            <p>Try reversing to the previous page.</p>
          </Section>
        </div>
      </main>
    );
  }
}
