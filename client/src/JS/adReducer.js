import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "first ad reducer",
    description: "fetch ads from reducer",
    link: "https://www.google.com",
  },
  {
    title: "second ad reducer",
    description: "fetch ads from reducer",
    link: "https://www.youtube.com",
  },
];

const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    setAds: (state, action) => {
      return action.payload;
    },
  },
});
export const { setAds } = adSlice.actions;
export default adSlice.reducer;
