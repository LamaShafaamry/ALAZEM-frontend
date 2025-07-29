import React from 'react';
import './ManagerProfile.css';

const ManagerProfile = () => {
  const managerInfo = {
    name: "محمد عبد الرحمن",
    position: "مدير في الجمعية  ",
    experience: "10 سنوات في الإدارة",
    education: [
      "ماجستير في الإدارة الصحية ",
      "بكالوريوس إدارة الأعمال "
    ],
    description: "مدير محترف يتمتع بخبرة واسعة في إدارة المؤسسات الخيرية والطبية، حاصل على عدة شهادات في القيادة والإدارة من جامعات عالمية.",
    phone: "+966501112233",
    email: "manager@medical-relief.org",
   
    workingHours: [
      "الأحد - الخميس: 8 صباحاً - 4 مساءً",
      "الجمعة: 10 صباحاً - 2 ظهراً"
    ],
    responsibilities: [
      "الإشراف على كافة أنشطة الجمعية",
      "تطوير الخطط الاستراتيجية",
      "إدارة الموارد المالية والبشرية",
      "التواصل مع الجهات المانحة",
      "متابعة المشاريع الطبية"
    ],
    achievements: [
      "زيادة تمويل الجمعية بنسبة 40% خلال عامين",
     
      "الحصول على شهادة التميز في الإدارة"
    ]
  };

  return (
    
    <div className="manager-profile-container">
        <br></br>
      <div className="manager-profile-card">
        {/* Header Section */}
        <div className="manager-header">
          <div className="manager-avatar">
            <img src="https://via.placeholder.com/150" alt="صورة المدير" />
          </div>
          <div className="manager-title">
            <h1>{managerInfo.name}</h1>
            <h2>{managerInfo.position}</h2>
            <div className="manager-meta">
              <span className="experience">{managerInfo.experience}</span>
             
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="manager-content">
          {/* Left Column - Main Info */}
          <div className="manager-main-info">
            <section className="info-section">
              <h3 className="section-title">نبذة عن المدير</h3>
              <p className="section-content">{managerInfo.description}</p>
            </section>

            <section className="info-section">
              <h3 className="section-title">المسؤوليات</h3>
              <ul className="responsibilities-list">
                {managerInfo.responsibilities.map((item, index) => (
                  <li key={index}>
                    
                    <span className="responsibility-text">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="info-section">
              <h3 className="section-title">الإنجازات</h3>
              <ul className="achievements-list">
                {managerInfo.achievements.map((achievement, index) => (
                  <li key={index}>
                    <span className="achievement-icon">🏆</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="manager-sidebar">
            <div className="sidebar-section contact-info">
              <h3 className="sidebar-title">معلومات الاتصال</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{managerInfo.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>{managerInfo.email}</span>
              </div>
              
            </div>

            <div className="sidebar-section working-hours">
              <h3 className="sidebar-title">ساعات العمل</h3>
              <ul className="hours-list">
                {managerInfo.workingHours.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section education">
              <h3 className="sidebar-title">المؤهلات العلمية</h3>
              <ul className="education-list">
                {managerInfo.education.map((edu, index) => (
                  <li key={index}>
                    <span className="education-icon">🎓</span>
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="manager-footer">
          <p>© {new Date().getFullYear()} جمعية الإغاثة الطبية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;