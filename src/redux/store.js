import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/authSlice'
import { articlesReducer } from './articles/articlesSlice'
// import { listCondReduser } from "./BestConditersMain/bestCondistSlise";
import { dessertInfoReducer } from './dessertInfo/dessertInfoSlice';
import { cakesReducer } from "./cakes/cakesSlice";
import { persistStore, persistReducer } from "redux-persist";
// import { listCondReduser } from "./BestConditersMain/bestCondistSlise";
import { listCondReduser } from "./BestConditersMain/bestCondistSlise";
import { feedbackReducer } from "./feedback/feedbackSlice";
import storage from "redux-persist/lib/storage";
import { templatesReducer } from './templates/templatesSlice'
import { listAllTowardReduser } from './ConfectionerAllTowar/alltowarSlise';
import { templatesEditingReducer } from './editingTeplate/editingTemplateSlice';
import { contactsReducer } from './contacts/contactsSlice';
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
  key: 'token',
  storage,
  whitelist: ['token']
}

const persisterAuthReduser = persistReducer(persistConfig, authReducer);
// const persistDessertInfoReducer = persistReducer(persistConfig, dessertInfoReducer);

export const store = configureStore({
  reducer: {
    auth: persisterAuthReduser,
    dessertsInfo: dessertInfoReducer,
    articles: articlesReducer,
    cakes: cakesReducer,
    listCond: listCondReduser,
    listAllTowar:listAllTowardReduser,
	  feedback: feedbackReducer,
    templates: templatesReducer,
    templateEditing: templatesEditingReducer,
    contacts: contactsReducer,
  },
});

export const persisterStore = persistStore(store);
