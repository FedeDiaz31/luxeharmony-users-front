import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addItem(state, action) {
            return state.push(action.payload);
        },
        removeItem(state, action) {

        }

    },
});

export const { login, logOut, edit } = userSlice.actions;
export default userSlice.reducer;