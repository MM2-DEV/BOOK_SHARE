import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk("user/getUserList", async () => {
  const url = "https://reqres.in/api/users";
  const res = await axios.get(url);

  return res.data;
});

export const createUser = createAsyncThunk(
  "user/createUser",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "https://reqres.in/api/users";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  const url = `https://reqres.in/api/users/${id}}`;

  const res = await axios.delete(url);

  return res.data;
});
