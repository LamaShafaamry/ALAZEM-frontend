import React from 'react';
import { Link } from 'react-router-dom';
import "/src/App.css";

function Home() {
  return (
    <div className="home-background">
      <div id="home" className="text-center mb-4">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="display-5">جمعية العزم للكفيفات المسنات</h1>
            <p className="lead">نمنح النور بالأمل، ونرعى بحب</p>
            <div className="buttons">
              <Link to="/signin">
                <button className="btn login-btn">تسجيل الدخول</button>
              </Link>
              <Link to="/request">
                <button className="btn send-request-btn">ارسل طلب</button>
              </Link>
            </div>
          </div>

        </div>
        <div id="goals-section" className="goals-container mt-5">
          <div className="goal-header">
            <h2 className="text-center text-dark ">
              الهدف الرئيسي
            </h2>
            <p className="lead text-center">تأمين دار آمنة لمن لا مأوى لهن</p>
          </div>
          <div className="goals-content">
            <Link to="/comprehensive-care" className="goal-item">


              <img
                src="Photos/care.png"
                height={40}
                width={60}
                alt="الرعاية الشاملة"
                className="goal-icon" />

              <p>توفير الرعاية الشاملة والدعم النفسي والاجتماعي</p>


            </Link>
            <Link to="/health-services" className="goal-item">


              <img
                src="Photos/health.png"
                alt="الخدمات الصحية"
                className="goal-icon" />

              <p>تقديم الخدمات الصحية والمساعدات العينية</p>


            </Link>
            <Link to="/life-skills" className="goal-item">


              <img
                src="Photos/training.png"
                alt="التأهيل والتدريب"
                className="goal-icon" />

              <p>تأهيل الكفيفات المسنات على المهارات الحياتية</p>


            </Link>
            <Link to="/activities" className="goal-item">


              <img
                src="Photos/activities.png"
                alt="الأنشطة الترفيهية"
                className="goal-icon" />
              <p>تنظيم أنشطة ترفيهية وتعليمية لتعزيز جودة الحياة</p>


            </Link>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section id="services" className="services-container">
          <h2 className="text-center"> الخدمات</h2>

          <div className="services-content">
            <div className="service-item">
              <img
                src="Photos/care1.jpg"
                alt="الرعاية الشاملة"
                className="service-icon" />
              <h3>الرعاية الشاملة</h3>
              <p>نوفر الدعم النفسي والصحي الشامل لضمان راحة الكفيفات المسنات.</p>
            </div>
            <div className="service-item">
              <img
                src="Photos/training1.png"
                alt="التأهيل والتدريب"
                className="service-icon" />
              <h3>التأهيل والتدريب</h3>
              <p>
                نساعد في تطوير المهارات الحياتية والمهنية لضمان استقلالية أفضل.
              </p>
            </div>
            <div className="service-item">
              <img
                src="Photos/activites1.png"
                alt="الأنشطة الترفيهية"
                className="service-icon" />
              <h3>الأنشطة المتنوعة</h3>
              <p>
                تنظيم الفعاليات التعليمية والترفيهية لتعزيز جودة الحياة وإثراء
                المجتمع.
              </p>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div id="donations-section" className="donations-container mt-5">
          <h2 className="text-center text-dark">
            {" "}
            دعم الجمعية بالتبرعات
          </h2>
          <p className="text-center lead text-dark">
            اختر طريقة التبرع وساهم في تحسين حياة الكفيفات المسنات
          </p>

          <div className="donation-buttons">
            <Link to="/individual-donation">
              <button className="donation-buttons-btn text-dark"> تبرع فردي</button>
            </Link>
            <Link to="/full-association-donation">
              <button className="donation-buttons-btn text-dark">
                {" "}
                تبرع لكامل الجمعية
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
