// import {getManagerAppointmentsProfile} from '../api/api';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// export const fetchManagerAppointments = createAsyncThunk(
//   'managerAppointments/fetch',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response =await getManagerAppointmentsProfile()
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'حدث خطأ');
//     }
//   }
// );

// const ManagerAppointmentsSlice = createSlice({
//   name: 'managerAppointments',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchManagerAppointments.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchManagerAppointments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         console.log(action.payload)
//       })
//       .addCase(fetchManagerAppointments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default ManagerAppointmentsSlice.reducer;
