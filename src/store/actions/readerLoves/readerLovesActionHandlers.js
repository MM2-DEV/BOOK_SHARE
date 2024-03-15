import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getReaderLovesList = createAsyncThunk(
  "readerLoves/getReaderLovesList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/readerLoves?_expand=book&_expand=user";


    const res = await axios.get(url);
    console.log("res:", res);

    return res.data;
  }
);

export const getReaderLoves = createAsyncThunk("readerLoves/getReaderLoves", async (id) => {

  const url = `https://book-share-json-server.onrender.com/readerLoves/${id}?_expand=book&_expand=user`;

  const res = await axios.get(url);
  console.log("res:", res);

  return res.data;
});

export const createReaderLoves = createAsyncThunk(
  "readerLoves/createReaderLoves",
  async (requestBody) => {
    console.log("request body:", requestBody);

    const url =
      "https://book-share-json-server.onrender.com/readerLoves";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateReaderLoves = createAsyncThunk(
  "readerLoves/updateReaderLoves",
  async (data) => {
    console.log("request body:", data.requestBody);
    console.log("id:", data.id);

    const url = `https://book-share-json-server.onrender.com/readerLoves/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);


export const deleteReaderLoves = createAsyncThunk(
  "readerLoves/deleteReaderLoves",
  async (id) => {

    const url = `https://book-share-json-server.onrender.com/readerLoves/${id}`;


    const res = await axios.delete(url);

    return res.data;
  }
);
