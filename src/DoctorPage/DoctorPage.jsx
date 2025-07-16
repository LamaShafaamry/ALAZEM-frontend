import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DoctorPage.css";

const DoctorPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reportContent, setReportContent] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [activeTab, setActiveTab] = useState("pending");
  const [currentDoctor, setCurrentDoctor] = useState({
    id: 1,
    name: "دكتور أحمد محمد",
    specialty: "قلب",
    phone: "0512345678",
    email: "doctor@example.com"
  });

  useEffect(() => {
    // Fetch doctor's appointments
    const fetchAppointments = async () => {
      try {
        // Mock data - replace with actual API call
        // const response = await axios.get(`/api/appointments/?doctor_id=${currentDoctor.id}`);
        
        const mockAppointments = [
          {
            id: "app1",
            patient_id: 1,
            patient_name: "محمد علي",
            patient_medical_number: "P12345",
            date: "2023-06-20T10:00:00",
            status: "pending",
            notes: "كشف دوري على القلب",
            report: ""
          },
          {
            id: "app2",
            patient_id: 2,
            patient_name: "فاطمة الزهراء",
            patient_medical_number: "P12346",
            date: "2023-06-18T14:30:00",
            status: "approved",
            notes: "متابعة بعد العملية",
            report: ""
          },
          {
            id: "app3",
            patient_id: 3,
            patient_name: "خالد حسن",
            patient_medical_number: "P12347",
            date: "2023-06-25T11:15:00",
            status: "completed",
            notes: "شكوى من ألم في الصدر",
            report: "تم الكشف وتبين وجود مشكلة في الصمام، تم وصف العلاج المناسب"
          }
        ];
        
        setAppointments(mockAppointments);
      } catch (error) {
        showMessage("فشل في تحميل المواعيد", "error");
      }
    };
    
    fetchAppointments();
  }, [currentDoctor.id]);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  const handleApproveAppointment = async (appointmentId, action) => {
    try {
      // In a real app:
      // await axios.post(`/api/appointments/approve/${appointmentId}/`, { action });
      
      // Update local state
      setAppointments(prev => prev.map(app => 
        app.id === appointmentId ? { 
          ...app, 
          status: action === "approve" ? "approved" : "rejected" 
        } : app
      ));
      
      showMessage(
        `تم ${action === "approve" ? "موافقة" : "رفض"} الموعد بنجاح`,
        "success"
      );
    } catch (error) {
      showMessage("فشل في تحديث حالة الموعد", "error");
    }
  };

  const handleCompleteAppointment = async () => {
    if (!selectedAppointment || !reportContent.trim()) {
      showMessage("الرجاء كتابة التقرير الطبي", "error");
      return;
    }
    
    try {
      // In a real app:
      // await axios.post(`/api/appointments/${selectedAppointment.id}/complete/`, {
      //   report: reportContent
      // });
      
      // Update local state
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

      {/* Header محسن */}
      <div className="doctor-header">
        <h2>مرحبًا د. {currentDoctor.name}</h2>
        <div className="doctor-info">
          <p>
            <i className="fas fa-stethoscope"></i>
            <strong>التخصص:</strong> {currentDoctor.specialty}
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <strong>الهاتف:</strong> {currentDoctor.phone}
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <strong>البريد الإلكتروني:</strong> {currentDoctor.email}
          </p>
        </div>
      </div>
      {message.text && (
        <div className={`alert alert-${message.type === "error" ? "danger" : "success"}`}>
          <i className={`fas ${message.type === "error" ? "fa-exclamation-circle" : "fa-check-circle"}`}></i>
          {message.text}
        </div>
      )}
      
      <div className="doctor-tabs">
        <button 
          className={`tab-btn ${activeTab === "pending" ? "active" : ""}`}
          onClick={() => setActiveTab("pending")}
        >
          طلبات بانتظار الموافقة
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
                  <th>المريض</th>
                  <th>رقم الملف</th>
                  <th>التاريخ والوقت</th>
                  <th>الحالة</th>
                  <th>ملاحظات</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map(appointment => (
                  <tr key={appointment.id}>
                    <td>{appointment.patient_name}</td>
                    <td>{appointment.patient_medical_number}</td>
                    <td>{new Date(appointment.date).toLocaleString()}</td>
                    <td>
                      <span className={`status-badge ${
                        appointment.status === "approved" ? "approved" :
                        appointment.status === "completed" ? "completed" : "pending"
                      }`}>
                        {appointment.status === "approved" ? "مؤكد" :
                         appointment.status === "completed" ? "مكتمل" : "بانتظار الموافقة"}
                      </span>
                    </td>
                    <td>{appointment.notes}</td>
                    <td>
                      {appointment.status === "pending" && (
                        <div className="action-buttons">
                          <button
                            className="btn btn-success btn-sm mr-2"
                            onClick={() => handleApproveAppointment(appointment.id, "approve")}
                          >
                            قبول
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleApproveAppointment(appointment.id, "reject")}
                          >
                            رفض
                          </button>
                        </div>
                      )}
                      
                      {appointment.status === "approved" && (
                        <button
                          className="btn btn-primary btn-sm"
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
      
      {/* Report Modal */}
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
                        <p><strong>تاريخ الموعد:</strong> {new Date(selectedAppointment.date).toLocaleString()}</p>
                        <p><strong>ملاحظات:</strong> {selectedAppointment.notes}</p>
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
                  className="btn btn-primary"
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