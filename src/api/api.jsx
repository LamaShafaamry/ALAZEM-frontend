import axios from "axios";

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
export const getPatients = () => api.get("/patients/get/");
export const getPatientProfile = () => api.get("/services/patient-profile/get/");
export const getMyAppointments = () => api.get("services/get/patient/appointments/");
export const createPatient = (data) => api.post("/patients/create/", data);
export const updatePatient = (data) => api.post("/patients/update/", data);
export const getMyDonations = () => api.get("services/my-donation/get");
export const cancelMyAppointment = (id) => api.get(`/services/cancel/appointment/${id}/`);


// volunteer
export const getVolunteerProfile = () => api.get("/users/volunteer-profile/get/");
export const volunteerRegistration = (data) => api.post("/users/volunteer/create/" , data);
export const updateVolunteer = (data) => api.post("/users/volunteer/update/" , data);
export const withdrawalequest = (data) => api.post("/users/withdrawal/request/" , data);
export const getNotes = () => api.get("/users/notes/get/");
export const addNotes = (data) => api.post("/users/notes/add/", data);
export const updateNotes = (id, data) => api.post(`/users/edit/notes/${id}`, data);

// Doctors
// export const getDoctors = () => api.get("/doctors/get/");
// export const createDoctor = (data) => api.post("/doctor/create/", data);
// export const updateDoctor = (data) => api.post("/doctor/update/", data);
export const getDoctorProfile = () => api.get("/services/doctor-profile/get/");
export const getDoctorAppointments = () => api.get("/services/doctor/appointments/");
export const addMedicalRepoer = (id ,data) => api.post(`services/appointments/${id}/medical-report/`, data);
export const changeAppointmentStatus = (id ,data) => api.post(`services/appointments/${id}/status/`, data);


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
export const getDoctorsList = () => api.get("/services/doctors/get/");
export const getPendingPatientsList = () => api.get("/services/patients/get/?status_filter=pending");

// Service Appointments
 export const createServiceAppointment = (data) => api.post("/services/api/create/appointments/", data);

  // دوال المواعيد

export const updateAppointmentStatus = (id, data) =>
  api.patch(`/services/appointments/${id}/status/`, data);

export const updateMedicalReport = (id, report) =>
  api.post(`/services/appointments/${id}/medical-report/`, { report });



  // دوال التبرعات
export const createDonation = (data) => api.post("/donations/donation/create/", data);

  

export const getPendingDonations = () => api.get("/donations/get/donation/?status=pending");
export const approveDonation = (donationId) => 
  api.patch(`/donations/change/donation/status/${donationId}`, { status: "approved" });
export const rejectDonation = (donationId) => 
  api.patch(`/donations/change/donation/status/${donationId}`, { status: "rejected" });
  export const getIndividualDonations = () => api.get("/donations/get/donation/?is_individual=true");

export default api;
