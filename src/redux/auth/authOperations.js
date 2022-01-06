import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

const register = createAsyncThunk('auth/register', credentials =>
  api.loginUser('/users/signup', credentials),
);

const login = createAsyncThunk('auth/login', credentials =>
  api.loginUser('/users/login', credentials),
);

const logout = createAsyncThunk('auth/logout', token =>
  api.logoutUser('/users/logout', token),
);

const fetchCurrentUser = createAsyncThunk('auth/refresh', (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;

  if (!persistToken) thunkAPI.rejectWithValue();

  return api.takeCurrentUser('/users/current', persistToken);
});

const operations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default operations;
