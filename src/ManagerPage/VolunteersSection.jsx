import React, { useState } from "react";
import "./VolunteersSection.css";

const VolunteersSection = () => {
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: "أحمد محمد علي",
      email: "ahmed@example.com",
      phone: "0501234567",
      joinDate: "2023-05-10",
      status: "قيد المراجعة"
    },
    {
      id: 2,
      name: "سارة عبدالله سالم",
      email: "sara@example.com",
      phone: "0557654321",
      joinDate: "2023-06-15",
      status: "مقبول"
    },
    {
      id: 3,
      name: "خالد فيصل أحمد",
      email: "khaled@example.com",
      phone: "0549876543",
      joinDate: "2023-07-01",
      status: "مرفوض"
    },
    {
      id: 4,
      name: "نورة سعد عبدالكريم",
      email: "nora@example.com",
      phone: "0531122334",
      joinDate: "2023-07-05",
      status: "قيد المراجعة"
    }
  ]);

  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleApprove = (id) => {
    setVolunteers(volunteers.map(volunteer => 
      volunteer.id === id ? { ...volunteer, status: "مقبول" } : volunteer
    ));
  };

  const handleReject = (id) => {
    setVolunteers(volunteers.map(volunteer => 
      volunteer.id === id ? { ...volunteer, status: "مرفوض" } : volunteer
    ));
  };

  return (
    <div className="manager-page">
      <div className="manager-header2">
        <h2>
          <i className="fas fa-hands-helping"></i>
          إدارة طلبات التطوع
        </h2>
      </div>

      <div className="appointments-management">
        <div className="appointments-list">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">الاسم</th>
                <th className="text-center">معلومات التواصل</th>
                <th className="text-center">تاريخ الانضمام</th>
                <th className="text-center">الحالة</th>
                <th className="text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map(volunteer => (
                <tr key={volunteer.id} onClick={() => setSelectedVolunteer(volunteer)}>
                  <td className="text-center">{volunteer.name}</td>
                  <td className="text-center">
                    <div>البريد: {volunteer.email}</div>
                    <div>الجوال: {volunteer.phone}</div>
                  </td>
                  <td className="text-center">{volunteer.joinDate}</td>
                  <td className="text-center">
                    <span className={`status-badge ${
                      volunteer.status === "مقبول" ? "approved" :
                      volunteer.status === "مرفوض" ? "rejected" : "pending"
                    }`}>
                      {volunteer.status}
                    </span>
                  </td>
                  <td className="text-center">
                    {volunteer.status === "قيد المراجعة" && (
                      <div className="action-buttons">
                        <button 
                          className="btn btn-success btn-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApprove(volunteer.id);
                          }}
                        >
                          قبول
                        </button>
                        <button 
                          className="btn btn-danger btn-sm reject-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReject(volunteer.id);
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

      {selectedVolunteer && (
        <div className="donation-details-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">تفاصيل المتطوع</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedVolunteer(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="details-section">
                <h4>المعلومات الشخصية</h4>
                <p><strong>الاسم الكامل:</strong> {selectedVolunteer.name}</p>
                <p><strong>البريد الإلكتروني:</strong> {selectedVolunteer.email}</p>
                <p><strong>رقم الجوال:</strong> {selectedVolunteer.phone}</p>
                
                <h4>معلومات التطوع</h4>
                <p><strong>تاريخ الانضمام:</strong> {selectedVolunteer.joinDate}</p>
                <p><strong>الحالة:</strong> 
                  <span className={`status-badge ${
                    selectedVolunteer.status === "مقبول" ? "approved" :
                    selectedVolunteer.status === "مرفوض" ? "rejected" : "pending"
                  }`}>
                    {selectedVolunteer.status}
                  </span>
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedVolunteer(null)}
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

export default VolunteersSection;