import {getMyDonations} from '../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchMyDonation = createAsyncThunk(
  'myDonations/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getMyDonations()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const MyDonationsSlice = createSlice({
  name: 'myDonation',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyDonation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyDonation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchMyDonation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default MyDonationsSlice.reducer;
