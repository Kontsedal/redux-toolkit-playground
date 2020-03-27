import { createSelector } from "@reduxjs/toolkit";

export const getIngredientsData = (state) => state.ingredients;
export const getIngredientsLoading = createSelector(
  getIngredientsData,
  (data) => data.loading
);
export const getIngredientsError = createSelector(
  getIngredientsData,
  (data) => data.error
);
export const getIngredientsList = createSelector(
  getIngredientsData,
  (data) => data.list
);
