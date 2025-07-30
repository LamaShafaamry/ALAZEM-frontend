// import {getDonations} from '../api/api';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// export const fetchGetDonations = createAsyncThunk(
//   'getDonations/fetch',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response =await getDonations()
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'حدث خطأ');
//     }
//   }
// );

// const GetDonationsSlice = createSlice({
//   name: 'getDonations',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchGetDonations.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchGetDonations.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         console.log(action.payload)
//       })
//       .addCase(fetchGetDonations.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default GetDonationsSlice.reducer;
