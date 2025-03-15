import { createAsyncThunk, nanoid, ReducerType } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://6778f8a1482f42b62e90102f.mockapi.io/api/v1'

const getListCondist = createAsyncThunk(
	'loginedUsers/fechAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('/loginedUsers')
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err.massage)
		}
	}
)

export { getListCondist }
