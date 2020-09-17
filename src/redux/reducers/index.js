import { combineReducers } from "redux";
import members from "./members";
import movies from "./movies";

export default combineReducers({
    members,
    movies,
});
