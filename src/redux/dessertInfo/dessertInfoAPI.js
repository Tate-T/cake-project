import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://67d48982d2c7857431edf500.mockapi.io/dessertinfo';

export const fetchComments = createAsyncThunk(
    "GetComments",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('https://67d48982d2c7857431edf500.mockapi.io/dessertinfo/comments');
            // console.log(res.data);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue({ error: e.message });
        }
    });