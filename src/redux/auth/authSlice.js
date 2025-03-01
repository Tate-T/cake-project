import { createSlice } from "@reduxjs/toolkit";
import { getLoginnedUsers, createUser } from "./authOperations";

const defaultState = {
  loginedUsers: [],
  isOpenHeaderModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder
      .addCase(getLoginnedUsers.fulfilled, (state, action) => {
        state.loginedUsers = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loginedUsers.push(action.payload);
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
