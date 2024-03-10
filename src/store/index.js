import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import bookReducer from "./reducers/bookReducer";
import writerReducer from "./reducers/writerReducer";
import donorReducer from "./reducers/donorReducer";
import genreReducer from "./reducers/genreReducer";
import ratingReducer from "./reducers/ratingReducer";
import reviewReducer from "./reducers/reviewReducer";

const store = configureStore({
  reducer: combineReducers({
    users: userReducer,
    book: bookReducer,
    writers: writerReducer,
    donors: donorReducer,
    genres: genreReducer,
    ratings: ratingReducer,
    reviews: reviewReducer
  }),
  devTools: true,
});

export default store;
