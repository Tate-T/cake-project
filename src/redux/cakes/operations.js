import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCakes = createAsyncThunk(
  "cakes/fetchCakes",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "https://67c2d1a51851890165ad564f.mockapi.io/cakes"
      );
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
