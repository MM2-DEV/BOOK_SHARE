import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getContactRequestsList,
  getContactRequest,
  createContactRequest,
  updateContactRequest,
  deleteContactRequest,
} from "../actions/contact/contactActionHandlers";

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
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get contact requests data
    builder.addCase(getContactRequestsList.pending, (state, action) => {
      console.log("action pending:", action);
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

    builder.addCase(getContactRequestsList.rejected, (state, action) => {
      console.log("action rejected:", action);

      const { type, payload, error } = action;

      state.isListLoading = false;
      state.isListError = true;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = error;
    });

    builder.addCase(getContactRequestsList.fulfilled, (state, action) => {
      console.log("action fulfilled:", action);

      const { payload } = action;

      state.isListLoading = false;
      state.isListError = false;
      state.isListSuccess = true;
      state.listData = payload || [];
      state.listError = null;
    });

    // get contact request
    builder.addCase(getContactRequest.pending, (state, action) => {
      console.log("action pending:", action);
      state.isSingleLoading = true;
      state.isSingleError = false;
      state.isSingleSuccess = false;
      state.singleData = null;
      state.singleError = null;
    });

    builder.addCase(getContactRequest.rejected, (state, action) => {
      console.log("action rejected:", action);

      const { type, payload, error } = action;

      state.isSingleLoading = false;
      state.isSingleError = true;
      state.isSingleSuccess = false;
      state.singleData = null;
      state.singleError = error;
    });

    builder.addCase(getContactRequest.fulfilled, (state, action) => {
      console.log("action fulfilled:", action);

      const { payload } = action;

      state.isSingleLoading = false;
      state.isSingleError = false;
      state.isSingleSuccess = true;
      state.singleData = payload;
      state.singleError = null;
    });

    // create contact request data
    builder.addCase(createContactRequest.pending, (state, action) => {
      state.isCreateLoading = true;
      state.isCreateError = false;
      state.isCreateSuccess = false;
      state.createError = null;
    });

    builder.addCase(createContactRequest.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isCreateError = true;
      state.isCreateSuccess = false;
      state.createError = action.error;
    });

    builder.addCase(createContactRequest.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isCreateError = false;
      state.isCreateSuccess = true;
      state.createError = null;
    });

    // update contact request data
    builder.addCase(updateContactRequest.pending, (state, action) => {
      state.isUpdateLoading = true;
      state.isUpdateError = false;
      state.isUpdateSuccess = false;
      state.updateError = null;
    });

    builder.addCase(updateContactRequest.rejected, (state, action) => {
      const { error } = action;

      state.isUpdateLoading = false;
      state.isUpdateError = true;
      state.isUpdateSuccess = false;
      state.updateError = error;
    });

    builder.addCase(updateContactRequest.fulfilled, (state, action) => {
      state.isUpdateLoading = false;
      state.isUpdateError = false;
      state.isUpdateSuccess = true;
      state.updateError = null;
    });

    // delete contact request
    builder.addCase(deleteContactRequest.pending, (state, action) => {
      state.isDeleteLoading = true;
      state.isDeleteError = false;
      state.isDeleteSuccess = false;
      state.deleteError = null;
    });

    builder.addCase(deleteContactRequest.rejected, (state, action) => {
      state.isDeleteLoading = false;
      state.isDeleteError = true;
      state.isDeleteSuccess = false;
      state.deleteError = action.error;
    });

    builder.addCase(deleteContactRequest.fulfilled, (state, action) => {
      state.isDeleteLoading = false;
      state.isDeleteError = false;
      state.isDeleteSuccess = true;
      state.deleteError = null;
    });
  },
});

export default userSlice.reducer;
