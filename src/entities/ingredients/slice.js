import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIngredientsList } from "./api";

const fetchIngredients = createAsyncThunk("ingredients/fetchList", async () => {
  return await getIngredientsList();
});

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    error: false,
    loading: false,
    list: [],
  },
  reducers: {},
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.list = action.payload;
    },
  },
});

export const ingredientActions = {
  ...ingredientsSlice.actions,
  fetchIngredients,
};
