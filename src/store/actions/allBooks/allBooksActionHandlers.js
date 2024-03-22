import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStoryBookList = createAsyncThunk(
  "allBooks/getStoryBookList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/books?_expand=genre&_expand=writer";
    const res = await axios.get(url);

    return res.data;
  }
);

export const getAcademicBookList = createAsyncThunk(
  "allBooks/getAcademicBookList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/books?_expand=genre&_expand=writer";
    const res = await axios.get(url);

    return res.data;
  }
);

export const getGeneralKnowledgeBookList = createAsyncThunk(
  "allBooks/getGeneralKnowledgeBookList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/books?_expand=genre&_expand=writer";
    const res = await axios.get(url);

    return res.data;
  }
);

export const getAllBookList = createAsyncThunk(
  "allBooks/getAllBookList",
  async () => {
    const url =
      "https://book-share-json-server.onrender.com/books?_expand=genre&_expand=writer";
    const res = await axios.get(url);

    return res.data;
  }
);
