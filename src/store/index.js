import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import bookReducer from "./reducers/bookReducer";
import writerReducer from "./reducers/writerReducer";
import donorReducer from "./reducers/donorReducer";
import genreReducer from "./reducers/genreReducer";
import ratingReducer from "./reducers/ratingReducer";
import reviewReducer from "./reducers/reviewReducer";
import requestReducer from "./reducers/requestReducer";
import readerLovesReducer from "./reducers/readerLovesReducer";
import allBooksReducer from "./reducers/allBooksReducer";

const store = configureStore({
  reducer: combineReducers({
    users: userReducer,
    book: bookReducer,
    writers: writerReducer,
    donors: donorReducer,
    genres: genreReducer,
    ratings: ratingReducer,
    reviews: reviewReducer,
    requests: requestReducer,
    readerLoves: readerLovesReducer,
    allBooks: allBooksReducer,
  }),
  devTools: true,
});

export default store;
