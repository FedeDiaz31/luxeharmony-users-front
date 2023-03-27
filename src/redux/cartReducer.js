import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      return [...state, action.payload];
    },
    removeProduct(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    },
    removeAllThisProducts(state, action) {
      return state.filter((product) => product._id !== action.payload._id);
    },
  },
});

export const { addProduct, removeProduct, removeAllThisProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
