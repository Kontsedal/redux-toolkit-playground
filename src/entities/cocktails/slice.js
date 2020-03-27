import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCocktailsList } from "./api";

const fetchCocktails = createAsyncThunk(
  "cocktails/fetchList",
  getCocktailsList
);

export const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState: {
    error: false,
    loading: false,
    list: [],
    mainIngredient: undefined,
  },
  reducers: {
    setMainIngredient: (state, action) => {
      state.mainIngredient = action.payload;
    },
  },
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.list = action.payload;
    },
  },
});

export const cocktailsActions = {
  ...cocktailsSlice.actions,
  fetchCocktails,
};
