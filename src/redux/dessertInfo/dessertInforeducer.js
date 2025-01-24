import dessertInfoActions from "./dessertInfoActions";

const dessertInfoReducer = (state, action) => {
    console.log(action.type);
    return {
        textDessertInfo: action.payload,
    };
};


export default dessertInfoReducer;