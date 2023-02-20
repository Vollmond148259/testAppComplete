import { combineReducers } from "@reduxjs/toolkit";
import articles from "./slices/articlesSlice";

export default combineReducers({
  articles,
});
