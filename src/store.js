import { configureStore } from "@reduxjs/toolkit";
import activeDataSliceReducer from "./components/Reducers/activeDataSlice";
import allDataSliceReducer from "./components/Reducers/allDataSlice";
export const store = configureStore({
  reducer: {
    activeDataSlice: activeDataSliceReducer,
    allDataSlice: allDataSliceReducer,
  },
});
