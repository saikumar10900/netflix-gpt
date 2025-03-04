import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleShowGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggleShowGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
