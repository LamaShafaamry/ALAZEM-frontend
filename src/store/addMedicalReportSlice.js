import {addMedicalRepoer} from '../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchMedicalReport = createAsyncThunk(
  'addMedicalReport/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response =await addMedicalRepoer()
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ');
    }
  }
);

const AddMedicalReportSlice = createSlice({
  name: 'addMedicalReport',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedicalReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMedicalReport.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchMedicalReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AddMedicalReportSlice.reducer;
