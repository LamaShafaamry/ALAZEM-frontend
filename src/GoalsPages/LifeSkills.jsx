import { useNavigate } from 'react-router-dom';
import './LifeSkills.css';

const LifeSkills = () => {
  const navigate = useNavigate();

  return (
    <div className="life-skills-page">
      <div className="care-container">
        {/* العنوان الرئيسي */}
        <header className="care-header">
          <h1>تأهيل الكفيفات المسنات على المهارات الحياتية</h1>
          <div className="header-divider"></div>
        </header>

        {/* قائمة البرامج */}
        <div className="care-services-list">


          {/* برنامج 2 */}
          <div className="care-service">
            <div className="service-image">
              <img src="Photos/skill2.png" alt="برامج التوجيه والحركة" />
            </div>
            <div className="service-content">
              <h2>برامج التوجيه والحركة للمكفوفات</h2>
              <div className="service-description">
                <p>تدريبات متخصصة تشمل:</p>
                <ul>
                  <li>تعلم استخدام العصا البيضاء بفعالية</li>
                  <li>تطوير الحس المكاني والتوجيهي</li>
                  <li>تقنيات التنقل الآمن في الداخل (المنزل، العمل)</li>
                  <li>مهارات التنقل في الأماكن العامة</li>
                  <li>كيفية طلب المساعدة عند الحاجة</li>
                </ul>
                <p className="service-summary">
                  يتم التدريب في بيئات متنوعة تبدأ من الغرف الصغيرة حتى الأماكن العامة، مع تدريج مستوى الصعوبة.
                </p>
              </div>
            </div>
          </div>
                    {/* برنامج 1 */}
                    <div className="care-service">
            <div className="service-image">
              <img src="Photos/skill1.png" alt="تدريب الاعتماد على الذات" />
            </div>
            <div className="service-content">
              <h2>تدريبات الاعتماد على الذات في الحياة اليومية</h2>
              <div className="service-description">
                <p>برنامج متكامل يشمل تعليم المهارات الأساسية للحياة اليومية مثل:</p>
                <ul>
                  <li>طرق الطبخ الآمن للمكفوفات باستخدام تقنيات خاصة</li>
                  <li>تنظيم المنزل والتعامل مع الأدوات المنزلية</li>
                  <li>العناية الشخصية والنظافة اليومية</li>
                  <li>إدارة المصروفات والتعامل مع النقود</li>
                  <li>استخدام الأجهزة المنزلية بطريقة آمنة</li>
                </ul>
                <p className="service-summary">
                  يتم التدريب على يد متخصصين في تأهيل المكفوفين باستخدام وسائل تعليمية ملموسة.
                </p>
              </div>
            </div>
          </div>

          {/* برنامج 3 */}
          <div className="care-service">
            <div className="service-image">
              <img src="Photos/skill3.png" alt="ورش التقنيات المساعدة" />
            </div>
            <div className="service-content">
              <h2>ورش عمل للتعامل مع التقنيات المساعدة</h2>
              <div className="service-description">
                <p>ورش عملية تشمل:</p>
                <ul>
                  <li>تعلم استخدام قارئات الشاشة مثل JAWS وNVDA</li>
                  <li>استخدام الهواتف الذكية بتطبيقاتها المساعدة</li>
                  <li>الأجهزة الصوتية المساعدة في الحياة اليومية</li>
                  <li>تقنيات التعرف على الألوان والعملات</li>
                  <li>استخدام الكمبيوتر والأدوات التكنولوجية</li>
                </ul>
                <p className="service-summary">
                  يتم توفير أحدث الأجهزة والتقنيات مع تدريب مكثف حتى إتقان الاستخدام.
                </p>
              </div>
            </div>
          </div>

          {/* برنامج 4 */}
          <div className="care-service">
            <div className="service-image">
              <img src="Photos/skill4.png" alt="جلسات الدعم النفسي" />
            </div>
            <div className="service-content">
              <h2>جلسات الدعم النفسي والاجتماعي</h2>
              <div className="service-description">
                <p>برنامج متكامل يشمل:</p>
                <ul>
                  <li>جلسات فردية مع أخصائيين نفسيين</li>
                  <li>مجموعات دعم لتجارب مشتركة</li>
                  <li>ورش تعزيز الثقة بالنفس وتقبل الذات</li>
                  <li>تدريبات على المهارات الاجتماعية</li>
                  <li>إدارة الضغوط النفسية والتكيف مع الإعاقة</li>
                </ul>
                <p className="service-summary">
                  يتم تنفيذ البرنامج بأساليب علمية تناسب احتياجات المسنات المكفوفات، مع مراعاة الخصوصية الثقافية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSkills;