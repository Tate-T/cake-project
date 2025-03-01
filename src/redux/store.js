import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { articlesReducer } from "./articlesSlice";
import { listCondReduser } from "./BestConditersMain/bestCondistSlise";
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

export const store = configureStore({
  reducer: {
    auth: persisterAuthReduser,
    desserts: dessertInfoReducer,
    articles: articlesReducer
  },
});

export const persisterStore = persistStore(store);


