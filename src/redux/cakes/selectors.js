import { createSelector } from "@reduxjs/toolkit";
export const selectValue = (state) => state.cakes.value;
export const selectCakes = (state) => state.cakes.cakes;

export const selectFoundCakes = createSelector(
  [selectCakes, selectValue],
  (cakes, value) => {
    return cakes.filter((cake) => cake.title.toLowerCase().includes(value.toLowerCase()));
  }
);
