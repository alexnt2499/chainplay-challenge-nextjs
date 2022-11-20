import React from "react";

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const CustomInput: React.FC<ICustomInput> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props?.name} className="ml-2 mb-2 font-semibold">
        {label}
      </label>
      <input {...props} />
      {error ? <p className="text-red-700 mt-1">{error}</p> : <div> </div>}
    </div>
  );
};

export default CustomInput;
