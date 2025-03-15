import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCakes = createAsyncThunk(
  "cakes/fetchCakes",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "https://6778f8a1482f42b62e90102f.mockapi.io/api/v1/data"
      );
      return resp.data[0].cakes;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
