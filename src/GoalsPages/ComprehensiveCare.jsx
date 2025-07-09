import { useNavigate } from 'react-router-dom';

const ComprehensiveCare = () => {
  const navigate = useNavigate();

  return (
    <div className="comprehensive-care-page" style={{ 
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
            الرعاية الشاملة للمسنات المكفوفات
          </h1>
          <div className="divider mx-auto" style={{ 
            width: '150px', 
            height: '4px', 
            background: '#3498db', 
            borderRadius: '5px'
          }}></div>
        </header>

        {/* قائمة خدمات الرعاية */}
        <div className="care-services-list mt-5">
          {/* خدمة 1 - الصورة على اليسار */}
          <div className="care-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-5">
              <img 
                src="Photos/care1.png" 
                alt="الرعاية الصحية" 
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
                الرعاية الصحية المتكاملة
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>برنامج متكامل للرعاية الصحية يشمل:</p>
                <ul className="mt-3">
                  <li className="mb-2">فحوصات طبية دورية شاملة</li>
                  <li className="mb-2">إدارة الأدوية والمتابعة الدوائية</li>
                  <li className="mb-2">رعاية الأمراض المزمنة (السكري، الضغط)</li>
                  <li className="mb-2">خدمات العلاج الطبيعي والتأهيل</li>
                  <li className="mb-2">الكشف المبكر عن المشاكل الصحية</li>
                </ul>
                <p className="mt-3">
                  تقدم بواسطة فريق طبي متخصص في رعاية المسنات المكفوفات.
                </p>
              </div>
            </div>
          </div>

          {/* خدمة 2 - الصورة على اليمين */}
          <div className="care-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-7 order-lg-1">
              <h2 className="mb-3" style={{ color: '#2980b9' }}>
                الرعاية النفسية والاجتماعية
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>خدمات دعم نفسي واجتماعي متخصصة:</p>
                <ul className="mt-3">
                  <li className="mb-2">جلسات العلاج النفسي الفردي والجماعي</li>
                  <li className="mb-2">برامج التكيف مع فقدان البصر</li>
                  <li className="mb-2">مجموعات الدعم المتبادل</li>
                  <li className="mb-2">أنشطة تحفيز الذاكرة والإدراك</li>
                  <li className="mb-2">تدريبات المهارات الاجتماعية</li>
                </ul>
                <p className="mt-3">
                  يقدمها أخصائيون نفسيون واجتماعيون مدربون.
                </p>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <img 
                src="Photos/care2.png" 
                alt="الرعاية النفسية" 
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

          {/* خدمة 3 - الصورة على اليسار */}
          <div className="care-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-5">
              <img 
                src="Photos/care3.png" 
                alt="الرعاية اليومية" 
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
                الرعاية اليومية المساندة
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>خدمات مساندة للحياة اليومية:</p>
                <ul className="mt-3">
                  <li className="mb-2">المساعدة في النظافة الشخصية والعناية الذاتية</li>
                  <li className="mb-2">خدمات التغذية والوجبات المتوازنة</li>
                  <li className="mb-2">المساعدة في التنقل والحركة الآمنة</li>
                  <li className="mb-2">تنظيم البيئة المنزلية الملائمة</li>
                  <li className="mb-2">تدريبات المهارات الحياتية اليومية</li>
                </ul>
                <p className="mt-3">
                  تقدم بواسطة كوادر مدربة على التعامل مع المكفوفات المسنات.
                </p>
              </div>
            </div>
          </div>

          {/* خدمة 4 - الصورة على اليمين */}
          <div className="care-item row g-4 align-items-center mb-5 p-4 rounded-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div className="col-lg-7 order-lg-1">
              <h2 className="mb-3" style={{ color: '#2980b9' }}>
                خدمات التقنيات المساعدة
              </h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#495057' }}>
                <p>برامج تقنية متخصصة للمكفوفات:</p>
                <ul className="mt-3">
                  <li className="mb-2">توفير الأجهزة والأدوات المساعدة</li>
                  <li className="mb-2">تدريب على استخدام التكنولوجيا المساعدة</li>
                  <li className="mb-2">برامج قراءة الشاشة والمساعدات الصوتية</li>
                  <li className="mb-2">أجهزة التعرف على الألوان والعملات</li>
                  <li className="mb-2">تعديل الأجهزة المنزلية لتناسب المكفوفات</li>
                </ul>
                <p className="mt-3">
                  يتم تحديثها باستمرار لتواكب أحدث التقنيات.
                </p>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <img 
                src="Photos/care4.png" 
                alt="التقنيات المساعدة" 
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

export default ComprehensiveCare;