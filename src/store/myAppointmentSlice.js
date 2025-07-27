import {getMyAppointments} from '../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchMyAppointments = createAsyncThunk(
  'myAppointments/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getMyAppointments()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const MyAppointmentsSlice = createSlice({
  name: 'myAppointments',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchMyAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default MyAppointmentsSlice.reducer;
