import { createSlice } from "@reduxjs/toolkit";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: [],
  reducers: {
    setData: (state, { payload }) => payload,
  },
});
