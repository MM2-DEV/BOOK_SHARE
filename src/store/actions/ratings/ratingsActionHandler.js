import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRatingList = createAsyncThunk(
  "ratings/getRatingList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/ratings?_expand=book&_expand=user";

    const res = await axios.get(url);

    return res.data;
  }
);

export const getRating = createAsyncThunk("ratings/getRating", async (id) => {
  const url = `https://book-share-json-server.onrender.com/ratings/${id}?_expand=book&_expand=user`;

  const res = await axios.get(url);

  return res.data;
});

export const createRating = createAsyncThunk(
  "ratings/createRating",
  async (requestBody) => {
    const url = "https://book-share-json-server.onrender.com/ratings";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateRating = createAsyncThunk(
  "ratings/updateRating",
  async (data) => {
    const url = `https://book-share-json-server.onrender.com/ratings/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteRating = createAsyncThunk(
  "ratings/deleteRating",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/ratings/${id}`;

    const res = await axios.delete(url);

    return res.data;
  }
);
