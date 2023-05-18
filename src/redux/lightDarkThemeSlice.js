import { createSlice } from "@reduxjs/toolkit";

// where and how do i use useeffect with redux?
// //   useEffect(() => {
//     //adds "dark" or "light" class to the body of the html document
//     if (theme === "dark") {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }

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
