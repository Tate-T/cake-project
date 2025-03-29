import { createSelector } from '@reduxjs/toolkit'
export const listCondSelector = (state) => state.listCond.listCond
export const selectBestConditers = createSelector(
	(state) => state.listCond.listCond
)
