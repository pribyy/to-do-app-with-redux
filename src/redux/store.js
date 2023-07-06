//configure store is a function that creates our store to hold all of our state
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import todoReducer from "./todoSlice";
import inputValueReducer from "./inputValueSlice";
import lightDarkThemeReducer from "./lightDarkThemeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  inputValues: inputValueReducer,
  todos: todoReducer,
  theme: lightDarkThemeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//this store holds many reducers
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
