//configure store is a function that creates our store to hold all of our state
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

//this store holds many reducers
export default configureStore({
  reducer: {
    //give it a name: todos
    todos: todoReducer,
  },
});
