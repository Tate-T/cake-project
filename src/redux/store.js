import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducer";

const state = {
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
  isOpenHeaderModal: false,
};


const store = createStore(rootReducer, state, composeWithDevTools());

export default store;
