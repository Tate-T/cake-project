import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { getListProduct } from './allTowarWere'


const appState = {
	listAllTowar: [],
	error: null,
	isLoading: false,
}
function handlePending(state) {
	state.isLoading = true
}
function handleRejected(state, actions) {
	state.error = actions.payload
	state.isLoading = false
}

const listAllTowar = createSlice({
	name: 'listCond',
	initialState: appState,
	extraReducers: (builder) => {
		builder
			.addCase(getListProduct.rejected, handleRejected)
			.addCase(getListProduct.pending, handlePending)
			.addCase(getListProduct.fulfilled, (state, actions) => {
				state.listAllTowar = actions.payload
				state.isLoading = false
			})
	},
})

export const listAllTowardReduser = listAllTowar.reducer
