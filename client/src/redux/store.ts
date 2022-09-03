import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import postSlice from "./features/post/postSlice";
import commentSlice from "./features/comments/commentSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    comment: commentSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
