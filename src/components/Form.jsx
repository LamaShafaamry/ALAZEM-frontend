import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import { baseUrl } from "../config";
import axios from "axios";
import "./Form.css";
import VerifyAccountPage from "../SignInPage/VerifyAccountPage";
import { useNavigate } from "react-router-dom";

const commonPasswords = ["password", "123456", "12345678", "qwerty", "admin"];


const Form = () => {
  
  const [value, setValue] = useState({
    password: "",
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    father_name: "",
    mother_name: "",
    date_of_birth: "",
    place_of_birth: "",
    nationality: "",
    nationality_ID: "",
    family_book_number: "",
    disability_card_number: "",
    certificate: "",
    other_disability: "",
    cause: "",
    chronic_illness: "",
    requirement_of_ongoing_medication: "",
    requirement_of_special_care: "",
    history_of_blindness: "",
  });

  const [showPassword, setShowPassword] = useState(false);
const [error, setError] = useState("");

  const statusOptions = [
    { value: "yes", label: "نعم" },
    { value: "No", label: "لا" },
  ];
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`${baseUrl}services/patients/create/`, value)
      .then((res) => {
        console.log("Patient created");

        // Navigate to verification page and pass email in state

        navigate("/verify-account", { state: { email: value.email } });

        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error creating patient");
        setIsLoading(false);
      });
  };
const validatePassword = (password) => {
  if (password.length < 8) {
    return "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل";
  }
  if (!/[A-Z]/.test(password)) {
    return "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل";
  }
  if (commonPasswords.includes(password.toLowerCase())) {
    return "كلمة المرور شائعة جدًا، يرجى اختيار كلمة مرور أقوى";
  }
  return "";
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   axios
  //     .post(`${baseUrl}services/patients/create/`, value)
  //     .then((res) => {
  //       console.log("first");
  //               VerifyAccountPage(email = value.email);

  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("first");
  //       setIsLoading(false);
  //     });
  // };

  return (
    <div className="donation-container" style={{ marginTop: "90px" }}>
      {/* <br></br>
      <br></br> */}
      <div className="donation-card">
        <div className="donation-header">
          <div className="regisration-header">
            <h1>استمارة تسجيل كفيفة</h1>
            <p>الرجاء تعبئة جميع الحقول المطلوبة للتسجيل</p>
          </div>

          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-section">
              <h2>معلومات الحساب</h2>
              <div
                className="form-row"
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                {/* Email */}
                <div style={{ display: "flex", width: "100%" }}>
                  <label style={{ marginTop: "6px" }}>البريد الإلكتروني</label>
                  <InputField
                    name="email"
                    value={value.email}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل البريد الإالكتروني"
                    style={{ width: "75%" }}
                  />
                </div>

                {/* Password */}
                {/* <div style={{ display: "flex", width: "100%" }}>
                  <label style={{ marginTop: "6px" }}>كلمة المرور</label>
                  <InputField
                    name="password"
                    value={value.password}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل كلمة المرور"
                    style={{ width: "75%" }}
                  />
                </div> */}
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <label style={{ marginBottom: "6px" }}>كلمة المرور</label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <InputField
          name="password"
          type={showPassword ? "text" : "password"}
          value={value.password}
          onChange={handleChange}
          placeholder="ادخل كلمة المرور"
          style={{ width: "75%" }}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          style={{
            marginLeft: "10px",
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          {showPassword ? "إخفاء" : "إظهار"}
        </button>
      </div>
      {error && <span style={{ color: "red", marginTop: "4px" }}>{error}</span>}
    </div>
      
              </div>
            </div>

            <div className="form-section">
              <h2>المعلومات الشخصية</h2>

              <div
                className="form-row"
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <div style={{ display: "flex", width: "100%" }}>
                  <label style={{ marginTop: "6px", marginLeft: "-30px" }}>
                    الاسم الأول
                  </label>
                  <InputField
                    name="first_name"
                    value={value.first_name}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل الاسم الأول"
                    style={{ width: "75%" }}
                  />
                </div>

                {/* Last Name */}
                <div style={{ display: "flex", width: "100%" }}>
                  <label style={{ marginTop: "6px", marginLeft: "-30px" }}>
                    الاسم الأخير
                  </label>
                  <InputField
                    name="last_name"
                    value={value.last_name}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل الاسم الأخير"
                    style={{ width: "75%" }}
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label style={{ marginTop: "6px", marginLeft: "-30px" }}>
                    اسم الأب
                  </label>
                  <InputField
                    name="father_name"
                    value={value.father_name}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل اسم الأب"
                    style={{ width: "75%" }}
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label style={{ marginTop: "6px", marginLeft: "-30px" }}>
                    اسم الأم
                  </label>
                  <InputField
                    name="mother_name"
                    value={value.mother_name}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل اسم الأم"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>

              <div
                className="form-row"
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                {/* Date of Birth */}
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "31px",
                      // marginLeft: "5px",
                      // marginRight: "-11px",
                    }}
                  >
                    تاريخ الميلاد
                  </label>
                  <DateField
                    name="date_of_birth"
                    value={value.date_of_birth}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="mm/dd/yyyy"
                    style={{ width: "75%" }}
                  />
                </div>

                {/* Place of Birth */}
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "6px",
                      marginRight: "-6px",
                      marginLeft: "-31px",
                    }}
                  >
                    مكان الولادة
                  </label>
                  <InputField
                    name="place_of_birth"
                    value={value.place_of_birth}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل مكان الولادة"
                    style={{ width: "75%" }}
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "6px",
                      // marginRight: "-180px",
                      marginLeft: "-16px",
                    }}
                  >
                    الهاتف
                  </label>
                  <InputField
                    name="phone"
                    value={value.phone}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="ادخل رقم الهاتف"
                    style={{ width: "75%" }}
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "6px",
                      // marginRight: "-180px",
                      marginLeft: "-28px",
                    }}
                  >
                    الشهادة
                  </label>
                  <InputField
                    name="certificate"
                    value={value.certificate}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="الشهادة الطبية"
                    style={{ width: "75%" }}
                  />
                </div>
                {/* <div>
                  <label
                    style={{
                      marginTop: "6px",
                      marginRight: "-180px",
                      marginLeft: "-31px",
                    }}
                  >
                    الشهادة
                  </label>
                  <InputField
                    name="certificate"
                    value={value.certificate}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="الشهادة الطبية"
                  />
                </div> */}
              </div>

              {/* <div className="form-row" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}> */}
              {/* Phone */}
            </div>

            {/* القسم الثالث: المعلومات الوثائقية - 4 حقول في صف واحد */}

            <div className="form-section">
              <h2>المعلومات الوثائقية</h2>

              <div
                className="form-row"
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                {/* Date of Birth */}
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "6px",
                      // marginRight: "-180px",
                      marginLeft: "-28px",
                    }}
                  >
                    الجنسية
                  </label>
                  <InputField
                    name="nationality"
                    value={value.nationality}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="الجنسية"
                    style={{ width: "75%" }}
                  />
                </div>

                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "6px",
                      marginRight: "-6px",
                      marginLeft: "-31px",
                    }}
                  >
                    الرقم الوطني{" "}
                  </label>
                  <InputField
                    name="nationality_ID"
                    value={value.nationality_ID}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="الرقم الوطني "
                    style={{ width: "75%" }}
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "6px",
                      // marginRight: "-180px",
                      marginLeft: "-31px",
                    }}
                  >
                    دفتر العائلة
                  </label>
                  <InputField
                    name="family_book_number"
                    value={value.family_book_number}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="دفتر العائلة"
                    style={{ width: "75%" }}
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "6px",
                      marginRight: "-32px",
                      marginLeft: "-33px",
                    }}
                  >
                    رقم بطاقة الإعاقة
                  </label>
                  <InputField
                    name="disability_card_number"
                    value={value.disability_card_number}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="رقم بطاقة الإعاقة"
                    style={{ width: "75%" }}
                  />
                </div>
                {/* <div>
                  <label
                    style={{
                      marginTop: "6px",
                      marginRight: "-180px",
                      marginLeft: "-31px",
                    }}
                  >
                    الشهادة
                  </label>
                  <InputField
                    name="certificate"
                    value={value.certificate}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="الشهادة الطبية"
                  />
                </div> */}
              </div>
            </div>
            {/* القسم الرابع: المعلومات الطبية - 4 حقول في صف واحد */}
            <div className="form-section">
              <h2>المعلومات الطبية</h2>
              <div
                className="form-row"
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "29px",
                      // // marginRight: "-180px",
                      marginLeft: "12px",
                    }}
                  >
                    إعاقات أخرى
                  </label>
                  <InputField
                    name="other_disability"
                    value={value.other_disability}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="إعاقات أخرى"
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "29px",
                      // // marginRight: "-180px",
                      marginLeft: "12px",
                    }}
                  >
                    سبب الإعاقة
                  </label>
                  <InputField
                    name="cause"
                    value={value.cause}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="سبب الإعاقة"
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "29px",
                      // // marginRight: "-180px",
                      marginLeft: "12px",
                    }}
                  >
                    أمراض مزمنة
                  </label>
                  <InputField
                    name="chronic_illness"
                    value={value.chronic_illness}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="أمراض مزمنة"
                  />
                </div>
              </div>
            </div>

            {/* القسم الخامس: معلومات إضافية - 4 حقول في صف واحد */}
            <div className="form-section">
              <h2>معلومات إضافية</h2>
              <div className="form-row">
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "8px",
                      // marginLeft: "5px",
                      // marginRight: "-11px",
                    }}
                  >
                    هل تحتاج إلى أدوية مستمرة؟{" "}
                  </label>{" "}
                  
                  <SelectField
                  
                    name="requirement_of_ongoing_medication"
                    value={value.requirement_of_ongoing_medication}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    options={statusOptions}
                  />
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "8px",
                      // marginLeft: "5px",
                      // marginRight: "-11px",
                    }}
                  >
                    هل تحتاج إلى عناية خاصة؟{" "}
                  </label>
                  <SelectField
                    name="requirement_of_special_care"
                    value={value.requirement_of_special_care}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    options={statusOptions}
                  />
                </div>
                {/* <div style={{ display: "flex", width: "100%"}}>
                  <label
                    style={{
                      marginTop: "49px",
                      // marginLeft: "5px",
                      // marginRight: "-11px",
                    }}
                  >
                    تاريخ كف البصر
                  </label>
                  <DateField
                    name="history_of_blindness"
                    value={value.history_of_blindness}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="mm/dd/yyyy"
                    style={{ width: "75%" }}
                  />
                </div> */}
                 <div style={{ display: "flex", width: "100%" }}>
                  <label
                    style={{
                      marginTop: "31px",
                      // marginLeft: "5px",
                      // marginRight: "-11px",
                    }}
                  >
                    تاريخ كف البصر
                  </label>
                  <DateField
                    name="history_of_blindness"
                    value={value.history_of_blindness}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    placeholder="mm/dd/yyyy"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>

            <button className="submit-btn" type="submit" disabled={isLoading}>
              {isLoading ? "جاري الإرسال..." : "تسجيل البيانات"}
            </button>
          </form>

          <div className="donation-footer">
            <p>جميع المعلومات المقدمة محمية وسرية وفق سياسة الخصوصية</p>
            <p>شكراً لثقتكم بنا</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
