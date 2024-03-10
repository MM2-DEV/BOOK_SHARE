import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGenreList = createAsyncThunk(
  "genres/getGenreList",
  async () => {
    const url = "https://book-share-json-server.onrender.com/genres";
    const res = await axios.get(url);
    console.log("res:", res);

    return res.data;
  }
);

export const getGenre = createAsyncThunk("genres/getGenre", async (id) => {
  const url = `https://book-share-json-server.onrender.com/genres/${id}`;

  const res = await axios.get(url);

  return res.data;
});

export const createGenre = createAsyncThunk(
  "genres/createGenre",
  async (requestBody) => {
    const url = "https://book-share-json-server.onrender.com/genres";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateGenre = createAsyncThunk(
  "genres/updateGenre",
  async (data) => {
    console.log("request body:", data.requestBody);
    console.log("id:", data.id);

    const url = `https://book-share-json-server.onrender.com/genres/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteGenre = createAsyncThunk(
  "genres/deleteGenre",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/genres/${id}`;

    const res = await axios.delete(url);

    return res.data;
  }
);
