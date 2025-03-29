import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://6778f8a1482f42b62e90102f.mockapi.io/api/v1";

const getLoginnedUsers = createAsyncThunk(
  "auth/getUsers",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        "https://6778f8a1482f42b62e90102f.mockapi.io/api/v1/loginedUsers"
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const createUser = createAsyncThunk(
  "auth/createUser",
  async (values, thunkApi) => {
    try {
      const response = await axios.post("/loginedUsers", values);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export { getLoginnedUsers, createUser };
