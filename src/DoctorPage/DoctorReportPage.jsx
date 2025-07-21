import React, { useState, useEffect } from 'react';
import "./DoctorReportPage.css";

const DoctorReportPage = () => {
  const [currentDoctor, setCurrentDoctor] = useState({
    id: 1,
    name: "دكتور أحمد محمد",
    specialty: "قلب",
    phone: "0512345678",
    email: "doctor@example.com"
  });

  const [currentPatient, setCurrentPatient] = useState({
    id: 1,
    name: "محمد علي",
    medicalNumber: "P12345",
    phone: "0512345678"
  });

  const [report, setReport] = useState({
    date: new Date().toISOString().split('T')[0],
    diagnosis: "",
    treatment: "",
    notes: "",
    followUpDate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReport(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة كود لإرسال التقرير إلى الخادم
    console.log("تقرير الطبيب:", report);
    alert("تم حفظ التقرير بنجاح");
  };

  return (
    <div className="doctor-page">
      {/* Navbar */}
      <nav className="doctor-navbar">
        <div className="navbar-brand">
          <i className="fas fa-clinic-medical"></i>
          نظام إدارة العيادة
        </div>
        <div className="nav-user">
          <div className="user-info">
            <span className="user-name">{currentDoctor.name}</span>
            <span className="user-role">طبيب {currentDoctor.specialty}</span>
          </div>
        </div>
      </nav>

      {/* محتوى الصفحة */}
      <div className="doctor-header">
        <h2>تقرير طبي</h2>
      </div>

      <div className="report-container">
        <div className="report-header">
          <div className="doctor-info">
            <h3>الطبيب: {currentDoctor.name}</h3>
            <p>التخصص: {currentDoctor.specialty}</p>
          </div>
          <div className="patient-info">
            <h3>المريض: {currentPatient.name}</h3>
            <p>رقم الملف: {currentPatient.medicalNumber}</p>
          </div>
          <div className="report-date">
            <p>تاريخ التقرير: {new Date(report.date).toLocaleDateString('ar-EG')}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="report-form">
          <div className="form-section">
            <h4>التشخيص</h4>
            <textarea
              name="diagnosis"
              value={report.diagnosis}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
              required
              placeholder="أدخل التشخيص الطبي..."
            ></textarea>
          </div>

          <div className="form-section">
            <h4>العلاج الموصوف</h4>
            <textarea
              name="treatment"
              value={report.treatment}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
              required
              placeholder="أدخل العلاج الموصوف..."
            ></textarea>
          </div>

          <div className="form-section">
            <h4>ملاحظات إضافية</h4>
            <textarea
              name="notes"
              value={report.notes}
              onChange={handleInputChange}
              className="form-control"
              rows="3"
              placeholder="أي ملاحظات إضافية..."
            ></textarea>
          </div>

          <div className="form-section">
            <h4>موعد المتابعة</h4>
            <input
              type="date"
              name="followUpDate"
              value={report.followUpDate}
              onChange={handleInputChange}
              className="form-control"
              min={report.date}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save"></i> حفظ التقرير
            </button>
            <button type="button" className="btn btn-secondary">
              <i className="fas fa-print"></i> طباعة التقرير
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorReportPage;