import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserAuth, IUser, State, Action, LoginResponse} from "../../../models";

const initialState: State = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: IUserAuth) => {
    try {
      const { data } = await axios.post("/auth/register", {user});
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk (
  "auth/loginUser",
  async ({ username, password }: IUserAuth) => {
    try {
      const { data } = await axios.post<LoginResponse>("/auth/login", {
        username,
        password,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMe = createAsyncThunk("auth/loginUser", async () => {
  try {
    const { data } = await axios.get<IUser>("/auth/me");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
    // Register user
    .AddCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    })
    .AddCase(registerUser.fulfilled, (state, action: Action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .AddCase(registerUser.rejected, (state, action: Action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    })
     // Login user
    .AddCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    })
    .AddCase(loginUser.fulfilled, (state, action: Action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .AddCase(loginUser.rejected, (state, action: Action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    })
    //проверка авторизации
    .AddCase(getMe.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    })
    .AddCase(getMe.fulfilled, (state, action: Action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    })
    .AddCase(getMe.rejected, (state, action: Action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    })
  }
});
/*
    // Register user
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
    // Login user
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
    // Проверка авторизации
    [getMe.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getMe.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
    [getMe.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
  },
*/
export const checkIsAuth = (state) => Boolean(state.auth.token);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
function createSlice(arg0: { name: string; initialState: { user: null; token: null; isLoading: boolean; status: null; }; reducers: { logout: (state: any) => void; }; extraReducers: { [x: number]: (state: any, action: any) => void; }; }): void {
  throw new Error("Function not implemented.");
}
