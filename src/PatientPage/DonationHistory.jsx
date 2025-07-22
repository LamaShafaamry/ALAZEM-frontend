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
      amount: 400,
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
      amount: 350,
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
      <br></br>

    

      <div className="appointments-list">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">تاريخ التبرع</th>
              
              <th className="text-center">المبلغ</th>
             
             
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map(donation => (
              <tr key={donation.id}>
                <td className="text-center">{donation.date}</td>
             
                <td className="text-center">
                  {donation.type === "مالي" ? `${donation.amount} ل.س` : "400 ل.س"}
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
                
                {selectedDonation.type === "مالي" && (
                  <div className="detail-row">
                    <span className="detail-label">المبلغ:</span>
                    <span>{selectedDonation.amount} ل.س</span>
                  </div>
                )}
              
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