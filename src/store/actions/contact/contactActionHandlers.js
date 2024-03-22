import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactRequestsList = createAsyncThunk(
  "contact/getContactRequestsList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/contactRequests?_expand=user";

    const res = await axios.get(url);

    return res.data;
  }
);

export const getContactRequest = createAsyncThunk(
  "contact/getContactRequest",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/contactRequests/${id}?_expand=user`;

    const res = await axios.get(url);

    return res.data;
  }
);

export const createContactRequest = createAsyncThunk(
  "contact/createContactRequest",
  async (requestBody) => {
    const url = "https://book-share-json-server.onrender.com/contactRequests";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateContactRequest = createAsyncThunk(
  "contact/updateContactRequest",
  async (data) => {
    const url = `https://book-share-json-server.onrender.com/contactRequests/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteContactRequest = createAsyncThunk(
  "contact/deleteContactRequest",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/contactRequests/${id}`;

    const res = await axios.delete(url);

    return res.data;
  }
);
