import { useNavigate } from 'react-router-dom';
import './HealthServices.css';

const HealthServices = () => {
  const navigate = useNavigate();

  return (
    
      <div className="care-container">
        {/* العنوان الرئيسي */}
        <header className="care-header">
          <h1>خدمات الرعاية الصحية الشاملة للمسنين</h1>
          <div className="header-divider"></div>
        </header>

        {/* قائمة الخدمات */}
        <div className="care-services-list">
          {/* خدمة الفحوصات الدورية */}
          <div className="care-service">
            <div className="service-image">
              <img src="Photos/health1.png" alt="الفحوصات الدورية" />
            </div>
            <div className="service-content">
              <h2>الفحوصات الدورية الشاملة</h2>
              <div className="service-description">
                <p>برنامج متكامل للفحوصات الوقائية يشمل:</p>
                <ul>
                  <li>فحوصات ضغط الدم والسكري المنتظمة</li>
                  <li>تحاليل الدم الشاملة كل 6 أشهر</li>
                  <li>فحوصات الكوليسترول والدهون الثلاثية</li>
                  <li>الكشف المبكر عن هشاشة العظام</li>
                  <li>فحوصات السمع والبصر الدورية</li>
                </ul>
                <p className="service-summary">
                  يتم إجراؤها بواسطة أطباء متخصصين في طب المسنين.
                </p>
              </div>
            </div>
          </div>

          {/* خدمة الرعاية المنزلية */}
          <div className="care-service">
            <div className="service-image">
              <img src="Photos/health2.png" alt="الرعاية المنزلية" />
            </div>
            <div className="service-content">
              <h2>برنامج الرعاية المنزلية المتكاملة</h2>
              <div className="service-description">
                <p>خدمات منزلية تشمل:</p>
                <ul>
                  <li>زيارات تمريضية منتظمة لتغيير الضمادات</li>
                  <li>إعطاء الأدوية والعلاجات تحت إشراف طبي</li>
                  <li>جلسات العلاج الطبيعي المنزلية</li>
                  <li>تقديم الاستشارات الغذائية</li>
                  <li>مراقبة الحالة الصحية بشكل مستمر</li>
                </ul>
                <p className="service-summary">
                  يتم تقديمها من قبل فريق متكامل من الممرضين والمعالجين.
                </p>
              </div>
            </div>
          </div>

          {/* خدمة إعادة التأهيل */}
          <div className="care-service">
            <div className="service-image">
              <img src="Photos/health3.png" alt="إعادة التأهيل" />
            </div>
            <div className="service-content">
              <h2>برامج إعادة التأهيل والعلاج الطبيعي</h2>
              <div className="service-description">
                <p>برامج تأهيلية متخصصة:</p>
                <ul>
                  <li>إعادة تأهيل بعد الجلطات والسكتات الدماغية</li>
                  <li>علاج طبيعي لالتهاب المفاصل وهشاشة العظام</li>
                  <li>تمارين التوازن والوقاية من السقوط</li>
                  <li>جلسات العلاج المائي</li>
                  <li>برامج تقوية العضلات</li>
                </ul>
                <p className="service-summary">
                  تحت إشراف أخصائيي علاج طبيعي مؤهلين.
                </p>
              </div>
            </div>
          </div>

          {/* خدمة الدعم النفسي */}
          <div className="care-service">
            <div className="service-image">
              <img src="Photos/health4.png" alt="الدعم النفسي" />
            </div>
            <div className="service-content">
              <h2>خدمات الدعم النفسي والاجتماعي</h2>
              <div className="service-description">
                <p>خدمات نفسية متكاملة:</p>
                <ul>
                  <li>جلسات علاج نفسي فردية</li>
                  <li>مجموعات دعم للأمراض المزمنة</li>
                  <li>برامج التكيف مع التغيرات الصحية</li>
                  <li>إدارة القلق والاكتئاب</li>
                  <li>ورش عمل للأنشطة الترفيهية</li>
                </ul>
                <p className="service-summary">
                  يقدمها أخصائيون نفسيون متخصصون في رعاية المسنين.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default HealthServices;