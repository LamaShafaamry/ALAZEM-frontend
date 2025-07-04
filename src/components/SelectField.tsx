import React from 'react';

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="w-full border border-gray-400 rounded-lg p-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-500 rounded-lg p-2 w-full focus:outline-none bg-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;