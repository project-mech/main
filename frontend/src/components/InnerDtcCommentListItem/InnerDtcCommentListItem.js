import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import "./InnerDtcCommentListItem.css";

export default class InnerDtcCommentListItem extends Component {
  static contextType = MechContext;

  render() {
    const { comment } = this.props;

    return (
      <div className="InnerDtcCommentListItem__comment-wrapper">
        <div className="InnerDtcCommentListItem__comment">
          {comment.comment}
        </div>
        <footer className="InnerDtcCommentListItem__footer">
          <DtcCommentNickname comment={comment} />
          <DtcCommentCreated comment={comment} />
        </footer>
      </div>
    );
  }
}

function DtcCommentNickname({ comment }) {
  return (
    <span className="InnerDtcCommentListItem__nickname">
      {comment.user_id.nickname === null ? (
        <div>`[deleted]`</div>
      ) : (
        <div>{comment.user_id.nickname}</div>
      )}
    </span>
  );
}

function DtcCommentCreated({ comment }) {
  return (
    <span className="InnerDtcCommentListItem__created">
      <p> {comment.date_created}</p>
    </span>
  );
}
