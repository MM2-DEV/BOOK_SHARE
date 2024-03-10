import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWriterList = createAsyncThunk("writers/getWriterList", async () => {
  const url = "https://book-share-json-server.onrender.com/writers";
  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const createWriter = createAsyncThunk(
  "writers/createWriter",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "https://book-share-json-server.onrender.com/books";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const updateWriter = createAsyncThunk(
  "writers/updateWriter",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = `https://book-share-json-server.onrender.com/writers${id}}`;

    const res = await axios.put(url, inputState);

    return res.data;
  }
);

export const deleteWriter = createAsyncThunk("writers/deleteWriter", async (id) => {
  const url = `https://book-share-json-server.onrender.com/writers${id}}`;

  const res = await axios.delete(url);

  return res.data;
});