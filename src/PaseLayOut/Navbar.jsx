import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from 'react-router-dom';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const scrollToHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // العودة لأعلى الصفحة
};

function Navbar() {
          const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleLogout = () => {

    dispatch(logout());
    navigate('/'); // or any route you prefer
  };
  const ProfileNavigation = () =>{
    var role = sessionStorage.getItem('role');
    if (role == "PAT") {
      navigate("/patient-page")
    }
    if (role == "DOC") {
      navigate("/doctor-page")
    }
    if (role == "VOL") {
      navigate("/volunteer-page")
    }
    if (role == "MAN") {
      navigate("/manager-profile")
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={scrollToHome}>الصفحة الرئيسية</button>
            </li>
             {sessionStorage.getItem('accessToken') ? 

                  (
                    <>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => ProfileNavigation()}>ملفي الشخصي</button>
            </li>
            </>
                  ):
                  (
                    <></>
                  )
                }
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => document.getElementById('goals-section')?.scrollIntoView({ behavior: 'smooth' })}>الخدمات</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => document.getElementById('activity-section')?.scrollIntoView({ behavior: 'smooth' })}>النشاطات</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => document.getElementById('donations-section')?.scrollIntoView({ behavior: 'smooth' })}>تبرع</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>تواصل معنا</button>
    
            </li>
            <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() =>navigate("/request")}>ارسل طلب</button>
                  
            </li>

            <li className="nav-item">
                 {!sessionStorage.getItem('accessToken') ? 

                  (
                    <>
                    <button className="nav-link btn btn-link" onClick={() =>navigate("/signin")}>تسجيل الدخول</button>
                  </>
                  ) : (
                    <>
                   
                    <button className="nav-link btn btn-link"  onClick ={()=> handleLogout()}>تسجيل الخروج</button>
                    </>
                  )
                  }
                  </li>
          </ul>
          
        </div>
        
      </div>
      <a className="navbar-brand" href="#" onClick={scrollToHome}>
      
          <img 
            src="Photos/logo.jpg" 
            alt="جمعية العزم" 
            width="60" 
            height="60" 
            className="d-inline-block align-top me-2"
          />
         
        </a>

    </nav>
  );
}

export default Navbar;