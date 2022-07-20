import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./parentReducer";
import consultantSlice from "./consultantReducer";
import adminSlice from "./adminReducer";
import adSlice from "./adReducer";
import childSlice from "./childReducer";
import accountParSlice from "./accountParent";
import accountConsultantSlice from "./accountConsultant";

const store = configureStore({
  reducer: {
    parent: parentSlice,
    consultant: consultantSlice,
    admin: adminSlice,
    ad: adSlice,
    child: childSlice,
    accountParent: accountParSlice,
    accountConsultant: accountConsultantSlice,
  },
});
export default store;
