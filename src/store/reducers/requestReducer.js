import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createRequest,
  deleteRequest,
  getRequestList,
  getRequest,
  updateRequest
} from "../actions/requests/requestsActionHandlers";

const initialState = {
  isListLoading: false,
  isListError: false,
  isListSuccess: false,
  listError: null,
  listData: null,

  isSingleLoading: false,
  isSingleError: false,
  isSingleSuccess: false,
  singleError: null,
  singleData: {},

  isCreateLoading: false,
  isCreateError: false,
  isCreateSuccess: false,
  createError: null,

  isUpdateLoading: false,
  isUpdateError: false,
  isUpdateSuccess: false,
  updateError: null,

  isDeleteLoading: false,
  isDeleteError: false,
  isDeleteSuccess: false,
  deleteError: null,
};

const userSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get request data
    builder.addCase(getRequestList.pending, (state, action) => {
      state.isListLoading = true;
      state.isListError = false;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = null;

      state.isSingleLoading = false;
      state.isSingleError = false;
      state.isSingleSuccess = false;
      state.singleData = null;
      state.singleError = null;

      state.isCreateLoading = false;
      state.isCreateError = false;
      state.isCreateSuccess = false;
      state.createError = null;

      state.isUpdateLoading = false;
      state.isUpdateError = false;
      state.isUpdateSuccess = false;
      state.updateError = null;

      state.isDeleteLoading = false;
      state.isDeleteError = false;
      state.isDeleteSuccess = false;
      state.deleteError = null;
    });

    builder.addCase(getRequestList.rejected, (state, action) => {

      const { type, payload, error } = action;

      state.isListLoading = false;
      state.isListError = true;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = error;
    });

    builder.addCase(getRequestList.fulfilled, (state, action) => {

      const { payload } = action;

      state.isListLoading = false;
      state.isListError = false;
      state.isListSuccess = true;
      state.listData = payload || [];
      state.listError = null;
    });

    // get single request
    builder.addCase(getRequest.pending, (state, action) => {
      state.isSingleLoading = true;
      state.isSingleError = false;
      state.isSingleSuccess = false;
      state.singleData = null;
      state.singleError = null;
    });

    builder.addCase(getRequest.rejected, (state, action) => {

      const { type, payload, error } = action;

      state.isSingleLoading = false;
      state.isSingleError = true;
      state.isSingleSuccess = false;
      state.singleData = null;
      state.singleError = error;
    });

    builder.addCase(getRequest.fulfilled, (state, action) => {

      const { payload } = action;

      state.isSingleLoading = false;
      state.isSingleError = false;
      state.isSingleSuccess = true;
      state.singleData = payload;
      state.singleError = null;
    });


    // create request data
    builder.addCase(createRequest.pending, (state, action) => {
      state.isCreateLoading = true;
      state.isCreateError = false;
      state.isCreateSuccess = false;
      state.createError = null;
    });

    builder.addCase(createRequest.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isCreateError = true;
      state.isCreateSuccess = false;
      state.createError = action.error;
    });

    builder.addCase(createRequest.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isCreateError = false;
      state.isCreateSuccess = true;
      state.createError = null;
    });

    // update request data
    builder.addCase(updateRequest.pending, (state, action) => {
      state.isUpdateLoading = true;
      state.isUpdateError = false;
      state.isUpdateSuccess = false;
      state.updateError = null;
    });

    builder.addCase(updateRequest.rejected, (state, action) => {
      const { error } = action;

      state.isUpdateLoading = false;
      state.isUpdateError = true;
      state.isUpdateSuccess = false;
      state.updateError = error;
    });

    builder.addCase(updateRequest.fulfilled, (state, action) => {
      state.isUpdateLoading = false;
      state.isUpdateError = false;
      state.isUpdateSuccess = true;
      state.updateError = null;
    });


    // delete request
    builder.addCase(deleteRequest.pending, (state, action) => {
      state.isDeleteLoading = true;
      state.isDeleteError = false;
      state.isDeleteSuccess = false;
      state.deleteError = null;
    });

    builder.addCase(deleteRequest.rejected, (state, action) => {
      state.isDeleteLoading = false;
      state.isDeleteError = true;
      state.isDeleteSuccess = false;
      state.deleteError = action.error;
    });

    builder.addCase(deleteRequest.fulfilled, (state, action) => {
      state.isDeleteLoading = false;
      state.isDeleteError = false;
      state.isDeleteSuccess = true;
      state.deleteError = null;
    });
  },
});

export default userSlice.reducer;
