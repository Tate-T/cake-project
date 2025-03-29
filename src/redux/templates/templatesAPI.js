import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async (_, thunkAPI) => {
    try {
        const res = await axios.get('https://67c2c3e31851890165ad2ffd.mockapi.io/templates');
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue({ error: e.message });
    }
});

export const delTemplate = createAsyncThunk('templates/delTemplate', async (_, thunkAPI) => {
    try {
        const res = await axios.delete(`https://67c2c3e31851890165ad2ffd.mockapi.io/templates/${_}`);
        return _;
    } catch (e) {
        return thunkAPI.rejectWithValue({ error: e.message });
    }
});