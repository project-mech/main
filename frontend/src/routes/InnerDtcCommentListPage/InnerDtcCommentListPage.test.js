import React from "react";
import ReactDOM from "react-dom";
import InnerDtcCommentListPage from "./InnerDtcCommentListPage";

describe("InnerDtcCommentListPage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InnerDtcCommentListPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});