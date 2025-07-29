import React from 'react';
import './VolunteerProfile.css';

const VolunteerProfile = () => {
  const volunteerInfo = {
    name: "هبة أحمد",
    position: "متطوعة في الجمعية  ",
    joinDate: "منذ سنة واحدة",
    education: [
      "بكالوريوس في التمريض ",
      "دبلوم في الإسعافات الأولية"
    ],
    description: "متطوعة متحمسة لمساعدة المحتاجين، لديها خبرة في العمل الميداني وتقديم الرعاية الصحية الأساسية للمجتمعات المحتاجة.",
    phone: "+966501122334",
    email: "hiba.ahmed@example.com",
   
    workingHours: [
      "السبت - الأربعاء: 5 مساءً - 9 مساءً",
      "الخميس: 6 مساءً - 8 مساءً"
    ],
    skills: [
      "الإسعافات الأولية",
      "التوعية الصحية",
      "تنظيم الفعاليات",
      "الترجمة الطبية",
      "الدعم النفسي"
    ],
    experiences: [
      "متطوعة في حملة التطعيم ضد كوفيد-19",
      "مشاركة في 3 حملات طبية للاجئين",
      "متطوعة في مستشفى الميداني لمدة 6 أشهر"
    ]
  };

  return (
    <div className="volunteer-profile-container">
        <br></br>
      <div className="volunteer-profile-card">
        {/* Header Section */}
        <div className="volunteer-header">
          <div className="volunteer-avatar">
            <img src="https://via.placeholder.com/150" alt="صورة المتطوع" />
          </div>
          <div className="volunteer-title">
            <h1>{volunteerInfo.name}</h1>
            <h2>{volunteerInfo.position}</h2>
            <div className="volunteer-meta">
              <span className="join-date">{volunteerInfo.joinDate}</span>
            
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="volunteer-content">
          {/* Left Column - Main Info */}
          <div className="volunteer-main-info">
            <section className="info-section">
              <h3 className="section-title">نبذة عن المتطوع</h3>
              <p className="section-content">{volunteerInfo.description}</p>
            </section>

            <section className="info-section">
              <h3 className="section-title">المهارات</h3>
              <ul className="skills-list">
                {volunteerInfo.skills.map((skill, index) => (
                  <li key={index}>
                    <span className="skill-icon">✓</span>
                    <span className="skill-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="info-section">
              <h3 className="section-title">الخبرات التطوعية</h3>
              <ul className="experiences-list">
                {volunteerInfo.experiences.map((experience, index) => (
                  <li key={index}>
                    <span className="experience-icon">•</span>
                    {experience}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="volunteer-sidebar">
            <div className="sidebar-section contact-info">
              <h3 className="sidebar-title">معلومات الاتصال</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{volunteerInfo.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>{volunteerInfo.email}</span>
              </div>
             
            </div>

            <div className="sidebar-section working-hours">
              <h3 className="sidebar-title">ساعات التطوع</h3>
              <ul className="hours-list">
                {volunteerInfo.workingHours.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section education">
              <h3 className="sidebar-title">المؤهلات العلمية</h3>
              <ul className="education-list">
                {volunteerInfo.education.map((edu, index) => (
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
        <div className="volunteer-footer">
          <p>© {new Date().getFullYear()} جمعية الإغاثة الطبية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;