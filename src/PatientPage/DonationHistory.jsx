import React, { useState } from 'react';
import "./DonationHistory.css";

const DonationHistory = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      date: "2023-06-15",
      type: "مالي",
      amount: 500,
      status: "مكتمل"
    },
    {
      id: 2,
      date: "2023-05-20",
      type: "دم",
      amount: "-",
      status: "مكتمل"
    },
    {
      id: 3,
      date: "2023-04-10",
      type: "مالي",
      amount: 200,
      status: "ملغى"
    },
    {
      id: 4,
      date: "2023-07-01",
      type: "أدوية",
      amount: "-",
      status: "قيد المراجعة"
    }
  ]);

  const [selectedDonation, setSelectedDonation] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredDonations = donations.filter(donation => {
    if (activeFilter === "all") return true;
    return donation.status === activeFilter;
  });

  const totalDonations = donations
    .filter(d => d.type === "مالي" && d.status === "مكتمل")
    .reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="patient-page">
      <div className="patient-header">
        <h2>
          <i className="fas fa-hand-holding-heart"></i>
          التبرعات
        </h2>
      </div>

      <div className="patient-tabs">
        <button 
          className={`tab-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          الكل
        </button>
        <button 
          className={`tab-btn ${activeFilter === "مكتمل" ? "active" : ""}`}
          onClick={() => setActiveFilter("مكتمل")}
        >
          مكتملة
        </button>
        <button 
          className={`tab-btn ${activeFilter === "قيد المراجعة" ? "active" : ""}`}
          onClick={() => setActiveFilter("قيد المراجعة")}
        >
          قيد المراجعة
        </button>
        <button 
          className={`tab-btn ${activeFilter === "ملغى" ? "active" : ""}`}
          onClick={() => setActiveFilter("ملغى")}
        >
          ملغاة
        </button>
      </div>

      <div className="appointments-list">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">تاريخ التبرع</th>
              
              <th className="text-center">المبلغ/الكمية</th>
              <th className="text-center">الحالة</th>
              <th className="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map(donation => (
              <tr key={donation.id}>
                <td className="text-center">{donation.date}</td>
             
                <td className="text-center">
                  {donation.type === "مالي" ? `${donation.amount} ر.س` : "---"}
                </td>
                <td className="text-center">
                  <span className={`status-badge ${
                    donation.status === "مكتمل" ? "completed" :
                    donation.status === "قيد المراجعة" ? "pending" : "cancelled"
                  }`}>
                    {donation.status}
                  </span>
                </td>
                <td className="text-center">
                  <div className="action-buttons">
                    <button 
                      className="btn btn-info btn-sm"
                      onClick={() => setSelectedDonation(donation)}
                    >
                      التفاصيل
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedDonation && (
        <div className="donation-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>تفاصيل التبرع</h3>
              <button onClick={() => setSelectedDonation(null)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="donation-details">
                <div className="detail-row">
                  <span className="detail-label">تاريخ التبرع:</span>
                  <span>{selectedDonation.date}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">نوع التبرع:</span>
                  <span className={`donation-type ${
                    selectedDonation.type === "مالي" ? "financial" :
                    selectedDonation.type === "دم" ? "blood" : "medical"
                  }`}>
                    {selectedDonation.type}
                  </span>
                </div>
                {selectedDonation.type === "مالي" && (
                  <div className="detail-row">
                    <span className="detail-label">المبلغ:</span>
                    <span>{selectedDonation.amount} ر.س</span>
                  </div>
                )}
                <div className="detail-row">
                  <span className="detail-label">الحالة:</span>
                  <span className={`status-badge ${
                    selectedDonation.status === "مكتمل" ? "completed" :
                    selectedDonation.status === "قيد المراجعة" ? "pending" : "cancelled"
                  }`}>
                    {selectedDonation.status}
                  </span>
                </div>
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

export default DonationHistory;