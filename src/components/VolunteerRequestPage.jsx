import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import { baseUrl } from "../config";
import axios from "axios";
import "./VolunteerRequestPage.css";

const VolunteerForm = () => {
  const [value, setValue] = useState({
    username: "hiba",
    password: "securepassword",
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
    grand_history: "",
    address: "",
    certificate: "",
    job: "",
    previously_affiliated_associations: "",
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
      .post(`${baseUrl}users/volunteer/create/`, value)
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
          <h1>استمارة طلب تطوع</h1>
          <p>الرجاء تعبئة جميع الحقول المطلوبة للتسجيل</p>
        </div>

        <form onSubmit={handleSubmit} className="donation-form">
          {/* القسم الأول: المعلومات الشخصية */}
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

          {/* القسم الثاني: معلومات الميلاد والجنسية */}
          <div className="form-section">
            <h2>معلومات الميلاد والجنسية</h2>
            <div className="form-row-4">
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
            </div>
          </div>

          {/* القسم الثالث: المعلومات الوثائقية */}
          <div className="form-section">
            <h2>المعلومات الوثائقية</h2>
            <div className="form-row-4">
              <DateField
                label="تاريخ"
                name="grand_history"
                value={value.grand_history}
                onChange={(e) =>
                  setValue((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="mm/dd/yy"
              />
              <InputField
                label="العنوان"
                name="address"
                value={value.address}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل العنوان"
              />
              <InputField
                label="الشهادة"
                name="certificate"
                value={value.certificate}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="الشهادة"
              />
              <InputField
                label="العمل"
                name="job"
                value={value.job}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                }
                placeholder="ادخل عملك"
              />
            </div>
          </div>

          {/* القسم الرابع: معلومات إضافية */}
          <div className="form-section">
            <h2>معلومات إضافية</h2>
            <div className="form-row">
              <InputField
                label="أعمال أخرى"
                name="previously_affiliated_associations"
                value={value.previously_affiliated_associations}
                onChange={(e) =>
                  setValue((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="هل تعمل لدى جمعية أخرى"
              />
            </div>
          </div>

          <button
            className="submit-btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "جاري الإرسال..." : "تسجيل الطلب"}
          </button>
        </form>

        <div className="donation-footer">
          <p>جميع المعلومات المقدمة محمية وسرية وفق سياسة الخصوصية</p>
          <p>شكراً لرغبتكم في التطوع معنا</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;