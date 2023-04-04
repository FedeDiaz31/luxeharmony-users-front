import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getCategories(state, action) {
            return action.payload;
        },
    },
});

export const { getCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;