import React from "react";

function Input({name, value, type, placeholder, onChange}) {
    return (
        <div className="mb-3 input-field">
            <label className="text-capitalize" 
                    htmlFor={name}>{placeholder}
            </label>
            <input type={type} 
                    className="form-control text-capitalize" 
                    name={name} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange}
            />
        </div>
    );
}

export default Input;