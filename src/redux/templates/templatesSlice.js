import { createSlice } from "@reduxjs/toolkit";
import { fetchTemplates, delTemplate } from "./templatesAPI";

const initialState = {
    templates: []
};

const templatesSlice = createSlice({
    name: "templates",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTemplates.fulfilled, (state, { payload }) => {
            state.templates = payload;
        });
        builder.addCase(delTemplate.fulfilled, (state, { payload }) => {
            state.templates = state.templates.filter(temp => temp.id !== payload);
        });
    }
});

export const templatesReducer = templatesSlice.reducer;