import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialog"

const store = configureStore({
	reducer: {
		dialog: dialogSlice.reducer
	}
});

export default store;