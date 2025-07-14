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

  const isLoading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password })).then((res) => {
      navigate("/")
    })
    // console.log("تم الضغط على زر تسجيل الدخول"); // التأكد من تنفيذ الوظيفة

    // if (username === "Lama" && password === "1234") {
    //   console.log("تم التحقق من البيانات، سيتم التوجيه الآن...");
    //   navigate("/admin"); // التوجيه إلى صفحة الأدمن
    //   return; // الخروج من الدالة لمنع ظهور رسالة الخطأ
    // }

    // if (username === "doctor123" && password === "mypassword") {
    //   console.log("تم التحقق من بيانات الدكتور، سيتم التوجيه الآن...");
    //   navigate("/doctor-page"); // إعادة التوجيه إلى صفحة الدكتور
    //   return; // الخروج من الدالة لمنع ظهور رسالة الخطأ
    // }

    // if (username === "itsupport" && password === "helpme") {
    //   navigate("/it-support"); // التوجيه إلى صفحة الدعم الفني
    //   return;
    // }

    // if (username === "donationmanager" && password === "donate123") {
    //   navigate("/donation-manager"); // التوجيه إلى صفحة مدير التبرعات
    //   return;
    // }

    // if (username === "mentoruser" && password === "mentorpass") {
    //   navigate("/patient-page"); // التوجيه إلى صفحة المريض
    //   return;
    // }

    // if (username === "manager123" && password === "managerpass") {
    //   navigate("/manager-page"); // التوجيه إلى صفحة المدير
    //   return;
    // }

    // // إذا لم يتم مطابقة أي من المستخدمين، يتم عرض رسالة الخطأ
    // alert("خطأ في اسم المستخدم أو كلمة المرور!");
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper2">
        <h2 className="display-6">مرحبًا بك في تسجيل الدخول</h2>
        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label className="form-label">اسم المستخدم</label>
            <input
              type="text"
              className="form-control"
              placeholder="ادخل اسم المستخدم"
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
              className="form-control"
              placeholder="ادخل كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="btn2" disabled={isLoading}>
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
