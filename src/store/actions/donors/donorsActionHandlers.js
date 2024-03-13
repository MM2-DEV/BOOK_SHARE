import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDonorList = createAsyncThunk("donors/getDonorList", async () => {
  const url = "https://book-share-json-server.onrender.com/bookDonors?_embed=book";
  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});

export const getDonor = createAsyncThunk("donors/getDonor", async (id) => {
  const url = `https://book-share-json-server.onrender.com/bookDonors/${id}?_embed=book`;
  const res = await axios.get(url);
  console.log("res:", res)

  return res.data;
});


export const createDonor = createAsyncThunk(
  "donors/createDonor",
  async (inputState) => {
    console.log("request body:", inputState);

    const url = "https://book-share-json-server.onrender.com/bookDonors";

    const res = await axios.post(url, inputState);

    return res.data;
  }
);

export const updateDonor = createAsyncThunk(
  "donors/updateDonor",
  async (data) => {
    console.log("request body:", data.requestBody);
    console.log("id:", data.id);


    const url = `https://book-share-json-server.onrender.com/bookDonors/${data.id}`;

    const res = await axios.put(url, data.requestBody);

    return res.data;
  }
);

export const deleteDonor = createAsyncThunk("donors/deleteDonor", async (id) => {
  const url = `https://book-share-json-server.onrender.com/bookDonors/${id}`;

  const res = await axios.delete(url);

  return res.data;
});
