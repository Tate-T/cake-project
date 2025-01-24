import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import dessertInfoReducer from "./dessertInfo/dessertInforeducer";


const rootReducer = combineReducers({
    auth: authReducer,
    // deserts: desertsReducer,
    // dessertIfno: dessertInfoReducer,
});

export default rootReducer;
