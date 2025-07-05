import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import FileField from "./fileField";
import { baseUrl } from "../config";
import axios from "axios";

const Form = () => {
  const [value, setValue] = useState({
    username: "emadsdvsdv",
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
      .post(`${baseUrl}volunteer/create/`, value)
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4">
          <InputField
            label="الأم"
            name="mother_name"
            value={value.mother_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل اسم الأم"
          />
          <InputField
            label="الأب"
            name="father_name"
            value={value.father_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل اسم الأب"
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
            label="الاسم والشهرة"
            name="first_name"
            value={value.first_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الاسم الكامل"
          />
          <InputField
            label="الاسم والشهرة"
            name="last_name"
            value={value.last_name}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الاسم الكامل"
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
            placeholder="ادخل الرقم الوطني"
          />

          {/* <InputField
            label="مكان الولادة"
            name="place_of_birth"
            value={value.place_of_birth}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الرقم الوطني"
          /> */}

          <InputField
            label="دفتر العائلة"
            name="family_book_number"
            value={value.family_book_number}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الرقم الوطني"
          />

          <InputField
            label="رقم بطاقة الاعاقة"
            name="disability_card_number"
            value={value.disability_card_number}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الرقم الوطني"
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
            label="اعاقات اخرى"
            name="other_disability"
            value={value.other_disability}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="اعاقات اخرى"
          />

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
          />

          <InputField
            label="السبب"
            name="cause"
            value={value.cause}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="السبب"
          />

          <InputField
            label="امراض مزمنة"
            name="chronic_illness"
            value={value.chronic_illness}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="امراض مزمنة"
          />

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
          />

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
          />
        </div>
        <button
          className="px-6 py-3 bg-red-500"
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
