import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRatingList = createAsyncThunk("ratings/getRatingList", async () => {

  const url = "https://book-share-json-server.onrender.com/ratings?_expand=book&_expand=user";

  // const url = "https://book-share-json-server.onrender.com/ratings";

  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const createRating = createAsyncThunk(
  "ratings/createRating",
  async (requestBody) => {
    console.log("request body:", requestBody);

    const url = "https://book-share-json-server.onrender.com/ratings";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateRating = createAsyncThunk(
  "ratings/updateRating",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = `https://book-share-json-server.onrender.com/ratings${id}`;

    const res = await axios.put(url, inputState);

    return res.data;
  }
);

export const deleteRating = createAsyncThunk("ratings/deleteRating", async (id) => {
  const url = `https://book-share-json-server.onrender.com/ratings${id}`;

  const res = await axios.delete(url);

  return res.data;
});
