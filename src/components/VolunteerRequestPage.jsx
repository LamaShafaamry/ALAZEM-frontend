import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import FileField from "./fileField";
import { baseUrl } from "../config";
import axios from "axios";
import "/src/components/VolunteerRequestPage.css";

const Form = () => {
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

  console.log(value);
  return (
    <div className="volunteer-request-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="container-wrapper">
        <h2 className="display-6">استمارة طلب تطوع</h2>
        <div className="d-flex gap-4 mt-3">
        <div className="flex-fill">
        <InputField
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
          className="form-control"
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
          <InputField
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          <div className="d-flex gap-4 mt-3">
          <div className="flex-fill">
          <InputField
          className="form-control"
            label="تاريخ "
            name="grand_history"
            value={value.grand_history}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="mm/dd/yy"
          /></div>
          <div className="flex-fill">

          <InputField
          className="form-control"
            label="العنوان  "
            name="address"
            value={value.address}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل العنوان  "
          /></div>
          <div className="flex-fill">
          <InputField
          className="form-control"
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
          className="form-control"
            label=" العمل"
            name="job"
            value={value.job}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل عملك "
          /></div>
          </div>
          <div className="d-flex gap-4 mt-3">
          <div className="flex-fill">
          <InputField
          style={{ border: "width: 100%;" }}
          className="form-control"
            label="أعمال أخرى  "
            name="previously_affiliated_associations"
            value={value.previously_affiliated_associations}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="هل تعمل لدى جمعية أخرى  "
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
