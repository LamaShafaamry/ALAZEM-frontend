import React, { useState, useEffect } from 'react';
import {getUsesrs} from "../api/api"
import "./UsersManagement.css";
import { Button, Popconfirm, Modal, Input, message } from "antd";

const UsersManagement = () => {
 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(true);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  useEffect(() => {
    // const results = users.filter(user =>
    //   user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   user.role.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    fetchUsers();
  }, [ ]);

   const fetchUsers = async () => {
      try {
        let response;
  
        response=await getUsesrs("","","")
  
        setUsers(
          response.data
          
        );
      } catch (error) {
        showMessage("فشل في تحميل المستخدمين", "error");
      } finally {
      }
    };
  const toggleUserStatus = (userId) => {
    setUsers(users.map(user =>
      user.id === userId
        ? {
            ...user,
            status: user.status === 'active' ? 'inactive' : 'active'
          }
        : user
    ));
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
        await fetchUsers();
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

  const getArabicRoleName = (roleCode) => {
  switch (roleCode) {
    case 'MAN':
      return 'المدير';
    case 'DOC':
      return 'الطبيب';
    case 'PAT':
      return 'الكفيفة';
    case 'VOL':
      return 'متطوع';
    default:
      return 'غير معروف';
  }
};

  return (
    <div className="manager-page">
      <div className="manager-header2">
        <h2>
          <i className="fas fa-users-cog"></i>
          إدارة المستخدمين
        </h2>
      </div>

      <div className="appointments-management">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="ابحث بالاسم، البريد الإلكتروني أو الدور..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
    
        <div className="appointments-list">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">المعلومات</th>
                <th className="text-center">الدور</th>
                <th className="text-center">تاريخ الانضمام</th>
                <th className="text-center">الحالة</th>
                <th className="text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} onClick={() => setSelectedUser(user)}>
                  <td className="text-center">{user.id}</td>
                  <td className="text-center">
                    <div className="user-info-cell">
                      <div><strong>الاسم:</strong> {user.first_name} {user.last_name}</div>
                      <div><strong>البريد:</strong> {user.email}</div>
                    </div>
                  </td>
                  <td className="text-center">{getArabicRoleName(user.role)}</td>

                  <td className="text-center">{user.date_joined}</td>
                  <td className="text-center">
                    <span className={`status-badge ${
                      user.is_active === true ? 'approved' : 'rejected'
                    }`}>
                      {user.is_active === true ? 'مفعل' : 'معطل'}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="action-buttons">
                      <button
                        className={`btn btn-sm ${
                          user.is_active === true ? 'btn-danger reject-btn' : 'btn-success'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          openApproveModal(user.id);
                        }}
                      >
                        {user.is_active === true? 'تعطيل' : 'تفعيل'}
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
                  تفعيل الحستب
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
                هل أنت متأكد من أنك تريد تفعيل الحساب؟
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
                  تعطيل الحساب
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
                هل أنت متأكد من أنك تريد تعطيل الحساب؟
              </p>
            </Modal>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div className="donation-details-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">تفاصيل المستخدم</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedUser(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="details-section">
                <h4>المعلومات الشخصية</h4>
                <p><strong>الاسم الكامل:</strong> {selectedUser.fullName}</p>
                <p><strong>البريد الإلكتروني:</strong> {selectedUser.email}</p>
                
                <h4>معلومات الحساب</h4>
                <p><strong>الدور:</strong> {selectedUser.role}</p>
                <p><strong>تاريخ الانضمام:</strong> {selectedUser.joinDate}</p>
                <p><strong>الحالة:</strong> 
                  <span className={`status-badge ${
                    selectedUser.status === 'active' ? 'approved' : 'rejected'
                  }`}>
                    {selectedUser.status === 'active' ? 'مفعل' : 'معطل'}
                  </span>
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedUser(null)}
              >
                إغلاق
              </button>
              <button
                className={`btn ${
                  selectedUser.status === 'active' ? 'btn-danger reject-btn' : 'btn-success'
                }`}
                onClick={() => {
                  toggleUserStatus(selectedUser.id);
                  setSelectedUser(null);
                }}
              >
                {selectedUser.status === 'active' ? 'تعطيل الحساب' : 'تفعيل الحساب'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersManagement;