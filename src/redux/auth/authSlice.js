import { createSlice } from "@reduxjs/toolkit";
import { login, createUser } from "./authOperations";

const defaultState = {
  loginedUsers: [],
  isLoading: false,
  error: false,
  token: "",
  isOpenHeaderModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        // state.loginedUsers = action.payload;
        state.token = action.payload.token;
        state.error = false;
        state.isLoading = false;
      })
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        // state.loginedUsers.push(action.payload);
        state.token = action.payload.token;
        state.error = false;
        state.isLoading = false;
      });
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpenHeaderModal = !state.isOpenHeaderModal;
    },
    // createUser: (state, { payload }) => {
    //   state.loginedUsers.push(payload);
    // },
  },
});

export const authReducer = authSlice.reducer;
export const { toggleModal } = authSlice.actions;
