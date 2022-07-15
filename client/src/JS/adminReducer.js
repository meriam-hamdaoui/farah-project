import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theAdmin: {
    firstName: "Mariem",
    lastName: "Hamdaoui",
    email: "meriam.hamdaoui@gmail.com",
  },
  parents: [{}],
  consultants: [{}],
  children: [{}],
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
    setAds: (state, action) => {
      return action.payload;
    },
  },
});

export const { signin, getAdmin, setAds } = adminSlice.actions;
export default adminSlice.reducer;
