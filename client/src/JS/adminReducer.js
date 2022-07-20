import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    firstName: "Maya",
    lastName: "Mayouch",
    email: "meriam.hamdaoui@gmail.com",
    password: "",
    confirmPassword: "",
  },
];
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
