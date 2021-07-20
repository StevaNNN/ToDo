import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialog"
import usersSlice from "./users";

const store = configureStore({
	reducer: {
		dialog: dialogSlice.reducer,
		users: usersSlice.reducer
	}
});

export default store;