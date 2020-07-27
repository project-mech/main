import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./CarForm.css";

export default class CarForm extends Component {
  static contextType = MechContext;

  state = {
    vinMake: [],
    error: null,
  };

  filterVin(makeValue, modelValue) {
    const { vinMake, setCarVinMakeId } = this.context;

    const vinMakeOfCar = vinMake.filter((make) => make.make_vin === makeValue);

    setCarVinMakeId(vinMakeOfCar);
    this.postCar(makeValue, modelValue);
  }

  postCar(makeValue, modelValue) {
    const { carVinMakeId, addCar, setError } = this.context;

    MechApiService.postCar({
      make: makeValue,
      model: modelValue,
      vinmake_id: carVinMakeId[0].id,
    })
      .then(addCar)
      .then(document.getElementById("CarForm__form").reset())
      .catch(setError);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const { setVinMake, setError } = this.context;

    this.setState({ error: null });
    const { make, model } = e.target;

    MechApiService.getVinMake()
      .then(setVinMake)
      .then(() => {
        this.filterVin(make.value, model.value);
      })
      .catch(setError);
  }

  render() {
    const { error } = this.state;

    return (
      <form
        id="CarForm__form"
        className="CarForm__form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div role="alert">
          {error && <div className="CarForm__orange">{error}</div>}
        </div>
        <div className="CarForm__dtc" required>
          Manufacturer
        </div>
        <input type="text" id="CarForm__dtc-input" name="make" />
        <div className="CarForm__dtc">Model</div>
        <input type="text" id="CarForm__dtc-input" name="model" required />
        <div className="CarForm__button-div">
          <button className="CarForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
