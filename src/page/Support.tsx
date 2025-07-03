import React from "react";

const Support = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 64px)" }}
      className="flex justify-center items-center"
    >
      <div className="flex justify-center items-center w-full">
        <div className="w-[90%]  rounded-2xl shadow-lg p-4 bg-gradient-to-br from-[#FBCC94] to-[#8463F8]">
          <div className="flex flex-col gap-8 p-4 text-center">
            <h3 className="text-2xl font-bold text-blue-600 text-center py-8">
              دعم الجمعيات بالتبرعات
            </h3>
            <p className="text-white font-medium">
              اختر طريقة التبرع وساهم في دعم الكفيفات المسنات
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="bg-white text-amber-400 rounded-4xl px-6 py-3 font-bold cursor-pointer">
                تبرع فردي
              </button>
              <button className="bg-white text-amber-400 rounded-4xl px-6 py-3 font-bold cursor-pointer">
                تبرع لكامل الجمعية
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
