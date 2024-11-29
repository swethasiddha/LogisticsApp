import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import userdataReducer from "./userdataSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    userdata: userdataReducer,
  },
});

export default store;
