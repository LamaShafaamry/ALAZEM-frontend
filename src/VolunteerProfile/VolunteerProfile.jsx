import "./VolunteerProfile.css";
import HomePage from "../App";

import { Button, Modal,Input } from 'antd';


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

const VolunteersSection = () => {
  const [currentView, setCurrentView] = useState("appointments");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [modal2Open, setModal2Open] = useState(false);
  const [withdrawReason, setWithdrawReason] = useState(""); // Step 1: State to hold input
  const { TextArea } = Input;

  // const handleApprove = (id) => {
  //   setVolunteers(volunteers.map(volunteer =>
  //     volunteer.id === id ? { ...volunteer, status: "مقبول" } : volunteer
  //   ));
  // };

  // const handleReject = (id) => {
  //   setVolunteers(volunteers.map(volunteer =>
  //     volunteer.id === id ? { ...volunteer, status: "مرفوض" } : volunteer
  //   ));
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: profile,
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
  console.log(profile);

  if (!profile) {
    return null;
  }

  return (
    <>
      <UserNavbar />
      <br></br>
      <Box maxWidth="md" mx="auto" mt={6} p={3}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            الملف الشخصي للمتطوع
          </Typography>

          <Grid container spacing={3} mt={2}>
            <ProfileItem
              icon={<AccountCircle />}
              label="الاسم الكامل"
              value={`${profile.first_name} ${profile.last_name}`}
            />
            <ProfileItem
              icon={<Email />}
              label="البريد الإلكتروني"
              value={profile.email}
            />
            <ProfileItem
              icon={<Phone />}
              label="رقم الهاتف"
              value={profile.phone}
            />
            {/* <ProfileItem icon={<Public />} label="الاختصاص" value={profile.speciality} /> */}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/edit-profile")}
              size="large"
            >
              تعديل الملف
            </Button>
            <br></br>
            <br></br>
            <Button type="primary" onClick={() => setModal2Open(true)}>
        طلب انسحاب
      </Button>
      <Modal
  title={
    <div style={{ textAlign: "center", width: "100%", fontWeight: "bold" }}>
      تأكيد طلب الانسحاب
    </div>
  }  centered
  open={modal2Open}
  onCancel={() => setModal2Open(false)}
  footer={
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Button
        onClick={() => setModal2Open(false)}
        style={{ backgroundColor: "white", borderColor: "orange", color: "orange", width: "100px" }}
      >
        إلغاء
      </Button>
      <Button
        onClick={() => {
          // You can also trigger the withdraw action here if needed
          setModal2Open(false);
        }}
        style={{ backgroundColor: "orange", borderColor: "orange", color: "white", width: "100px" }}
      >
        تأكيد
      </Button>
    </div>
  }
>
  <br></br>
  <p>هل أنت متأكد من أنك تريد تقديم طلب انسحاب؟</p>
  <p>الرجاء كتابة السبب:</p>
  <Input.TextArea
    rows={4}
    placeholder="اكتب السبب هنا..."
    value={withdrawReason}
    onChange={(e) => setWithdrawReason(e.target.value)}
  />
</Modal>



          {/* <Modal
  title="تأكيد طلب الانسحاب "
  // visible={addModalVisible}
  onCancel={() => setAddModalVisible(false)}
  footer={
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Button
        onClick={() => setAddModalVisible(false)}
        style={{ backgroundColor: "white", borderColor: "orange", color: "orange", width: "100px" }}
      >
        إلغاء
      </Button>
      <Button
        // onClick={handleAddNote}
        style={{ backgroundColor: "orange", borderColor: "orange", color: "white", width: "100px" }}
      >
        تأكيد
      </Button>
    </div>
  }
>
  <TextArea
    rows={4}
    // value={newNoteContent}
    onChange={(e) => setNewNoteContent(e.target.value)}
    placeholder="اكتب السبب هنا..."
  />
</Modal> */}

          </Box>
        </Paper>
      </Box>
    </>
  );

  //   return (
  //     <div className="manager-page">
  //             <nav className="doctor-navbar">
  //         <div className="navbar-brand">
  //           <i className="fas fa-clinic-medical"></i>

  //         </div>
  //         <div className="nav-links">
  //         <button
  //   className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
  //   onClick={() => setCurrentView('home')}
  // >
  //   الصفحة الرئيسية
  // </button>
  //           <button
  //             className={`nav-link ${currentView === 'appointments' ? 'active' : ''}`}
  //             onClick={() => setCurrentView('appointments')}
  //           >
  //             المواعيد
  //           </button>

  //         </div>
  //         <div className="nav-user">
  //           <div className="user-info">

  //           </div>
  //         </div>
  //       </nav>
  //       {currentView === 'home' && <HomePage />}
  //       {currentView === 'appointments' && (
  //         <>
  //       <div className="manager-header2">
  //         <h2>
  //           <i className="fas fa-hands-helping"></i>
  //           مرحباً بك       </h2>
  //       </div>

  //       <div className="appointments-management">
  //         <div className="appointments-list">
  //           <table className="table">
  //             <thead>
  //               <tr>
  //                 <th className="text-center">اسم المريض</th>

  //                 <th className="text-center">تاريخ الانضمام</th>
  //                 <th className="text-center"> كتابة التقرير</th>

  //                 <th className="text-center">الانسحاب</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {volunteers.map(volunteer => (
  //                 <tr key={volunteer.id} onClick={() => setSelectedVolunteer(volunteer)}>
  //                   <td className="text-center">{volunteer.name}</td>

  //                   <td className="text-center">{volunteer.joinDate}</td>
  //                   <td className="text-center">
  //                   <div className="action-buttons">
  //                   <button
  //                           className="btn btn-primary btn-sm "
  //                           onClick={(e) => {
  //                             e.stopPropagation();
  //                             handleReject(volunteer.id);
  //                           }}
  //                         >
  //                           كتابة التقرير
  //                         </button>
  //                         </div>
  //                   </td>

  //                   <td className="text-center">
  //                     {volunteer.status === "قيد المراجعة" && (
  //                       <div className="action-buttons">

  //                         <button
  //                           className="btn btn-danger btn-sm reject-btn"
  //                           onClick={(e) => {
  //                             e.stopPropagation();
  //                             handleReject(volunteer.id);
  //                           }}
  //                         >
  //                           انسحاب
  //                         </button>
  //                       </div>
  //                     )}
  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //       </>
  //       )}

  //       {selectedVolunteer && (
  //         <div className="donation-details-modal">
  //           <div className="modal-content">
  //             <div className="modal-header">
  //               <h3 className="modal-title">تفاصيل المتطوع</h3>
  //               <button
  //                 className="close-btn"
  //                 onClick={() => setSelectedVolunteer(null)}
  //               >
  //                 <i className="fas fa-times"></i>
  //               </button>
  //             </div>
  //             <div className="modal-body">
  //               <div className="details-section">
  //                 <h4>المعلومات الشخصية</h4>
  //                 <p><strong>الاسم الكامل:</strong> {selectedVolunteer.name}</p>
  //                 <p><strong>البريد الإلكتروني:</strong> {selectedVolunteer.email}</p>
  //                 <p><strong>رقم الجوال:</strong> {selectedVolunteer.phone}</p>

  //                 <h4>معلومات التطوع</h4>
  //                 <p><strong>تاريخ الانضمام:</strong> {selectedVolunteer.joinDate}</p>
  //                 <p><strong>الحالة:</strong>
  //                   <span className={`status-badge ${
  //                     selectedVolunteer.status === "مقبول" ? "approved" :
  //                     selectedVolunteer.status === "مرفوض" ? "rejected" : "pending"
  //                   }`}>
  //                     {selectedVolunteer.status}
  //                   </span>
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="modal-footer">
  //               <button
  //                 className="btn btn-secondary"
  //                 onClick={() => setSelectedVolunteer(null)}
  //               >
  //                 إغلاق
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>

  //   );
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
export default VolunteersSection;
