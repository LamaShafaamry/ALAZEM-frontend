import React, { useState, useEffect } from "react";
import { getDoctorsList, getPendingPatientsList, createServiceAppointment } from "../api/api";
import "./ManagerPage.css";

const ManagerPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentNotes, setAppointmentNotes] = useState("");
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reportContent, setReportContent] = useState("");
  const [activeTab, setActiveTab] = useState("create");
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getDoctorsList();
        setDoctors(response.data);
      } catch (error) {
        showMessage("فشل في جلب قائمة الأطباء", "error");
      }
    };

    const fetchPatients = async () => {
      try {
        const response = await getPendingPatientsList();
        setPatients(response.data);
      } catch (error) {
        showMessage("فشل في جلب قائمة المرضى", "error");
      }
    };

    fetchDoctors();
    fetchPatients();
  }, []);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    
    if (!selectedDoctor || !selectedPatient || !appointmentDate) {
      showMessage("الرجاء تعبئة جميع الحقول المطلوبة", "error");
      return;
    }
    
    try {
      const body = {
        patient_id: selectedPatient,
        doctor_id: selectedDoctor,
        appointment_date: appointmentDate.replace('T', ' ').slice(0, 16), // Format: YYYY-MM-DD HH:mm
      };
      await createServiceAppointment(body);
      showMessage("تم إرسال طلب الموعد إلى الطبيب بنجاح", "success");
      setSelectedDoctor("");
      setSelectedPatient("");
      setAppointmentDate("");
      setAppointmentNotes("");
    } catch (error) {
      showMessage("فشل في إنشاء الموعد", "error");
    }
  };

  const handleGetDoctorAppointments = async () => {
    if (!selectedDoctor) {
      showMessage("الرجاء اختيار طبيب", "error");
      return;
    }
    
    try {
      const mockAppointments = [
        {
          id: "abc123",
          doctor_id: 1,
          doctor_name: "دكتور أحمد محمد",
          patient_id: 1,
          patient_name: "محمد علي",
          date: "2023-06-15T10:00:00",
          status: "pending",
          notes: "كشف دوري",
          report: ""
        },
        {
          id: "def456",
          doctor_id: 1,
          doctor_name: "دكتور أحمد محمد",
          patient_id: 2,
          patient_name: "فاطمة الزهراء",
          date: "2023-06-15T11:30:00",
          status: "approved",
          notes: "متابعة علاج",
          report: ""
        },
        {
          id: "ghi789",
          doctor_id: 1,
          doctor_name: "دكتور أحمد محمد",
          patient_id: 3,
          patient_name: "خالد حسن",
          date: "2023-06-16T09:15:00",
          status: "completed",
          notes: "شكوى من ألم في الصدر",
          report: "تم الكشف ووصف العلاج المناسب"
        }
      ].filter(app => app.doctor_id == selectedDoctor);
      
      setDoctorAppointments(mockAppointments);
      setActiveTab("view");
      showMessage("تم تحميل مواعيد الطبيب بنجاح", "success");
    } catch (error) {
      showMessage("فشل في جلب مواعيد الطبيب", "error");
    }
  };

  const handleApproveAppointment = async (appointmentId, action) => {
    try {
      setDoctorAppointments(prev => prev.map(app => 
        app.id === appointmentId ? { 
          ...app, 
          status: action === "approve" ? "approved" : "rejected" 
        } : app
      ));
      
      showMessage(
        `تم ${action === "approve" ? "قبول" : "رفض"} الموعد بنجاح`, 
        "success"
      );
    } catch (error) {
      showMessage("فشل في تحديث حالة الموعد", "error");
    }
  };

  const handleCompleteAppointment = async () => {
    if (!selectedAppointment || !reportContent) {
      showMessage("الرجاء إدخال التقرير الطبي", "error");
      return;
    }
    
    try {
      setDoctorAppointments(prev => prev.map(app => 
        app.id === selectedAppointment.id ? { 
          ...app, 
          status: "completed",
          report: reportContent
        } : app
      ));
      
      showMessage("تم إكمال الموعد وإرسال التقرير بنجاح", "success");
      setSelectedAppointment(null);
      setReportContent("");
    } catch (error) {
      showMessage("فشل في إرسال التقرير", "error");
    }
  };
  return (
    <div className="manager-page">
             <nav className="manager-navbar">
        <div className="navbar-brand">
          <i className="fas fa-calendar-alt"></i>
          نظام إدارة المواعيد
        </div>
        <div className="nav-user">
          
          <div className="user-info">
            <span className="user-name">مدير النظام</span>
            <span className="user-role">مسؤول الإدارة</span>
          </div>
        </div>
      </nav>

      {/* Header جديد */}
      <div className="manager-header">
        <h2>
          <i className="fas fa-clinic-medical"></i>
          نظام إدارة المواعيد الطبية
        </h2>
      </div>
      
      {message.text && (
        <div className={`alert alert-${message.type === "error" ? "danger" : "success"}`}>
          {message.text}
        </div>
      )}
      
      <div className="manager-tabs">
        <button 
          className={`tab-btn ${activeTab === "create" ? "active" : ""}`}
          onClick={() => setActiveTab("create")}
        >
          إنشاء موعد جديد
        </button>
        <button 
          className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
          onClick={() => setActiveTab("view")}
        >
          متابعة المواعيد
        </button>
      </div>
      
      {activeTab === "create" ? (
        <div className="appointment-form">
          <h3 className="text-center">إنشاء موعد جديد</h3>
          
          <form onSubmit={handleCreateAppointment}>
          <div className="form-row">
            <div className="form-group">
              <label>اختر الطبيب:</label>
              <select 
                className="form-control"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                required
              >
                <option value="">-- اختر طبيب --</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.first_name} - تخصص: {doctor.speciality}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>اختر المريض:</label>
              <select 
                className="form-control"
                value={selectedPatient}
                onChange={(e) => setSelectedPatient(e.target.value)}
                required
              >
                <option value="">-- اختر مريض --</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>
                    {patient.first_name} - رقم الملف: {patient.disability_card_number}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>تاريخ ووقت الموعد:</label>
              <input
                type="datetime-local"
                className="form-control"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </div>
            
            </div>
            <div className="submit-row">
            <button type="submit" className="btn-submit">
              إرسال الطلب إلى الطبيب
            </button>
            </div>

          </form>
        </div>
      ) : (
        <div className="appointments-management">
          <h3 className="text-center">متابعة حالة المواعيد</h3>
          
          <div className="doctor-selection">
            <div className="form-group">
              <label>اختر الطبيب لمشاهدة مواعيده:</label>
              <select 
                className="form-control"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="">-- اختر طبيب --</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.first_name} - {doctor.speciality}
                  </option>
                ))}
              </select>
            </div>
            <button 
              className="btn btn-info"
              onClick={handleGetDoctorAppointments}
              disabled={!selectedDoctor}
            >
              عرض المواعيد
            </button>
          </div>
          
          {doctorAppointments.length > 0 && (
            <div className="appointments-list mt-4">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>المريض</th>
                      <th>التاريخ والوقت</th>
                      <th>الحالة</th>
                      <th>ملاحظات</th>
                      <th>الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctorAppointments.map(appointment => (
                      <tr key={appointment.id}>
                        <td>{appointment.patient_name}</td>
                        <td>{new Date(appointment.date).toLocaleString()}</td>
                        <td>
                          <span className={`status-badge ${
                            appointment.status === "approved" ? "approved" :
                            appointment.status === "completed" ? "completed" : 
                            appointment.status === "rejected" ? "rejected" : "pending"
                          }`}>
                            {appointment.status === "approved" ? "موافق عليه" :
                             appointment.status === "completed" ? "مكتمل" :
                             appointment.status === "rejected" ? "مرفوض" : "بانتظار الموافقة"}
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
                              className="btn btn-secondary btn-sm"
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
            </div>
          )}
        </div>
      )}
      
      {/* Report Modal */}
      <div className="modal fade" id="reportModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedAppointment?.status === "completed" ? "التقرير الطبي" : "إكمال الموعد"}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedAppointment && (
                <>
                  <div className="appointment-info mb-3">
                    <p><strong>الطبيب:</strong> {selectedAppointment.doctor_name}</p>
                    <p><strong>المريض:</strong> {selectedAppointment.patient_name}</p>
                    <p><strong>تاريخ الموعد:</strong> {new Date(selectedAppointment.date).toLocaleString()}</p>
                  </div>
                  
                  <div className="form-group">
                    <label>التقرير الطبي:</label>
                    <textarea
                      className="form-control"
                      rows={6}
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

export default ManagerPage;