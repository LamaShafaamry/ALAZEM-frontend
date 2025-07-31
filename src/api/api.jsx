import axios from "axios";
import { data } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:8000",
  // headers: {
  //   Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  // },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (username, password) =>
  axios.post("http://127.0.0.1:8000/users/login/", { username, password })
    .then((response) => {
      sessionStorage.setItem("accessToken", response.data.access);
      return response;
    });
// Patients
export const getPatients = (status_filter,name) => api.get(`/services/patients/get/?status_filter=${status_filter}&name=${name}`);
export const getPatientProfile = () => api.get("/services/patient-profile/get/");
export const getMyAppointments = () => api.get("services/get/patient/appointments/");
export const createPatient = (data) => api.post("/patients/create/", data);
export const updatePatient = (data) => api.post("/patients/update/", data);
export const getMyDonations = () => api.get("services/my-donation/get");
export const cancelMyAppointment = (id) => api.get(`/services/cancel/appointment/${id}/`);
export const  changePatientStatus= (id, data) => api.post(`/services/change_patient_status/${id}/`, data);


// volunteer
export const  getAllVolunteer= (status_filter , name) => api.get(`/users/volunteer/get/?status_filter=${status_filter}&name=${name}`);
export const getVolunteerProfile = () => api.get("/users/volunteer-profile/get/");
export const volunteerRegistration = (data) => api.post("/users/volunteer/create/" , data);
export const updateVolunteer = (data) => api.post("/users/volunteer/update/" , data);
export const withdrawalequest = (data) => api.post("/users/withdrawal/request/" , data);
export const getNotes = (patient_id , volunteer_id) => api.get(`/users/notes/get/?patient_id=${patient_id}&volunteer_id=${volunteer_id}`);
export const addNotes = (data) => api.post("/users/notes/add/", data);
export const updateNotes = (id, data) => api.post(`/users/edit/notes/${id}`, data);
export const assignVolunteer = ( data) => api.post(`/users/assign/`, data);
export const  changeVolunteertStatus= (id, data) => api.post(`/users/change-volunteer-status/${id}`, data);

// Doctors
// export const getDoctors = () => api.get("/doctors/get/");
// export const createDoctor = (data) => api.post("/doctor/create/", data);
// export const updateDoctor = (data) => api.post("/doctor/update/", data);
export const getDoctorProfile = () => api.get("/services/doctor-profile/get/");
export const getDoctorAppointments = () => api.get("/services/doctor/appointments/");
export const addMedicalRepoer = (id ,data) => api.post(`services/appointments/${id}/medical-report/`, data);
export const changeAppointmentStatus = (id ,data) => api.post(`services/appointments/${id}/status/`, data);
export const  changeDoctorStatus= (id, data) => api.post(`/services/change/doctor/status/${id}`, data);

export const  getVolunteerPatientProfile= () => api.get(`/users/get/volunteer/patient/profile/`);
export const  verifyAccount= ( data) => api.post(`/users/auth/varify-account/`, data);


// Appointments
// export const createAppointment = (data) => api.post("/api/appointments/", data);
// export const getDoctorAppointments = (doctorId) =>
//   api.get(`/api/appointments/?doctor_id=${doctorId}`);
export const approveAppointment = (id, action) =>
  api.post(`/api/appointments/approve/${id}/`, { action });

// Users
export const getUsers = () => api.get("/users/get/");

// Auth
// export const login = (username, password) =>
//   axios.post("http://127.0.0.1:8000/users/login/", { username, password });

// Custom for ManagerPage
export const getManagerProfile = () => api.get("/users/manager-profile/get/");
export const getDoctorsList = (doctor_status,name) => api.get(`/services/doctors/get/?doctor_status=${doctor_status}&name=${name}`)
export const getPendingPatientsList = () => api.get("/services/patients/get/?status_filter=pending");
export const getPendingDoctorsList = (status_filter, name) => api.get(`/services/doctors/get/?status_filter=${status_filter}&name=${name}`);
export const getPendingVolunteerList = () => api.get("/users/volunteer/get/?status_filter=pending");
export const getRegistrationPatientsList = () => api.get("/services/patients/get/?status_filter=registered");
export const getAllAppointments = (patient_id, doctor_id) => api.get(`/services/appointment/get/?patient_id=${patient_id}&doctor_id=${doctor_id}`);
// Service Appointments
 export const createServiceAppointment = (data) => api.post("/services/api/create/appointments/", data);

  // دوال المواعيد

export const updateAppointmentStatus = (id, data) =>
  api.patch(`/services/appointments/${id}/status/`, data);

export const updateMedicalReport = (id, report) =>
  api.post(`/services/appointments/${id}/medical-report/`, { report });



  // دوال التبرعات
export const createDonation = (data) => api.post("/donations/donation/create/", data);
export const verifyPatientExist = (data) => api.post("/donations/varify-selected-patient/donation/", data);


export const getPendingDonations = () => api.get("/donations/get/donation/?status=pending");
export const changeDonationStatus = (donationId, donation_status) => api.post(`/donations/change/donation/status/${donationId}`, donation_status);
export const getManagerDonations = (type_param) => api.get(`/donations/get/donation/?type_param=${type_param}`);

export const getUsesrs = (name,role,email) => api.get(`/services/users/get/?name=${name}&role=${role}&email=${email}`);



export default api;
