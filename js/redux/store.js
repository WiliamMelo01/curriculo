import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./reducers.js";

const store = configureStore({
  reducer: formReducer,
});

export default store;
