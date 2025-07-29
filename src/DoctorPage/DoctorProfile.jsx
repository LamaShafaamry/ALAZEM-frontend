import React from 'react';
import './DoctorProfile.css';

const DoctorProfile = () => {

  return (
    <div className="doctor-profile-container">
      <div className="doctor-profile-card">
        {/* Header Section */}
        <div className="doctor-header">
          <div className="doctor-avatar">
            <img src="Photos/user-default.png" alt="صورة الطبيب" />
          </div>
          <div className="doctor-title">
            <h1>{doctorInfo.name}</h1>
            <h2>{doctorInfo.specialty}</h2>
            <div className="doctor-meta">
              <span className="experience">{doctorInfo.experience} خبرة</span>
              
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="doctor-content">
          {/* Left Column - Main Info */}
          <div className="doctor-main-info">
            <section className="info-section">
              <h3 className="section-title">نبذة عن الدكتور</h3>
              <p className="section-content">{doctorInfo.description}</p>
            </section>

            <section className="info-section">
  <h3 className="section-title">الخدمات الطبية</h3>
  <ul className="services-list">
    {doctorInfo.services.map((service, index) => (
      <li key={index}>
        
        <span className="service-text">{service}</span>
      </li>
    ))}
  </ul>
</section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="doctor-sidebar">
            <div className="sidebar-section contact-info">
              <h3 className="sidebar-title">معلومات الاتصال</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{doctorInfo.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>{doctorInfo.email}</span>
              </div>

            </div>

            <div className="sidebar-section working-hours">
              <h3 className="sidebar-title">ساعات العمل</h3>
              <ul className="hours-list">
                {doctorInfo.clinicHours.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section education">
              <h3 className="sidebar-title">المؤهلات العلمية</h3>
              <ul className="education-list">
                {doctorInfo.education.map((edu, index) => (
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
        <div className="doctor-footer">
          <p>© {new Date().getFullYear()} عيادة د. {doctorInfo.name}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;