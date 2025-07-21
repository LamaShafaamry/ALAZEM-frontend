import React, { useState, useEffect } from 'react';
import "./UsersManagement.css";

const UsersManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: 'أحمد محمد',
      email: 'ahmed@example.com',
      role: 'متطوع',
      status: 'active',
      joinDate: '2023-01-15',
      motherName: 'فاطمة'
    },
    {
      id: 2,
      fullName: 'سارة عبدالله',
      email: 'sara@example.com',
      role: 'مريض',
      status: 'inactive',
      joinDate: '2023-02-20',
      motherName: 'نورة'
    },
    {
      id: 3,
      fullName: 'خالد حسن',
      email: 'khaled@example.com',
      role: 'طبيب',
      status: 'active',
      joinDate: '2023-03-10',
      motherName: 'أمينة'
    },
    {
      id: 4,
      fullName: 'نورة سعد',
      email: 'nora@example.com',
      role: 'متطوع',
      status: 'active',
      joinDate: '2023-04-05',
      motherName: 'لمياء'
    },
    {
      id: 5,
      fullName: 'فيصل عبدالرحمن',
      email: 'faisal@example.com',
      role: 'إداري',
      status: 'inactive',
      joinDate: '2023-05-12',
      motherName: 'هناء'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const results = users.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

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
              {filteredUsers.map(user => (
                <tr key={user.id} onClick={() => setSelectedUser(user)}>
                  <td className="text-center">{user.id}</td>
                  <td className="text-center">
                    <div className="user-info-cell">
                      <div><strong>الاسم:</strong> {user.fullName}</div>
                      <div><strong>البريد:</strong> {user.email}</div>
                    </div>
                  </td>
                  <td className="text-center">{user.role}</td>
                  <td className="text-center">{user.joinDate}</td>
                  <td className="text-center">
                    <span className={`status-badge ${
                      user.status === 'active' ? 'approved' : 'rejected'
                    }`}>
                      {user.status === 'active' ? 'مفعل' : 'معطل'}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="action-buttons">
                      <button
                        className={`btn btn-sm ${
                          user.status === 'active' ? 'btn-danger reject-btn' : 'btn-success'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleUserStatus(user.id);
                        }}
                      >
                        {user.status === 'active' ? 'تعطيل' : 'تفعيل'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
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