import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            console.log(action.payload);
            console.log(current(state));
            return [...state, action.payload];

        },
        removeProduct(state, action) {

        }

    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;