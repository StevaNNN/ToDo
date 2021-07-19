import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

export type FORM_PROPS = {
	firstName: string,
	lastName: string,
	email: string,
	password: string | number
}

const initialState : FORM_PROPS = {
	firstName: '',
	lastName: '',
	email: '',
	password: ''
}

const formSlice = createSlice({
	name: 'formManagement',
	initialState,
	reducers: {
		signIn(state,action) {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.email = action.payload.email;
			state.password = action.payload.password;
		},
		signUp(state, action) {
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.firstName = '';
			state.lastName = '';
		}
	}
})

export const formActions = formSlice.actions;
export type FormState = ReturnType<typeof store.getState>

export default formSlice;