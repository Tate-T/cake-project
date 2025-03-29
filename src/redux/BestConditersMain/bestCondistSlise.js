// import { createSlice } from '@reduxjs/toolkit'
// import { nanoid } from '@reduxjs/toolkit'
// // import { getListCondist } from './topCondistWere'

// const appState = {
// 	listCond: [],
// 	error: null,
// 	isLoading: false,
// }
// function handlePending(state) {
// 	state.isLoading = true
// }
// function handleRejected(state, actions) {
// 	state.error = actions.payload
// 	state.isLoading = false
// }

// const listCondBest = createSlice({
// 	name: 'listCond',
// 	initialState: appState,
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(getListCondist.rejected, handleRejected)
// 			.addCase(getListCondist.pending, handlePending)
// 			.addCase(getListCondist.fulfilled, (state, actions) => {
// 				state.listCond = actions.payload
// 				state.isLoading = false
// 			})
// 	},
// })

// export const listCondReduser = listCondBest.reducer
