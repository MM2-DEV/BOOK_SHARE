import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookList = createAsyncThunk("book/getBookList", async () => {
  const url = "https://book-share-json-server.onrender.com/books";
  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const createBook = createAsyncThunk(
  "book/createBook",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "https://book-share-json-server.onrender.com/books";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const updateBook = createAsyncThunk(
  "book/updateBook",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = `https://book-share-json-server.onrender.com/books${id}`;

    const res = await axios.put(url, inputState);

    return res.data;
  }
);

export const deleteBook = createAsyncThunk("book/deleteBook", async (id) => {
  const url = `https://book-share-json-server.onrender.com/books${id}`;

  const res = await axios.delete(url);

  return res.data;
});
