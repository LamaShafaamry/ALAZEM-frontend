import React from "react";
import { useNavigate } from "react-router-dom";
// import { Donation } from '../PatientPage/PatientPage'
import DonationHistory from "../PatientPage/DonationHistory";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const scrollToHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // العودة لأعلى الصفحة
};

function UserNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // or any route you prefer
  };
  const AppointmentNavigation = () => {
    var role = sessionStorage.getItem("role");
    if (role == "PAT") {
      navigate("/appointments");
    }
    if (role == "DOC") {
      navigate("/doctor-appointments");
    }
    // if (role == "VOL") {
    //   navigate("/volunteer-page")
    // }
    // if (role == "MAN") {
    //   navigate("/manager-page")
    // }
  };

  const ProfileNavigation = () => {
    var role = sessionStorage.getItem("role");
    if (role == "PAT") {
      navigate("/patient-page");
    }
    if (role == "DOC") {
      navigate("/doctor-page");
    }
    if (role == "VOL") {
      navigate("/volunteer-page");
    }
    if (role == "MAN") {
      navigate("/manager-profile");
    }
  };

  const IsManagerAppointmentVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "MAN") {
      return true;
    } else {
      return false;
    }
  };

  const IsAppointmentVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "PAT") {
      return true;
    } else if (role == "DOC") {
      return true;
    } else {
      return false;
    }
  };

  const IsNotesVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "VOL") {
      return true;
    } else {
      return false;
    }
  };

  const IsDonationVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "PAT") {
      return true;
    } else {
      return false;
    }
  };

  const IsPatientProfileVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "VOL") {
      return true;
    } else {
      return false;
    }
  };

  const IsManagerDonationVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "MAN") {
      return true;
    } else {
      return false;
    }
  };

  const IsAssignVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "MAN") {
      return true;
    } else {
      return false;
    }
  };
  const IsRegistrationRequestVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "MAN") {
      return true;
    } else {
      return false;
    }
  };

    const IsMyNotestVisibility = () => {
    var role = sessionStorage.getItem("role");
    if (role == "PAT") {
      return true;
    } else {
      return false;
    }
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => navigate("/")}
              >
                الصفحة الرئيسية
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => ProfileNavigation()}
              >
                الملف الشخصي
              </button>
            </li>
            {/* <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => AppointmentNavigation()}
              >
                المواعيد
              </button>
            </li> */}
            {IsAppointmentVisibility() ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => AppointmentNavigation()}
                >
                  المواعيد
                </button>
              </li>
            ) : (
              <></>
            )}

            {IsNotesVisibility() ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/volunteer-notes-page")}
                >
                  ملاحظات المريض
                </button>
              </li>
            ) : (
              <></>
            )}
            {IsPatientProfileVisibility() ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/volunteer-patient-page")}
                >
                  ملف المريض
                </button>
              </li>
            ) : (
              <></>
            )}
            {IsDonationVisibility() && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/donations")}
                >
                  التبرعات
                </button>
              </li>
            )}
            {IsManagerAppointmentVisibility() && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/manager-page")}
                >
                  إدارة المواعيد
                </button>
              </li>
            )}
            {IsAssignVisibility() && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/assign")}
                >
                  إدارة المتطوعين
                </button>
              </li>
            )}
            {IsManagerDonationVisibility() && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/manager-donations")}
                >
                  إدارة التبرعات
                </button>
              </li>
            )}
             {IsRegistrationRequestVisibility() && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/registration-request")}
                >
                  إدارة طلبات الانضمام 
                </button>
              </li>
            )}
            {IsMyNotestVisibility() && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/my-notes")}
                >
                  ملاحظاتي
                </button>
              </li>
            )}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleLogout()}
              >
                تسجيل الخروج
              </button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;

function Donations() {
  return <DonationHistory />;
}
