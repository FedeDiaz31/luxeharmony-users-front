import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            return state.push(action.payload);
        },
        removeItem(state, action) {

        }

    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;