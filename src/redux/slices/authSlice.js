import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logoutUser: (state) => {
            localStorage.removeItem("token");
            state.user = {};
            state.token = null;
        }
    },
});

export const { setUser, setToken, logoutUser } = authSlice.actions;

export default authSlice.reducer;