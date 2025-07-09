import { useNavigate } from 'react-router-dom';

const LifeSkills = () => {
  const navigate = useNavigate();

  return (
    <div className="life-skills-page" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container-fluid py-5">
        {/* العنوان الرئيسي */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold " style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            تأهيل الكفيفات المسنات على المهارات الحياتية
          </h1>
          <div className="divider mx-auto" style={{ width: '100px', height: '4px', background: '#000000', borderRadius: '2px' }}></div>
        </header>

        {/* قائمة البرامج مع صور */}
        <div className="programs-list mt-5">
          {/* برنامج 1 */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-3">
              <img 
                src="Photos/skill1.png" 
                alt="تدريب الاعتماد على الذات" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #f0f0f0',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-md-9">
              <h3 className="display-6">تدريبات الاعتماد على الذات في الحياة اليومية</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                برنامج متكامل يشمل تعليم المهارات الأساسية للحياة اليومية مثل:
                <ul className="mt-2">
                  <li>طرق الطبخ الآمن للمكفوفات باستخدام تقنيات خاصة</li>
                  <li>تنظيم المنزل والتعامل مع الأدوات المنزلية</li>
                  <li>العناية الشخصية والنظافة اليومية</li>
                  <li>إدارة المصروفات والتعامل مع النقود</li>
                  <li>استخدام الأجهزة المنزلية بطريقة آمنة</li>
                </ul>
                يتم التدريب على يد متخصصين في تأهيل المكفوفين باستخدام وسائل تعليمية ملموسة.
              </p>
            </div>
          </div>

          {/* برنامج 2 */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-3 order-md-2">
              <img 
                src="Photos/skill2.png" 
                alt="برامج التوجيه والحركة" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #f0f0f0',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-md-9 order-md-1">
              <h3 className="display-6">برامج التوجيه والحركة للمكفوفات</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                تدريبات متخصصة تشمل:
                <ul className="mt-2">
                  <li>تعلم استخدام العصا البيضاء بفعالية</li>
                  <li>تطوير الحس المكاني والتوجيهي</li>
                  <li>تقنيات التنقل الآمن في الداخل (المنزل، العمل)</li>
                  <li>مهارات التنقل في الأماكن العامة</li>
                  <li>كيفية طلب المساعدة عند الحاجة</li>
                </ul>
                يتم التدريب في بيئات متنوعة تبدأ من الغرف الصغيرة حتى الأماكن العامة، مع تدريج مستوى الصعوبة.
              </p>
            </div>
          </div>

          {/* برنامج 3 */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-3">
              <img 
                src="Photos/skill3.png" 
                alt="ورش التقنيات المساعدة" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #f0f0f0',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-md-9">
              <h3 className="display-6">ورش عمل للتعامل مع التقنيات المساعدة</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                ورش عملية تشمل:
                <ul className="mt-2">
                  <li>تعلم استخدام قارئات الشاشة مثل JAWS وNVDA</li>
                  <li>استخدام الهواتف الذكية بتطبيقاتها المساعدة</li>
                  <li>الأجهزة الصوتية المساعدة في الحياة اليومية</li>
                  <li>تقنيات التعرف على الألوان والعملات</li>
                  <li>استخدام الكمبيوتر والأدوات التكنولوجية</li>
                </ul>
                يتم توفير أحدث الأجهزة والتقنيات مع تدريب مكثف حتى إتقان الاستخدام.
              </p>
            </div>
          </div>

          {/* برنامج 4 */}
          <div className="program-item row g-4 align-items-center mb-4 bg-white p-4 rounded shadow-sm">
            <div className="col-md-3 order-md-2">
              <img 
                src="Photos/skill4.png" 
                alt="جلسات الدعم النفسي" 
                className="img-fluid rounded shadow"
                style={{ 
                  border: '3px solid #f0f0f0',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
            <div className="col-md-9 order-md-1">
              <h3 className="display-6">جلسات الدعم النفسي والاجتماعي</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                برنامج متكامل يشمل:
                <ul className="mt-2">
                  <li>جلسات فردية مع أخصائيين نفسيين</li>
                  <li>مجموعات دعم لتجارب مشتركة</li>
                  <li>ورش تعزيز الثقة بالنفس وتقبل الذات</li>
                  <li>تدريبات على المهارات الاجتماعية</li>
                  <li>إدارة الضغوط النفسية والتكيف مع الإعاقة</li>
                </ul>
                يتم تنفيذ البرنامج بأساليب علمية تناسب احتياجات المسنات المكفوفات، مع مراعاة الخصوصية الثقافية.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default LifeSkills;