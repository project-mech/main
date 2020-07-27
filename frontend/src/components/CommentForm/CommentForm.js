import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./CommentForm.css";

export default class CommentForm extends Component {
  static contextType = MechContext;

  state = {
    error: null,
  };

  handleCommentSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const { comment } = e.target;
    const { headerDtc = [], addComment, setError } = this.context;

    this.setState({ error: null });

    MechApiService.postComment({
      dtc_id: headerDtc.id,
      vinmake_id: headerDtc.vinmake_id,
      comment: comment.value,
    })
      .then(addComment)
      .then(document.getElementById("CommentForm__form").reset())
      .catch(setError);
  }

  render() {
    const { error } = this.state;

    return (
      <form
        id="CommentForm__form"
        className="CommentForm__form"
        onSubmit={(e) => {
          this.handleCommentSubmit(e);
        }}
      >
        <div role="alert">
          {error && <div className="CommentForm__orange">{error}</div>}
        </div>
        <div className="CommentForm__dtc">Comment</div>
        <textarea
          type="text"
          id="CommentForm__text-input"
          name="comment"
          placeholder="Start typing... You can expand this text area."
          cols="30"
          rows="5"
        />
        <div className="CommentForm__button-div">
          <button className="CommentForm__button" type="submit">
            Comment
          </button>
        </div>
      </form>
    );
  }
}
