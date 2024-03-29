import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    toggleTheme: (state) => {
      return state === "light" ? "dark" : "light"
    },
  },
});

export default themeSlice;
