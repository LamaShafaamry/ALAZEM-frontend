import "./VolunteerProfile.css";

import "./VolunteerProfile.css";
import HomePage from "../App";

import { Button, Modal, Input } from "antd";

import React, { useState, useEffect } from "react";
import UserNavbar from "../PaseLayOut/userNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolunteerProfile } from "../store/volunteerProfileSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Paper,
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

const VolunteerProfile = () => {
  const [currentView, setCurrentView] = useState("appointments");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [modal2Open, setModal2Open] = useState(false);
  const [withdrawReason, setWithdrawReason] = useState(""); // Step 1: State to hold input
  const { TextArea } = Input;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: volunteerInfo,
    loading,
    error,
  } = useSelector((state) => state.volunteerProfile);

  useEffect(() => {
    dispatch(fetchVolunteerProfile());
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
  console.log(volunteerInfo);

  if (!volunteerInfo) {
    return null;
  }

  //   return (
  //     <div className="volunteer-profile-container">
  //         <br></br>
  //       <div className="volunteer-profile-card">
  //         {/* Header Section */}
  //         <div className="volunteer-header">
  //           <div className="volunteer-avatar">
  //             <img src="https://via.placeholder.com/150" alt="صورة المتطوع" />
  //           </div>
  //           <div className="volunteer-title">
  //             <h1>{volunteerInfo.name}</h1>
  //             <h2>{volunteerInfo.position}</h2>
  //             <div className="volunteer-meta">
  //               <span className="join-date">{volunteerInfo.joinDate}</span>

  //             </div>
  //           </div>
  //         </div>

  //         {/* Main Content */}
  //         <div className="volunteer-content">
  //           {/* Left Column - Main Info */}
  //           <div className="volunteer-main-info">

  //           </div>

  //           {/* Right Column - Sidebar */}
  //           <div className="volunteer-sidebar">
  //             <div className="sidebar-section contact-info">
  //               <h3 className="sidebar-title">معلومات الاتصال</h3>
  //               <div className="contact-item">
  //                 <span className="contact-icon">📞</span>
  //                 <span>{volunteerInfo.phone}</span>
  //               </div>
  //               <div className="contact-item">
  //                 <span className="contact-icon">✉️</span>
  //                 <span>{volunteerInfo.email}</span>
  //               </div>

  //             </div>

  //             <div className="sidebar-section working-hours">
  //               <h3 className="sidebar-title">ساعات التطوع</h3>
  //               <ul className="hours-list">
  //                 {volunteerInfo.workingHours.map((hour, index) => (
  //                   <li key={index}>{hour}</li>
  //                 ))}
  //               </ul>
  //             </div>

  //             <div className="sidebar-section education">
  //               <h3 className="sidebar-title">المؤهلات العلمية</h3>
  //               <ul className="education-list">
  //                 {volunteerInfo.education.map((edu, index) => (
  //                   <li key={index}>
  //                     <span className="education-icon">🎓</span>
  //                     {edu}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>

  //           </div>
  //         </div>

  //         {/* Footer */}
  //         <div className="volunteer-footer">
  //           <p>© {new Date().getFullYear()} جمعية الإغاثة الطبية. جميع الحقوق محفوظة.</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="doctor-profile-container">
      <div className="doctor-profile-card">
        {/* Header Section */}
        <div className="doctor-header">
          <div className="doctor-avatar">
            <img src="Photos/user-default.png" alt="صورة الطبيب" />
          </div>
          <div className="doctor-title">
            <h1>
              {volunteerInfo.first_name} {volunteerInfo.last_name}
            </h1>
            <p>متطوع</p>
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
          {volunteerInfo.first_name} {volunteerInfo.last_name}
        </span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>🎓 الشهادة: </span>
        <span>{volunteerInfo.certificate}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>📅 مكان وتاريخ الولادة: </span>
        <span>
          {volunteerInfo.place_of_birth} - {volunteerInfo.date_of_birth}
        </span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>🌍 الجنسية: </span>
        <span>{volunteerInfo.nationality}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>🏠 العنوان: </span>
        <span>{volunteerInfo.address || "غير محدد"}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>📞 رقم الهاتف: </span>
        <span>{volunteerInfo.phone}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>✉️ البريد الإلكتروني: </span>
        <span>{volunteerInfo.email}</span>
      </div>
    </div>

    {/* Additional Info Section */}
    <div className="sidebar-section contact-info" style={{ flex: 1, minWidth: "300px" }}>
      <h3 className="sidebar-title">المعلومات الإضافية</h3>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>👵 اسم الأب: </span>
        <span>{volunteerInfo.father_name}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>👵 اسم الأم: </span>
        <span>{volunteerInfo.mother_name}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>🧾 الرقم الوطني: </span>
        <span>{volunteerInfo.nationality_ID || "غير متوفر"}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>🏢 المهنة: </span>
        <span>{volunteerInfo.job || "غير محددة"}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>📚 الجمعيات السابقة: </span>
        <span>{volunteerInfo.previously_affiliated_associations || "لا يوجد"}</span>
      </div>
      <div className="contact-item">
        <span style={{ fontWeight: "bold" }}>📋 التاريخ الطبي العائلي: </span>
        <span>{volunteerInfo.grand_history || "لا يوجد"}</span>
      </div>
      
    </div>
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

export default VolunteerProfile;
