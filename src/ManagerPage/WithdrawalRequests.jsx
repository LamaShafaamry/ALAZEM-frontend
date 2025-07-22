import React, { useState } from "react";
import "./WithdrawalRequests.css";

const WithdrawalRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "متطوع",
      personId: 101,
      personName: "أحمد محمد",
      motherName: "فاطمة",
      requestDate: "2023-06-15",
      status: "قيد المراجعة",
      reason: "ظروف شخصية"
    },
    {
      id: 2,
      type: "متطوع",
      personId: 102,
      personName: "سارة عبدالله",
      motherName: "نورة",
      requestDate: "2023-06-16",
      status: "قيد المراجعة",
      reason: "انشغال بالعمل"
    },
    {
      id: 3,
      type: "مريض",
      personId: 201,
      personName: "خالد فيصل",
      motherName: "أمينة",
      requestDate: "2023-06-18",
      status: "مقبول",
      reason: "تحسن الحالة الصحية"
    },
    {
      id: 4,
      type: "مريض",
      personId: 202,
      personName: "نورة سعد",
      motherName: "لمياء",
      requestDate: "2023-06-20",
      status: "مرفوض",
      reason: "عدم اكتمال الوثائق"
    }
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleApprove = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: "مقبول" } : request
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: "مرفوض" } : request
    ));
  };

  return (
    <div className="manager-page">
      <div className="manager-header2">
        <h2>
          <i className="fas fa-sign-out-alt"></i>
          إدارة طلبات الانسحاب
        </h2>
      </div>

      <div className="appointments-management">
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
              {requests.map(request => (
                <tr key={request.id} onClick={() => setSelectedRequest(request)}>
                  <td className="text-center">{request.type}</td>
                  <td className="text-center">
                    <div>الاسم: {request.personName}</div>
                    
                    <div>رقم التسجيل: {request.personId}</div>
                  </td>
                  <td className="text-center">{request.requestDate}</td>
                  <td className="text-center">{request.reason}</td>
                  <td className="text-center">
                    <span className={`status-badge ${
                      request.status === "مقبول" ? "approved" :
                      request.status === "مرفوض" ? "rejected" : "pending"
                    }`}>
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
      </div>

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
                <p><strong>نوع الطلب:</strong> {selectedRequest.type}</p>
                <p><strong>الاسم الكامل:</strong> {selectedRequest.personName}</p>
                <p><strong>اسم الأم:</strong> {selectedRequest.motherName}</p>
                <p><strong>رقم التسجيل:</strong> {selectedRequest.personId}</p>
                
                <h4>تفاصيل الطلب</h4>
                <p><strong>تاريخ الطلب:</strong> {selectedRequest.requestDate}</p>
                <p><strong>سبب الانسحاب:</strong> {selectedRequest.reason}</p>
                <p><strong>الحالة:</strong> 
                  <span className={`status-badge ${
                    selectedRequest.status === "مقبول" ? "approved" :
                    selectedRequest.status === "مرفوض" ? "rejected" : "pending"
                  }`}>
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
      )}
    </div>
  );
};

export default WithdrawalRequests;