import { configureStore } from "@reduxjs/toolkit";
import activeDataSliceReducer from "./components/Reducers/activeDataSlice";
export const store = configureStore({
  reducer: {
    activeDataSlice: activeDataSliceReducer,
  },
});
