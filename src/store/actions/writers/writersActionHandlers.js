import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWriterList = createAsyncThunk(
  "writers/getWriterList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/writers?_embed=book";
    const res = await axios.get(url);

    return res.data;
  }
);

export const getWriter = createAsyncThunk("writers/getWriter", async (id) => {
  const url = `https://book-share-json-server.onrender.com/writers/${id}?_embed=book`;
  const res = await axios.get(url);

  return res.data;
});

export const createWriter = createAsyncThunk(
  "writers/createWriter",
  async (inputState) => {
    const url = "https://book-share-json-server.onrender.com/writers";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const updateWriter = createAsyncThunk(
  "writers/updateWriter",
  async (data) => {
    const url = `https://book-share-json-server.onrender.com/writers/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteWriter = createAsyncThunk(
  "writers/deleteWriter",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/writers/${id}`;

    const res = await axios.delete(url);

    return res.data;
  }
);
