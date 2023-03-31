import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const matchInCart = state.some(
        (product) => product.slug === action.payload.slug
      );
      if (matchInCart) {
        return state.map((product) => {
          if (product.slug === action.payload.slug) {
            return { ...action.payload, quantity: action.payload.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },
    removeProduct(state, action) {
      if (action.payload.quantity > 1) {
        return state.map((product) => {
          if (product.slug === action.payload.slug) {
            return { ...action.payload, quantity: action.payload.quantity - 1 };
          } else {
            return product;
          }
        });
      } else {
        return state.filter((product) => product._id !== action.payload._id);
      }
    },
    removeAllThisProducts(state, action) {
      return state.filter((product) => product._id !== action.payload._id);
    },
  },
});

export const { addProduct, removeProduct, removeAllThisProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
