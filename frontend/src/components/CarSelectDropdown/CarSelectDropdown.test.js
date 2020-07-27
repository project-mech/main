import React from "react";
import ReactDOM from "react-dom";
import CarSelectDropdown from "./CarSelectDropdown";

describe("CarSelectDropdown component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CarSelectDropdown />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});