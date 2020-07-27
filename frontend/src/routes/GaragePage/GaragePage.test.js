import React from "react";
import ReactDOM from "react-dom";
import GaragePage from "./GaragePage";

describe("GaragePage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GaragePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});