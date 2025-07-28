import {getNotes} from '../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchVolunteerNotes = createAsyncThunk(
  'notes/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getNotes()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const VolunteerNotesSlice = createSlice({
  name: 'volunteernotes',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVolunteerNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVolunteerNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchVolunteerNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default VolunteerNotesSlice.reducer;
