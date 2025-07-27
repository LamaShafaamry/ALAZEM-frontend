import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginApi } from '../api/api';

const getSessionAuth = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const refreshToken = sessionStorage.getItem('refreshToken');
  const role = sessionStorage.getItem('role');
  return {
    authenticated: !!accessToken,
    accessToken: accessToken || null,
    refreshToken: refreshToken || null,
    role: role || null,
    error: null,
    loading: false,
  };
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await loginApi(username, password);
      // Expecting response.data to have access, refresh, and role
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

const initialState = getSessionAuth();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      logout: (state) => {
      // Clear Redux state
      state.authenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
      state.error = null;
      state.loading = false;

      // Clear session storage
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('role');
    },
  },
  extraReducers: (builder) => {

    
  

    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.authenticated = true;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.role = action.payload.role;
        state.error = null;
        sessionStorage.setItem('accessToken', action.payload.access);
        sessionStorage.setItem('refreshToken', action.payload.refresh);
        sessionStorage.setItem('role', action.payload.role);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      });
  },



});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
