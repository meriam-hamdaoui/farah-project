import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    childFName: "zakria",
    childLName: "zakria",
    gender: "garçon",
    birthDate: "01/01/2015",
    diagnosis: {
      disorder: "disorder 1",
      establishment: "hopital",
      date: "01/01/2018",
    },
    integration: {
      integrated: true,
      school: "ecole primaire",
    },
    inscritDate: "01/01/2021",
  },
];

const childSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    setChild: (state, action) => {
      return action.payload;
    },
    addChild: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { setChild } = childSlice.actions;
export default childSlice.reducer;
