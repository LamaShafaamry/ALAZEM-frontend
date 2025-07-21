import React from 'react';
import './SportsPage.css';

const SportsPage = () => {
  return (
    <div className="sports-page">
      <div className="page-container">
        {/* العنوان الرئيسي */}
        <header className="page-header">
          <h1>الأنشطة الرياضية المكيفة</h1>
          <div className="header-divider"></div>
        </header>

        {/* محتوى النشاط */}
        <div className="activity-container">
          <div className="activity-image">
            <img 
              src="/Photos/training.png" 
              alt="الأنشطة الرياضية" 
            />
          </div>
          <div className="activity-content">
            <h2>برنامجنا الرياضي الخاص</h2>
            <div className="activity-description">
              <p>
                تمارين مصممة خصيصاً للمسنات المكفوفات لتعزيز:
              </p>
              <ul>
                <li>تمارين التوازن والوقاية من السقوط</li>
                <li>اليوغا المكيفة للإعاقة البصرية</li>
                <li>تمارين الإطالة للحفاظ على المرونة</li>
                <li>المشي الإرشادي باستخدام العصا</li>
              </ul>
              <div className="activity-summary">
                <p>فوائد البرنامج: تحسين الصحة العامة - تقوية العضلات - تحسين المزاج</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;