// import {createAppointment} from '../api/api';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// export const fetchCreateAppointments = createAsyncThunk(
//   'createAppointments/fetch',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response =await createAppointment()
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'حدث خطأ');
//     }
//   }
// );

// const CreateAppointmentsSlice = createSlice({
//   name: 'createAppointments',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCreateAppointments.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCreateAppointments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         console.log(action.payload)
//       })
//       .addCase(fetchCreateAppointments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default CreateAppointmentsSlice.reducer;
