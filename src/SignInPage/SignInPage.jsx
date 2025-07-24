import "bootstrap/dist/css/bootstrap.min.css";
import "./SignInPage.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isLoading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const commonPasswords = ["12345678", "password", "123456789", "123456", "123123", "111111", "000000"];

  const validatePassword = (pass) => {
    // الشرط 1: طول كلمة السر
    if (pass.length < 8) {
      return "كلمة السر يجب أن تحتوي على 8 أحرف على الأقل";
    }
    
    // الشرط 2: كلمة السر شائعة
    if (commonPasswords.includes(pass.toLowerCase())) {
      return "كلمة السر شائعة جداً يرجى اختيار كلمة سر أقوى";
    }
    
    // الشرط 3: كلمة السر كلها أرقام
    if (/^\d+$/.test(pass)) {
      return "كلمة السر لا يمكن أن تكون أرقاماً فقط";
    }
    
    return "";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // التحقق من صحة كلمة السر قبل الإرسال
    const errorMsg = validatePassword(password);
    if (errorMsg) {
      setPasswordError(errorMsg);
      return;
    }
    
    dispatch(login({ username, password })).then((res) => {
      navigate("/")
    });
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper2">
        <h3 className="display-6">مرحبًا بك في تسجيل الدخول</h3>
        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label className="form-label">الإيميل </label>
            <input
              type="text"
              className="form-control"
              placeholder="ادخل الإيميل "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">كلمة السر</label>
            <input
              type="password"
              className={`form-control ${passwordError && "is-invalid"}`}
              placeholder="ادخل كلمة السر"
              value={password}
              onChange={handlePasswordChange}
              required
              disabled={isLoading}
            />
            {passwordError && (
              <div className="invalid-feedback" style={{ textAlign: "right" }}>
                {passwordError}
              </div>
            )}
            
          </div>
          <button 
            type="submit" 
            className="btn2" 
            disabled={isLoading || passwordError}
          >
            {isLoading ? "...جاري تسجيل الدخول" : "تسجيل الدخول"}
          </button>
        </form>

        <div className="mt-3">
          <a href="#">هل نسيت كلمة السر؟</a> |{" "}
          <Link to="/request">ارسل طلب</Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;