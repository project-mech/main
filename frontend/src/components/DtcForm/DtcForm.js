import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./DtcForm.css";

export default class DtcForm extends Component {
  static contextType = MechContext;

  state = {
    error: null,
  };

  static defaultProps = {
    onDtcAddSuccess: () => {},
  };

  componentDidMount() {
    const { setDtcCommentList, setError } = this.context;

    this.context.clearError();
    MechApiService.getDtcCommentList().then(setDtcCommentList).catch(setError);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ error: null });
    const { dtc } = e.target;

    const { dtcCommentList, selectedCar, setDtcSearch } = this.context;

    const dtcFilteredByDtc = dtcCommentList.filter(
      (dtcComment) => dtcComment.dtc === dtc.value.toUpperCase()
    );

    const filteredDtcComments = dtcFilteredByDtc.filter(
      (dtcComment) => dtcComment.vinmake_id.id === selectedCar.vinmake_id
    );

    setDtcSearch(filteredDtcComments);
    this.props.onDtcAddSuccess(filteredDtcComments);
  }

  render() {
    const { error } = this.state;

    return (
      <form
        className="DtcForm__form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div role="alert">
          {error && <div className="DtcForm__orange">{error}</div>}
        </div>
        <div className="DtcForm__dtc">DTC</div>
        <input type="text" id="DtcForm__dtc-input" name="dtc" required />
        <div className="DtcForm__button-div">
          <button className="DtcForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
