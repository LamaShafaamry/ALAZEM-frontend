// store/patientProfileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getDoctorProfile } from '../api/api';
// Async thunk for fetching profile
export const fetchDoctorProfile = createAsyncThunk(
  'doctorProfile/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getDoctorProfile()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const doctorProfileSlice = createSlice({
  name: 'doctorProfile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchDoctorProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default doctorProfileSlice.reducer;
