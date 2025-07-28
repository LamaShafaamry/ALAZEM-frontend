import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import patientProfileReducer from './patientProfileSlice';
import MyDonationsSlice from './myDonationSlice';
import MyAppointmentsSlice from './myAppointmentSlice';
import doctorProfileSlice from './doctorProfileSlice';
import doctorAppointmentsSlice from './doctorAppointmentsSlice';
import volunteerProfileSlice from './volunteerProfileSlice';
import addNoteSlice from './addNoteSlice';
import  getVolunteerSlice from './getVolunteerNotesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patientProfile: patientProfileReducer,
    myDonation: MyDonationsSlice,
    myAppointments: MyAppointmentsSlice,
    doctorProfile : doctorProfileSlice,
    doctorAppointments : doctorAppointmentsSlice,
    volunteerProfile : volunteerProfileSlice,
    notes : addNoteSlice,
    volunteernotes : getVolunteerSlice,
  },
})

