import { configureStore } from "@reduxjs/toolkit";
import { postsApiSlice } from "./postSlice.ts";
import userReducer from "./logInSlice.ts";

export const store = configureStore({
  reducer: {
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
