import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RequestPage.css";

function RequestPage() {
  return (
    <div className="request-page-container2">
      <div className="request-wrapper2">
        <h2>إرسال طلب جديد</h2>
        <p>اختر نوع الطلب</p>
        
        <div className="button-group">
          <Link to="/patient-request" className="w-100">
            <button className="patient-btn">تسجيل مريض</button>
          </Link>
          <Link to="/volunteer-request" className="w-100">
            <button className="volunteer-btn">طلب تطوع</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;