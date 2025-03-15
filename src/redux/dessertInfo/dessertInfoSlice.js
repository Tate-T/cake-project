// import { createReducer } from "@reduxjs/toolkit";
import { setInfo } from "./dessertInfoActions";
import { fetchComments } from "./dessertInfoAPI";
import { createSlice } from '@reduxjs/toolkit';
// const dessertInfoReducer = (state, action) => {
//   console.log(action.type);
//   return {
//     textDessertInfo: action.payload,
//   };
// };
// fetchArticles.fulfilled


// const listCondBest = createSlice({
// 	name: 'listCond',
// 	initialState: appState,
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(getListCondist.rejected, handleRejected)
// 			.addCase(getListCondist.pending, handlePending)
// 			.addCase(getListCondist.fulfilled, (state, actions) => {
// 				state.listCond = actions.payload
// 				state.isLoading = false
// 			})
// 	},
// })

// export const listCondReduser = listCondBest.reducer


const dessertInfoSlice = createSlice({
  name: "dessertInfo",
  initialState: {
    textDessertInfo: "Non function",
    comments: [],
    count: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setInfo, (state, action) => {
        return {

          textDessertInfo: action.payload,
          comments: state.comments,
        }
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        console.log(action.payload)
        return {
          textDessertInfo: state.textDessertInfo,
          comments: action.payload,
        }
      })
  }
});
//  (builder) => {
//   builder.addCase(setInfo, (state, action) => {
//     return {
//       textDessertInfo: action.payload,
//     };
//   })
//     .addCase(fetchComments.fulfilled, (state, action) => {
//       return {
//         textDessertInfo: state.textDessertInfo,
//       };
//     });
// });
export const dessertInfoReducer = dessertInfoSlice.reducer;



