import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./parentReducer";
import consultantSlice from "./consultantReducer";
import adminSlice from "./adminReducer";
import adSlice from "./adReducer";

const store = configureStore({
  reducer: {
    parent: parentSlice,
    consultant: consultantSlice,
    admin: adminSlice,
    ad: adSlice,
  },
});
export default store;
