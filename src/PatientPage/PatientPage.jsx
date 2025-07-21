import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PatientPage.css";
import DoctorReportsPage from "./DoctorReportsPage";
import ServicesPage from "./ServicesPage";
import ActivitiesPage from "./ActivitiesPage";
import DonationHistory from "./DonationHistory";
import HomePage from "../App"

const PatientPage = () => {
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [activeTab, setActiveTab] = useState("upcoming");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentNotes, setAppointmentNotes] = useState("");
  const [currentView, setCurrentView] = useState("appointments"); // حالة جديدة للتحكم في العرض

  // Mock patient data
  const currentPatient = {
    id: 1,
    name: "محمد علي",
    medicalNumber: "P12345",
    phone: "0512345678"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockDoctors = [
          { id: 1, name: "دكتور أحمد محمد", specialty: "قلب" },
          { id: 2, name: "دكتور يوسف خالد", specialty: "عظام" },
          { id: 3, name: "دكتورة سارة عبدالله", specialty: "أطفال" },
        ];
        
        const mockAppointments = [
          {
            id: "app1",
            doctor_id: 1,
            doctor_name: "دكتور أحمد محمد",
            date: "2023-06-20T10:00:00",
            status: "approved",
            notes: "كشف دوري على القلب",
            report: ""
          },
          {
            id: "app2",
            doctor_id: 2,
            doctor_name: "دكتور يوسف خالد",
            date: "2023-06-18T14:30:00",
            status: "completed",
            notes: "آلام في الظهر",
            report: "تم التشخيص بوجود انزلاق غضروفي بسيط ووصف العلاج المناسب"
          },
          {
            id: "app3",
            doctor_id: 3,
            doctor_name: "دكتورة سارة عبدالله",
            date: "2023-06-25T11:15:00",
            status: "pending",
            notes: "كشف أولي للطفل",
            report: ""
          }
        ];
        
        setDoctors(mockDoctors);
        setPatientAppointments(mockAppointments);
      } catch (error) {
        showMessage("فشل في تحميل البيانات", "error");
      }
    };
    
    fetchData();
  }, []);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  // ... (بقية الدوال handleRequestAppointment, handleCancelAppointment تبقى كما هي)

  const filteredAppointments = patientAppointments.filter(app => {
    if (activeTab === "upcoming") {
      return ["pending", "approved"].includes(app.status);
    } else if (activeTab === "completed") {
      return app.status === "completed";
    } else if (activeTab === "rejected") {
      return app.status === "rejected";
    }
    return true;
  });

  return (
    <div className="patient-page">
      <nav className="patient-navbar">
        <div className="navbar-brand">
          <i className="fas fa-user-injured"></i>
          نظام إدارة المرضى
        </div>
        <div className="nav-links">
        <button 
  className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
  onClick={() => setCurrentView('home')}
>
  الصفحة الرئيسية
</button>
          <button 
            className={`nav-link ${currentView === 'appointments' ? 'active' : ''}`}
            onClick={() => setCurrentView('appointments')}
          >
            المواعيد
          </button>
          <button 
            className={`nav-link ${currentView === 'report' ? 'active' : ''}`}
            onClick={() => setCurrentView('report')}
          >
            تقرير الدكتور
          </button>
         
          <button 
            className={`nav-link ${currentView === 'donations' ? 'active' : ''}`}
            onClick={() => setCurrentView('donations')}
          >
            التبرعات 
          </button>
        </div>
        <div className="nav-user">
          <div className="user-info">
            <span className="user-name">{currentPatient.name}</span>
            <span className="user-role">مريض</span>
          </div>
        </div>
      </nav>
      {currentView === 'home' && <HomePage />}
      {currentView === 'report' && <DoctorReportsPage />}
      {currentView === 'service' && <ServicesPage />}
      {currentView === 'activity' && <ActivitiesPage />}
      {currentView === 'donations' && <DonationHistory />}
      {currentView === 'appointments' ? (
        <>
          <div className="patient-header">
            <h2>مرحبًا بك، {currentPatient.name}</h2>
            <div className="patient-info">
              <p><strong>رقم الملف:</strong> {currentPatient.medicalNumber}</p>
              <p><strong>الهاتف:</strong> {currentPatient.phone}</p>
            </div>
          </div>
          
          {message.text && (
            <div className={`alert alert-${message.type === "error" ? "danger" : "success"}`}>
              {message.text}
            </div>
          )}
          
          <div className="patient-tabs">
            <button 
              className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
            >
              المواعيد القادمة
            </button>
            <button 
              className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
              onClick={() => setActiveTab("completed")}
            >
              المواعيد المكتملة
            </button>
            <button 
              className={`tab-btn ${activeTab === "rejected" ? "active" : ""}`}
              onClick={() => setActiveTab("rejected")}
            >
              المواعيد الملغاة
            </button>
          </div>
          
          {/* محتوى المواعيد */}
          <div className="appointments-list">
            {filteredAppointments.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                    <th className="text-center">الطبيب</th>
                  <th className="text-center">التخصص</th>
                  <th className="text-center">التاريخ والوقت</th>
                  <th className="text-center">الحالة</th>
                  <th className="text-center">ملاحظات</th>
                  <th className="text-center">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.map(appointment => (
                      <tr key={appointment.id}>
                        <td>{appointment.doctor_name}</td>
                        <td>
                          {doctors.find(d => d.id === appointment.doctor_id)?.specialty || "غير معروف"}
                        </td>
                        <td>{new Date(appointment.date).toLocaleString()}</td>
                        <td>
                          <span className={`status-badge ${
                            appointment.status === "approved" ? "approved" :
                            appointment.status === "completed" ? "completed" :
                            appointment.status === "rejected" ? "rejected" : "pending"
                          }`}>
                            {appointment.status === "approved" ? "مؤكد" :
                             appointment.status === "completed" ? "مكتمل" :
                             appointment.status === "rejected" ? "مرفوض" : "قيد الانتظار"}
                          </span>
                        </td>
                        <td>{appointment.notes}</td>
                        <td>
                          {appointment.status === "pending" && (
                            <button
                              className="btn btn-danger btn-sm reject-btn"
                              onClick={() => handleCancelAppointment(appointment.id)}
                            >
                              إلغاء الطلب
                            </button>
                          )}
                          
                          {appointment.status === "approved" && (
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => handleCancelAppointment(appointment.id)}
                            >
                              إلغاء الموعد
                            </button>
                          )}
                          
                          {appointment.status === "completed" && (
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => {
                                setSelectedAppointment(appointment);
                                window.$('#reportModal').modal('show');
                              }}
                            >
                              عرض التقرير
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="no-appointments">
                <p>لا توجد مواعيد {activeTab === "upcoming" ? "قادمة" : activeTab === "completed" ? "مكتملة" : "ملغاة"}</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div >
        
          <h2> </h2>
          
        </div>
      )}
      
   {/* Report Modal */}
   <div className="modal fade" id="reportModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">التقرير الطبي</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedAppointment && (
                <>
                  <div className="appointment-details">
                    <p><strong>الطبيب:</strong> {selectedAppointment.doctor_name}</p>
                    <p><strong>التاريخ:</strong> {new Date(selectedAppointment.date).toLocaleString()}</p>
                    <p><strong>الملاحظات:</strong> {selectedAppointment.notes}</p>
                  </div>
                  
                  <div className="report-content mt-3">
                    <h6>التقرير الطبي:</h6>
                    <div className="report-text">
                      {selectedAppointment.report || "لا يوجد تقرير متاح"}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">إغلاق</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPage;