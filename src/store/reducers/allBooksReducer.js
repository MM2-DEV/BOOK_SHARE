import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getStoryBookList,
  getAcademicBookList,
  getGeneralKnowledgeBookList,
  getAllBookList,
} from "../actions/allBooks/allBooksActionHandlers";

const initialState = {
  isListLoading: false,
  isListError: false,
  isListSuccess: false,
  listError: null,
  listData: null,
};

const userSlice = createSlice({
  name: "allBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get story book data
    builder.addCase(getStoryBookList.pending, (state, action) => {
      state.isListLoading = true;
      state.isListError = false;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = null;
    });

    builder.addCase(getStoryBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isListLoading = false;
      state.isListError = true;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = error;
    });

    builder.addCase(getStoryBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isListLoading = false;
      state.isListError = false;
      state.isListSuccess = true;
      state.listData = payload || [];
      state.listError = null;
    });

    // get academic book data
    builder.addCase(getAcademicBookList.pending, (state, action) => {
      state.isListLoading = true;
      state.isListError = false;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = null;
    });

    builder.addCase(getAcademicBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isListLoading = false;
      state.isListError = true;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = error;
    });

    builder.addCase(getAcademicBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isListLoading = false;
      state.isListError = false;
      state.isListSuccess = true;
      state.listData = payload || [];
      state.listError = null;
    });

    // get general knowledge book data
    builder.addCase(getGeneralKnowledgeBookList.pending, (state, action) => {
      state.isListLoading = true;
      state.isListError = false;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = null;
    });

    builder.addCase(getGeneralKnowledgeBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isListLoading = false;
      state.isListError = true;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = error;
    });

    builder.addCase(getGeneralKnowledgeBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isListLoading = false;
      state.isListError = false;
      state.isListSuccess = true;
      state.listData = payload || [];
      state.listError = null;
    });

    // get all book data
    builder.addCase(getAllBookList.pending, (state, action) => {
      state.isListLoading = true;
      state.isListError = false;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = null;
    });

    builder.addCase(getAllBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isListLoading = false;
      state.isListError = true;
      state.isListSuccess = false;
      state.listData = null;
      state.listError = error;
    });

    builder.addCase(getAllBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isListLoading = false;
      state.isListError = false;
      state.isListSuccess = true;
      state.listData = payload || [];
      state.listError = null;
    });
  },
});

export default userSlice.reducer;
