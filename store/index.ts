import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login";
import signUpReducer from "./sign-up";
const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: signUpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
