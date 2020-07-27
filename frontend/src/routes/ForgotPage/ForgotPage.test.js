import React from "react";
import ReactDOM from "react-dom";
import ForgotPage from "./ForgotPage";

describe("ForgotPage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ForgotPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});