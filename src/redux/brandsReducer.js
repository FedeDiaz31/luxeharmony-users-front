import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const brandsSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        getBrands(state, action) {
            return action.payload;
        },
    },
});

export const { getBrands } = brandsSlice.actions;
export default brandsSlice.reducer;