import { createSlice } from "@reduxjs/toolkit";

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState: "",
  reducers: {
    addValuesOnChange: (state, action) => {
      return action.payload;
    },
    reset: (state, action) => {
      return "";
    },
  },
});

//action creator =
export const { addValuesOnChange, reset } = inputValueSlice.actions;
export default inputValueSlice.reducer;
