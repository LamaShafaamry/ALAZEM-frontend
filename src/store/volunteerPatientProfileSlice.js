// store/patientProfileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getVolunteerPatientProfile } from '../api/api';
// Async thunk for fetching profile
export const fetchVolunteerPatientProfile = createAsyncThunk(
  'volunteerpatientProfile/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getVolunteerPatientProfile()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const volunteerpatientProfileSlice = createSlice({
  name: 'volunteerpatientProfile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVolunteerPatientProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVolunteerPatientProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchVolunteerPatientProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default volunteerpatientProfileSlice.reducer;
