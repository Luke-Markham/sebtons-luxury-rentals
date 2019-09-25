import { combineReducers } from "redux";
import navReducer from "./general/nav.reducer";

export default combineReducers({
  nav: navReducer
});
