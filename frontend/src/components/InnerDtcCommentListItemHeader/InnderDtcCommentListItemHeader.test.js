import React from "react";
import ReactDOM from "react-dom";
import InnerDtcCommentListItemHeader from "./InnerDtcCommentListItemHeader";

describe("InnerDtcCommentListItemHeader component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InnerDtcCommentListItemHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});