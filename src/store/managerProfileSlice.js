// store/patientProfileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getManagerProfile } from '../api/api';
// Async thunk for fetching profile
export const fetchManagerProfile = createAsyncThunk(
  'managerProfile/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getManagerProfile()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const ManagerProfileSlice = createSlice({
  name: 'managerProfile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManagerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchManagerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchManagerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ManagerProfileSlice.reducer;
