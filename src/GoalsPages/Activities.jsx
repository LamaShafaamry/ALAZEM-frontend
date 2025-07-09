import { useNavigate } from 'react-router-dom';

const Activities = () => {
  const navigate = useNavigate();

  return (
    <div className="activities-page" style={{ 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <div className="container py-5">
        {/* العنوان الرئيسي */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ 
            color: '#2c3e50',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            أنشطة الكفيفات المسنات
          </h1>
          <div className="divider mx-auto" style={{ 
            width: '150px', 
            height: '4px', 
            background: '#3498db', 
            borderRadius: '5px'
          }}></div>
        </header>

        {/* قائمة الأنشطة */}
        <div className="activities-list mt-5">
          {/* نشاط 1 - الصورة على اليسار */}
          <div className="activity-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-5">
              <img 
                src="Photos/activity1.png" 
                alt="الأنشطة الحرفية" 
                className="img-fluid rounded-3 shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '350px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-lg-7">
              <h2 className="mb-3" style={{ color: '#2980b9' }}>
                الأنشطة الحرفية اليدوية
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>برنامج متكامل للأنشطة الحرفية المناسبة للمسنات المكفوفات:</p>
                <ul className="mt-3">
                  <li className="mb-2">صناعة السجاد والبسط اليدوية</li>
                  <li className="mb-2">التطريز والكروشيه باستخدام أدوات خاصة</li>
                  <li className="mb-2">صناعة الخرز والإكسسوارات</li>
                  <li className="mb-2">النحت على الخشب والطين</li>
                  <li className="mb-2">ورش عمل لصناعة الصابون والعطور</li>
                </ul>
                <p className="mt-3">
                  يتم التدريب باستخدام تقنيات ملموسة تناسب المكفوفات، مع مراعاة السلامة.
                </p>
              </div>
            </div>
          </div>

          {/* نشاط 2 - الصورة على اليمين */}
          <div className="activity-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-7 order-lg-1">
              <h2 className="mb-3" style={{ color: '#2980b9' }}>
                الأنشطة الثقافية والترفيهية
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>برنامج ثقافي متنوع يشمل:</p>
                <ul className="mt-3">
                  <li className="mb-2">جلسات قراءة الكتب الصوتية</li>
                  <li className="mb-2">حلقات تلاوة القرآن الكريم</li>
                  <li className="mb-2">ورش عمل للشعر والأدب</li>
                  <li className="mb-2">جلسات الاستماع للموسيقى والأناشيد</li>
                  <li className="mb-2">مسابقات ثقافية صوتية</li>
                </ul>
                <p className="mt-3">
                  تهدف لتنشيط الذاكرة وتحسين الحالة النفسية.
                </p>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <img 
                src="Photos/activity3.png" 
                alt="الأنشطة الثقافية" 
                className="img-fluid rounded-3 shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '350px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
          </div>

          {/* نشاط 3 - الصورة على اليسار */}
          <div className="activity-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-5">
              <img 
                src="Photos/activity3.png" 
                alt="الأنشطة الرياضية" 
                className="img-fluid rounded-3 shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '350px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-lg-7">
              <h2 className="mb-3" style={{ color: '#2980b9' }}>
                الأنشطة الرياضية المكيفة
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>تمارين رياضية خاصة بالمكفوفات المسنات:</p>
                <ul className="mt-3">
                  <li className="mb-2">تمارين اليوجا والتأمل</li>
                  <li className="mb-2">تمارين التوازن والمرونة</li>
                  <li className="mb-2">رياضة المشي باستخدام العصا</li>
                  <li className="mb-2">تمارين التنفس والاسترخاء</li>
                  <li className="mb-2">ألعاب كرة الجرس الخاصة بالمكفوفين</li>
                </ul>
                <p className="mt-3">
                  يتم الإشراف عليها من قبل مدربين متخصصين في رياضة المكفوفين.
                </p>
              </div>
            </div>
          </div>

          {/* نشاط 4 - الصورة على اليمين */}
          <div className="activity-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-7 order-lg-1">
              <h2 className="mb-3" style={{ color: '#2980b9' }}>
                أنشطة الدعم الاجتماعي
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>برامج لدعم التواصل الاجتماعي:</p>
                <ul className="mt-3">
                  <li className="mb-2">مجموعات الدعم والتواصل</li>
                  <li className="mb-2">حفلات الشاي والمناسبات الاجتماعية</li>
                  <li className="mb-2">رحلات ترفيهية مخصصة</li>
                  <li className="mb-2">جلسات تبادل الخبرات</li>
                  <li className="mb-2">أنشطة التطوع بين الأجيال</li>
                </ul>
                <p className="mt-3">
                  تهدف لتعزيز التواصل الاجتماعي ومنع العزلة.
                </p>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <img 
                src="Photos/activity4.png" 
                alt="أنشطة الدعم الاجتماعي" 
                className="img-fluid rounded-3 shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '350px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;