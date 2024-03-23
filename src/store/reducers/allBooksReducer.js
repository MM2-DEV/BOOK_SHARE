import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getStoryBookList,
  getAcademicBookList,
  getGeneralKnowledgeBookList,
  getAllBookList,
} from "../actions/allBooks/allBooksActionHandlers";

const initialState = {
  isStoryBookListLoading: false,
  isStoryBookListError: false,
  isStoryBookListSuccess: false,
  storyBookListError: null,
  storyBookListData: null,

  isAcademicBookListLoading: false,
  isAcademicBookListError: false,
  isAcademicBookListSuccess: false,
  academicBookListError: null,
  academicBookListData: null,

  isGkBookListLoading: false,
  isGkBookListError: false,
  isGkBookListSuccess: false,
  gkBookListError: null,
  gkBookListData: null,

  isAllBookListLoading: false,
  isAllBookListError: false,
  isAllBookListSuccess: false,
  allBookListError: null,
  allBookListData: null,
};

const userSlice = createSlice({
  name: "allBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get story book data
    builder.addCase(getStoryBookList.pending, (state, action) => {
      state.isStoryBookListLoading = true;
      state.isStoryBookListError = false;
      state.isStoryBookListSuccess = false;
      state.storyBookListData = null;
      state.storyBookListError = null;
    });

    builder.addCase(getStoryBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isStoryBookListLoading = false;
      state.isStoryBookListError = true;
      state.isStoryBookListSuccess = false;
      state.storyBookListData = null;
      state.storyBookListError = error;
    });

    builder.addCase(getStoryBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isStoryBookListLoading = false;
      state.isStoryBookListError = false;
      state.isStoryBookListSuccess = true;
      state.storyBookListData = payload || [];
      state.storyBookListError = null;
    });

    // get academic book data
    builder.addCase(getAcademicBookList.pending, (state, action) => {
      state.isAcademicBookListLoading = true;
      state.isAcademicBookListError = false;
      state.isAcademicBookListSuccess = false;
      state.academicBookListData = null;
      state.academicBookListError = null;
    });

    builder.addCase(getAcademicBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isAcademicBookListLoading = false;
      state.isAcademicBookListError = true;
      state.isAcademicBookListSuccess = false;
      state.academicBookListData = null;
      state.academicBookListError = error;
    });

    builder.addCase(getAcademicBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isAcademicBookListLoading = false;
      state.isAcademicBookListError = false;
      state.isAcademicBookListSuccess = true;
      state.academicBookListData = payload || [];
      state.academicBookListError = null;
    });

    // get general knowledge book data
    builder.addCase(getGeneralKnowledgeBookList.pending, (state, action) => {
      state.isGkBookListLoading = true;
      state.isGkBookListError = false;
      state.isGkBookListSuccess = false;
      state.gkBookListData = null;
      state.gkBookListError = null;
    });

    builder.addCase(getGeneralKnowledgeBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isGkBookListLoading = false;
      state.isGkBookListError = true;
      state.isGkBookListSuccess = false;
      state.gkBookListData = null;
      state.gkBookListError = error;
    });

    builder.addCase(getGeneralKnowledgeBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isGkBookListLoading = false;
      state.isGkBookListError = false;
      state.isGkBookListSuccess = true;
      state.gkBookListData = payload || [];
      state.gkBookListError = null;
    });

    // get all book data
    builder.addCase(getAllBookList.pending, (state, action) => {
      state.isAllBookListLoading = true;
      state.isAllBookListError = false;
      state.isAllBookListSuccess = false;
      state.allBookListData = null;
      state.allBookListError = null;
    });

    builder.addCase(getAllBookList.rejected, (state, action) => {
      const { type, payload, error } = action;

      state.isAllBookListLoading = false;
      state.isAllBookListError = true;
      state.isAllBookListSuccess = false;
      state.allBookListData = null;
      state.allBookListError = error;
    });

    builder.addCase(getAllBookList.fulfilled, (state, action) => {
      const { payload } = action;

      state.isAllBookListLoading = false;
      state.isAllBookListError = false;
      state.isAllBookListSuccess = true;
      state.allBookListData = payload || [];
      state.allBookListError = null;
    });
  },
});

export default userSlice.reducer;
