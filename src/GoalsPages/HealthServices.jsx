import { useNavigate } from 'react-router-dom';

const HealthServices = () => {
  const navigate = useNavigate();

  return (
    <div className="health-services-page" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container py-5">
        {/* العنوان الرئيسي */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ color: '#2c3e50' }}>
            خدمات الرعاية الصحية الشاملة للمسنين
          </h1>
          <div className="divider mx-auto" style={{ width: '100px', height: '4px', background: '#3498db', borderRadius: '2px' }}></div>
        </header>

        {/* قائمة الخدمات */}
        <div className="services-list mt-5">
          {/* خدمة الفحوصات الدورية - النص على اليمين */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-5">
              <img 
                src="Photos/health1.png" 
                alt="الفحوصات الدورية" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '300px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-md-7">
              <h3 className="display-6" style={{ color: '#2980b9' }}>الفحوصات الدورية الشاملة</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                برنامج متكامل للفحوصات الوقائية يشمل:
                <ul className="mt-2">
                  <li>فحوصات ضغط الدم والسكري المنتظمة</li>
                  <li>تحاليل الدم الشاملة كل 6 أشهر</li>
                  <li>فحوصات الكوليسترول والدهون الثلاثية</li>
                  <li>الكشف المبكر عن هشاشة العظام</li>
                  <li>فحوصات السمع والبصر الدورية</li>
                </ul>
                يتم إجراؤها بواسطة أطباء متخصصين في طب المسنين.
              </p>
            </div>
          </div>

          {/* خدمة الرعاية المنزلية - النص على اليسار */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-7">
              <h3 className="display-6" style={{ color: '#2980b9' }}>برنامج الرعاية المنزلية المتكاملة</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                خدمات منزلية تشمل:
                <ul className="mt-2">
                  <li>زيارات تمريضية منتظمة لتغيير الضمادات</li>
                  <li>إعطاء الأدوية والعلاجات تحت إشراف طبي</li>
                  <li>جلسات العلاج الطبيعي المنزلية</li>
                  <li>تقديم الاستشارات الغذائية</li>
                  <li>مراقبة الحالة الصحية بشكل مستمر</li>
                </ul>
                يتم تقديمها من قبل فريق متكامل من الممرضين والمعالجين.
              </p>
            </div>
            <div className="col-md-5">
              <img 
                src="Photos/health2.png" 
                alt="الرعاية المنزلية" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '300px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
          </div>

          {/* خدمة إعادة التأهيل - النص على اليمين */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-5">
              <img 
                src="Photos/health3.png" 
                alt="إعادة التأهيل" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '400px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-md-7">
              <h3 className="display-6" style={{ color: '#2980b9' }}>برامج إعادة التأهيل والعلاج الطبيعي</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                برامج تأهيلية متخصصة:
                <ul className="mt-2">
                  <li>إعادة تأهيل بعد الجلطات والسكتات الدماغية</li>
                  <li>علاج طبيعي لالتهاب المفاصل وهشاشة العظام</li>
                  <li>تمارين التوازن والوقاية من السقوط</li>
                  <li>جلسات العلاج المائي</li>
                  <li>برامج تقوية العضلات</li>
                </ul>
                تحت إشراف أخصائيي علاج طبيعي مؤهلين.
              </p>
            </div>
          </div>

          {/* خدمة الدعم النفسي - النص على اليسار */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-7">
              <h3 className="display-6" style={{ color: '#2980b9' }}>خدمات الدعم النفسي والاجتماعي</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                خدمات نفسية متكاملة:
                <ul className="mt-2">
                  <li>جلسات علاج نفسي فردية</li>
                  <li>مجموعات دعم للأمراض المزمنة</li>
                  <li>برامج التكيف مع التغيرات الصحية</li>
                  <li>إدارة القلق والاكتئاب</li>
                  <li>ورش عمل للأنشطة الترفيهية</li>
                </ul>
                يقدمها أخصائيون نفسيون متخصصون في رعاية المسنين.
              </p>
            </div>
            <div className="col-md-5">
              <img 
                src="Photos/health4.png" 
                alt="الدعم النفسي" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #e9f5ff',
                  height: '300px',
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

export default HealthServices;