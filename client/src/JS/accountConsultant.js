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
  gender: "female",
  domain: "eduction",
  educations: {
    degree: "degree",
    university: "university",
    graduation: "",
  },
  offers: "I can help",
};

const accountConsSlice = createSlice({
  name: "accountConsultant",
  initialState,
  reducers: {
    setAccountConsultant: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAccountConsultant } = accountConsSlice.actions;
export default accountConsSlice.reducer;
