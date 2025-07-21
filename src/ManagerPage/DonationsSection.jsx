import React, { useState } from "react";
import "./DonationsSection.css";

const DonationsSection = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      type: "فردي",
      name: "أحمد محمد علي",
      motherName: "فاطمة",
      amount: 500,
      date: "2023-06-15",
      status: "قيد المراجعة"
    },
    {
      id: 2,
      type: "جمعية",
      organization: "جمعية الخير",
      email: "info@charity.org",
      amount: 2000,
      date: "2023-06-16",
      status: "قيد المراجعة"
    },
    {
      id: 3,
      type: "جمعية",
      organization: "جمعية الخير",
      email: "info@charity.org",
      amount: 2500,
      date: "2023-05-26",
      status: "قيد المراجعة"
    },
    {
      id: 4,
      type: "فردي",
      organization: "جمعية الخير",
      email: "info@charity.org",
      amount: 4000,
      date: "2023-05-26",
      status: "قيد المراجعة"
    }
  ]);

  const [selectedDonation, setSelectedDonation] = useState(null);

  const handleApprove = (id) => {
    setDonations(donations.map(donation => 
      donation.id === id ? { ...donation, status: "مقبول" } : donation
    ));
  };

  const handleReject = (id) => {
    setDonations(donations.map(donation => 
      donation.id === id ? { ...donation, status: "مرفوض" } : donation
    ));
  };

  return (
    <div className="manager-page">
      <div className="manager-header2">
        <h2>
          <i className="fas fa-hand-holding-heart"></i>
          إدارة طلبات التبرعات
        </h2>
      </div>

      <div className="appointments-management">
        <div className="appointments-list">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">نوع التبرع</th>
                <th className="text-center">المعلومات</th>
                <th className="text-center">المبلغ</th>
                <th className="text-center">التاريخ</th>
                <th className="text-center">الحالة</th>
                <th className="text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(donation => (
                <tr key={donation.id}>
                  <td className="text-center">{donation.type}</td>
                  <td className="text-center">
                    <button 
                      className="btn btn-info btn-sm view-details-btn"
                      onClick={() => setSelectedDonation(donation)}
                    >
                      عرض التفاصيل
                    </button>
                  </td>
                  <td className="text-center">{donation.amount} ر.س</td>
                  <td className="text-center">{donation.date}</td>
                  <td className="text-center">
                    <span className={`status-badge ${
                      donation.status === "مقبول" ? "approved" :
                      donation.status === "مرفوض" ? "rejected" : "pending"
                    }`}>
                      {donation.status}
                    </span>
                  </td>
                  <td className="text-center">
                    {donation.status === "قيد المراجعة" && (
                      <div className="action-buttons">
                        <button 
                          className="btn btn-success btn-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApprove(donation.id);
                          }}
                        >
                          قبول
                        </button>
                        <button 
                          className="btn btn-danger btn-sm reject-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReject(donation.id);
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
      </div>

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
                <p><strong>نوع التبرع:</strong> {selectedDonation.type}</p>
                {selectedDonation.type === "فردي" ? (
                  <>
                    <p><strong>الاسم الكامل:</strong> {selectedDonation.name}</p>
                    <p><strong>اسم الأم:</strong> {selectedDonation.motherName}</p>
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