import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./parentReducer";
import consultantSlice from "./consultantReducer";
import adminSlice from "./adminReducer";

const store = configureStore({
  reducer: {
    parent: parentSlice,
    consultant: consultantSlice,
    admin: adminSlice,
  },
});
export default store;
