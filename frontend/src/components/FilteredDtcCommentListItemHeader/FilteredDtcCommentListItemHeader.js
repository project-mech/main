import React, { Component } from "react";
import "./FilteredDtcCommentListItemHeader.css";

export default class FilteredDtcCommentListItemHeader extends Component {
  render() {
    const { headerDtc } = this.props;

    return (
      <div className="FilteredDtcCommentListItemHeader__wrapper">
        <div className="FilteredDtcCommentListItemHeader__dtc">
          {Boolean(headerDtc) && headerDtc.dtc}
        </div>
        <div className="FilteredDtcCommentListItemHeader__description">
          {Boolean(headerDtc) && headerDtc.description}
        </div>
      </div>
    );
  }
}
