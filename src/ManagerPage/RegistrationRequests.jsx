import React, { useState } from "react";
import "./WithdrawalRequests.css";
import {
  getPatients,
  getDoctorsList,
  getAllVolunteer,
  changeVolunteertStatus,
  changeDoctorStatus,
  changePatientStatus,
} from "../api/api";
import { useEffect } from "react";
import { Button, Modal, Input } from "antd";

const RegistrationRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [activeTab, setActiveTab] = useState("create");
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
      let response;
        if (activeTab === "patient") {
          const response = await getPatients("pending", searchTerm);
          setPatients(response.data);
        } else if (activeTab === "volunteers") {
          const response = await getAllVolunteer("PEN", searchTerm);
          setVolunteers(response.data);
        } else if (activeTab === "doctors") {
          const response = await getDoctorsList("PEN", searchTerm);
          setDoctors(response.data);
        }else {
          const [indResponse, assocResponse] = await Promise.all([
           getPatients("pending",""),
           getAllVolunteer("PEN", ""),
           getDoctorsList("PEN", ""),
          ]);
          response = { data: [...indResponse.data, ...assocResponse.data] };
        }
      } catch (error) {
        console.error("Error fetching registration requests:", error);
      }
    };

    fetchData();
  }, [activeTab, searchTerm]);

  // const handleApprove = (id) => {
  //   setRequests(requests.map(request =>
  //     request.id === id ? { ...request, status: "مقبول" } : request
  //   ));
  // };

  // const handleReject = (id) => {
  //   setRequests(requests.map(request =>
  //     request.id === id ? { ...request, status: "مرفوض" } : request
  //   ));
  // };

  const openPatientApproveModal = (id) => {
    setSelectedPatientId(id);
    setShowApproveModal(true);
  };

  const openPatientRejectModal = (id) => {
    setSelectedPatientId(id);
    setShowRejectModal(true);
  };
    const openVolunteerApproveModal = (id) => {
    setSelectedVolunteerId(id);
    setShowApproveModal(true);
  };

  const openVolunteerRejectModal = (id) => {
    setSelectedVolunteerId(id);
    setShowRejectModal(true);
  };
    const openDoctorApproveModal = (id) => {
    setSelectedDoctorId(id);
    setShowApproveModal(true);
  };

  const openDoctorRejectModal = (id) => {
    setSelectedDoctorId(id);
    setShowRejectModal(true);
  };
  const confirmPatientApprove = () => {
    handleApprovePatientRequest(selectedPatientId);
    setShowApproveModal(false);
  };

  const confirmVolunteerReject = () => {
    handleCancelVolunteerRequest(selectedVolunteerId);
    setShowRejectModal(false);
  };
    const confirmVolunteerApprove = () => {
    handleApproveVolunteerRequest(selectedVolunteerId);
    setShowApproveModal(false);
  };

  const confirmDoctorReject = () => {
    handleCancelDoctorRequest(selectedDoctorId);
    setShowRejectModal(false);
  };
    const confirmDoctorApprove = () => {
    handleApproveDoctorRequest(selectedDoctorId);
    setShowApproveModal(false);
  };

  const confirmPatientReject = () => {
    handleCancelPatientRequest(selectedPatientId);
    setShowRejectModal(false);
  };

  //  const fetchRequests = async () => {
  //     try {
  //       setLoading(true);
  //       let response;
  
  //       if (activeTab === "patients") {
  //         response = await getPatients("pending");
  //       } else if (activeTab === "volunteers") {
  //         response = await getAllVolunteer("PEN");
  //       } else if (activeTab === "doctors") {
  //         response = await getDoctorsList("PEN");
  //       // } else {
  //       //   // جلب جميع التبرعات
  //       //   const [indResponse, assocResponse] = await Promise.all([
  //       //    getPatients("pending"),
  //       //    getAllVolunteer("PEN"),
  //       //    getDoctorsList("PEN"),
  //       //   ]);
  //       //   response = { data: [...indResponse.data, ...assocResponse.data] };
  //       }
  
  //       // setDonations(
  //       //   response.data.map((donation) => ({
  //       //     id: donation.id,
  //       //     donation_type: donation.donation_type === "IND" ? "فردي" : "جمعية",
  //       //     name: donation.donor_name || "غير معروف",
  //       //     email: donation.email,
  //       //     amount: donation.amount,
  //       //     creation_date: new Date(donation.creation_date).toLocaleDateString(),
  //       //     status: donation.donation_status,
  //       //     donation_status:
  //       //       donation.donation_status === "APP"
  //       //         ? "مقبول"
  //       //         : donation.donation_status === "REJ"
  //       //         ? "مرفوض"
  //       //         : donation.donation_status === "PEN"
  //       //         ? "قيد الانتظار"
  //       //         : "مكتمل",
  //       //     ...(donation.donation_type === "IND" && {
  //       //       patients: donation.patients,
  //       //     }),
  //       //     ...(!donation.is_individual && {
  //       //       organization: donation.organization_name,
  //       //     }),
  //       //   }))
  //       // );
  //     } catch (error) {
  //       showMessage("فشل في تحميل التبرعات", "error");
  //       console.error("Error fetching donations:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
const handleApprovePatientRequest = async (id) => {
  try {
    await changePatientStatus(id, { action: "approve" });
    setShowApproveModal(false);
    await fetchData(); // refresh data after change
  } catch (error) {
    console.error("Error approving request:", error);
  }
};

const handleCancelPatientRequest = async (id) => {
  try {
    await changePatientStatus(id, { action: "reject" });
    setShowRejectModal(false);
    await fetchData(); // refresh data after rejection
  } catch (error) {
    console.error("Error rejecting appointment:", error);
  }
};

    const handleApproveVolunteerRequest = async (id) => {
    try {
      await changeVolunteertStatus(id, { status: "REG" });
      setShowApproveModal(false);
      await fetchData(); // refresh data
    } catch (error) {
      console.error("Error approving appointment:", error);
    }
  };

  const handleCancelVolunteerRequest = async (id) => {
    try {
      await changeVolunteertStatus(id, { status: "REJ" });
      setShowRejectModal(false);
      await fetchData(); // refresh data
    } catch (error) {
      console.error("Error rejecting appointment:", error);
    }
  };
    const handleApproveDoctorRequest = async (id) => {
    try {
      await changeDoctorStatus(id, { status: "APP" });
      setShowApproveModal(false);
      await fetchData(); // refresh data
    } catch (error) {
      console.error("Error approving appointment:", error);
    }
  };

  const handleCancelDoctorRequest = async (id) => {
    try {
      await changeDoctorStatus(id, { status: "REJ" });
      setShowRejectModal(false);
      await fetchData() // refresh data
    } catch (error) {
      console.error("Error rejecting appointment:", error);
    }
  };

  const getRoleName = (roleCode) => {
    switch (roleCode) {
      case "DOC":
        return "طبيب";
      case "PAT":
        return "كفيفة";
      case "VOL":
        return "متطوع";
      default:
        return "غير معروف";
    }
  };
  return (
    
    <div className="manager-page">
      <br></br><br></br>
      <div className="manager-header2">
        <h2>
          <i className="fas fa-sign-out-alt"></i>
          إدارة طلبات الانضمام
        </h2>
      </div>
      <div className="manager-tabs">
        <button
          className={`tab-btn ${activeTab === "patient" ? "active" : ""}`}
          onClick={() => setActiveTab("patient")}
        >
          طلبات الكفيفات
        </button>

        <button
          className={`tab-btn ${activeTab === "volunteers" ? "active" : ""}`}
          onClick={() => setActiveTab("volunteers")}
        >
          طلبات المتطوعون
        </button>

        <button
          className={`tab-btn ${activeTab === "doctors" ? "active" : ""}`}
          onClick={() => setActiveTab("doctors")}
        >
          طلبات الأطباء
        </button>
      </div>

      {activeTab === "patient" ? (
        <div className="search-container">
          {/* <div className="search-box">
            <input
              type="text"
              placeholder="ابحث بالاسم،او البريد الإلكتروني ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
            <i className="fas fa-search search-icon"></i>
          </div> */}
          <div className="appointments-list">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">الاسم</th>
                  <th className="text-center">البريد الإلكتروني</th>
                  <th className="text-center">الدور</th>
                  <th className="text-center">تاريخ الانضمام</th>
                  <th className="text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} onClick={() => setSelectedUser(patient)}>
                    <td className="text-center">{patient.id}</td>
                    <td className="text-center">
                      {patient.first_name} {patient.last_name}
                    </td>
                    <td className="text-center"> {patient.email}</td>

                    <td className="text-center">{getRoleName(patient.role)}</td>

                    <td className="text-center">{patient.date_joined}</td>
                    <td className="text-center">
                      <div className="action-buttons">
                       <div className="d-flex gap-2 justify-content-center">
                      <button style={{color: "white"}}
                        className="btn btn-danger btn-sm"
                        onClick={() => openPatientApproveModal(patient.id)}
                      >
                        رفض
                      </button>
                      <button style={{color: "white"}}
                        className="btn btn-success btn-sm"
                        onClick={() => openPatientApproveModal(patient.id)}
                      >
                        قبول
                      </button>
                    </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <Modal
                title={
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    قبول طلب انضمام الكفيفة
                  </div>
                }
                centered
                open={showApproveModal}
                onCancel={() => setShowApproveModal(false)}
                footer={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      onClick={() => setShowApproveModal(false)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "orange",
                        color: "orange",
                        width: "100px",
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={confirmPatientApprove}
                      style={{
                        backgroundColor: "orange",
                        borderColor: "orange",
                        color: "white",
                        width: "100px",
                      }}
                    >
                      تأكيد
                    </Button>
                  </div>
                }
              >
                <br />
                <p style={{ textAlign: "center" }}>
                  هل أنت متأكد من أنك تريد قبول طلب الانضمام
                </p>
              </Modal>

              <Modal
                title={
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    رفض طلب انضمام الكفيفة
                  </div>
                }
                centered
                open={showRejectModal}
                onCancel={() => setShowRejectModal(false)}
                footer={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      onClick={() => setShowRejectModal(false)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "orange",
                        color: "orange",
                        width: "100px",
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={confirmPatientReject}
                      style={{
                        backgroundColor: "orange",
                        borderColor: "orange",
                        color: "white",
                        width: "100px",
                      }}
                    >
                      تأكيد
                    </Button>
                  </div>
                }
              >
                <br />
                <p style={{ textAlign: "center" }}>
                  هل أنت متأكد من أنك تريد رفض طلب الانضمام؟
                </p>
              </Modal>
            </table>
          </div>
        </div>
      ) : (
        <></>
      )}
      {activeTab === "volunteers" && (
        <div className="appointments-list">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">الاسم</th>
                <th className="text-center">البريد الإلكتروني</th>
                <th className="text-center">الدور</th>
                <th className="text-center">تاريخ الانضمام</th>
                <th className="text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer) => (
                <tr key={volunteer.id}>
                  <td className="text-center">{volunteer.id}</td>
                  <td className="text-center">
                    {volunteer.first_name} {volunteer.last_name}
                  </td>
                  <td className="text-center">{volunteer.email}</td>
                  <td className="text-center">{getRoleName(volunteer.role)}</td>
                  <td className="text-center">{volunteer.date_joined}</td>
                  <td className="text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      <button style={{color: "white"}}
                        className="btn btn-danger btn-sm"
                        onClick={() => openVolunteerRejectModal(volunteer.id)}
                      >
                        رفض
                      </button>
                      <button style={{color: "white"}}
                        className="btn btn-success btn-sm"
                        onClick={() => openVolunteerApproveModal(volunteer.id)}
                      >
                        قبول
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
               <Modal
                title={
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    قبول طلب انضمام المتطوع
                  </div>
                }
                centered
                open={showApproveModal}
                onCancel={() => setShowApproveModal(false)}
                footer={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      onClick={() => setShowApproveModal(false)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "orange",
                        color: "orange",
                        width: "100px",
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={confirmVolunteerApprove}
                      style={{
                        backgroundColor: "orange",
                        borderColor: "orange",
                        color: "white",
                        width: "100px",
                      }}
                    >
                      تأكيد
                    </Button>
                  </div>
                }
              >
                <br />
                <p style={{ textAlign: "center" }}>
                  هل أنت متأكد من أنك قبول طلب الانضمام
                </p>
              </Modal>

              <Modal
                title={
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    رفض طلب انضمام المتطوع
                  </div>
                }
                centered
                open={showRejectModal}
                onCancel={() => setShowRejectModal(false)}
                footer={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      onClick={() => setShowRejectModal(false)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "orange",
                        color: "orange",
                        width: "100px",
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={confirmVolunteerReject}
                      style={{
                        backgroundColor: "orange",
                        borderColor: "orange",
                        color: "white",
                        width: "100px",
                      }}
                    >
                      تأكيد
                    </Button>
                  </div>
                }
              >
                <br />
                <p style={{ textAlign: "center" }}>
                  هل أنت متأكد من أنك تريد رفض طلب الانضمام؟
                </p>
              </Modal>
          </table>
        </div>
      )}
      {activeTab === "doctors" && (
        <div className="appointments-list">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">الاسم</th>
                <th className="text-center">البريد الإلكتروني</th>
                <th className="text-center">الدور</th>
                <th className="text-center">تاريخ الانضمام</th>
                <th className="text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="text-center">{doctor.id}</td>
                  <td className="text-center">
                    {doctor.first_name} {doctor.last_name}
                  </td>
                  <td className="text-center">{doctor.email}</td>
                  <td className="text-center">{getRoleName(doctor.role)}</td>
                  <td className="text-center">{doctor.date_joined}</td>
                  <td className="text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      <button style={{color: "white"}}
                        className="btn btn-danger btn-sm"
                        onClick={() => openDoctorRejectModal(doctor.id)}
                      >
                        رفض
                      </button>
                      <button style={{color: "white"}}
                        className="btn btn-success btn-sm"
                        onClick={() => openDoctorApproveModal(doctor.id)}
                      >
                        قبول
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
               <Modal
                title={
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    قبول طلب انضمام الطبيب
                  </div>
                }
                centered
                open={showApproveModal}
                onCancel={() => setShowApproveModal(false)}
                footer={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      onClick={() => setShowApproveModal(false)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "orange",
                        color: "orange",
                        width: "100px",
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={confirmDoctorApprove}
                      style={{
                        backgroundColor: "orange",
                        borderColor: "orange",
                        color: "white",
                        width: "100px",
                      }}
                    >
                      تأكيد
                    </Button>
                  </div>
                }
              >
                <br />
                <p style={{ textAlign: "center" }}>
                  هل أنت متأكد من أنك قبول طلب الانضمام
                </p>
              </Modal>

              <Modal
                title={
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    رفض طلب انضمام الطبيب
                  </div>
                }
                centered
                open={showRejectModal}
                onCancel={() => setShowRejectModal(false)}
                footer={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      onClick={() => setShowRejectModal(false)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "orange",
                        color: "orange",
                        width: "100px",
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={confirmDoctorReject}
                      style={{
                        backgroundColor: "orange",
                        borderColor: "orange",
                        color: "white",
                        width: "100px",
                      }}
                    >
                      تأكيد
                    </Button>
                  </div>
                }
              >
                <br />
                <p style={{ textAlign: "center" }}>
                  هل أنت متأكد من أنك تريد رفض طلب الانضمام؟
                </p>
              </Modal>
          </table>
        </div>
      )}

      {/* <div className="appointments-management">
        <div className="appointments-list">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">نوع الطلب</th>
                <th className="text-center">المعلومات</th>
                <th className="text-center">تاريخ الطلب</th>
                <th className="text-center">السبب</th>
                <th className="text-center">الحالة</th>
                <th className="text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr
                  key={request.id}
                  onClick={() => setSelectedRequest(request)}
                >
                  <td className="text-center">{request.type}</td>
                  <td className="text-center">
                    <div>الاسم: {request.personName}</div>

                    <div>رقم التسجيل: {request.personId}</div>
                  </td>
                  <td className="text-center">{request.requestDate}</td>
                  <td className="text-center">{request.reason}</td>
                  <td className="text-center">
                    <span
                      className={`status-badge ${
                        request.status === "مقبول"
                          ? "approved"
                          : request.status === "مرفوض"
                          ? "rejected"
                          : "pending"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="text-center">
                    {request.status === "قيد المراجعة" && (
                      <div className="action-buttons">
                        <button
                          className="btn btn-success btn-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApprove(request.id);
                          }}
                        >
                          قبول
                        </button>
                        <button
                          className="btn btn-danger btn-sm reject-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReject(request.id);
                          }}
                        >
                          رفض
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
      {/* 
      {selectedRequest && (
        <div className="donation-details-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">تفاصيل طلب الانسحاب</h3>
              <button
                className="close-btn"
                onClick={() => setSelectedRequest(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="details-section">
                <h4>المعلومات الأساسية</h4>
                <p>
                  <strong>نوع الطلب:</strong> {selectedRequest.type}
                </p>
                <p>
                  <strong>الاسم الكامل:</strong> {selectedRequest.personName}
                </p>
                <p>
                  <strong>اسم الأم:</strong> {selectedRequest.motherName}
                </p>
                <p>
                  <strong>رقم التسجيل:</strong> {selectedRequest.personId}
                </p>

                <h4>تفاصيل الطلب</h4>
                <p>
                  <strong>تاريخ الطلب:</strong> {selectedRequest.requestDate}
                </p>
                <p>
                  <strong>سبب الانسحاب:</strong> {selectedRequest.reason}
                </p>
                <p>
                  <strong>الحالة:</strong>
                  <span
                    className={`status-badge ${
                      selectedRequest.status === "مقبول"
                        ? "approved"
                        : selectedRequest.status === "مرفوض"
                        ? "rejected"
                        : "pending"
                    }`}
                  >
                    {selectedRequest.status}
                  </span>
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedRequest(null)}
              >
                إغلاق
              </button>
              {selectedRequest.status === "قيد المراجعة" && (
                <div className="modal-actions">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleApprove(selectedRequest.id);
                      setSelectedRequest(null);
                    }}
                  >
                    قبول الطلب
                  </button>
                  <button
                    className="btn btn-danger reject-btn"
                    onClick={() => {
                      handleReject(selectedRequest.id);
                      setSelectedRequest(null);
                    }}
                  >
                    رفض الطلب
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default RegistrationRequests;
