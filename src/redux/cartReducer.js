import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const matchInCart = state.some(
        (product) => product._id === action.payload._id
      );
      if (matchInCart) {
        state.map((product) => {
          if (product._id === action.payload._id) {
            return { ...action.payload, quantity: action.payload.quantity + 1 };
          } else {
            return product;
          }
        });
      }

      return [...state, { ...action.payload, quantity: 1 }];
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
