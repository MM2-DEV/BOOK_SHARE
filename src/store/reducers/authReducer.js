import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSignUp, createSignIn } from "../actions/authentication/authActionHandlers";

const initialState = {
 

  isCreateSignUpLoading: false,
  isCreateSignUpError: false,
  isCreateSignUpSuccess: false,
  createSignUpError: null,

  isCreateSignInLoading: false,
  isCreateSignInError: false,
  isCreateSignInSuccess: false,
  createSignInError: null,

  
};

const userSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    // create sign up 
    builder.addCase(createSignUp.pending, (state, action) => {
      state.isCreateSignUpLoading = true;
      state.isCreateSignUpError = false;
      state.isCreateSignUpSuccess = false;
      state.createSignUpError = null;
    });

    builder.addCase(createSignUp.rejected, (state, action) => {
      state.isCreateSignUpLoading = false;
      state.isCreateSignUpError = true;
      state.isCreateSignUpSuccess = false;
      state.createSignUpError = action.error;
    });

    builder.addCase(createSignUp.fulfilled, (state, action) => {
      state.isCreateSignUpLoading = false;
      state.isCreateSignUpError = false;
      state.isCreateSignUpSuccess = true;
      state.createSignUpError = null;
    });

    // create sign in 
    builder.addCase(createSignIn.pending, (state, action) => {
        state.isCreateSignInLoading = true;
        state.isCreateSignInError = false;
        state.isCreateSignInSuccess = false;
        state.createSignInError = null;
      });
  
      builder.addCase(createSignIn.rejected, (state, action) => {
        state.isCreateSignInLoading = false;
        state.isCreateSignInError = true;
        state.isCreateSignInSuccess = false;
        state.createSignInError = action.error;
      });
  
      builder.addCase(createSignIn.fulfilled, (state, action) => {
        state.isCreateSignInLoading = false;
        state.isCreateSignInError = false;
        state.isCreateSuccess = true;
        state.createSignInError = null;
      });
  
  


   
  },
});

export default userSlice.reducer;
