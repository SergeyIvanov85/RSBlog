import { configureStore } from "npm ";
import authSlice from "./features/auth/authSlice";
import postSlice from "./features/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
  },
});
