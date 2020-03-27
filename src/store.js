import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ingredientsSlice } from "./entities/ingredients/slice";

export const store = configureStore({
  reducer: combineReducers({
    ingredientsSlice: ingredientsSlice.reducer,
  }),
});
