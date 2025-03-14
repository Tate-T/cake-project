import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://67d48982d2c7857431edf500.mockapi.io/dessertinfo'

const getListCondist = createAsyncThunk(
	'loginedUsers/fechAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get("/loginedUsers")
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err.massage)
		}
	}
)

export { getListCondist }
