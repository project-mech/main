import React from "react";
import ReactDOM from "react-dom";
import FilteredDtcCommentItem from "./FilteredDtcCommentItem";

describe("FilteredDtcCommentItem component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FilteredDtcCommentItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});