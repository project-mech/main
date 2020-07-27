import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import { Section } from "../../components/Utility/Utility";
import DtcCommentListItem from "../../components/DtcCommentListItem/DtcCommentListItem";
import "./DtcCommentListPage.css";

export default class DtcCommentListPage extends Component {
  static contextType = MechContext;

  componentDidMount() {
    const { setDtcCommentList, setError } = this.context;

    this.context.clearError();
    MechApiService.getDtcCommentList().then(setDtcCommentList).catch(setError);
  }

  renderDtcCommentList() {
    const { dtcCommentList = [] } = this.context;
    const newList = dtcCommentList.filter((dtc) => dtc.number_of_comments > 0);
    return newList.map((dtc) => <DtcCommentListItem key={dtc.id} dtc={dtc} />);
  }

  render() {
    const { error } = this.context;

    return (
      <main className="DtcCommentListPage__main">
        <div className="DtcCommentListPage__screen-wrapper">
          <div className="DtcCommentListPage__section">
          All Comments
          </div>
          <Section list className="DtcCommentListPage">
            {error ? (
              <p className="DtcCommentListPage__orange">
                Error. Please try again.
              </p>
            ) : (
              this.renderDtcCommentList()
            )}
          </Section>
        </div>
      </main>
    );
  }
}
