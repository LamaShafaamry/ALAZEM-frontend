import React, { useState, useEffect } from "react";
import { 
  getPendingDonations,
  getIndividualDonations,
  approveDonation,
  rejectDonation
} from "../api/api";
import "./DonationsSection.css";

const DonationsSection = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'individual', 'association'

  useEffect(() => {
    fetchDonations();
  }, [activeTab]);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      let response;
      
      if (activeTab === "individual") {
        response = await getIndividualDonations();
      } else if (activeTab === "association") {
        response = await getPendingDonations();
      } else {
        // جلب جميع التبرعات
        const [indResponse, assocResponse] = await Promise.all([
          getIndividualDonations(),
          getPendingDonations()
        ]);
        response = { data: [...indResponse.data, ...assocResponse.data] };
      }

      setDonations(response.data.map(donation => ({
        id: donation.id,
        type: donation.is_individual ? "فردي" : "جمعية",
        name: donation.donor_name || "غير معروف",
        email: donation.email,
        amount: donation.amount,
        date: new Date(donation.created_at).toLocaleDateString(),
        status: donation.status === "approved" ? "مقبول" : 
               donation.status === "rejected" ? "مرفوض" : "قيد المراجعة",
        ...(donation.is_individual && { 
          patients: donation.patients,
          mother_name: donation.mother_name 
        }),
        ...(!donation.is_individual && { organization: donation.organization_name })
      })));
    } catch (error) {
      showMessage("فشل في تحميل التبرعات", "error");
      console.error("Error fetching donations:", error);
    } finally {
      setLoading(false);
    }
  };

  // باقي الدوال (handleApprove, handleReject, showMessage) تبقى كما هي

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
        <div className={`alert alert-${message.type === "error" ? "danger" : "success"}`}>
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
              {/* ... نفس جدول التبرعات ... */}
            </table>
          </div>
        </div>
      )}

      {selectedDonation && (
        <div className="donation-details-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">تفاصيل التبرع</h3>
              <button className="close-btn" onClick={() => setSelectedDonation(null)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="details-section">
                <h4>المعلومات الأساسية</h4>
                <p><strong>نوع التبرع:</strong> {selectedDonation.type}</p>
                
                {selectedDonation.type === "فردي" ? (
                  <>
                    <p><strong>اسم المتبرع:</strong> {selectedDonation.name}</p>
                    <p><strong>اسم الأم:</strong> {selectedDonation.mother_name}</p>
                    <p><strong>البريد الإلكتروني:</strong> {selectedDonation.email}</p>
                    <p><strong>المرضى المستفيدون:</strong> 
                      {selectedDonation.patients?.join(", ") || "لا يوجد"}
                    </p>
                  </>
                ) : (
                  <>
                    <p><strong>اسم الجمعية:</strong> {selectedDonation.organization}</p>
                    <p><strong>البريد الإلكتروني:</strong> {selectedDonation.email}</p>
                  </>
                )}
                
                <p><strong>المبلغ:</strong> {selectedDonation.amount} ر.س</p>
                <p><strong>التاريخ:</strong> {selectedDonation.date}</p>
                <p><strong>الحالة:</strong> 
                  <span className={`status-badge ${
                    selectedDonation.status === "مقبول" ? "approved" :
                    selectedDonation.status === "مرفوض" ? "rejected" : "pending"
                  }`}>
                    {selectedDonation.status}
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