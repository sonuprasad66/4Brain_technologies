import * as types from "./actionTypes";
import axios from "axios";

export const getDetails = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DETAILS_REQUEST });
  return axios
    .get(`https://fourbrain-technologies.onrender.com/getdetails/${payload}`)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.GET_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.GET_DETAILS_FAILURE, payload: err });
    });
};
