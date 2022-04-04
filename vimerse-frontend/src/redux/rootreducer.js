import { combineReducers } from "redux";
import reducer from "./reducer"

// Combine all reducers.

const appReducer = combineReducers({
reducer
});

const rootReducer = (state, action) => {
//   if (action.type === actionTypes.LOGOUT_SUCCESS) {
//     state = undefined;
//   }
  return appReducer(state, action);
};

export default rootReducer;