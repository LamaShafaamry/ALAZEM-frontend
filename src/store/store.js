import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import patientProfileReducer from './patientProfileSlice';
import MyDonationsSlice from './myDonationSlice';
import MyAppointmentsSlice from './myAppointmentSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    patientProfile: patientProfileReducer,
    myDonation: MyDonationsSlice,
    myAppointments: MyAppointmentsSlice,
  },
})

