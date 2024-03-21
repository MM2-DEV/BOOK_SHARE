import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk("users/getUserList", async () => {
  const url = "https://book-share-json-server.onrender.com/users";
  const res = await axios.get(url);

  return res.data;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "https://book-share-json-server.onrender.com/users";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const url = `https://book-share-json-server.onrender.com/users/${id}}`;

  const res = await axios.delete(url);

  return res.data;
});
