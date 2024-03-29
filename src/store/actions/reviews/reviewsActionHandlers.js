import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviewList = createAsyncThunk(
  "reviews/getReviewList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/reviews?_expand=book&_expand=user";

    const res = await axios.get(url);

    return res.data;
  }
);

export const getReview = createAsyncThunk("reviews/getReview", async (id) => {
  const url = `https://book-share-json-server.onrender.com/reviews/${id}?_expand=book&_expand=user`;

  const res = await axios.get(url);

  return res.data;
});

export const createReview = createAsyncThunk(
  "reviews/createReview",
  async (requestBody) => {
    const url = "https://book-share-json-server.onrender.com/reviews";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateReview = createAsyncThunk(
  "reviews/updateReview",
  async (data) => {
    const url = `https://book-share-json-server.onrender.com/reviews/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id) => {
    const url = `https://book-share-json-server.onrender.com/reviews/${id}`;

    const res = await axios.delete(url);

    return res.data;
  }
);
