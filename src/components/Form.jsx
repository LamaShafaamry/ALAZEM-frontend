import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import { baseUrl } from "../config";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [value, setValue] = useState({
    username: "emadsdvsd",
    password: "1234!@#$",
    email: "11@example.com",
    phone: "1234567890",
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

  const statusOptions = [
    { value: "yes", label: "نعم" },
    { value: "No", label: "لا" },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${baseUrl}services/patients/create/`, value)
      .then((res) => {
        console.log("first");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("first");
        setIsLoading(false);
      });
  };

  return (
    <div className="donation-container">
      <div className="donation-card">
        <div className="donation-header">
          <h1>استمارة تسجيل كفيفة</h1>
          <p>الرجاء تعبئة جميع الحقول المطلوبة للتسجيل</p>
        </div>

        <form onSubmit={handleSubmit} className="donation-form">
          {/* القسم الأول: المعلومات الشخصية - 4 حقول في صف واحد */}
          <div className="form-section">
            <h2>المعلومات الشخصية</h2>
            <div className="form-row-4">
              <InputField
                label="الاسم الأول"
                name="first_name"
                value={value.first_name}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل الاسم الأول"
              />
              <InputField
                label="الاسم الأخير"
                name="last_name"
                value={value.last_name}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل الاسم الأخير"
              />
              <InputField
                label="اسم الأب"
                name="father_name"
                value={value.father_name}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل اسم الأب"
              />
              <InputField
                label="اسم الأم"
                name="mother_name"
                value={value.mother_name}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل اسم الأم"
              />
            </div>
          </div>

          {/* القسم الثاني: معلومات الميلاد - حقلين في صف واحد */}
          <div className="form-section">
            <h2>معلومات الميلاد</h2>
            <div className="form-row-2">
              <DateField
                label="تاريخ الميلاد"
                name="date_of_birth"
                value={value.date_of_birth}
                onChange={(e) =>
                  setValue((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="mm/dd/yy"
              />
              <InputField
                label="مكان الولادة"
                name="place_of_birth"
                value={value.place_of_birth}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل مكان الولادة"
              />
            </div>
          </div>

          {/* القسم الثالث: المعلومات الوثائقية - 4 حقول في صف واحد */}
          <div className="form-section">
            <h2>المعلومات الوثائقية</h2>
            <div className="form-row-4">
              <InputField
                label="الجنسية"
                name="nationality"
                value={value.nationality}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل الجنسية"
              />
              <InputField
                label="رقم الهوية الوطنية"
                name="nationality_ID"
                value={value.nationality_ID}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل الرقم الوطني"
              />
              <InputField
                label="دفتر العائلة"
                name="family_book_number"
                value={value.family_book_number}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل رقم دفتر العائلة"
              />
              <InputField
                label="رقم بطاقة الإعاقة"
                name="disability_card_number"
                value={value.disability_card_number}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل رقم البطاقة"
              />
            </div>
          </div>

          {/* القسم الرابع: المعلومات الطبية - 4 حقول في صف واحد */}
          <div className="form-section">
            <h2>المعلومات الطبية</h2>
            <div className="form-row-4">
              <InputField
                label="الشهادة الطبية"
                name="certificate"
                value={value.certificate}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="الشهادة الطبية"
              />
              <InputField
                label="إعاقات أخرى"
                name="other_disability"
                value={value.other_disability}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="إعاقات أخرى"
              />
              <InputField
                label="سبب الإعاقة"
                name="cause"
                value={value.cause}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="سبب الإعاقة"
              />
              <InputField
                label="أمراض مزمنة"
                name="chronic_illness"
                value={value.chronic_illness}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="أمراض مزمنة"
              />
            </div>
          </div>

          {/* القسم الخامس: معلومات إضافية - 4 حقول في صف واحد */}
          <div className="form-section">
            <h2>معلومات إضافية</h2>
            <div className="form-row-4">
              <SelectField
                label="هل تحتاج إلى أدوية مستمرة؟"
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
              <SelectField
                label="هل تحتاج إلى عناية خاصة؟"
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
              <DateField
                label="تاريخ فقدان البصر"
                name="history_of_blindness"
                value={value.history_of_blindness}
                onChange={(e) =>
                  setValue((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="تاريخ كف البصر"
              />
            </div>
          </div>

          <button
            className="submit-btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "جاري الإرسال..." : "تسجيل البيانات"}
          </button>
        </form>

        <div className="donation-footer">
          <p>جميع المعلومات المقدمة محمية وسرية وفق سياسة الخصوصية</p>
          <p>شكراً لثقتكم بنا</p>
        </div>
      </div>
    </div>
  );
};

export default Form;