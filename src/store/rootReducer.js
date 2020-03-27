import { combineReducers } from "redux";
import { ingredientsSlice } from "./slices/ingredients";

export const rootReducer = combineReducers({
  ingredientsSlice: ingredientsSlice.reducer,
});
