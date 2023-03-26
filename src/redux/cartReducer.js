import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      console.log(action.payload);
      return [...state, action.payload];
    },
    removeProduct(state, action) {
      return state.filter((product) => product._id !== action.payload._id);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
