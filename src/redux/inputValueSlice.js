import { createSlice } from "@reduxjs/toolkit";

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState: "",
  reducers: {
    addValuesOnChange: (state, action) => {
      return action.payload;
    },
  },
});

//action creator =
export const { addValuesOnChange } = inputValueSlice.actions;
export default inputValueSlice.reducer;
