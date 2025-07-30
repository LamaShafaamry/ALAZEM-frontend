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
import updateNotesSlice from './updateNotesSlicer';
import AddMedicalReportSlice from "./addMedicalReportSlice";
import volunteerpatientProfileSlice from "./volunteerPatientProfileSlice";
import ManagerProfileSlice from "./managerProfileSlice";
// import ManagerAppointmentsSlice from "./managerAppointmentsSlice";
// import CreateAppointmentsSlice from "./createAppointmentSlice";
// import GetDonationsSlice from "./getDonationsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    patientProfile: patientProfileReducer,
    myDonation: MyDonationsSlice,
    myAppointments: MyAppointmentsSlice,
    doctorProfile : doctorProfileSlice,
    doctorAppointments : doctorAppointmentsSlice,
    volunteerProfile : volunteerProfileSlice,
    addnotes : addNoteSlice,
    volunteernotes : getVolunteerSlice,
    updateNotes: updateNotesSlice,
    addMedicalReport :AddMedicalReportSlice,
   volunteerpatientProfile : volunteerpatientProfileSlice,
   managerProfile : ManagerProfileSlice,
  //  managerAppointments: ManagerAppointmentsSlice,
  //  createAppointments:CreateAppointmentsSlice,
  // getDonationsSlice : GetDonationsSlice,
  },
})

