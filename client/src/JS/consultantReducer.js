import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
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
    gender: "Male",
    domain: "eduction",
    education: [
      {
        degree: "Master",
        university: "university",
        diploma: "",
      },
    ],
    experiences: [
      {
        title: "Teacher",
        company: "Primary School",
        certificate: "",
      },
    ],
    internships: [
      {
        title: "Teacher",
        company: "Primary School",
        certificate: "",
      },
    ],
    offers: "I can help",
  },
];

const consultantSlice = createSlice({
  name: "consultant",
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
  },
});

export const { signConsultant, signin } = consultantSlice.actions;
export default consultantSlice.reducer;
