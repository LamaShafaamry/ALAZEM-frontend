import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import FileField from "./fileField";

const Form = () => {
  const [value, setValue] = useState({
    mother: "",
    father: "",
    nationality: "",
    displayName: "",
    identyNumber: "",
    numberPhone: "",
    address: "",
    locationType: "",
    status: "",
    birthDate: "",
    familyNote: "",
    disabilityCard: "",
    licence: "",
    housingParticipants: "",
    healthStatus: "",
    husbandName: "",
  });

   const handleFileChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const locationOptions = [
    { value: "ownerShip", label: "ملكية" },
    { value: "rent", label: "اجار" },
  ];
  const statusOptions = [
    { value: "single", label: "عزباء" },
    { value: "marrid", label: "متزوجة" },
    { value: "divorced", label: "مطلقة" },
    { value: "widow", label: "ارملة" },
  ];
  const cardOptions = [
    { value: "yes", label: "لا" },
    { value: "no", label: "نعم" },
  ];
  console.log(value);
  return (
    <div>
      <form>
        <div className="grid grid-cols-4 gap-4">
          <InputField
            label="الأم"
            name="mother"
            value={value.mother}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل اسم الأم"
          />
          <InputField
            label="الأب"
            name="father"
            value={value.father}
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
            name="displayName"
            value={value.displayName}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الاسم الكامل"
          />
          <InputField
            label="رقم الهوية الوطنية"
            name="identyNumber"
            value={value.identyNumber}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الرقم الوطني"
          />
          <InputField
            label="رقم الهاتف"
            name="numberPhone"
            value={value.numberPhone}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل رقم الهاتف"
          />
          <InputField
            label="العنوان"
            name="address"
            value={value.address}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل العنوان "
          />
          <SelectField
            label="نوع السكن"
            name="locationType"
            value={value.locationType}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            options={locationOptions}
          />
          <InputField
            label="الحالة الاجتماعية"
            name="address"
            value={value.address}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل العنوان "
          />
          <SelectField
            label="الحالة الاجتماعية"
            name="locationType"
            value={value.locationType}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            options={statusOptions}
          />
          <DateField
            label="تاريخ الميلاد"
            name="birthDate"
            value={value.birthDate}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="mm/dd/yy"
          />
          <InputField
            label="دفتر العائلة"
            name="familyNote"
            value={value.familyNote}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل رقم دفتر العائلة "
          />
          <SelectField
            label="بطاقة الاعاقة"
            name="locationType"
            value={value.locationType}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            options={cardOptions}
          />
          <FileField
            label="الشهادة"
            name="file"
            onChange={handleFileChange}
          />
            <InputField
            label="المشاركون في السكن"
            name="familyNote"
            value={value.familyNote}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل رقم دفتر العائلة "
          />
            <InputField
            label="وضعه الصحي"
            name="healthStatus"
            value={value.healthStatus}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل الوضع الصحي "
          />
            <InputField
            label="اسم الزوج"
            name="husbandName"
            value={value.husbandName}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            placeholder="ادخل سم الزوج "
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
