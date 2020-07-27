import React from "react";
import ReactDOM from "react-dom";
import CarListItem from "./CarListItem";

describe("CarListItem component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CarListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});