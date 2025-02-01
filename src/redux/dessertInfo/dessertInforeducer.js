import { createReducer } from "@reduxjs/toolkit";
import { setInfo } from "./dessertInfoActions";

// const dessertInfoReducer = (state, action) => {
//   console.log(action.type);
//   return {
//     textDessertInfo: action.payload,
//   };
// };

const dessertInfoReducer = createReducer({}, (builder) => {
  builder.addCase(setInfo, (state, action) => {
    return {
      textDessertInfo: action.payload,
    };
  });
});

export default dessertInfoReducer;
