import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { articlesReducer } from "./articlesSlice";
import dessertInfoReducer from "./dessertInfo/dessertInforeducer";
import { cakesReducer } from "./cakes/cakesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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
  key: "root",
  storage,
};

const persisterAuthReduser = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persisterAuthReduser,
    desserts: dessertInfoReducer,
    articles: articlesReducer,
    cakes: cakesReducer,
  },
});

export const persisterStore = persistStore(store);
