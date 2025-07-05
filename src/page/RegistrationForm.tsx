import React from "react";
import Form from "../components/Form";
const RegistrationForm = () => {

  
  return (
    <div
      style={{ minHeight: "calc(100vh - 64px)" }}
      className="flex justify-center items-center"
    >
      <div className="flex justify-center items-center w-full">
        <div className="w-[90%] rounded-2xl shadow-lg p-4 bg-amber-200">
          <div className="flex flex-col gap-5 text-center pb-5">
            <h3 className="text-2xl font-bold text-center py-8">
              استمارة تسجيل كفيفة
            </h3>
            <p className=" font-medium">يرجى ادخال المعلومات التالية</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
