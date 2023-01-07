import * as types from "./actionTypes";

const initialState = {
  loginUser: [],
  currentUser: {},
  isLoading: false,
  isError: false,
  isAuth: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        loginUser: payload,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        loginUser: [],
      };

    case types.USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        currentUser: payload,
      };

    case types.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
