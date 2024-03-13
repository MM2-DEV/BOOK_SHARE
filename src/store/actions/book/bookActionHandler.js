import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookList = createAsyncThunk("book/getBookList", async () => {
  const url = "https://book-share-json-server.onrender.com/books?_expand=genre&_expand=writer&_expand=bookDonorId";
  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const getBook = createAsyncThunk("book/getBook", async (id) => {
  const url = `https://book-share-json-server.onrender.com/books/${id}?_expand=genre&_expand=writer&_expand=bookDonorId`;
  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const createBook = createAsyncThunk(
  "book/createBook",
  async (requestBody) => {
    console.log("request body:", requestBody);

    const url = "https://book-share-json-server.onrender.com/books";

    const res = await axios.post(url, requestBody);

    return res.data;
  }
);

export const updateBook = createAsyncThunk(
  "book/updateBook",
  async (data) => {
    console.log("request body:", data.requestBody);
    console.log("id:", data.id);

    const url = `https://book-share-json-server.onrender.com/books${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteBook = createAsyncThunk("book/deleteBook", async (id) => {
  const url = `https://book-share-json-server.onrender.com/books${id}`;

  const res = await axios.delete(url);

  return res.data;
});
