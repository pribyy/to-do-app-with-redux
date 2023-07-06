import { createSlice } from "@reduxjs/toolkit";

const lightDarkThemeSlice = createSlice({
  name: "lightDarkTheme",
  initialState: "light",
  reducers: {
    toggleTheme: (state, action) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = lightDarkThemeSlice.actions;
export default lightDarkThemeSlice.reducer;
