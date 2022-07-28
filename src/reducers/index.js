import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import place from "./place";
import hotels from "./hotels";
import flights from "./flights";

export default combineReducers({
  posts,
  auth,
  place,
  hotels,
  flights,
});
