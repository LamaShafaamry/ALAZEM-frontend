import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
// import { Button, Container, Row, Col } from "reactstrap";
import ManagerPage from "./ManagerPage/ManagerPage";
import PatientPage from "./PatientPage/PatientPage";
import DoctorPage from "./DoctorPage/DoctorPage";
import ProtectedRoute from "./provider/ProtectedRoute.jsx";
import ChantingPage from "./Activities/ChantingPage";
import SportsPage from "./Activities/SportsPage";
import CulturalPage from "./Activities/ReadingPage";
import VolunteerProfile from "./VolunteerProfile/VolunteerProfile";
import PaymentSuccess from "./payment/PaymentSuccess";
import DonationHistory from "./PatientPage/DonationHistory.jsx";
import MyAppointments from "./PatientPage/myAppointments.jsx";
import DoctorAppointments from "./DoctorPage/DoctorAppiontments";
import VolunteerNotesPage from "./VolunteerProfile/VolunteerNotesPage.jsx";
import VolunteerPatientProfile from "./VolunteerProfile/VolunteerpatientProfile.jsx";
import DonationPage from "./HomaPage/DonationPage.jsx";
import ManagerProfile from "./ManagerPage/ManagerProfile.jsx";
import VolunteersSection from "./ManagerPage/VolunteersSection.jsx";
import DonationsSection from "./ManagerPage/DonationsSection.jsx";
import UsersManagement from "./ManagerPage/UsersManagement.jsx";
import RegistrationRequests from "./ManagerPage/RegistrationRequests.jsx";
import MyNotes from "./PatientPage/MyNotes.jsx";
import VerifyAccountPage from "./SignInPage/VerifyAccountPage.jsx";
import { Button, Card, Col, Row } from "antd";
function HomePage() {
  return (
    <div className="home-background">
      <div id="home" className="text-center mb-4">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <div className="App blk-design">
          <div className="background-squares">
            <div className="square square-1"></div>
            <div className="square square-2"></div>
            <div className="square square-3"></div>
            <div className="square square-4"></div>
            <div className="square square-5"></div>
          </div>

          <Container className="main-content">
            <Row>
              <Col md="12" className="text-center">
                <h1 className="title text-dark">
                  جمعية العزم للكفيفات المسنات
                </h1>
                <h4 className="description text-dark">
                  نمنح النور بالأمل، ونرعى بحب
                </h4>
               
              </Col>
            </Row>
          </Container>
        </div> */}
        <div>
          <div className="hero-container" style={{ position: "relative" }}>
            ,{/* الصورة الخلفية */}
            <img
              src="Photos/main.jpg"
              alt="جمعية العزم للكفيفات المسنات"
              className="full-screen-image"
              style={{
                width: "90%",
                height: "100vh",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            {/* الزر فوق الصورة */}
            <Link to="/request">
              <button
                style={{
                  position: "absolute",
                  top: "530px",
                  left: "51%",
                  transform: "translate(-50%, -50%)",
                  color: "#ffd28e",
                  backgroundColor: "white",
                  color: "orange",
                  border: "1px solid #ffd28e",
                  padding: "8px 16px",
                  fontSize: "22px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "120px",
                  whiteSpace: "nowrap",
                  boxShadow: " 0 4px 15px rgba(0, 0, 0, 0.3)",
                  zIndex: 10,
                  transition: "all 0.3s",
                }}
              >
                انضم إلينا
              </button>
            </Link>
          </div>
        </div>

        <div id="goals-section" className="goals-container mt-5">
          <div className="goal-header">
            <h2
              className="text-center text-dark "
              style={{ fontSize: "85px", fontWeight: "bold" }}
            >
              الخدمات{" "}
            </h2>
          </div>
          <div className="goals-content">
            <Link to="/comprehensive-care" style={{ textDecoration: "none" }}>
              <Card
                hoverable
                style={{
                  width: 300,
                  borderRadius: 16,
                  textAlign: "center",
                  margin: "20px auto",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
                cover={
                  <img
                    alt="الرعاية الشاملة"
                    src="Photos/care.png"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                }
              >
                <Card.Meta
                  title={
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      الرعاية الشاملة
                    </span>
                  }
                  description={
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#444",
                        direction: "rtl",
                        marginTop: "10px",
                      }}
                    >
                      توفير الرعاية الشاملة والدعم النفسي والاجتماعي
                    </p>
                  }
                />
                <Button
                      type="default"
                      size="large"
                      style={{
                        marginTop: "20px",
                        backgroundColor: "white",
                        color: "#000",
                        border: "2px solid #ffd28e",
                        borderRadius: "8px",
                        width: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      مشاهدة التفاصيل
                    </Button>
              </Card>
            </Link>
            <Link to="/health-services" style={{ textDecoration: "none" }}>
              <Card
                hoverable
                style={{
                  width: 300,
                  borderRadius: 16,
                  textAlign: "center",
                  margin: "20px auto",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
                cover={
                  <img
                    alt="الخدمات الصحية"
                    src="Photos/health.png"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                }
              >
                <Card.Meta
                  title={
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      الخدمات الصحية{" "}
                    </span>
                  }
                  description={
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#444",
                        direction: "rtl",
                        marginTop: "10px",
                      }}
                    >
                      تقديم الخدمات الصحية والمساعدات العينية
                    </p>
                  }
                />
                <Button
                      type="default"
                      size="large"
                      style={{
                        marginTop: "20px",
                        backgroundColor: "white",
                        color: "#000",
                        border: "2px solid #ffd28e",
                        borderRadius: "8px",
                        width: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      مشاهدة التفاصيل
                    </Button>
              </Card>
            </Link>
            <Link to="/life-skills" style={{ textDecoration: "none" }}>
              <Card
                hoverable
                style={{
                  width: 300,
                  borderRadius: 16,
                  textAlign: "center",
                  margin: "20px auto",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
                cover={
                  <img
                    alt="المهارات الحياتية"
                    src="Photos/training.png"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                }
              >
                <Card.Meta
                  title={
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      المهارات الحياتية
                    </span>
                  }
                  description={
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#444",
                        direction: "rtl",
                        marginTop: "10px",
                      }}
                    >
                      تأهيل الكفيفات المسنات على المهارات الحياتية{" "}
                    </p>
                  }
                />
                <Button
                      type="default"
                      size="large"
                      style={{
                        marginTop: "20px",
                        backgroundColor: "white",
                        color: "#000",
                        border: "2px solid #ffd28e",
                        borderRadius: "8px",
                        width: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      مشاهدة التفاصيل
                    </Button>
              </Card>
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
        <div id="activity-section" className="goals-container mt-5">
          <section>
          <h2
            className="text-center"
            style={{
              fontSize: "85px",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
          >
            النشاطات
          </h2>

          <Row gutter={[24, 24]} justify="center">
            {[
              {
                title: "التراتيل الدينية",
                image: "Photos/نشاط.jpg",
                description:
                  "من فعاليات احتفالنا السنوي المقام في دار العزم للكفيفات المسنات",
                to: "/activities/chanting",
              },
              {
                title: "الأنشطة الرياضية",
                image: "Photos/health3.png",
                description: "تمارين رياضية خاصة بالمكفوفات المسنات",
                to: "/activities/sports",
              },
              {
                title: "الأنشطة الثقافية",
                image: "Photos/activites1.png",
                description: "تهدف لتنشيط الذاكرة وتحسين الحالة النفسية",
                to: "/activities/cultural",
              },
            ].map((activity, index) => (
              <Col key={index} xs={24} sm={12} md={8}>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    textAlign: "center",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "420px",
                  }}
                  cover={
                    <img
                      alt={activity.title}
                      src={activity.image}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }}
                    />
                  }
                >
                  <Card.Meta
                    title={
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {activity.title}
                      </span>
                    }
                    description={
                      <div
                        style={{
                          fontSize: "16px",
                          color: "#444",
                          direction: "rtl",
                          marginTop: "10px",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          lineHeight: "1.5em",
                          height: "3em", 
                        }}
                      >
                        {activity.description}
                      </div>
                    }
                  />

                  <Link to={activity.to}>
                    <Button
                      type="default"
                      size="large"
                      style={{
                        marginTop: "20px",
                        backgroundColor: "white",
                        color: "#000",
                        border: "2px solid #ffd28e",
                        borderRadius: "8px",
                        width: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      مشاهدة التفاصيل
                    </Button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <br></br>
      
</div>
  <br></br>
        <br id="donations-section"></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br ></br>
        <div   className="goals-container mt-5">
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
<div  id="contact" className="goals-container mt-5">
 <div className="contact-container4">
          <h1 className="main-title4 bold-text">تواصل معنا</h1>

          <div className="content-wrapper4">
            <div className="right-section4">
              <h2 className="bold-text">ماذا سيحدث بعد ذلك؟</h2>
              <div className="steps4 bold-text">
                <p>
                  <span className="blue-circle "></span>عند استلامنا رسالتك
                  سنجهز طلبك وندرسه
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
                <input
                  type="tel"
                  placeholder="                                                                 رقم الهاتف"
                />
                <textarea placeholder="الملاحظات"></textarea>
                <button className="99" type="submit">
                  إرسال الرسالة
                </button>
              </form>
            </div>
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
  const userNavbarRoutes = [
    "/my-notes",
    "/registration-request",
    "/manager-donations",
    "/volunteer-notes-page",
    "/patient-page",
    "/donations",
    "/doctor-page",
    "/volunteer-page",
    "/appointments",
    "/doctor-appointments",
    "/volunteer-patient-page",
    "/manager-profile",
    "/manager-page",
    "/assign",
    "/manager-users",
  ];
  const showUserNavbar = userNavbarRoutes.includes(location.pathname);

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
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route
            path="/volunteer-notes-page"
            element={<VolunteerNotesPage />}
          />
          <Route
            path="/volunteer-patient-page"
            element={<VolunteerPatientProfile />}
          />
          {/* <Route path="/donation-page" element={<DonationPage />} /> */}
          <Route path="/manager-profile" element={<ManagerProfile />} />
          <Route path="/assign" element={<VolunteersSection />} />
          <Route path="/manager-donations" element={<DonationsSection />} />
          <Route path="/manager-users" element={<UsersManagement />} />
          <Route
            path="/registration-request"
            element={<RegistrationRequests />}
          />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/verify-account" element={<VerifyAccountPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
