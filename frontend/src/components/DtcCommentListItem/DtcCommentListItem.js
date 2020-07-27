import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { RiCarLine } from "react-icons/ri"
import "./DtcCommentListItem.css";

export default class DtcCommentListItem extends Component {
  static contextType = MechContext;

  render() {
    const { dtc } = this.props;

    return (
      <div>
        <Link
          to={`/dtc/${dtc.id}/comments`}
          className="DtcCommentListItem__link"
        >
          <header className="DtcCommentListItem__header">
            <h2 className="DtcCommentListItem__heading">{dtc.dtc}</h2>
          </header>
        </Link>
        <div className="DtcCommentListItem__body">{dtc.description}</div>
        <footer className="DtcCommentListItem__footer">
          <RiCarLine />&nbsp;
          <DtcCommentMake dtc={dtc} />&nbsp;
          <FaRegComment />&nbsp;
          <Link
            to={`/dtc/${dtc.id}/comments`}
            className="DtcCommentListItem__link"
          >
            <DtcCommentCount dtc={dtc} />
          </Link>
        </footer>
      </div>
    );
  }
}

function DtcCommentMake({ dtc }) {
  return (
    <span className="DtcCommentListItem__make-vin">
      {dtc.vinmake_id.make_vin ? (
        <p> {dtc.vinmake_id.make_vin}</p>
      ) : (
        <p>All Cars</p>
      )}
    </span>
  );
}

function DtcCommentCount({ dtc }) {
  return (
    <span className="DtcCommentListItem__comment-count">
      {dtc.number_of_comments > 1 ? (
        <p>{dtc.number_of_comments} comments </p>
      ) : (
        <p>{dtc.number_of_comments} comment </p>
      )}
    </span>
  );
}
