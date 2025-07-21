import React from 'react';
import './ChantingPage.css';

const ChantingPage = () => {
  return (
    <div className="chanting-page">
      <div className="page-container">
        {/* العنوان الرئيسي */}
        <header className="page-header">
          <h1>التراتيل الدينية</h1>
          <div className="header-divider"></div>
        </header>

        {/* محتوى النشاط */}
        <div className="activity-container">
          <div className="activity-image">
            <img 
              src="/Photos/نشاط.jpg" 
              alt="التراتيل الدينية" 
            />
          </div>
          <div className="activity-content">
            <h2>فعالياتنا السنوية للتراتيل</h2>
            <div className="activity-description">
              <p>
                ننظم في دار العزم جلسات ترتيل جماعية تتناسب مع احتياجات المسنات المكفوفات،
                حيث نركز على:
              </p>
              <ul>
                <li>ترتيل القرآن الكريم بأصوات جماعية هادئة</li>
                <li>أناشيد دينية تبعث الطمأنينة</li>
                <li>احتفالات بالمناسبات الدينية</li>
                <li>جلسات الذكر الجماعية</li>
              </ul>
              <p className="activity-summary">
                مواعيد الجلسات: كل يوم ثلاثاء من 10 صباحاً إلى 12 ظهراً
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChantingPage;