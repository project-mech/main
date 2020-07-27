import React from "react";
import ReactDOM from "react-dom";
import DtcForm from "./DtcForm";

describe("DtcForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DtcForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});