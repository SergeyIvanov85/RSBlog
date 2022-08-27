import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
/*import postSlice from "./features/post/postSlice";*/

const store = configureStore({
  reducer: {
    auth: authSlice,
    /*post: postSlice,*/
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;