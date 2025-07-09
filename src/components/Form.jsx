import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import FileField from "./fileField";
import { baseUrl } from "../config";
import axios from "axios";
import "/src/components/Form.css"

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

  console.log(value);
  return (
    <div className="request-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="container-wrapper">
        <h2 className="display-6">استمارة تسجيل كفيفة</h2>
        <div className="d-flex gap-4 mt-3">
        <div className="flex-fill">
        <InputField
            label="الاسم "
            name="first_name"
            value={value.first_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الاسم "
          />
          </div>
          <div className="flex-fill">
        <InputField
            label=" الاسم الأخير"
            name="last_name"
            value={value.last_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الاسم الأخير"
          />
          </div>
          <div className="flex-fill">
       <InputField
            label="الأب"
            name="father_name"
            value={value.father_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل اسم الأب"
          />
          </div>
          <div className="flex-fill">

          <InputField
            label="الأم"
            name="mother_name"
            value={value.mother_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل اسم الأم"
          />
          </div>

          </div>
          <div className="d-flex gap-4 mt-3">
          <div className="flex-fill">
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
          </div>
          <div className="flex-fill">
          <InputField
            label="مكان الولادة"
            name="place_of_birth"
            value={value.place_of_birth}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل مكان الولادة "
          /></div>
          <div className="flex-fill">
          <InputField
            label="الجنسية"
            name="nationality"
            value={value.nationality}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الجنسية"
          />
          </div>
          <div className="flex-fill">

          <InputField
            label="رقم الهوية الوطنية"
            name="nationality_ID"
            value={value.nationality_ID}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الرقم الوطني"
          /></div>
          </div>
          <div className="d-flex gap-4 mt-3">
          <div className="flex-fill">
          <InputField
            label="دفتر العائلة"
            name="family_book_number"
            value={value.family_book_number}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل رقم دفتر العائلة "
          /></div>
          <div className="flex-fill">

          <InputField
            label="رقم بطاقة الاعاقة"
            name="disability_card_number"
            value={value.disability_card_number}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل رقم البطاقة "
          /></div>
          <div className="flex-fill">
          <InputField
            label="الشهادة"
            name="certificate"
            value={value.certificate}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="الشهادة"
          /></div>
          <div className="flex-fill">
          <InputField
            label="اعاقات اخرى"
            name="other_disability"
            value={value.other_disability}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="اعاقات اخرى"
          /></div>
          </div>
          <div className="d-flex gap-4 mt-3">
          <div className="flex-fill">
          <InputField
            label="السبب"
            name="cause"
            value={value.cause}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="السبب"
          /></div>
          <div className="flex-fill">

          <InputField
            label="امراض مزمنة"
            name="chronic_illness"
            value={value.chronic_illness}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="امراض مزمنة"
          /></div>
          <div className="flex-fill">

          <SelectField
            label="هل تحتاج الى ادوية مستمرة"
            name="requirement_of_ongoing_medication"
            value={value.requirement_of_ongoing_medication}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            options={statusOptions}
          /></div>
          <div className="flex-fill">

          <SelectField
            label="هل تحتاج الى عناية خاصة"
            name="requirement_of_special_care"
            value={value.requirement_of_special_care}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            options={statusOptions}
          /></div>
          </div>
          <div className="d-flex gap-4 mt-3">
          <div className="flex-fill">
           <DateField
            label="تاريح كف البصر"
            name="history_of_blindness"
            value={value.history_of_blindness}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="تاريخ كف البصر"
          /></div>
          </div>

        </div>
        <button
          className="btn request-submit-btn w-100 mt-4"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loaing..." : "Submit"}
        </button>
      </form>
    </div>
  
  );
};

export default Form;
