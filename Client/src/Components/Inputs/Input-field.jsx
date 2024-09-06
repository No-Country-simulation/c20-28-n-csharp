import React from "react";

function Input({name, value, type, onChange}) {
    return (
        <div className="mb-3 input-field">
            <label className="text-capitalize" htmlFor={name}>{name}</label>
            <input type={type} className="form-control text-capitalize" name={name} placeholder={name} value={value} onChange={onChange}/>
        </div>
    );
}

export default Input;