import React from "react";
import ReactDOM from "react-dom";
import Utility from "./Utility";

describe("Utility component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Utility />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});