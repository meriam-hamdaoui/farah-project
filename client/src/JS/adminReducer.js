import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Mareim",
  lastName: "Hamdaoui",
  email: "meriam.hamdaoui@gmail.com",
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signin: (state, action) => {
      return action.payload;
    },
    setAdmin: (state, action) => {
      return action.payload;
    },
  },
});

export const { signin, setAdmin } = adminSlice.actions;
export default adminSlice.reducer;
