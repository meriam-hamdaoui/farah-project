import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id: uuidv4(),
  user: {
    id: uuidv4(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: {
      street: "",
      zipCode: "",
      city: "",
      state: "",
    },
    category: "",
    agrement: "",
  },
  civil: "",
  job: " ",
  familyMembers: 5,
  demandes: "",
};

const accountParSlice = createSlice({
  name: "accountParent",
  initialState,
  reducers: {
    setAccountParent: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAccountParent } = accountParSlice.actions;
export default accountParSlice.reducer;
