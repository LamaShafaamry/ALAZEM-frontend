import React from "react";
import ServiceCard from "../components/ServiceCard";

const service = [
  {
    title: "الرعاية الشاملة",
    description: "نوفر الدعم النفسي والصحي الشامل الكفيفات المسنات",
    image: "/assets/image_1.jpg",
  },
  {
    title: "الرعاية الشاملة",
    description: "نوفر الدعم النفسي والصحي الشامل الكفيفات المسنات",
    image: "/assets/image_1.jpg",
  },
  {
    title: "الرعاية الشاملة",
    description: "نوفر الدعم النفسي والصحي الشامل الكفيفات المسنات",
    image: "/assets/image_1.jpg",
  },
];

const Services = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 64px)" }} className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="w-[90%] h-96 rounded-2xl shadow-lg p-4 ">
          <h3 className="text-2xl font-bold text-blue-600 text-center py-8">
            الخدمات
          </h3>
          <div className="flex justify-between items-center gap-5">
            {service.map((el, index) => (
              <ServiceCard data={el} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
