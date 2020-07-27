import React from "react";
import ReactDOM from "react-dom";
import InnerDtcCommentListItem from "./InnerDtcCommentListItem";

describe("InnerDtcCommentListItem component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InnerDtcCommentListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});