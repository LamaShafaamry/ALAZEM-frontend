import { BrowserRouter as Router, Route, Routes, Link, useLocation ,Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./PaseLayOut/NavBar";
import UserNavbar from "./PaseLayOut/userNavbar";
// import Header from "./PaseLayOut/Header";
import LifeSkills from "./GoalsPages/LifeSkills";
import HealthServices from "./GoalsPages/HealthServices";
import Activities from "./GoalsPages/Activities";
import ComprehensiveCare from "./GoalsPages/ComprehensiveCare";
import SignInPage from "./SignInPage/SignInPage";
import RequestPage from "./components/RequestPage";
import VolunteerRequestPage from "./components/VolunteerRequestPage";
import Form from "./components/Form";
import IndividualDonation from "./payment/indivisual";
import FullAssociationDonation from "./payment/Full";
import { Button, Container, Row, Col } from "reactstrap";
import ManagerPage from "./ManagerPage/ManagerPage";
import PatientPage from "./PatientPage/PatientPage";
import DoctorPage from "./DoctorPage/DoctorPage";
import ProtectedRoute from "./provider/ProtectedRoute.jsx";
import ChantingPage from "./Activities/ChantingPage";
import SportsPage from "./Activities/SportsPage";
import CulturalPage from "./Activities/ReadingPage";
import VolunteerProfile from './VolunteerProfile/VolunteerProfile';
import PaymentSuccess from './payment/PaymentSuccess';
import DonationHistory from "./PatientPage/DonationHistory.jsx";
import MyAppointments from "./PatientPage/myAppointments.jsx";
import { useState, useEffect } from 'react';
import VerificationPage from './VerificationPage/VerificationPage';

function HomePage() {

  return (
    <div className="home-page" style={{ direction: 'rtl' }}>
      <br></br>
      <br></br>
          <br></br>
          <br></br>
    
          <div className="hero-container" style={{position: 'relative'}}>
  {/* الصورة الخلفية */}
  <img 
    src="Photos/main.jpg"
    alt="جمعية العزم للكفيفات المسنات"
    className="full-screen-image"
    style={{width: '198vh', height: '100vh', objectFit: 'cover'}}
  />
  
  {/* الزر فوق الصورة */}
  <Link to="/request">
  <button 
    style={{
      position: 'absolute',
       top: '430px',
      left: '51%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
      backgroundColor: 'white',
      border: 'none',
      padding: '8px 16px',
      fontSize: '22px',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '120px',
      whiteSpace: 'nowrap',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      zIndex: 10,
      transition: 'all 0.3s',
      
    }}
  >
    انضم إلينا
  </button>
 </Link>
</div>
      
        <div className="page-sections">
          <br></br>
          <br></br>
          <br></br>
        <div id="goals-section" className="goals-container mt-5">
          <div className="goal-header">
            <h2 className="text-center text-dark ">الخدمات </h2>
          </div>
          <div className="goals-content">
            <Link to="/comprehensive-care" className="goal-item">
              <img
                src="Photos/care.png"
                height={40}
                width={60}
                alt="الرعاية الشاملة"
                className="goal-icon"
              />

              <p>توفير الرعاية الشاملة والدعم النفسي والاجتماعي</p>
            </Link>
            <Link to="/health-services" className="goal-item">
              <img
                src="Photos/health.png"
                alt="الخدمات الصحية"
                className="goal-icon"
              />

              <p>تقديم الخدمات الصحية والمساعدات العينية</p>
            </Link>
            <Link to="/life-skills" className="goal-item">
              <img
                src="Photos/training.png"
                alt="التأهيل والتدريب"
                className="goal-icon"
              />

              <p>تأهيل الكفيفات المسنات على المهارات الحياتية</p>
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
        <section id="services" className="activities-container">
  <div className="activity-header">
    <h2 className="text-center">النشاطات</h2>
  </div>
  <div className="activities-content">
    <Link to="/activities/chanting" className="activity-item">
      <img
        src="Photos/نشاط.jpg"
        alt="التراتيل الدينية"
        className="activity-icon"
      />
      
      <p>من فعاليات احتفالنا السنوي المقام في دار العزم للكفيفات المسنات</p>
    </Link>

    <Link to="/activities/sports" className="activity-item">
      <img
        src="Photos/health3.png"
        alt="الأنشطة الرياضية"
        className="activity-icon"
      />
      
      <p>تمارين رياضية خاصة بالمكفوفات المسنات</p>
    </Link>

    <Link to="/activities/cultural" className="activity-item">
      <img
        src="Photos/activites1.png"
        alt="الأنشطة الثقافية"
        className="activity-icon"
      />
      
      <p>تهدف لتنشيط الذاكرة وتحسين الحالة النفسية</p>
    </Link>
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
          <h2 className="text-center text-dark"> دعم الجمعية بالتبرعات</h2>
          <p className="text-center lead text-dark">
            اختر طريقة التبرع وساهم في تحسين حياة الكفيفات المسنات
          </p>

          <div className="donation-buttons">
            <Link to="/payment-page">
              <button className="donation-buttons-btn text-dark">
                {" "}
                تبرع فردي
              </button>
            </Link>
            <Link to="/payment-page2">
              <button className="donation-buttons-btn text-dark">
                {" "}
                تبرع لكامل الجمعية
              </button>
            </Link>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* أضف هذا الكود بعد قسم التبرعات مباشرة */}
        <div id="contact" className="contact-container4">
          <h1 className="main-title4 bold-text">تواصل معنا</h1>

          <div className="content-wrapper4">
            <div className="right-section4">
              <h2 className="bold-text">ماذا سيحدث بعد ذلك؟</h2>
              <div className="steps4 bold-text">
                <p>
                  <span className="blue-circle "></span>عند استلامنا رسالتك سنجهز
                  طلبك وندرسه
                </p>
                <p>
                  <span className="blue-circle"></span>ثم نرسل لك بريداً
                  إلكترونياً يحتوي على جوابك
                </p>
                <p>
                  <span className="blue-circle"></span>أو تفاصيل محددة، أو
                  لتحديد اجتماع مع المسؤولين لدينا
                </p>
                <p>
                  <span className="blue-circle"></span>سنكون سعداء بالتعرف عليك،
                  ونأمل أن تعاود الاتصال بنا
                </p>
              </div>
            </div>

            <div className="left-section4 bold-text">
              <form>
                <h3 className="bold-text">أرسل لنا رسالة</h3>
                <input type="text" placeholder="الاسم" />
                <input type="email" placeholder="البريد الإلكتروني" />
                <input type="tel" placeholder="                                                                 رقم الهاتف" />
                <textarea placeholder="الملاحظات"></textarea>
                <button className="99" type="submit">إرسال الرسالة</button>
              </form>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper() {
  const location = useLocation();

  // Define routes that should use UserNavbar
  const userNavbarRoutes = ["/patient-page", "/donations", "/doctor-page", "/volunteer-page" , "/appointments"];
  const showUserNavbar = userNavbarRoutes.includes(location.pathname);

//   return (
//     <>
//       {showUserNavbar ? <UserNavbar /> : <Navbar />}

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signin" element={<SignInPage />} />
//         <Route path="/life-skills" element={<LifeSkills />} />
//         <Route path="/health-services" element={<HealthServices />} />
//         <Route path="/activities" element={<Activities />} />
//         <Route path="/comprehensive-care" element={<ComprehensiveCare />} />
//         <Route path="/request" element={<RequestPage />} />
//         <Route path="/volunteer-request" element={<VolunteerRequestPage />} />
//         <Route path="/patient-request" element={<Form />} />
//         <Route path="/payment-page" element={<IndividualDonation />} />
//         <Route path="/payment-page2" element={<FullAssociationDonation />} />
//         <Route path="/manager-page" element={<ManagerPage />} />
//         <Route path="/patient-page" element={<PatientPage />} />
//         <Route path="/donation" element={<DonationHistory />} />
//         <Route path="/doctor-page" element={<DoctorPage />} />
//         <Route path="/volunteer-page" element={<VolunteerProfile />} />
//         <Route path="/activities/chanting" element={<ChantingPage />} />
//         <Route path="/activities/sports" element={<SportsPage />} />
//         <Route path="/activities/cultural" element={<CulturalPage />} />
//         <Route path="/payment-success" element={<PaymentSuccess />} />
//       </Routes>
//     </>
//   );
// }

 return (
    <>
      {showUserNavbar ? <UserNavbar /> : <Navbar />}
      <div className="page-content"> 
        <Outlet />
      </div>
    </>
  );
}
// function App() {
//   return (
//     <Router>
//       <LayoutWrapper />
//     </Router>
//   );
// }

function App() {
  return (
    <Router>

    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/life-skills" element={<LifeSkills />} />
        <Route path="/health-services" element={<HealthServices />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/comprehensive-care" element={<ComprehensiveCare />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/volunteer-request" element={<VolunteerRequestPage />} />
        <Route path="/patient-request" element={<Form />} />
        <Route path="/payment-page" element={<IndividualDonation />} />
        <Route path="/payment-page2" element={<FullAssociationDonation />} />
        <Route path="/manager-page" element={<ManagerPage />} />
        <Route path="/patient-page" element={<PatientPage />} />
        <Route path="/donations" element={<DonationHistory />} />
        <Route path="/doctor-page" element={<DoctorPage />} />
        <Route path="/volunteer-page" element={<VolunteerProfile />} />
        <Route path="/activities/chanting" element={<ChantingPage />} />
        <Route path="/activities/sports" element={<SportsPage />} />
        <Route path="/activities/cultural" element={<CulturalPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/verification-container" element={<VerificationPage />} />
      </Route>
    </Routes>
        </Router>

  );
}

export default App;


