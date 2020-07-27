import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import { Section } from "../../components/Utility/Utility";
import InnerDtcCommentListItem from "../../components/InnerDtcCommentListItem/InnerDtcCommentListItem";
import InnerDtcCommentListItemHeader from "../../components/InnerDtcCommentListItemHeader/InnerDtcCommentListItemHeader";
import "./InnerDtcCommentListPage.css";

export default class InnerDtcCommentListPage extends Component {
  static contextType = MechContext;

  componentDidMount() {
    const { dtc_id } = this.props.match.params;

    const { setSpecificDtcCommentList, setError, clearError } = this.context;

    clearError();

    MechApiService.getSpecificDtcCommentList(dtc_id)
      .then((res) => setSpecificDtcCommentList(res))
      .catch(setError);
  }

  renderSpecificDtcCommentListHeader() {
    const { specificDtc = [] } = this.context;
    return (
      <InnerDtcCommentListItemHeader
        key={specificDtc.id}
        specificDtc={specificDtc}
      />
    );
  }

  renderSpecificDtcCommentList() {
    const { specificDtcCommentList = [] } = this.context;
    return specificDtcCommentList.map((comment) => (
      <InnerDtcCommentListItem key={comment.id} comment={comment} />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <main className="InnerDtcCommentListPage__main">
        <div className="InnerDtcCommentListPage__screen-wrapper">
          <Section list className="InnerDtcCommentListPage__section">
            <div className="InnerDtcCommentListPage__header-wrapper">
              {error ? (
                <p className="InnerDtcCommentListPage__orange">
                  Error. Please try again.
                </p>
              ) : (
                <div className="InnerDtcCommentListPage__header">
                  {this.renderSpecificDtcCommentListHeader()}
                </div>
              )}
            </div>
            <hr />
            <div className="InnerDtcCommentListPage__items-wrapper">
              {error ? (
                <p className="InnerDtcCommentListPage__orange">
                  Error. Please try again.
                </p>
              ) : (
                <div className="InnerDtcCommentListItem__items">
                  {this.renderSpecificDtcCommentList()}
                </div>
              )}
            </div>
          </Section>
        </div>
      </main>
    );
  }
}
