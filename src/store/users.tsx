import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

export interface USER {
	firstName: string,
	lastName: string,
	email: string;
	password: string;
}

const initialState = [
	{
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	}
]

const usersSlice = createSlice({
	name: 'dialogManagement',
	initialState: initialState,
	reducers: {
		addNew(state, action) {
			return [...state, action.payload]
		}
	}
});

export const usersActions = usersSlice.actions;
export type UsersState = ReturnType<typeof store.getState>

export default usersSlice;