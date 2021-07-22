import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

export type AUTH_PROPS = {
    isAuthenticated: boolean
}

const initialState: AUTH_PROPS = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authManagement',
    initialState: initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = !state.isAuthenticated;
        },
        logout(state) {
            state.isAuthenticated = !state.isAuthenticated;
        }
    }
});

export const authActions = authSlice.actions;
export type AuthState = ReturnType<typeof store.getState>
export default authSlice;