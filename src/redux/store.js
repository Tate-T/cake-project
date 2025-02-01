import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import dessertInfoReducer from "./dessertInfo/dessertInforeducer";

// const initialState = {
//   loginedUsers: [
//     {
//       login: "lalala34",
//       password: "Lala",
//     },
//     {
//       login: "hahaha12",
//       password: "hahaha",
//     },
//   ],
//   isOpenHeaderModal: false,
// };

const store = configureStore({
  reducer: {
    auth: authReducer,
    desserts: dessertInfoReducer,
  },
});

export default store;
