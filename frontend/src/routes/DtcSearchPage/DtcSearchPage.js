import React, { Component } from "react";
import FilteredDtcCommentListItem from "../../components/FilteredDtcCommentListItem/FilteredDtcCommentListItem";
import FilteredDtcCommentListItemHeader from "../../components/FilteredDtcCommentListItemHeader/FilteredDtcCommentListItemHeader";
import CommentForm from "../../components/CommentForm/CommentForm";
import { Section } from "../../components/Utility/Utility";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./DtcSearchPage.css";

export default class DtcSearchPage extends Component {
  static contextType = MechContext;

  componentDidMount() {
    const {
      setFilteredCommentList,
      setHeaderDtc,
      setError,
      clearError,
    } = this.context;
    const { dtc_id } = this.props.match.params;

    clearError();

    MechApiService.getDtcById(dtc_id)
      .then((res) => setHeaderDtc(res))
      .catch(setError);

    MechApiService.getSpecificDtcCommentList(dtc_id)
      .then((res) => setFilteredCommentList(res))
      .catch(setError);
  }

  renderFilteredDtcCommentListHeader() {
    const { headerDtc = [] } = this.context;
    return (
      <FilteredDtcCommentListItemHeader
        key={headerDtc.id}
        headerDtc={headerDtc}
      />
    );
  }

  renderFilteredDtcCommentList() {
    const { filteredDtcCommentList = [] } = this.context;
    return filteredDtcCommentList.map((comment) => (
      <FilteredDtcCommentListItem key={comment.id} comment={comment} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <main className="DtcSearchPage__main">
        <div className="DtcSearchPage__screen-wrapper">
          <Section list className="DtcSearchPage">
            <div className="DtcSearchPage__header-wrapper">
              {error ? (
                <p className="DtcSearchPage__orange">
                  Error. Please try again.
                </p>
              ) : (
                <div className="DtcSearchPage__header">
                  {this.renderFilteredDtcCommentListHeader()}
                </div>
              )}
            </div>
            <hr />
            <CommentForm />
            <div className="DtcSearchPage__items-wrapper">
              {error ? (
                <p className="DtcSearchPage__orange">
                  Error. Please try again.
                </p>
              ) : (
                <div className="DtcSearchPage__items">
                  {this.renderFilteredDtcCommentList()}
                </div>
              )}
            </div>
          </Section>
        </div>
      </main>
    );
  }
}
