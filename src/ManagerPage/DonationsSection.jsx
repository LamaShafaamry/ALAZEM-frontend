import React, { useState, useEffect } from "react";
import { getManagerDonations, changeDonationStatus } from "../api/api";
import "./DonationsSection.css";
import { Button, Popconfirm, Modal, Input, message } from "antd";

const DonationsSection = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'individual', 'association'
  const [selectedDonationId, setSelectedDonationId] = useState(null);

  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  useEffect(() => {
    fetchDonations();
  }, [activeTab]);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      let response;

      if (activeTab === "individual") {
        response = await getManagerDonations("IND");
      } else if (activeTab === "association") {
        response = await getManagerDonations("ASS");
      } else {
        // جلب جميع التبرعات
        const [indResponse, assocResponse] = await Promise.all([
          getManagerDonations("ASS"),
          getManagerDonations("IND"),
        ]);
        response = { data: [...indResponse.data, ...assocResponse.data] };
      }

      setDonations(
        response.data.map((donation) => ({
          id: donation.id,
          donation_type: donation.donation_type === "IND" ? "فردي" : "جمعية",
          name: donation.donor_name || "غير معروف",
          email: donation.email,
          amount: donation.amount,
          creation_date: new Date(donation.creation_date).toLocaleDateString(),
          status: donation.donation_status,
          donation_status:
            donation.donation_status === "APP"
              ? "مقبول"
              : donation.donation_status === "REJ"
              ? "مرفوض"
              : donation.donation_status === "PEN"
              ? "قيد الانتظار"
              : "مكتمل",
          ...(donation.donation_type === "IND" && {
            patients: donation.patients,
          }),
          ...(!donation.is_individual && {
            organization: donation.organization_name,
          }),
        }))
      );
    } catch (error) {
      showMessage("فشل في تحميل التبرعات", "error");
      console.error("Error fetching donations:", error);
    } finally {
      setLoading(false);
    }
  };
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  // باقي الدوال (handleApprove, handleReject, showMessage) تبقى كما هي
  const openApproveModal = (id) => {
    setSelectedDonation(null);
    setSelectedDonationId(id);
    setShowApproveModal(true);
  };

  const openRejectModal = (id) => {
    setSelectedDonationId(id);
    setShowRejectModal(true);
  };

  const confirmApprove = () => {
    handleApproveDonation(selectedDonationId);
    setShowApproveModal(false);
  };

  const confirmReject = () => {
    handleCancelDonation(selectedDonationId);
    setShowRejectModal(false);
  };

  const handleApproveDonation = async (id) => {
    try {
      await changeDonationStatus(id, { donation_status: "APP" });
      setShowApproveModal(false);
      await fetchDonations();
    } catch (error) {
      console.error("Error approving appointment:", error);
    }
  };

  const handleCancelDonation = async (id) => {
    try {
      await changeDonationStatus(id, { donation_status: "REJ" });
      setShowRejectModal(false);
      await fetchDonations();
    } catch (error) {
      console.error("Error rejecting appointment:", error);
    }
  };
  return (
    <div className="manager-page">
      <div className="manager-header2">
        <h2>
          <i className="fas fa-hand-holding-heart"></i>
          إدارة طلبات التبرعات
        </h2>
      </div>

      {/* أضف تبويبات للتصفية */}
      <div className="donation-tabs">
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          جميع التبرعات
        </button>
        <button
          className={`tab-btn ${activeTab === "individual" ? "active" : ""}`}
          onClick={() => setActiveTab("individual")}
        >
          التبرعات الفردية
        </button>
        <button
          className={`tab-btn ${activeTab === "association" ? "active" : ""}`}
          onClick={() => setActiveTab("association")}
        >
          تبرعات الجمعيات
        </button>
      </div>

      {/* باقي الكود يبقى كما هو */}
      {message.text && (
        <div
          className={`alert alert-${
            message.type === "error" ? "danger" : "success"
          }`}
        >
          {message.text}
        </div>
      )}

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">جاري التحميل...</span>
          </div>
          <p>جاري تحميل التبرعات...</p>
        </div>
      ) : (
        <div className="appointments-management">
          <div className="appointments-list">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">رقم التبرع</th>
                  <th className="text-center">نوع التبرع</th>
                  <th className="text-center">تاريخ التبرع</th>
                  <th className="text-center">حالة التبرع</th>
                  <th className="text-center">المبلغ</th>
                  <th className="text-center"> الاجراء</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((myDonation, index) => (
                  <tr
                    key={index}
                    onClick={() => setSelectedDonation(myDonation)}
                  >
                    <td className="text-center" dir="ltr">
                      {myDonation.id}
                    </td>
                    <td className="text-center" dir="ltr">
                      {myDonation.donation_type}
                    </td>
                    <td className="text-center" dir="ltr">
                      {myDonation.creation_date}
                    </td>
                    <td className="text-center" dir="ltr">
                      {myDonation.donation_status}
                    </td>
                    <td className="text-center">{myDonation.amount} ل.س</td>
                    <td className="text-center">
                      {myDonation.status === "PEN" ? (
                        <>
                          <div className="d-flex gap-2 justify-content-center">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevents the row's onClick
                                openRejectModal(myDonation.id);
                              }}
                            >
                              رفض
                            </button>
                            <button
                              className="btn btn-success btn-sm"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevents the row's onClick
                                openApproveModal(myDonation.id);
                              }}
                            >
                              قبول
                            </button>
                          </div>
                        </>
                      ) : (
                        <div style={{ color: "gray" }}>
                          لا يمكنك اتخاذ إجراءات
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal
              title={
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  قبول التبرع
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
                    onClick={confirmApprove}
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
                هل أنت متأكد من أنك تريد قبول التبرع؟
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
                  رفض التبرع
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
                    onClick={confirmReject}
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
                هل أنت متأكد من أنك تريد رفض التبرع؟
              </p>
            </Modal>
          </div>
        </div>
      )}

      {selectedDonation && (
        <div className="donation-details-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">تفاصيل التبرع</h3>
              <button
                className="close-btn"
                onClick={() => setSelectedDonation(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="details-section">
                <h4>المعلومات الأساسية</h4>
                <p>
                  <strong>نوع التبرع:</strong> {selectedDonation.donation_type}
                </p>

                {selectedDonation.donation_type === "فردي" ? (
                  <>
                    <p>
                      <strong>البريد الإلكتروني:</strong>{" "}
                      {selectedDonation.email}
                    </p>
                    <p>
                      <strong>المرضى المستفيدون:</strong>
                    </p>
                    {selectedDonation.patients &&
                    selectedDonation.patients.length > 0 ? (
                      <ul>
                        {selectedDonation.patients.map((patient, index) => (
                          <li key={index}>
                            <strong>الاسم:</strong> {patient.first_name}{" "}
                            {patient.last_name} | <strong>اسم الأب:</strong>{" "}
                            {patient.father_name} | <strong>اسم الأم:</strong>{" "}
                            {patient.mother_name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>لا يوجد</p>
                    )}
                  </>
                ) : (
                  <>
                    <p>
                      <strong>البريد الإلكتروني:</strong>{" "}
                      {selectedDonation.email}
                    </p>
                  </>
                )}

                <p>
                  <strong>المبلغ:</strong> {selectedDonation.amount} ر.س
                </p>
                <p>
                  <strong>التاريخ:</strong> {selectedDonation.creation_date}
                </p>
                <p>
                  <strong>الحالة:</strong>
                  <span
                    className={`status-badge ${
                      selectedDonation.status === "مقبول"
                        ? "approved"
                        : selectedDonation.status === "مرفوض"
                        ? "rejected"
                        : "pending"
                    }`}
                  >
                    {selectedDonation.donation_status}
                  </span>
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedDonation(null)}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationsSection;
