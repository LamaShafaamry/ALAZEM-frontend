import React from "react";
import GoalsCard from "../components/GoalsCard";

const goals = [
  {
    description: "نوفر الدعم النفسي والصحي الشامل الكفيفات المسنات",
    image: "/assets/image_1.jpg",
  },
  {
    description: "نوفر الدعم النفسي والصحي الشامل الكفيفات المسنات",
    image: "/assets/image_1.jpg",
  },
  {
    description: "نوفر الدعم النفسي والصحي الشامل الكفيفات المسنات",
    image: "/assets/image_1.jpg",
  },
  {
    description: "نوفر الدعم النفسي والصحي الشامل الكفيفات المسنات",
    image: "/assets/image_1.jpg",
  },
];

const Goal = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 64px)" }}
      className="flex justify-center items-center"
    >
      <div className="flex justify-center items-center">
        <div className="w-[90%]  rounded-2xl shadow-lg p-4 ">
          <div className="flex flex-col gap-5 items-center justify-center py-5">
            <h3 className="text-2xl font-bold text-blue-600 text-center py-8">
              الهدف الرئيسي
            </h3>
            <p className="font-medium text-gray-700">
              تأمين دار امنة لمن لا مأوى لهم
            </p>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {goals.map((el, index) => (
              <GoalsCard data={el} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
