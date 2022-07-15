import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Mareim",
  lastName: "Hamdaoui",
  email: "meriam.hamdaoui@gmail.com",
  ads: [
    {
      title: "first ad reducer",
      description: "fetch ads from reducer",
      link: "https://www.hamdaoui.com",
    },
  ],
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signin: (state, action) => {
      return action.payload;
    },
    getAdmin: (state, action) => {
      return action.payload;
    },
    setAdsReducer: (state, action) => {
      return action.payload;
    },
    setAdsReducer: (state, action) => {
      return {
        ...state,
        ads: [...state.ads, action.payload],
      };
    },
  },
});

export const { signin, getAdmin, setAdsReducer } = adminSlice.actions;
export default adminSlice.reducer;
