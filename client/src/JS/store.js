import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./parentReducer";
import consultantSlice from "./consultantReducer";

const store = configureStore({
  reducer: {
    parent: parentSlice,
    consultant: consultantSlice,
  },
});
export default store;
