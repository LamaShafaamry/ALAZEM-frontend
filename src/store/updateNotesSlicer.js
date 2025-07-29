import {updateNotes} from '../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchUpdateNotes = createAsyncThunk(
  'updatenotes/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await updateNotes()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const UpdateNotesSlice = createSlice({
  name: 'notes',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdateNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpdateNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchUpdateNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default UpdateNotesSlice.reducer;
