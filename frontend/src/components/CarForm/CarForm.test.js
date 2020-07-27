import React from "react";
import ReactDOM from "react-dom";
import CarForm from "./CarForm";

describe("CarForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CarForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});