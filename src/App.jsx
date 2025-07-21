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
    <Button className="custom-request-btn">
      ارسل طلب
    </Button>
  </Link>
  <Link to="/signin">
    <Button className="custom-login-btn">
      تسجيل الدخول
    </Button>
  </Link>
</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="goals-section" className="goals-container mt-5">
          <div className="goal-header">
            <h2 className="text-center text-dark ">الهدف الرئيسي</h2>
            <p className="lead text-center">تأمين دار آمنة لمن لا مأوى لهن</p>
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
            <Link to="/activities" className="goal-item">
              <img
                src="Photos/activities.png"
                alt="الأنشطة الترفيهية"
                className="goal-icon"
              />
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
                className="service-icon"
              />
              <h3>الرعاية الشاملة</h3>
              <p>
                نوفر الدعم النفسي والصحي الشامل لضمان راحة الكفيفات المسنات.
              </p>
            </div>
            <div className="service-item">
              <img
                src="Photos/training1.png"
                alt="التأهيل والتدريب"
                className="service-icon"
              />
              <h3>التأهيل والتدريب</h3>
              <p>
                نساعد في تطوير المهارات الحياتية والمهنية لضمان استقلالية أفضل.
              </p>
            </div>
            <div className="service-item">
              <img
                src="Photos/activites1.png"
                alt="الأنشطة الترفيهية"
                className="service-icon"
              />
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
<section id="contact" className="contact-container mt-5 py-5">
  <div className="container">
    <h2 className="text-center mb-4">تواصل معنا</h2>
    <p className="text-center lead mb-5">نسعد بسماع آرائكم واستفساراتكم</p>
    
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="contact-card p-4">
          <div className="row">
            {/* معلومات التواصل */}
            <div className="col-md-6">
              <div className="contact-info">
                <h4 className="mb-4">معلومات التواصل</h4>
                
                <div className="contact-item mb-3">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <span>عنوان الجمعية: الرياض، حي النخيل</span>
                </div>
                
                <div className="contact-item mb-3">
                  <i className="fas fa-phone contact-icon"></i>
                  <span>الهاتف: 0112345678</span>
                </div>
                
                <div className="contact-item mb-3">
                  <i className="fas fa-envelope contact-icon"></i>
                  <span>البريد الإلكتروني: alazm@gmail.org</span>
                </div>
                
                <div className="social-media mt-4">
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* نموذج التواصل */}
            <div className="col-md-6">
              <form className="contact-form">
                <div className="form-group mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="الاسم الكامل" 
                    required 
                  />
                </div>
                
                <div className="form-group mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="البريد الإلكتروني" 
                    required 
                  />
                </div>
                
                <div className="form-group mb-3">
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="رقم الهاتف" 
                  />
                </div>
                
                <div className="form-group mb-3">
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="رسالتك..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn contact-submit-btn">
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
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
       

      </Routes>
    </Router>
  );
}

export default App;
