import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const activeDataSlice = createSlice({
  name: "activeData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = activeDataSlice.actions;

export default activeDataSlice.reducer;
