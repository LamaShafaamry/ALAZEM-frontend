import React from 'react';

const DateField = ({ label, name, value,placeholder, onChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="w-full border border-gray-400 rounded-lg p-2">
        {label}
      </label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-500 rounded-lg p-2 w-full focus:outline-none bg-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DateField;