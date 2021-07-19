import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialog";
import formSlice from  './form';

const store = configureStore({
	reducer: {
		dialog: dialogSlice.reducer,
		form: formSlice.reducer
	}
});

export default store;