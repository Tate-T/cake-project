import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

const login = createAsyncThunk(
  "auth/login",
  async (userCredentials, thunkApi) => {
    try {
      const response = await axios.post(
        "https://connections-api.goit.global/users/login",
        userCredentials
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// const registration = createAsyncThunk(
//   "auth/registration",
//   async (userCredentials, thunkApi) => {
//     try {
//       const resp = await axios.post("users/signup", userCredentials);
//       return resp.data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const createUser = createAsyncThunk(
  "auth/createUser",
  async (values, thunkApi) => {
    try {
      const response = await axios.post(
        "https://connections-api.goit.global/users/signup",
        values
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (token, thunkApi) => {
    try {
      const response = await axios.post(
        "https://connections-api.goit.global/users/logout",
        {},
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )
      return token;
    } catch (err) {
      console.log(err);
    }
  }
)

export { login, createUser, logout };
