import React from "react";
import ReactDOM from "react-dom";
import DtcSearchPage from "./DtcSearchPage";

describe("DtcSearchPage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DtcSearchPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});