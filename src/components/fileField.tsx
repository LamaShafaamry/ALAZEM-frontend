import React from 'react';

const FileField = ({ label, name, onChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="w-full border border-gray-400 rounded-lg p-2">
        {label}
      </label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="border border-gray-500 rounded-lg p-2 w-full focus:outline-none bg-white"
      />
    </div>
  );
};

export default FileField;