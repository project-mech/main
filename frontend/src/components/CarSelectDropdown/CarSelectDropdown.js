import React, { useState, Component } from "react";
import MechContext from "../../contexts/MechContext";
import "./CarSelectDropdown.css";

export default class CarSelectDropdown extends Component {
  static contextType = MechContext;

  render() {
    const { carList = [], selectCar } = this.context;

    return (
      <Dropdown title="Car list" carList={carList} selectCar={selectCar} />
    );
  }
}

function Dropdown({ title, carList = [], selectCar, select = true }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(car) {
    selectCar(car);
    selectCarDropdown(car);
  }

  function selectCarDropdown(car) {
    if (!selection.some((current) => current.id === car.id)) {
      if (select) {
        setSelection([car]);
      } else {
        let selectionAfterRemoval = selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current) => current.id !== car.id
        );
        setSelection([...selectionAfterRemoval]);
      }
    }
  }

  function isItemInSelection(car) {
    if (selection.some((current) => current.id === car.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="CarSelectDropdown__wrapper">
      <div
        tabIndex={0}
        className="CarSelectDropdown__header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="CarSelectDropdown__title-wrapper">
          <div className="CarSelectDropdown__title">
            <p className="CarSelectDropdown__title--bold">{title}</p>
          </div>
          <div className="CarSelectDropdown__action">
            <p>
              <u>{open ? "Close" : "Open"}</u>
            </p>
          </div>
        </div>
      </div>
      {open && (
        <ul className="CarSelectDropdown__list">
          {carList.map((car) => (
            <li className="CarSelectDropdown__list_item" key={car.id}>
              <button
                className="CarSelectDropdown__button"
                type="button"
                onClick={() => handleOnClick(car)}
              >
                <span className="CarSelectDropdown__model">
                  {car.make} {car.model}
                </span>
                <span className="CarSelectDropdown__selected">
                  {isItemInSelection(car) && "Selected"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
