import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./CarListItem.css";

export default class CarListItem extends Component {
  static contextType = MechContext;

  handleDeleteCar(carId) {
    MechApiService.deleteCar(carId)
      .then(this.context.deleteCar(carId))
      .catch(this.context.setError);
  }

  render() {
    const { car } = this.props;

    return (
      <div className="CarListItem__car">
        <div className="CarListItem__make-model">
          <div className="CarListItem__make">{car.make}&nbsp;</div>
          <div className="CarListItem__model">{car.model}&nbsp;&nbsp;</div>
        </div>
        <div className="CarListItem__date-created">
          Added {car.date_created}
        </div>
        <button
          className="CarListItem__button"
          onClick={() => this.handleDeleteCar(car.id)}
        >
          Delete
        </button>
        <div className="CarListItem__space" />
      </div>
    );
  }
}
