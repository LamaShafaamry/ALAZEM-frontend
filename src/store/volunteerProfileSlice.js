// store/patientProfileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getVolunteerProfile } from '../api/api';
// Async thunk for fetching profile
export const fetchVolunteerProfile = createAsyncThunk(
  'volunteerProfile/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getVolunteerProfile()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const volunteerProfileSlice = createSlice({
  name: 'volunteerProfile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVolunteerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVolunteerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchVolunteerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default volunteerProfileSlice.reducer;
