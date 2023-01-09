import * as types from "./actionTypes";

const initialState = {
  userDetails: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DETAILS_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userDetails: payload,
      };

    case types.GET_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        userDetails: [],
      };

    default:
      return state;
  }
};
