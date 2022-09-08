import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { IUserAuth, State, AuthResponse, GetMeResponse } from "../../../models";

const initialState: State = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ username, password }:IUserAuth, {rejectWithValue}) => {
    try {
      const { data } = await axios.post<AuthResponse>("/auth/register", {
        username,
        password,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      if(error){
        console.log(rejectWithValue("Registration error!"))
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }: IUserAuth, {rejectWithValue}) => {
    try {
      const { data } = await axios.post<AuthResponse>("/auth/login", {
        username,
        password,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
        console.log(rejectWithValue("Login error!"))
    }
  }
);

export const getMe = createAsyncThunk(
  "auth/getMe", 
  async () => {
  try {
    const { data } = await axios.get<GetMeResponse>("/auth/me");
    return data;
  } catch (error) {
    if(error){
      console.log("Auth error!");
    }
  }
});

export const authSlice = createSlice({
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
    .addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      if(action.payload !== undefined) {
        state.status = action.payload.message;
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    })
    // Login user
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      if(action.payload !== undefined) {
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
      }
    })
    //проверка авторизации
    .addCase(getMe.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    })
    .addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = null;
      if(action.payload !== undefined) {
        state.user = action.payload?.user;
      state.token = action.payload?.token;
      }
    })
}});

export const checkIsAuth = (state: { auth: { token: any; }; }) => Boolean(state.auth.token)

export const {logout} = authSlice.actions;
export default authSlice.reducer;