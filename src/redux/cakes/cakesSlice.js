import { createSlice } from "@reduxjs/toolkit";
import { fetchCakes } from "./operations";

const cakesSlice = createSlice({
  name: "cakes",
  initialState: {
    cakes: [],
    isLoading: false,
    error: null,
    value: ""
  },
  reducers: {
    setValue(state, { payload }) {
      state.value = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCakes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCakes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cakes = action.payload;
      })
      .addCase(fetchCakes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.paylaod;
      });
  },
});

export const cakesReducer = cakesSlice.reducer;
export const { setValue } = cakesSlice.actions;