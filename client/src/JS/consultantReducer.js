import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      firstName: "zohra",
      lastName: "Hamdaoui",
      email: "zohra@gmail.com",
      password: "azerty123456",
      confirmPassword: "azerty123456",
      phone: 99100200,
      address: {
        street: "streeeeet",
        zipCode: 2052,
        city: "ciiiiiity",
        state: "staaaaaate",
      },
      category: "consultant",
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
  },
];

const consultantSlice = createSlice({
  name: "consultant",
  initialState,
  reducers: {
    signConsultant: (state, action) => {
      const newConsultant = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newConsultant];
    },
    signin: (state, action) => {
      return action.payload;
    },
    setConsultant: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  signConsultant,
  signin,
  setConsultant,
} = consultantSlice.actions;
export default consultantSlice.reducer;
