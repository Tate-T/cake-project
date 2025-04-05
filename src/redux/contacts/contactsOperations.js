import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const delContact = createAsyncThunk(
  "contacts/delContact",
  async (obj, thunkApi) => {
    try {
      const response = await axios.delete(
        `https://connections-api.goit.global/contacts/${obj.id}`,
        {},
        {
          headers: {
            "Authorization": `Bearer ${obj.token}`
          }
        }
      );
      return obj.id;
    } catch (err) {
      console.log(err);
    }
  }
);

const createContact = createAsyncThunk(
  "contacts/createContact",
  async (obj, thunkApi) => {
    try {
      await axios.post(
        "https://connections-api.goit.global/contacts",
        obj.newContact,
        {
          headers: {
            "Authorization": `Bearer ${obj.token}`
          }
        }
      );
      const response = await axios.get(
          "https://connections-api.goit.global/contacts",
          {},
          {
            headers: {
              "Authorization": `Bearer ${obj.token}`
            }
          }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (obj, thunkApi) => {
    try {
      const response = await axios.get(
          "https://connections-api.goit.global/contacts",
          {},
          {
            headers: {
              "Authorization": `Bearer ${obj.token}`
            }
          }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export { delContact, getContacts, createContact };