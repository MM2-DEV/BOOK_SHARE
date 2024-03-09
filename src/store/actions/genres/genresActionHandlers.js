import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGenreList = createAsyncThunk("genres/getGenreList", async () => {
  const url = "https://book-share-json-server.onrender.com/genres";
  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const createGenre = createAsyncThunk(
  "genres/createGenre",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "https://book-share-json-server.onrender.com/genres";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const updateGenre = createAsyncThunk(
  "genres/updateGenre",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = `https://book-share-json-server.onrender.com/genres${id}}`;

    const res = await axios.put(url, inputState);

    return res.data;
  }
);

export const deleteGenre = createAsyncThunk("genres/deleteGenre", async (id) => {
  const url = `https://book-share-json-server.onrender.com/genres${id}}`;

  const res = await axios.delete(url);

  return res.data;
});
