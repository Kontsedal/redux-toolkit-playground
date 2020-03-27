import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ingredientsSlice } from "./entities/ingredients/slice";
import { cocktailsSlice } from "./entities/cocktails/slice";

export const store = configureStore({
  reducer: combineReducers({
    ingredients: ingredientsSlice.reducer,
    cocktails: cocktailsSlice.reducer,
  }),
});
