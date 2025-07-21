import React, { useState } from "react";
import "./VolunteerProfile.css";

const VolunteersSection = () => {
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: "أحمد محمد علي",
      email: "ahmed@example.com",
      phone: "0501234567",
      joinDate: "2023-05-10",
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
          مرحباً بك       </h2>
      </div>

      <div className="appointments-management">
        <div className="appointments-list">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">اسم المريض</th>
               
                <th className="text-center">تاريخ الانضمام</th>
                <th className="text-center"> كتابة التقرير</th>
                
                <th className="text-center">الانسحاب</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map(volunteer => (
                <tr key={volunteer.id} onClick={() => setSelectedVolunteer(volunteer)}>
                  <td className="text-center">{volunteer.name}</td>
                  
                  <td className="text-center">{volunteer.joinDate}</td>
                  <td className="text-center">
                  <div className="action-buttons">
                  <button 
                          className="btn btn-primary btn-sm "
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReject(volunteer.id);
                          }}
                        >
                          كتابة التقرير
                        </button>
                        </div>
                  </td>
                  
                  <td className="text-center">
                    {volunteer.status === "قيد المراجعة" && (
                      <div className="action-buttons">
                      
                        <button 
                          className="btn btn-danger btn-sm reject-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReject(volunteer.id);
                          }}
                        >
                          انسحاب
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