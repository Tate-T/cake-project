import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articlesAPI";

const initialState = {
    articlesList: []
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
            state.articlesList = payload;
        })
    }
});

export const articlesReducer = articlesSlice.reducer;