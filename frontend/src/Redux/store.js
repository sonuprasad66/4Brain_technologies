import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from ".././Redux/Auth/reducer";
import { reducer as AppReducer } from ".././Redux/App/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  AppReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
