import config from "../config";
import TokenService from "../services/token-service";

const MechApiService = {
  getDtcCommentList() {
    return fetch(`${config.API_ENDPOINT}/dtc`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getDtcById(dtcId) {
    return fetch(`${config.API_ENDPOINT}/dtc/${dtcId}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getSpecificDtcCommentList(dtcId) {
    return fetch(`${config.API_ENDPOINT}/dtc/${dtcId}/comments`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getCarByUserId() {
    return fetch(`${config.API_ENDPOINT}/cars`, {
      headers: {
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getVinMake() {
    return fetch(`${config.API_ENDPOINT}/vinmake`, {
      headers: {
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postCar(car) {
    return fetch(`${config.API_ENDPOINT}/cars`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
      body: JSON.stringify(car),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postComment(post) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
      body: JSON.stringify(post),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteCar(carId) {
    return fetch(`${config.API_ENDPOINT}/cars/${carId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
    });
  },
};

export default MechApiService;
