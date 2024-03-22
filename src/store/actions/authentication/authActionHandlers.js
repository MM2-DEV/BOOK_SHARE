import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "authentication/createSignup",
  async (inputState) => {
    const url = "";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const signIn = createAsyncThunk(
  "authentication/signIn",
  async (inputState) => {
    const url = `https://book-share-json-server.onrender.com/users?email=${inputState.email}&password=${inputState.password}&_expand=role`;

    const res = await axios.get(url);

    return res.data;
  }
);
