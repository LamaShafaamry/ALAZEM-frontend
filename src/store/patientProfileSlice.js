// store/patientProfileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getPatientProfile } from '../api/api';
// Async thunk for fetching profile
export const fetchPatientProfile = createAsyncThunk(
  'patientProfile/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getPatientProfile()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const patientProfileSlice = createSlice({
  name: 'patientProfile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatientProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatientProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchPatientProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default patientProfileSlice.reducer;
