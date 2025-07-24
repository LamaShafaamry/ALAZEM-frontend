import React, { useState, useEffect } from "react";
import "./DoctorPage.css";
import HomePage from "../App";
import DoctorReportPage from "./DoctorReportPage";
import { 
  getDoctorAppointments,
  updateAppointmentStatus,
  updateMedicalReport
} from "../api/api";

const DoctorPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reportContent, setReportContent] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [activeTab, setActiveTab] = useState("pending");
  const [currentView, setCurrentView] = useState("appointments");
  const [currentDoctor, setCurrentDoctor] = useState({
    id: 1,
    name: "دكتور أحمد محمد",
    specialty: "قلب",
    phone: "0512345678",
    email: "doctor@example.com"
  });

 useEffect(() => {
  const fetchAppointments = async () => {
    try {
      console.log('Fetching appointments...');
      const response = await getDoctorAppointments(currentDoctor.id);
      console.log('API Response:', response);
      
      if (response.data) {
        const formattedAppointments = response.data.map(app => ({
          id: app.id,
          patient_id: app.patient_id,
          patient_name: app.patient_name || `مريض ${app.patient_id}`,
          patient_medical_number: app.patient_medical_number || 'N/A',
          date: app.appointment_date,
          status: app.status,
          notes: app.notes || '',
          report: app.report || ''
        }));
        
        console.log('Formatted Appointments:', formattedAppointments);
        setAppointments(formattedAppointments);
      }
    } catch (error) {
      console.error("Full error details:", {
        message: error.message,
        response: error.response,
        config: error.config
      });
      showMessage("فشل في تحميل المواعيد", "error");
    }
  };

  fetchAppointments();
  
  // التحديث التلقائي كل 30 ثانية
  const interval = setInterval(fetchAppointments, 30000);
  return () => clearInterval(interval);
}, [currentDoctor.id]);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };
  const handleGetDoctorAppointments = async () => {
    if (!selectedDoctor) {
      showMessage("الرجاء اختيار طبيب", "error");
      return;
    }
    
    try {
      const response = await getDoctorAppointments(selectedDoctor);
      if (response.data) {
        setDoctorAppointments(response.data);
        setActiveTab("view");
        showMessage("تم تحميل مواعيد الطبيب بنجاح", "success");
      }
    } catch (error) {
      console.error("Fetch appointments error:", error);
      showMessage("فشل في جلب مواعيد الطبيب", "error");
    }
  };

  const handleApproveAppointment = async (appointmentId, action) => {
    try {
      const response = await updateAppointmentStatus(appointmentId, {
        action: action === "approve" ? "approve" : "reject"
      });
      
      if (response.data) {
        setAppointments(prev => prev.map(app => 
          app.id === appointmentId ? response.data : app
        ));
        showMessage(`تم ${action === "approve" ? "موافقة" : "رفض"} الموعد بنجاح`, "success");
      }
    } catch (error) {
      console.error("Approve error:", error);
      showMessage("فشل في تحديث حالة الموعد", "error");
    }
  };

  const handleCompleteAppointment = async () => {
    if (!selectedAppointment || !reportContent.trim()) {
      showMessage("الرجاء كتابة التقرير الطبي", "error");
      return;
    }
    
    try {
      await updateMedicalReport(selectedAppointment.id, reportContent);
      setAppointments(prev => prev.map(app => 
        app.id === selectedAppointment.id ? { 
          ...app, 
          status: "completed",
          report: reportContent
        } : app
      ));
      
      showMessage("تم إكمال الموعد وإرسال التقرير", "success");
      setSelectedAppointment(null);
      setReportContent("");
    } catch (error) {
      console.error("Complete appointment error:", error);
      showMessage("فشل في إكمال الموعد", "error");
    }
  };

  const filteredAppointments = appointments.filter(app => {
    if (activeTab === "pending") return app.status === "pending";
    if (activeTab === "upcoming") return app.status === "approved";
    if (activeTab === "completed") return app.status === "completed";
    return true;
  });

  return (
    <div className="doctor-page">
      <nav className="doctor-navbar">
        <div className="navbar-brand">
          <i className="fas fa-clinic-medical"></i>
          نظام إدارة العيادة
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
            className={`nav-link ${currentView === 'reports' ? 'active' : ''}`}
            onClick={() => setCurrentView('reports')}
          >
            التقارير
          </button>
        </div>
        <div className="nav-user">
          <div className="user-info">
            <span className="user-name">{currentDoctor.name}</span>
            <span className="user-role">طبيب {currentDoctor.specialty}</span>
          </div>
        </div>
      </nav>

      {currentView === 'home' && <HomePage />}
      {currentView === 'reports' && <DoctorReportPage />}
      
      {currentView === 'appointments' && (
        <>
          <div className="doctor-header">
            <h2>مرحبًا د. {currentDoctor.name}</h2>
          </div>
          
          {message.text && (
            <div className={`alert alert-${message.type === "error" ? "danger" : "success"}`}>
              <i className={`fas ${message.type === "error" ? "fa-exclamation-circle" : "fa-check-circle"}`}></i>
              {message.text}
            </div>
          )}
          
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeTab === "pending" ? "active" : ""}`}
              onClick={() => setActiveTab("pending")}
            >
              بانتظار الموافقة
            </button>
            <button 
              className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
            >
              المواعيد المؤكدة
            </button>
            <button 
              className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
              onClick={() => setActiveTab("completed")}
            >
              المواعيد المكتملة
            </button>
          </div>
          
          <div className="appointments-list">
            {filteredAppointments.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">المريض</th>
                      <th className="text-center">الرقم التسلسلي</th>
                      <th className="text-center">التاريخ والوقت</th>
                      <th className="text-center">ملاحظات</th>
                      <th className="text-center">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.map(appointment => (
                      <tr key={appointment.id}>
                        <td className="text-center">{appointment.patient_name}</td>
                        <td className="text-center">{appointment.patient_medical_number}</td>
                        <td className="text-center">
                          {appointment.date ? new Date(appointment.date).toLocaleString() : 'غير محدد'}
                        </td>
                        <td className="text-center">{appointment.notes || 'لا توجد ملاحظات'}</td>
                        <td className="text-center">
                          {appointment.status === "pending" && (
                            <div className="action-buttons">
                              <button
                                className="btn btn-success btn-sm mr-2"
                                onClick={() => handleApproveAppointment(appointment.id, "approve")}
                              >
                                قبول
                              </button>
                              <button
                                className="btn btn-danger reject-btn"
                                onClick={() => handleApproveAppointment(appointment.id, "reject")}
                              >
                                رفض
                              </button>
                            </div>
                          )}
                          
                          {appointment.status === "approved" && (
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => {
                                setSelectedAppointment(appointment);
                                setReportContent("");
                              }}
                              data-toggle="modal"
                              data-target="#reportModal"
                            >
                              إكمال الموعد
                            </button>
                          )}
                          
                          {appointment.status === "completed" && (
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => {
                                setSelectedAppointment(appointment);
                                setReportContent(appointment.report);
                              }}
                              data-toggle="modal"
                              data-target="#reportModal"
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
                <p>لا توجد مواعيد {activeTab === "pending" ? "بانتظار الموافقة" : activeTab === "upcoming" ? "مؤكدة" : "مكتملة"}</p>
              </div>
            )}
          </div>
        </>
      )}
      
      <div className="modal fade" id="reportModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedAppointment?.status === "completed" ? "التقرير الطبي" : "إكمال الموعد"}
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedAppointment && (
                <>
                  <div className="appointment-details mb-4">
                    <div className="row">
                      <div className="col-md-6">
                        <p><strong>المريض:</strong> {selectedAppointment.patient_name}</p>
                        <p><strong>رقم الملف:</strong> {selectedAppointment.patient_medical_number}</p>
                      </div>
                      <div className="col-md-6">
                        <p><strong>تاريخ الموعد:</strong> 
                          {selectedAppointment.date ? new Date(selectedAppointment.date).toLocaleString() : 'غير محدد'}
                        </p>
                        <p><strong>ملاحظات:</strong> {selectedAppointment.notes || 'لا توجد ملاحظات'}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>التقرير الطبي:</label>
                    <textarea
                      className="form-control"
                      rows={8}
                      value={reportContent}
                      onChange={(e) => setReportContent(e.target.value)}
                      placeholder="أدخل التقرير الطبي المفصل..."
                      readOnly={selectedAppointment.status === "completed"}
                    ></textarea>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                إغلاق
              </button>
              
              {selectedAppointment?.status !== "completed" && (
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  onClick={() => {
                    handleCompleteAppointment();
                    window.$('#reportModal').modal('hide');
                  }}
                  disabled={!reportContent.trim()}
                >
                  حفظ وإكمال الموعد
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;