import { createSlice } from "@reduxjs/toolkit";
import {setOpen, } from "./editingTemplateActions"

const state = {
    open: false,
};

const templatesOpenSlice = createSlice({
    name: "templates",
    initialState: state,
    extraReducers: (builder) => {
        builder.addCase(setOpen, (state, action) => {
            return {
                open: action.payload,
            }
        });

    }
});

export const templatesEditingReducer = templatesOpenSlice.reducer;