import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    firstName: "Ali",
    lastName: "Hamdaoui",
    email: "ali@gmail.com",
    password: "azerty123456",
    confirmPassword: "azerty123456",
    phone: 99100200,
    address: {
      street: "streeeeet",
      zipCode: 2052,
      city: "ciiiiiity",
      state: "staaaaaate",
    },
    category: "parent",
    civil: "maried",
    job: "the job",
    familyMembers: 5,
    demandes: "HEEEEEEELP",
  },
];

const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    signParent: (state, action) => {
      const newParent = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newParent];
    },
    signin: (state, action) => {
      return action.payload;
    },
    setParent: (state, action) => {
      return action.payload;
    },
  },
});

export const { signParent, signin } = parentSlice.actions;
export default parentSlice.reducer;
