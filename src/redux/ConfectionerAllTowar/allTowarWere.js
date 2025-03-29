import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://67e7af3e20e3af747c3f3eab.mockapi.io'

const getListProduct = createAsyncThunk(
	'product/fechAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('/product')
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err.massage)
		}
	}
)

export { getListProduct }