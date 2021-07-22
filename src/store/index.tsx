import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialog"
import usersSlice from "./users";
import authSlice from "./auth";

const store = configureStore({
	reducer: {
		dialog: dialogSlice.reducer,
		users: usersSlice.reducer,
		auth: authSlice.reducer
	}
});

export default store;