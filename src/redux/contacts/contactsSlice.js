import { createSlice } from "@reduxjs/toolkit";
import { delContact, getContacts, createContact } from "./contactsOperations";

const defaultState = {
  list: []
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(delContact.fulfilled, (state, action) => {
        state.list = state.list.filter(contact => contact.id !== action.payload)
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
