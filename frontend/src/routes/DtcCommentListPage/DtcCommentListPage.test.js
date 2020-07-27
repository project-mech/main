import React from "react";
import ReactDOM from "react-dom";
import DtcCommentListPage from "./DtcCommentListPage";

describe("DtcCommentListPage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DtcCommentListPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});