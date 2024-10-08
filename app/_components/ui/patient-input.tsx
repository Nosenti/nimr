import React from 'react';

interface BigInputProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
}

const BigInput: React.FC<BigInputProps> = ({ label, id, name, placeholder }) => {
  return (
    <div className="w-full max-w-sm p-2 border border-gray-300 rounded-md bg-gray-100">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="w-full p-2 sm:text-sm font-bold bg-gray-100"
        placeholder={placeholder}
      />
    </div>
  );
};

export default BigInput;
