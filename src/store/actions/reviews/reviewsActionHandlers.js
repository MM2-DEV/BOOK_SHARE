import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviewList = createAsyncThunk("reviews/getReviewList", async () => {
  // const url = "https://book-share-json-server.onrender.com/reviews?_expand=book&_expand=user";
  const url = "https://book-share-json-server.onrender.com/reviews";

  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const createReview = createAsyncThunk(
  "reviews/createReview",
  async (requestBody) => {
    console.log("request body:", requestBody);

    const url = "https://book-share-json-server.onrender.com/reviews";

    const res = await axios.post(url, requestBody);

    console.log("res:",res)

    return res.data;
  }
);

export const updateReview = createAsyncThunk(
  "reviews/updateReview",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = `https://book-share-json-server.onrender.com/reviews${id}`;

    const res = await axios.put(url, inputState);

    return res.data;
  }
);

export const deleteReview = createAsyncThunk("reviews/deleteReview", async (id) => {
  const url = `https://book-share-json-server.onrender.com/reviews/${id}`;

  const res = await axios.delete(url);

  return res.data;
});
