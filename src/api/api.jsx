import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  },
});

// Patients
export const getPatients = () => api.get("/patients/get/");
export const createPatient = (data) => api.post("/patients/create/", data);
export const updatePatient = (data) => api.post("/patients/update/", data);

// Doctors
export const getDoctors = () => api.get("/doctors/get/");
export const createDoctor = (data) => api.post("/doctor/create/", data);
export const updateDoctor = (data) => api.post("/doctor/update/", data);

// Appointments
// export const createAppointment = (data) => api.post("/api/appointments/", data);
// export const getDoctorAppointments = (doctorId) =>
//   api.get(`/api/appointments/?doctor_id=${doctorId}`);
export const approveAppointment = (id, action) =>
  api.post(`/api/appointments/approve/${id}/`, { action });

// Users
export const getUsers = () => api.get("/users/get/");

// Auth
export const login = (username, password) =>
  axios.post("http://127.0.0.1:8000/users/login/", { username, password });

// Custom for ManagerPage
export const getDoctorsList = () => api.get("/services/doctors/get/");
export const getPendingPatientsList = () => api.get("/services/patients/get/?status_filter=pending");

// Service Appointments
 export const createServiceAppointment = (data) => api.post("/services/api/create/appointments/", data);

  // دوال المواعيد
  export const getDoctorAppointments = (doctorId) => 
  api.get(`/services/doctor/appointments/`, {
    params: { doctor_id: doctorId }
  });



export const updateAppointmentStatus = (id, data) =>
  api.patch(`/services/appointments/${id}/status/`, data);

export const updateMedicalReport = (id, report) =>
  api.post(`/services/appointments/${id}/medical-report/`, { report });

export default api;
