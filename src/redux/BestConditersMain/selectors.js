import { createSelector } from "@reduxjs/toolkit";

export const selectBestConditers = createSelector(
  (state) => state.listCond.listCond
);
