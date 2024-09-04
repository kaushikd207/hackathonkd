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
    editData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    deleteData: (state) => {
      state.data = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, editData, deleteData, setAllData } =
  activeDataSlice.actions;

export default activeDataSlice.reducer;
