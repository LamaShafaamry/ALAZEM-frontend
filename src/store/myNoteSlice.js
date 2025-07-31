import {getNotes} from '../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchMyNotes = createAsyncThunk(
  'myNotes/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await getNotes()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const MyNotesSlice = createSlice({
  name: 'myNotes',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchMyNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default MyNotesSlice.reducer;
