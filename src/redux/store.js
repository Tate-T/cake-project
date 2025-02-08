import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import dessertInfoReducer from "./dessertInfo/dessertInforeducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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

const persistConfig = {
  key: 'root',
  storage,
}

const persisterAuthReduser = persistReducer(persistConfig, authReducer);
const persistDessertInfoReducer = persistReducer(persistConfig, dessertInfoReducer);


export const store = configureStore({
  reducer: {
    auth: persisterAuthReduser,
    desserts: persistDessertInfoReducer,
  },
});

export const persisterStore = persistStore(store);


