import React from "react";
import ReactDOM from "react-dom";
import FilteredDtcCommentItemHeader from "./FilteredDtcCommentItemHeader";

describe("FilteredDtcCommentItemHeader component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FilteredDtcCommentItemHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});