import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn } from "../actions/authentication/authActionHandlers";

const initialState = {
  isCreateSignUpLoading: false,
  isCreateSignUpError: false,
  isCreateSignUpSuccess: false,
  createSignUpError: null,

  isCreateSignInLoading: false,
  isCreateSignInError: false,
  isCreateSignInSuccess: false,
  createSignInError: null,
  createSignInData: null,
};

const userSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // sign up
    builder.addCase(signUp.pending, (state, action) => {
      state.isCreateSignUpLoading = true;
      state.isCreateSignUpError = false;
      state.isCreateSignUpSuccess = false;
      state.createSignUpError = null;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.isCreateSignUpLoading = false;
      state.isCreateSignUpError = true;
      state.isCreateSignUpSuccess = false;
      state.createSignUpError = action.error;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isCreateSignUpLoading = false;
      state.isCreateSignUpError = false;
      state.isCreateSignUpSuccess = true;
      state.createSignUpError = null;
    });

    // sign in
    builder.addCase(signIn.pending, (state, action) => {
      state.isCreateSignInLoading = true;
      state.isCreateSignInError = false;
      state.isCreateSignInSuccess = false;
      state.createSignInError = null;
      state.createSignInData = null;
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.isCreateSignInError = true;
      state.isCreateSignInSuccess = false;

      state.createSignInError = {
        status: "failed",
        message: "Somethings wrong. Try again",
        body: action.error,
      };

      state.createSignInData = null;
      state.isCreateSignInLoading = false;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      if (action.payload?.length > 0) {
        state.isCreateSignInError = false;
        state.isCreateSignInSuccess = true;
        state.createSignInData = action.payload[0];
        state.createSignInError = null;
      } else {
        state.isCreateSignInError = true;
        state.isCreateSignInSuccess = false;
        state.createSignInData = null;
        state.createSignInError = {
          status: "failed",
          message: "No user found. Try again",
          body: null,
        };
      }

      state.isCreateSignInLoading = false;
    });
  },
});

export default userSlice.reducer;
