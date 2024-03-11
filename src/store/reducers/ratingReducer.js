import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createRating,
  deleteRating,
  getRatingList,
  getRating,
  updateRating
} from "../actions/ratings/ratingsActionHandler";

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
  name: "ratings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get rating data
    builder.addCase(getRatingList.pending, (state, action) => {
      console.log("action pending:", action);
      state.isListLoading = true;
      state.isListError = false;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = null;
    });

    builder.addCase(getRatingList.rejected, (state, action) => {
      console.log("action rejected:", action);

      const { type, payload, error } = action;

      state.isListLoading = false;
      state.isListError = true;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = error;
    });

    builder.addCase(getRatingList.fulfilled, (state, action) => {
      console.log("action fulfilled:", action);

      const { payload } = action;

      state.isListLoading = false;
      state.isListError = false;
      state.isListSuccess = true;
      state.listData = payload || [];
      state.listError = null;
    });

    // get single rating
    builder.addCase(getRating.pending, (state, action) => {
      console.log("action pending:", action);
      state.isSingleLoading = true;
      state.isSingleError = false;
      state.isSingleSuccess = false;
      state.singleData = null;
      state.singleError = null;
    });

    builder.addCase(getRating.rejected, (state, action) => {
      console.log("action rejected:", action);

      const { type, payload, error } = action;

      state.isSingleLoading = false;
      state.isSingleError = true;
      state.isSingleSuccess = false;
      state.singleData = null;
      state.singleError = error;
    });

    builder.addCase(getRating.fulfilled, (state, action) => {
      console.log("action fulfilled:", action);

      const { payload } = action;

      state.isSingleLoading = false;
      state.isSingleError = false;
      state.isSingleSuccess = true;
      state.singleData = payload;
      state.singleError = null;
    });


    // create rating data
    builder.addCase(createRating.pending, (state, action) => {
      state.isCreateLoading = true;
      state.isCreateError = false;
      state.isCreateSuccess = false;
      state.createError = null;
    });

    builder.addCase(createRating.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isCreateError = true;
      state.isCreateSuccess = false;
      state.createError = action.error;
    });

    builder.addCase(createRating.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isCreateError = false;
      state.isCreateSuccess = true;
      state.createError = null;
    });

    // update rating data
    builder.addCase(updateRating.pending, (state, action) => {
      state.isUpdateLoading = true;
      state.isUpdateError = false;
      state.isUpdateSuccess = false;
      state.updateError = null;
    });

    builder.addCase(updateRating.rejected, (state, action) => {
      const { error } = action;

      state.isUpdateLoading = false;
      state.isUpdateError = true;
      state.isUpdateSuccess = false;
      state.updateError = error;
    });

    builder.addCase(updateRating.fulfilled, (state, action) => {
      state.isUpdateLoading = false;
      state.isUpdateError = false;
      state.isUpdateSuccess = true;
      state.updateError = null;
    });


    // delete rating
    builder.addCase(deleteRating.pending, (state, action) => {
      state.isDeleteLoading = true;
      state.isDeleteError = false;
      state.isDeleteSuccess = false;
      state.deleteError = null;
    });

    builder.addCase(deleteRating.rejected, (state, action) => {
      state.isDeleteLoading = false;
      state.isDeleteError = true;
      state.isDeleteSuccess = false;
      state.deleteError = action.error;
    });

    builder.addCase(deleteRating.fulfilled, (state, action) => {
      state.isDeleteLoading = false;
      state.isDeleteError = false;
      state.isDeleteSuccess = true;
      state.deleteError = null;
    });
  },
});

export default userSlice.reducer;
