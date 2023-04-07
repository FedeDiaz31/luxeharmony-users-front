import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const showLoginSlice = createSlice({
  name: "showLogin",
  initialState,
  reducers: {
    toggle(state, action) {
      return !state;
    },
  },
});

export const { toggle } = showLoginSlice.actions;
export default showLoginSlice.reducer;
