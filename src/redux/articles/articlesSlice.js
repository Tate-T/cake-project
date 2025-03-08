import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articlesAPI";

const initialState = {
  articlesList: [],
  value: "",
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.articlesList = payload;
    });
  },
});

export const articlesReducer = articlesSlice.reducer;
export const { setValue } = articlesSlice.actions;
