import React from "react";

function Input({ name, value, type, onChange, ...props }) {
  return (
    <div className="mb-3 input-field">
      <label className="text-capitalize" 
              htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        className="form-control text-capitalize"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;
