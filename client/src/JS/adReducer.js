import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    title: "first ad reducer",
    description: "fetch ads from reducer",
    link: "https://www.google.com",
  },
  {
    id: uuidv4(),
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
    addAdsReducer: (state, action) => {
      const newAd = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newAd];
    },
  },
});
export const { setAds, addAdsReducer } = adSlice.actions;
export default adSlice.reducer;
