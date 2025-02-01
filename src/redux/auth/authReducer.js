import { createReducer } from "@reduxjs/toolkit";
import { authAction, OPEN_HEADER_MODAL } from "./authActions";
const defaultState = {
  loginedUsers: [],
  isOpenHeaderModal: false,
};

// const authReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case OPEN_HEADER_MODAL:
//       return { ...state, isOpenHeaderModal: !state.isOpenHeaderModal };
//       break;

//     default:
//       return state;
//   }
//   //   return state;
// };

const initialState = {
  loginedUsers: [
    {
      login: "lalala34",
      password: "Lala",
    },
    {
      login: "hahaha12",
      password: "hahaha",
    },
  ],
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authAction, (state, action) => {
    return { ...state, isOpenHeaderModal: !state.isOpenHeaderModal };
  });
});

export default authReducer;
