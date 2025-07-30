import React, { useState, useEffect } from "react";
import "./ManagerPage.css";
// import HomePage from "../App";
// import DoctorReportPage from "./DoctorReportPage";
import UserNavbar from "../PaseLayOut/userNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchManagerProfile } from "../store/managerProfileSlice";
import {
  getDoctorAppointments,
  updateAppointmentStatus,
  updateMedicalReport,
} from "../api/api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import {
  AccountCircle,
  Email,
  Phone,
  Cake,
  Public,
  Badge,
  ContactPage,
} from "@mui/icons-material";

const ManagerProfile = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reportContent, setReportContent] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [activeTab, setActiveTab] = useState("pending");
  const [currentView, setCurrentView] = useState("appointments");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: managerInfo,
    loading,
    error,
  } = useSelector((state) => state.managerProfile);

  useEffect(() => {
    dispatch(fetchManagerProfile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">
        جارٍ تحميل الملف الشخصي...
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }
  console.log(managerInfo);

  if (!managerInfo) {
    return null;
  }

  return (
    <div className="doctor-profile-container">
      <div className="doctor-profile-card">
        {/* Header Section */}
        <div className="doctor-header">
          <div className="doctor-avatar">
            <img src="Photos/user-default.png" alt="صورة المدير" />
          </div>
          <div className="doctor-title">
            <h1>
              {managerInfo.first_name} {managerInfo.last_name}
            </h1>
            <p>مدير</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="doctor-content">
          {/* Left Column - Main Info */}

          {/* Right Column - Sidebar */}
          <div className="doctor-sidebar">
            <div className="doctor-sidebar">
  <div
    className="sidebar-sections-container"
    style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap", // for responsiveness
    }}
  >
    {/* Personal Info Section */}
    <div className="sidebar-section contact-info" style={{ flex: 1, minWidth: "300px" }}>
      <h3 className="sidebar-title">معلوماتي الشخصية</h3>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>👤 الاسم الكامل: </span>
        <span>
          {managerInfo.first_name} {managerInfo.last_name}
        </span>
      </div>
  

      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>📞 رقم الهاتف: </span>
        <span>{managerInfo.phone}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>✉️ البريد الإلكتروني: </span>
        <span>{managerInfo.email}</span>
      </div>
    </div>

    {/* Additional Info Section */}

  </div>
</div>


            <Box textAlign="center">
              <Button
                style={{
                  color: "white",
                  backgroundColor: "orange",
                }}
                variant="contained"
                color="primary"
                onClick={() => navigate("/edit-profile")}
                size="large"
              >
                تعديل الملف
              </Button>
            </Box>
          </div>
        </div>

        {/* Footer */}
        <div className="doctor-footer">
          <p>
            © {new Date().getFullYear()} جمعية العزم للكفيفات المسنات , جميع
            الحقوق محفوظة.
          </p>
        </div>
      </div>
    </div>
  );
};
const ProfileItem = ({ icon, label, value }) => (
  <div className="flex items-center justify-between border-b pb-2">
    <div className="text-gray-600 flex items-center gap-2">
      <span className="text-blue-600">{icon}</span>
      <span className="font-semibold">{label}:</span>
    </div>
    <div className="text-gray-900">{value || "-"}</div>
  </div>
);
export default ManagerProfile;
