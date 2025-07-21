import { useNavigate } from 'react-router-dom';
import './ComprehensiveCare.css';

const ComprehensiveCare = () => {
  const navigate = useNavigate();

  return (
    <div className="care-container">
      {/* العنوان الرئيسي مع صورة خلفية */}
      <header className="care-header">
        <div className="header-overlay">
          <h1>الرعاية الشاملة للمسنات المكفوفات</h1>
          <div className="header-divider"></div>
          <p className="header-subtitle">نقدم رعاية متكاملة تراعي الاحتياجات الخاصة للمسنات المكفوفات</p>
        </div>
      </header>

      {/* قائمة خدمات الرعاية */}
      <div className="care-services-list">
        {/* خدمة 1 */}
        <div className="care-service">
          <div className="service-image">
            <img src="Photos/health2.png" alt="الرعاية الصحية" />
          </div>
          <div className="service-content">
            <h2>الرعاية الصحية المتكاملة</h2>
            <div className="service-description">
              <p>برنامج متكامل للرعاية الصحية يشمل:</p>
              <ul>
                <li>فحوصات طبية دورية شاملة</li>
                <li>إدارة الأدوية والمتابعة الدوائية</li>
                <li>رعاية الأمراض المزمنة (السكري، الضغط)</li>
                <li>خدمات العلاج الطبيعي والتأهيل</li>
                <li>الكشف المبكر عن المشاكل الصحية</li>
              </ul>
              <p className="service-summary">
                تقدم بواسطة فريق طبي متخصص في رعاية المسنات المكفوفات.
              </p>
            </div>
          </div>
        </div>

        {/* خدمة 2 */}
        <div className="care-service">
          <div className="service-image">
            <img src="Photos/care1.jpg" alt="الرعاية النفسية" />
          </div>
          <div className="service-content">
            <h2>الرعاية النفسية والاجتماعية</h2>
            <div className="service-description">
              <p>خدمات دعم نفسي واجتماعي متخصصة:</p>
              <ul>
                <li>جلسات العلاج النفسي الفردي والجماعي</li>
                <li>برامج التكيف مع فقدان البصر</li>
                <li>مجموعات الدعم المتبادل</li>
                <li>أنشطة تحفيز الذاكرة والإدراك</li>
                <li>تدريبات المهارات الاجتماعية</li>
              </ul>
              <p className="service-summary">
                يقدمها أخصائيون نفسيون واجتماعيون مدربون.
              </p>
            </div>
          </div>
        </div>

        {/* خدمة 3 */}
        <div className="care-service">
          <div className="service-image">
            <img src="Photos/training.png" alt="الرعاية اليومية" />
          </div>
          <div className="service-content">
            <h2>الرعاية اليومية المساندة</h2>
            <div className="service-description">
              <p>خدمات مساندة للحياة اليومية:</p>
              <ul>
                <li>المساعدة في النظافة الشخصية والعناية الذاتية</li>
                <li>خدمات التغذية والوجبات المتوازنة</li>
                <li>المساعدة في التنقل والحركة الآمنة</li>
                <li>تنظيم البيئة المنزلية الملائمة</li>
                <li>تدريبات المهارات الحياتية اليومية</li>
              </ul>
              <p className="service-summary">
                تقدم بواسطة كوادر مدربة على التعامل مع المكفوفات المسنات.
              </p>
            </div>
          </div>
        </div>

        {/* خدمة 4 */}
        <div className="care-service">
          <div className="service-image">
            <img src="Photos/skill3.png" alt="التقنيات المساعدة" />
          </div>
          <div className="service-content">
            <h2>خدمات التقنيات المساعدة</h2>
            <div className="service-description">
              <p>برامج تقنية متخصصة للمكفوفات:</p>
              <ul>
                <li>توفير الأجهزة والأدوات المساعدة</li>
                <li>تدريب على استخدام التكنولوجيا المساعدة</li>
                <li>برامج قراءة الشاشة والمساعدات الصوتية</li>
                <li>أجهزة التعرف على الألوان والعملات</li>
                <li>تعديل الأجهزة المنزلية لتناسب المكفوفات</li>
              </ul>
              <p className="service-summary">
                يتم تحديثها باستمرار لتواكب أحدث التقنيات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCare;