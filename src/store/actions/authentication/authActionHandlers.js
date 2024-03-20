import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createSignUp = createAsyncThunk(
  "authentication/createSignup",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const createSignIn = createAsyncThunk(
  "authentication/createSignIn",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);
