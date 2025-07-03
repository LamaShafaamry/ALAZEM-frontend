import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 px-4 py-2 border border-gray-400 rounded-2xl shadow-lg shadow-top text-center">
      <div className="mx-auto">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-24 h-24 object-cover"
        />
      </div>
      <h6>{data?.title}</h6>
      <p>{data?.description}</p>
    </div>
  );
};

export default ServiceCard;
