import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addProduct(state, action) {

      const matchInCart = state.some(
        (detail) => detail.product.slug === action.payload.product.slug
      );


      if (matchInCart) {
        /*   console.log(current(state)); */
        return state.map((detail) => {
          if (detail.product.slug === action.payload.product.slug) {
            return { product: action.payload.product, quantity: action.payload.quantity + 1, fixedPrice: action.payload.fixedPrice };
          } else {
            return detail;
          }
        });
      } else {
        console.log(current(state));
        return [...state, action.payload];
      }

    },
    removeProduct(state, action) {
      if (action.payload.quantity > 1) {
        return state.map((detail) => {
          if (detail.product.slug === action.payload.product.slug) {
            return { product: action.payload.product, quantity: action.payload.quantity - 1, fixedPrice: action.payload.fixedPrice };
          } else {
            return detail;
          }
        });
      } else {
        return state.filter((detail) => detail.product._id !== action.payload.product._id);
      }
    },
    removeAllThisProducts(state, action) {
      return state.filter((detail) => detail.product._id !== action.payload.product._id);
    },
  },
});

export const { addProduct, removeProduct, removeAllThisProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
