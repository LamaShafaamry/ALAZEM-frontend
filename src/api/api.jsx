import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
export const createAppointment = (data) => api.post("/api/appointments/", data);
export const getDoctorAppointments = (doctorId) =>
  api.get(`/api/appointments/?doctor_id=${doctorId}`);
export const approveAppointment = (id, action) =>
  api.post(`/api/appointments/approve/${id}/`, { action });

// Users
export const getUsers = () => api.get("/users/get/");

// Auth
export const login = (username, password) =>
  axios.post("http://127.0.0.1:8000/users/login/", { username, password });

export default api;
