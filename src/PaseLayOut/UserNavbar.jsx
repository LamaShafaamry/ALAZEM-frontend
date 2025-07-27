import React from "react";
import { useNavigate } from 'react-router-dom';
// import { Donation } from '../PatientPage/PatientPage'
import DonationHistory from "../PatientPage/DonationHistory";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const scrollToHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // العودة لأعلى الصفحة
};



function UserNavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {

    dispatch(logout());
    navigate('/'); // or any route you prefer
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate('/')}>الصفحة الرئيسية</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate("/patient-page")}>الملف الشخصي</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() =>  navigate("/appointments")}>المواعيد</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate('/donations')}>التبرعات</button>
            </li>
           <li className="nav-item">
            <button className="nav-link btn btn-link"  onClick ={()=> handleLogout()}>تسجيل الخروج</button>

           </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;


function Donations() {
  return (
    <DonationHistory />
  );
}