import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/authSlice'
import { articlesReducer } from './articles/articlesSlice'
// import { listCondReduser } from "./BestConditersMain/bestCondistSlise";

import { dessertInfoReducer } from './dessertInfo/dessertInfoSlice'
import { cakesReducer } from './cakes/cakesSlice'
import { persistStore, persistReducer } from 'redux-persist'

// import { listCondReduser } from "./BestConditersMain/bestCondistSlise";
import { listCondReduser } from './BestConditersMain/bestCondistSlise'
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

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persisterAuthReduser = persistReducer(persistConfig, authReducer);
// const persistDessertInfoReducer = persistReducer(persistConfig, dessertInfoReducer);

export const store = configureStore({
	reducer: {
		auth: authReducer,
		desserts: dessertInfoReducer,
		articles: articlesReducer,
		cakes: cakesReducer,
		listCond: listCondReduser,
	},
})

// export const persisterStore = persistStore(store);
