import { combineReducers } from "redux";
import roleReducer from "./roleReducer";

export default combineReducers({
  role: roleReducer,
});
