import React, { Component } from "react";
import CarForm from "../../components/CarForm/CarForm";
import CarListItem from "../../components/CarListItem/CarListItem";
import CarSelectDropdown from "../../components/CarSelectDropdown/CarSelectDropdown";
import DtcForm from "../../components/DtcForm/DtcForm";
import { Section } from "../../components/Utility/Utility";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./GaragePage.css";

export default class GaragePage extends Component {
  static contextType = MechContext;

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    const { setCarList, setError } = this.context;

    this.context.clearError();
    MechApiService.getCarByUserId().then(setCarList).catch(setError);
  }

  renderCarList() {
    const { carList = [] } = this.context;
    return carList.map((car) => <CarListItem key={car.id} car={car} />);
  }

  handleDtcAddSuccess = (filteredDtcComments) => {
    const { history } = this.props;
    const dtc = filteredDtcComments[0];

    history.push(`/dtc/${dtc.id}/search`);
  };

  render() {
    return (
      <main className="GaragePage__main">
        <div className="GaragePage__screen-wrapper">
          <div className="GaragePage__section">
            Garage Page
          </div>
          <div className="GaragePage__add-car">
            <h2>Add Car</h2>
            <CarForm />
          </div>
          <hr />
          <div className="GaragePage__list">
            <h2>Your Car(s)</h2>
            <Section list className="GaragePage__cars">
              {this.renderCarList()}
            </Section>
          </div>
          <hr />
          <div className="GaragePage__selection">
            <h2>Select Car</h2>
            <div className="GaragePage__car-dropdown">
              <CarSelectDropdown />
            </div>
          </div>
          <hr />
          <div className="GaragePage__add-dtc">
            <h2>Add Trouble Code</h2>
            <DtcForm onDtcAddSuccess={this.handleDtcAddSuccess} />
          </div>
        </div>
      </main>
    );
  }
}
