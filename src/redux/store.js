//configure store is a function that creates our store to hold all of our state
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import inputValueReducer from "./inputValueSlice";
import lightDarkThemeReducer from "./lightDarkThemeSlice";

//this store holds many reducers
export default configureStore({
  reducer: {
    inputValues: inputValueReducer,
    todos: todoReducer,
    theme: lightDarkThemeReducer,
  },
});
