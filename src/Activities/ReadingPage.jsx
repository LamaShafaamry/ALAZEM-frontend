import React from 'react';
import './ReadingPage.css';

const ReadingPage = () => {
  return (
    <div className="reading-page">
      <div className="page-container">
        {/* العنوان الرئيسي */}
        <header className="page-header">
        <br></br>
          <br></br>
          <br></br>
          <h1>القراءة المكيفة للمسنات المكفوفات</h1>
          
        </header>

        {/* محتوى النشاط */}
        <div className="activity-container">
          <div className="activity-image">
            <img 
              src="/Photos/activites1.png" 
              alt="القراءة المكيفة" 
            />
          </div>
          <div className="activity-content">
            <h2>برنامجنا القرائي المميز</h2>
            <div className="activity-description">
              <p>
                نقدم برنامجاً متكاملاً للقراءة يلبي احتياجات المسنات المكفوفات من خلال:
              </p>
              <ul>
                <li>جلسات قراءة جماعية باستخدام الكتب الناطقة</li>
                <li>تعليم طريقة برايل للمبتدئات</li>
                <li>نادي كتاب أسبوعي لمناقشة الكتب المسموعة</li>
                <li>ورش عمل للكتابة الإبداعية</li>
              </ul>
              <div className="activity-summary">
                <p>فوائد البرنامج: تحسين المهارات اللغوية - تنشيط الذاكرة - تعزيز التفاعل الاجتماعي</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;