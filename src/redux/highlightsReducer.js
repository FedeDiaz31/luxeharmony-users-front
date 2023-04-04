import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const highlightsSlice = createSlice({
    name: "highlights",
    initialState,
    reducers: {
        getHighlights(state, action) {
            return action.payload;
        },
    },
});

export const { getHighlights } = highlightsSlice.actions;
export default highlightsSlice.reducer;