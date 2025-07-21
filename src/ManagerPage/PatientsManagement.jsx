import React, { useState, useEffect } from 'react';
import "./PatientsManagement.css";

const PatientsManagement = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      fullName: 'محمد علي',
      disabilityCardNumber: 'DIS12345',
      phone: '0512345678',
      motherName: 'فاطمة',
      status: 'pending',
      joinDate: '2023-05-10'
    },
    {
      id: 2,
      fullName: 'فاطمة الزهراء',
      disabilityCardNumber: 'DIS67890',
      phone: '0556789012',
      motherName: 'نورة',
      status: 'approved',
      joinDate: '2023-06-15'
    },
    {
      id: 3,
      fullName: 'خالد سعيد',
      disabilityCardNumber: 'DIS54321',
      phone: '0543210987',
      motherName: 'أمينة',
      status: 'approved',
      joinDate: '2023-04-22'
    },
    {
      id: 4,
      fullName: 'نورة عبدالله',
      disabilityCardNumber: 'DIS98765',
      phone: '0534567890',
      motherName: 'لمياء',
      status: 'rejected',
      joinDate: '2023-03-18'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(patients);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const results = patients.filter(patient =>
      patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.disabilityCardNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(results);
  }, [searchTerm, patients]);

  const approvePatient = (id) => {
    setPatients(patients.map(patient =>
      patient.id === id ? { ...patient, status: 'approved' } : patient
    ));
  };

  const rejectPatient = (id) => {
    setPatients(patients.map(patient =>
      patient.id === id ? { ...patient, status: 'rejected' } : patient
    ));
  };

  return (
    <div className="manager-page">
      <div className="manager-header2">
        <h2>
          <i className="fas fa-user-injured"></i>
          إدارة المرضى
        </h2>
      </div>

      <div className="appointments-management">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="ابحث بالاسم أو رقم البطاقة..."
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
                <th className="text-center">رقم البطاقة</th>
                <th className="text-center">الحالة</th>
                <th className="text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map(patient => (
                <tr key={patient.id} onClick={() => setSelectedPatient(patient)}>
                  <td className="text-center">{patient.id}</td>
                  <td className="text-center">
                    <div className="patient-info-cell">
                      <div><strong>الاسم:</strong> {patient.fullName}</div>
                      <div><strong>الهاتف:</strong> {patient.phone}</div>
                     
                    </div>
                  </td>
                  <td className="text-center">{patient.disabilityCardNumber}</td>
                  <td className="text-center">
                    <span className={`status-badge ${
                      patient.status === 'approved' ? 'approved' :
                      patient.status === 'rejected' ? 'rejected' : 'pending'
                    }`}>
                      {patient.status === 'approved' ? 'موافق عليه' :
                       patient.status === 'rejected' ? 'مرفوض' : 'بانتظار الموافقة'}
                    </span>
                  </td>
                  <td className="text-center">
                    {patient.status === 'pending' && (
                      <div className="action-buttons">
                        <button 
                          className="btn btn-success btn-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            approvePatient(patient.id);
                          }}
                        >
                          قبول
                        </button>
                        <button 
                          className="btn btn-danger btn-sm reject-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            rejectPatient(patient.id);
                          }}
                        >
                          رفض
                        </button>
                      </div>
                    )}
                    {patient.status !== 'pending' && (
                      <div className="action-buttons">
                        <span className="no-actions">لا يوجد إجراءات</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPatient && (
        <div className="donation-details-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">تفاصيل المريض</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedPatient(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="details-section">
                <h4>المعلومات الشخصية</h4>
                <p><strong>الاسم الكامل:</strong> {selectedPatient.fullName}</p>
                
                <p><strong>الهاتف:</strong> {selectedPatient.phone}</p>
                
                <h4>معلومات التسجيل</h4>
                <p><strong>رقم البطاقة:</strong> {selectedPatient.disabilityCardNumber}</p>
                <p><strong>تاريخ التسجيل:</strong> {selectedPatient.joinDate}</p>
                <p><strong>الحالة:</strong> 
                  <span className={`status-badge ${
                    selectedPatient.status === 'approved' ? 'approved' :
                    selectedPatient.status === 'rejected' ? 'rejected' : 'pending'
                  }`}>
                    {selectedPatient.status === 'approved' ? 'موافق عليه' :
                     selectedPatient.status === 'rejected' ? 'مرفوض' : 'بانتظار الموافقة'}
                  </span>
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedPatient(null)}
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

export default PatientsManagement;