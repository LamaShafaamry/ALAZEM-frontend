import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

// Patients
export const getPatients = async () => {
  try {
    const response = await api.get('/patients/get/');
    return response.data; // تغيير هنا من response.data إلى response
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};
export const createPatient = (data) => api.post('/patients/create/', data);
export const updatePatient = (data) => api.post('/patients/update/', data);

// Doctors
export const getDoctors = async () => {
  try {
    const response = await api.get('/doctors/get/');
    return response.data; // تغيير هنا من response.data إلى response
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const createDoctor = (data) => api.post('/doctor/create/', data);
export const updateDoctor = (data) => api.post('/doctor/update/', data);

// Appointments
export const createAppointment = (data) => api.post('/api/appointments/', data);
export const getDoctorAppointments = (doctorId) => api.get(`/api/appointments/?doctor_id=${doctorId}`);
export const approveAppointment = (id, action) => api.post(`/api/appointments/approve/${id}/`, { action });

// Users
export const getUsers = () => api.get('/users/get/');

export default api;