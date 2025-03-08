import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6778f8a1482f42b62e90102f.mockapi.io/api/v1';

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/data');
        return res.data[0].articles;
    } catch (e) {
        return thunkAPI.rejectWithValue({ error: e.message });
    }
});