import React from "react";
import ReactDOM from "react-dom";
import DtcCommentListItem from "./DtcCommentListItem";

describe("DtcCommentListItem component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DtcCommentListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});