import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

export type DIALOG_PROPS = {
	dialogOpened: boolean,
	dialogActiveRef: string
}

const initialState: DIALOG_PROPS = {
	dialogOpened: false,
	dialogActiveRef: ''
}

const dialogSlice = createSlice({
	name: 'dialogManagement',
	initialState,
	reducers: {
		close(state) {
			state.dialogOpened = !state.dialogOpened;
			state.dialogActiveRef = '';
		},
		open(state, action) {
			state.dialogOpened = !state.dialogOpened;
			state.dialogActiveRef = action.payload;
		}
	}
});

export const dialogActions = dialogSlice.actions;
export type DialogState = ReturnType<typeof store.getState>

export default dialogSlice;