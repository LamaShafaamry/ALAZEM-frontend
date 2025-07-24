import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./PaseLayOut/NavBar";
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
function HomePage() {
  return (
    <div className="home-background">
      <div id="home" className="text-center mb-4">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="App blk-design">
          {/* الخلفية بالمربعات */}
          <div className="background-squares">
            <div className="square square-1"></div>
            <div className="square square-2"></div>
            <div className="square square-3"></div>
            <div className="square square-4"></div>
            <div className="square square-5"></div>
          </div>

          {/* المحتوى الرئيسي */}
          <Container className="main-content">
            <Row>
              <Col md="12" className="text-center">
                <h1 className="title text-dark">
                  جمعية العزم للكفيفات المسنات
                </h1>
                <h4 className="description text-dark">
                  نمنح النور بالأمل، ونرعى بحب
                </h4>
                <div className="buttons">
                  <Link to="/request">
                    <Button className="custom-request-btn">ارسل طلب</Button>
                  </Link>
                  <Link to="/signin">
                    <Button className="custom-login-btn">تسجيل الدخول</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
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
        <section id="services" className="services-container">
          <h2 className="text-center"> النشاطات</h2>

          <div className="services-content">
            <Link to="/activities/chanting" className="service-item">
              <img
                src="Photos/نشاط.jpg"
                alt="التراتيل الدينية"
                className="service-icon"
              />
              
              <p>
                من فعاليات احتفالنا السنوي المقام في دار العزم للكفيفات المسنات
              </p>
            </Link>

            <Link to="/activities/sports" className="service-item">
              <img
                src="Photos/health3.png"
                alt="الأنشطة الرياضية"
                className="service-icon"
              />
              
              <p>تمارين رياضية خاصة بالمكفوفات المسنات</p>
            </Link>

            <Link to="/activities/cultural" className="service-item">
              <img
                src="Photos/activites1.png"
                alt="الأنشطة الثقافية"
                className="service-icon"
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

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {location.pathname === "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/life-skills"
          element={
            // <ProtectedRoute requiredRole={["ADM", "doctor"]}>
            <LifeSkills />
            // </ProtectedRoute>
          }
        />
        <Route path="/health-services" element={<HealthServices />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/comprehensive-care" element={<ComprehensiveCare />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/volunteer-request" element={<VolunteerRequestPage />} />
        <Route path="/patient-request" element={<Form />} />
        <Route path="/payment-page" element={<IndividualDonation />} />
        <Route path="/payment-page2" element={<FullAssociationDonation />} />
        {/* <Route path="/manager-page" element={<ManagerPage />} /> */}
        {/* <Route element={<ProtectedRoute allowedRoles={["ADM"]} />}> */}
        <Route path="/manager-page" element={<ManagerPage />} />
        {/* </Route> */}
        <Route path="/patient-page" element={<PatientPage />} />
        <Route path="/doctor-page" element={<DoctorPage />} />
        <Route path="/volunteer-page" element={<VolunteerProfile />} />
        <Route path="/activities/chanting" element={<ChantingPage />} />
        <Route path="/activities/sports" element={<SportsPage />} />
        <Route path="/activities/cultural" element={<CulturalPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
       
      </Routes>
    </Router>
  );
}

export default App;
