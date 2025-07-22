import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./DoctorReportsPage.css";

const DoctorReportsPage = () => {
  const navigate = useNavigate();
  const [medicalReports, setMedicalReports] = useState([
    {
      id: 1,
      doctorName: 'دكتور أحمد محمد',
      specialty: 'أمراض القلب',
      date: '2023-06-15',
      diagnosis: 'ارتفاع ضغط الدم',
      treatment: 'وصف دواء لخفض الضغط مع متابعة دورية',
      status: 'مكتمل',
      attachments: ['تقرير_القلب.pdf', 'تخطيط_القلب.png']
    },
    {
      id: 2,
      doctorName: 'دكتورة سارة عبدالله',
      specialty: 'طب الأطفال',
      date: '2023-05-20',
      diagnosis: 'نزلة معوية',
      treatment: 'مضاد حيوي مع محلول لتعويض السوائل',
      status: 'مرفوض',
      attachments: ['تحليل_البراز.pdf']
    },
    {
      id: 3,
      doctorName: 'دكتورة عليا موسى',
      specialty: 'جلدية ',
      date: '2023-04-26',
      diagnosis: 'حرق من الدرجة الاولى ',
      treatment: 'كريم  ',
      status: 'مرفوض',
      attachments: ['صورة_الحرق.pdf']
    },
    {
      id: 4,
      doctorName: 'دكتورة لانا العلي',
      specialty: 'داخلية ',
      date: '2023-04-26',
      diagnosis: '    ',
      treatment: '  ',
      status: 'مرفوض',
      attachments: ['صورة_.pdf']
    }
  ]);

  const [selectedReport, setSelectedReport] = useState(null);

  const handleViewDetails = (report) => {
    setSelectedReport(report);
  };

  return (
    <div className="reports-section">
      <div className="manager-header">
        <h2>
          <i className="fas fa-file-medical"></i>
          إدارة التقارير الطبية
        </h2>
      </div>

      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>اسم الطبيب</th>
              <th>التخصص</th>
             
              <th>التاريخ</th>
              <th>الحالة</th>
              <th>التقرير الطبي</th>
            </tr>
          </thead>
          <tbody>
            {medicalReports.map(report => (
              <tr key={report.id}>
                <td>{report.doctorName}</td>
                <td>{report.specialty}</td>
               
                <td>{report.date}</td>
                <td>
                  <span className={`status-badge ${
                    report.status === "مكتمل" ? "approved" :
                    report.status === "مرفوض" ? "rejected" : "pending"
                  }`}>
                    {report.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn btn-info btn-sm"
                      onClick={() => handleViewDetails(report)}
                    >
                      عرض التفاصيل
                    </button>
                    {report.attachments && report.attachments.length > 0 && (
                      <div> </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal لعرض التفاصيل */}
      {selectedReport && (
        <div className="report-details-modal">
          <div className="modal-content">
            <h3>تفاصيل التقرير الطبي</h3>
            <div className="details-section">
              <h4>معلومات الطبيب</h4>
              <p><strong>اسم الطبيب:</strong> {selectedReport.doctorName}</p>
              <p><strong>التخصص:</strong> {selectedReport.specialty}</p>
              <p><strong>التاريخ:</strong> {selectedReport.date}</p>
            </div>
            
            

            {selectedReport.attachments && selectedReport.attachments.length > 0 && (
              <div className="details-section">
                <h4>المرفقات</h4>
                <ul className="attachments-list">
                  {selectedReport.attachments.map((file, index) => (
                    <li key={index}>
                      <i className="far fa-file-pdf"></i>
                      <span>{file}</span>
                      <button className="btn btn-sm">تحميل</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedReport(null)}
              >
                إغلاق
              </button>
              <button className="btn btn-primary">
                <i className="fas fa-print"></i> طباعة التقرير
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorReportsPage;