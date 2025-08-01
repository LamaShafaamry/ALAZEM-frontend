import React, { useState, useEffect } from "react";
import {
  getDoctorsList,
  getPendingPatientsList,
  createServiceAppointment,
  getAllAppointments,
  getRegistrationPatientsList,
} from "../api/api";
import "./ManagerPage.css";
import VolunteersSection from "./VolunteersSection";
import DonationsSection from "./DonationsSection";
import WithdrawalRequests from "./RegistrationRequests";
import UsersManagement from "./UsersManagement";
import PatientsManagement from "./PatientsManagement";
import HomePage from "../App";
import ManagerProfile from "./ManagerProfile";
import { FaSearch } from "react-icons/fa";
import { Button, Modal, Input } from "antd";

const ManagerPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentNotes, setAppointmentNotes] = useState("");
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [patientsAppointments, setPatientsAppointments] = useState([]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reportContent, setReportContent] = useState("");
  const [activeTab, setActiveTab] = useState("create");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [currentView, setCurrentView] = useState("appointments");
  const [viewReportModalOpen, setViewReportModalOpen] = useState(false);
  const [medicalReport, setMedicalReport] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getDoctorsList("REG", "");
        setDoctors(response.data);
      } catch (error) {
        showMessage("فشل في جلب قائمة الأطباء", "error");
      }
    };

    const fetchPatients = async () => {
      try {
        const response = await getRegistrationPatientsList();
        setPatients(response.data);
      } catch (error) {
        showMessage("فشل في جلب قائمة المرضى", "error");
      }
    };

    fetchDoctors();
    fetchPatients();
    handleGetDoctorAppointments();
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
        appointment_date: appointmentDate.replace("T", " ").slice(0, 16),
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
    try {

      const allAppointments = await getAllAppointments(
        selectedPatient,
        selectedDoctor
      );
      setDoctorAppointments(allAppointments.data);
      // setActiveTab("view");
    } catch (error) {
      showMessage("فشل في جلب مواعيد الطبيب", "error");
    }
  };

  const handleGetPatientsAppointments = async () => {
    if (!selectedPatient) {
      showMessage("الرجاء اختيار طبيب", "error");
      return;
    }
    try {
      const allAppointments = await getAllAppointments(selectedPatient, "");
      setPatientsAppointments(allAppointments.data);
      setActiveTab("view");
      showMessage("تم تحميل مواعيد الكفيفة بنجاح", "success");
    } catch (error) {
      showMessage("فشل في جلب مواعيد الكفيفة", "error");
    }
  };
  const handleApproveAppointment = async (appointmentId, action) => {
    try {
      setDoctorAppointments((prev) =>
        prev.map((app) =>
          app.id === appointmentId
            ? {
                ...app,
                status: action === "approve" ? "approved" : "rejected",
              }
            : app
        )
      );

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
      setDoctorAppointments((prev) =>
        prev.map((app) =>
          app.id === selectedAppointment.id
            ? {
                ...app,
                status: "completed",
                report: reportContent,
              }
            : app
        )
      );

      showMessage("تم إكمال الموعد وإرسال التقرير بنجاح", "success");
      setSelectedAppointment(null);
      setReportContent("");
    } catch (error) {
      showMessage("فشل في إرسال التقرير", "error");
    }
  };

  const statusMap = {
    APP: { label: "تمت الموافقة", bg: "bg-green-100 text-green-800" },
    REJ: { label: "مرفوض", bg: "bg-red-100 text-red-800" },
    PEN: {
      label: "بانتظار مواففة الطبيب",
      bg: "bg-yellow-100 text-yellow-800",
    },
    COM: { label: "مكتمل", bg: "bg-blue-100 text-blue-800" },
    CAN: { label: "تم إالغاءه", bg: "bg-blue-100 text-blue-800" },
  };

  return (
    <div className="manager-page">
      <nav className="manager-navbar">
        <div className="navbar-brand">
          <i className="fas fa-clinic-medical"></i>
        </div>
        <div className="nav-links">
          <button
            className={`nav-link ${currentView === "home" ? "active" : ""}`}
            onClick={() => setCurrentView("home")}
          >
            الصفحة الرئيسية
          </button>
          <button
            className={`nav-link ${
              currentView === "appointments" ? "active" : ""
            }`}
            onClick={() => setCurrentView("appointments")}
          >
            المواعيد
          </button>
          <button
            className={`nav-link ${
              currentView === "volunteers" ? "active" : ""
            }`}
            onClick={() => setCurrentView("volunteers")}
          >
            المتطوعين
          </button>
          <button
            className={`nav-link ${
              currentView === "donations" ? "active" : ""
            }`}
            onClick={() => setCurrentView("donations")}
          >
            التبرعات
          </button>
          <button
            className={`nav-link ${
              currentView === "withdrawals" ? "active" : ""
            }`}
            onClick={() => setCurrentView("withdrawals")}
          >
            طلبات الانسحاب
          </button>
          <button
            className={`nav-link ${currentView === "users" ? "active" : ""}`}
            onClick={() => setCurrentView("users")}
          >
            <i className="fas fa-users-cog"></i>
            إدارة المستخدمين
          </button>
          <button
            className={`nav-link ${currentView === "patients" ? "active" : ""}`}
            onClick={() => setCurrentView("patients")}
          >
            <i className="fas fa-user-injured"></i>
            إدارة المرضى
          </button>
        </div>

        <div className="nav-user">
          <div className="user-info">
            {/* يمكن إضافة معلومات المستخدم هنا */}
          </div>
        </div>
      </nav>

      {message.text && (
        <div
          className={`alert alert-${
            message.type === "error" ? "danger" : "success"
          }`}
        >
          {message.text}
        </div>
      )}
      {currentView === "home" && <HomePage />}
      {currentView === "volunteers" && <VolunteersSection />}
      {currentView === "donations" && <DonationsSection />}
      {currentView === "withdrawals" && <WithdrawalRequests />}
      {currentView === "users" && <UsersManagement />}
      {currentView === "patients" && <PatientsManagement />}

      {currentView === "appointments" && (
        <>
          <div className="manager-header2">
            <h2>
              <i className="fas fa-clinic-medical"></i>
              نظام إدارة المواعيد الطبية
            </h2>
          </div>

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
                      <option value="">اختر طبيب</option>
                      {doctors.map((doctor) => (
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
                      <option value=""> اختر مريض</option>
                      {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                        {patient.id} - {patient.first_name}
                          
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

              <div
                className="doctor-selection"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
   
                <div
                  className="form-group mb-3"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <select
                    className="form-control"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    style={{ flex: "1" }}
                  >
                    <option value="">اختر طبيب</option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.first_name} - {doctor.speciality}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-control"
                    value={selectedPatient}
                    onChange={(e) => setSelectedPatient(e.target.value)}
                    style={{ flex: "1" }}
                  >
                    <option value="">اختر كفيفة</option>
                    {patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.first_name}
                      </option>
                    ))}
                  </select>

                  <button
                    className="btn btn-info"
                    onClick={handleGetDoctorAppointments}
                    title="عرض المواعيد"
                    style={{
                      height: "50px",
                      width: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "33px"
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>

                <br></br>
              </div>

              {doctorAppointments.length > 0 && (
                <div className="appointments-list mt-4">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="thead-dark">
                        <tr>
                          <th>المريض</th>
                          <th>الطبيب</th>
                          <th>رقم الموعد</th>
                          <th>التاريخ والوقت</th>
                          <th>الحالة</th>
                          <th>ملاحظات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctorAppointments.map((appointment) => (
                          <tr key={appointment.id}>
                            <td>
                              {appointment.patient_first_name}{" "}
                              {appointment.patient_last_name}
                            </td>
                            <td>
                              {appointment.doctor_first_name}{" "}
                              {appointment.doctor_last_name}
                            </td>
                            {/* <td>{new Date(appointment.appointment_date).toLocaleString()}</td> */}
                            <td>{appointment.id}</td>
                            <td className={"appointment-date"}>
                              {appointment.appointment_date}
                            </td>

                            {appointment.is_completed === false ? (
                              <td
                                className={`text-center p-2 rounded ${
                                  statusMap[appointment.appointment_status].bg
                                }`}
                              >
                                {
                                  statusMap[appointment.appointment_status]
                                    .label
                                }
                              </td>
                            ) : (
                              <td
                                className={`text-center p-2 rounded ${"bg-green-100 text-green-800"}`}
                              >
                                مكتمل
                              </td>
                            )}
                            <td>
                              {" "}
                              {appointment.is_completed === true ? (
                                <Button
                                  style={{
                                    backgroundColor: "white",
                                    borderColor: "#fbbf65ff",
                                    color: "#fbbf65ff",
                                    width: "70%",
                                    fontWeight: "bold",
                                  }}
                                  type="primary"
                                  onClick={() => {
                                    setSelectedAppointment(appointment);
                                    setMedicalReport(
                                      appointment.medical_report || ""
                                    ); // load existing report
                                    setViewReportModalOpen(true);
                                  }}
                                >
                                  عرض تقرير طبي
                                </Button>
                              ) : (
                                <div style={{ color: "gray" }}>
                                  {" "}
                                  لا يوجد إجراءات
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <Modal
                        title={
                          <div
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "#fbbf65ff",
                            }}
                          >
                            التقرير الطبي
                          </div>
                        }
                        centered
                        open={viewReportModalOpen}
                        onCancel={() => setViewReportModalOpen(false)}
                        footer={null}
                      >
                        <Input.TextArea
                          style={{ borderColor: "orange" }}
                          rows={4}
                          value={medicalReport}
                          readOnly
                        />
                      </Modal>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Report Modal */}
      <div
        className="modal fade"
        id="reportModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedAppointment?.status === "completed"
                  ? "التقرير الطبي"
                  : "إكمال الموعد"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedAppointment && (
                <>
                  <div className="appointment-info mb-3">
                    <p>
                      <strong>الطبيب:</strong> {selectedAppointment.doctor_name}
                    </p>
                    <p>
                      <strong>المريض:</strong>{" "}
                      {selectedAppointment.patient_name}
                    </p>
                    <p>
                      <strong>تاريخ الموعد:</strong>{" "}
                      {new Date(selectedAppointment.date).toLocaleString()}
                    </p>
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
                    window.$("#reportModal").modal("hide");
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
