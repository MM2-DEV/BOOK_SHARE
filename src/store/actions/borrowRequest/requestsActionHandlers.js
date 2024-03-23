import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRequestList = createAsyncThunk(
  "requests/getRequestList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/borrowRequests?_expand=book&_expand=user";

    const res = await axios.get(url);

    return res.data;
  }
);

export const getRequest = createAsyncThunk(
  "requests/getRequest",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/borrowRequests/${id}?_expand=book&_expand=user`;

    const res = await axios.get(url);

    return res.data;
  }
);

export const createRequest = createAsyncThunk(
  "ratings/createRequest",
  async (requestBody) => {
    const url = "https://book-share-json-server.onrender.com/borrowRequests";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateRequest = createAsyncThunk(
  "requests/updateRequest",
  async (data) => {
    const url = `https://book-share-json-server.onrender.com/borrowRequests/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteRequest = createAsyncThunk(
  "requests/deleteRequest",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/borrowRequests/${id}`;

    const res = await axios.delete(url);

    return res.data;
  }
);
