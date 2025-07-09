import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-primary text-white py-3 fixed-top shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* الشعار */}
          <div className="d-flex align-items-center">
            <Link to="/" className="text-decoration-none text-white">
              <div className="text-right">
                <h1 className="m-0" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  جمعية العزم للكفيفات المسنات
                </h1>
                <p className="m-0 text-light" style={{ fontSize: "0.9rem" }}>
                  نمنح النور بالأمل، ونرعى بحب
                </p>
              </div>
            </Link>
          </div>

          {/* زر اتصل بنا */}
          <a 
            href="tel:+123456789" 
            className="btn btn-outline-light d-flex align-items-center"
            style={{ borderRadius: "20px" }}
          >
            <i className="bi bi-telephone-fill me-2"></i>
            اتصل بنا
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;