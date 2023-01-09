import * as types from "./actionTypes";
import axios from "axios";

export const userSignup = (payload) => (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post(`https://fourbrain-technologies.onrender.com/register`, payload)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_SIGNUP_FAILURE, payload: err });
    });
};

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(`https://fourbrain-technologies.onrender.com/login`, payload)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    });
};

export const matchOtp = (payload) => (dispatch) => {
  dispatch({ type: types.GENERATE_OTP_REQUEST });
  return axios
    .post(`https://fourbrain-technologies.onrender.com/verifyotp`, payload)
    .then((res) => {
      // console.log(res.data);
      return dispatch({ type: types.GENERATE_OTP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.GENERATE_OTP_FAILURE, payload: err });
    });
};
