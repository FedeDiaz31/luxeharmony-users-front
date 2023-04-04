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

      console.log(current(state));
      if (matchInCart) {
        return state.map((detail) => {
          if (detail.product.slug === action.payload.product.slug) {
            return { product: action.payload.product, quantity: action.payload.quantity + 1, fixedPrice: action.payload.fixedPrice };
          } else {
            return detail;
          }
        });
      } else {
        return [...state, { product: action.payload, quantity: 1, fixedPrice: action.payload.price }];
      }

    },
    removeProduct(state, action) {
      if (action.payload.quantity > 1) {
        return state.map((detail) => {
          if (detail.product.slug === action.payload.product.slug) {
            return { product: action.payload.product, quantity: action.payload.quantity - 1 };
          } else {
            return detail.product;
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
