import React, { useState, useEffect } from "react";
import {
  assignVolunteer,
getRegistrationPatientsList,
  getPendingPatientsList,
  getAllVolunteer,
getNotes
} from "../api/api";
import "./ManagerPage.css";
// import VolunteersSection from "./VolunteersSection";
import DonationsSection from "./DonationsSection";
import WithdrawalRequests from "./WithdrawalRequests";
import UsersManagement from "./UsersManagement";
import PatientsManagement from "./PatientsManagement";
import HomePage from "../App";
import ManagerProfile from "./ManagerProfile";
import { FaSearch } from "react-icons/fa";
import { Button, Modal, Input } from "antd";

const VolunteersSection = () => {
  const [volunteer, setVolunteer] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentNotes, setAppointmentNotes] = useState("");
  const [volunteerNotes, setVolunteerNotes] = useState([]);
  const [patientsAppointments, setPatientsAppointments] = useState([]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reportContent, setReportContent] = useState("");
  const [activeTab, setActiveTab] = useState("create");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [currentView, setCurrentView] = useState("appointments");
  const [viewReportModalOpen, setViewReportModalOpen] = useState(false);
  const [medicalReport, setMedicalReport] = useState("");

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const response = await getAllVolunteer("Registered");
        setVolunteer(response.data);
      } catch (error) {
        showMessage("فشل في جلب قائمة المتطوعين", "error");
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

    fetchVolunteer();
    fetchPatients();
    handleGetNotes();
  }, []);

   const handleGetNotes = async () => {
      try {
        const allNotes = await getNotes(
          selectedPatient,
          selectedVolunteer
        );
        setVolunteerNotes(allNotes.data);
        // setActiveTab("view");
      } catch (error) {
        showMessage("فشل في جلب مواعيد الطبيب", "error");
      }
    };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  const handleAssignVolunteer = async (e) => {
    e.preventDefault();

    if (!selectedVolunteer || !selectedPatient) {
      console.log("فشل في إسناد الكفيفة")
      showMessage("الرجاء تعبئة جميع الحقول المطلوبة", "error");
      return;
    }

    try {
      const body = {
        patient_id: selectedPatient,
        volunteer_id: selectedVolunteer,
      };
      await assignVolunteer(body);
      setSelectedVolunteer("");
      setSelectedPatient("");
    } catch (error) {
            console.log(error)

      showMessage("فشل في إسناد الكفيفة", "error");
    }
  };

 

  return (
    <div className="manager-page">
      <nav className="manager-navbar">
        <div className="navbar-brand">
          <i className="fas fa-clinic-medical"></i>
        </div>
        <div className="nav-links">

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
             إدارة خدمات المتطوعين
            </h2>
          </div>

          <div className="manager-tabs">
            <button
              className={`tab-btn ${activeTab === "create" ? "active" : ""}`}
              onClick={() => setActiveTab("create")}
            >
              إسناد متطوع إلى كفيفة
            </button>
            <button
              className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
              onClick={() => setActiveTab("view")}
            >
              ملاحظات المتطوعين
            </button>
            {/* <button
              className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
              onClick={() => setActiveTab("view")}
            >
              طلبات الانسحاب
            </button> */}
          </div>

          {activeTab === "create" ? (
            <div className="appointment-form">

              <form onSubmit={handleAssignVolunteer}>
                <div className="form-row">
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={selectedVolunteer}
                      onChange={(e) => setSelectedVolunteer(e.target.value)}
                      required
                    >
                      <option value="">اختر المتطوع</option>
                      {volunteer.map((volunteer) => (
                        <option key={volunteer.id} value={volunteer.id}>
                          {volunteer.first_name} 
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <select
                      className="form-control"
                      value={selectedPatient}
                      onChange={(e) => setSelectedPatient(e.target.value)}
                      required
                    >
                      <option value=""> اختر كفيفة </option>
                      {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                          {patient.first_name} - رقم الملف:{" "}
                          {patient.disability_card_number}
                        </option>
                      ))}
                    </select>
                  </div>

                  
                </div>
                <div className="submit-row">
                  <button type="submit" className="btn-submit">
                    إرسال الطلب إلى المتطوع
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
                    value={selectedVolunteer}
                    onChange={(e) => setSelectedVolunteer(e.target.value)}
                    style={{ flex: "1" }}
                  >
                    <option value="">اختر متطوع</option>
                    {volunteer.map((volunteer) => (
                      <option key={volunteer.id} value={volunteer.id}>
                        {volunteer.first_name} - {volunteer.speciality}
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
                    onClick={handleGetNotes}
                    title="بحث"
                    style={{
                      height: "50px",
                      width: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "33px",
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>

                <br></br>
              </div>

              {volunteerNotes.length > 0 && (
                <div className="appointments-list mt-4">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="thead-dark">
                        <tr>
                          <th>الكفيفة</th>
                          <th>المتطوع</th>
                          <th>رقم الملاحظة</th>
                          <th>التاريخ والوقت</th>
                          <th> الملاحظة</th>
                
                        </tr>
                      </thead>
                      <tbody>
                        {volunteerNotes.map((notes) => (
                          <tr key={notes.id}>
                            <td>
                              {notes.patient_name}
                            </td>
                            <td>
                              {notes.volunteer_name}
                            </td>
                            {/* <td>{new Date(appointment.appointment_date).toLocaleString()}</td> */}
                            <td>{notes.id}</td>
                            <td className={"appointment-date"}>
                              {notes.creation_date}
                            
                            </td>
                            <td className="text-center" dir="ltr">
                    <div
                      style={{
                        maxWidth: "450px",
                        maxHeight: "150px",
                        overflow: "auto",
                        whiteSpace: "pre-wrap", // allows line breaks in the content
                        wordWrap: "break-word", // breaks long words if needed
                        margin: "0 auto", // center the content in the cell
                        textAlign: "left",
                      }}
                    >
                      {notes.content}
                    </div>
                  </td>
                          </tr>
                        ))}
                      </tbody>
                      {/* <Modal
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
                      </Modal> */}
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Report Modal */}
      {/* <div
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
      </div> */}
    </div>
  );
};

export default VolunteersSection;
