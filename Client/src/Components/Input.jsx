import React from "react";

function Input({name, type, onChange = () => {}}) {
    return (
        <div className="mb-3">
            <label className="text-capitalize" htmlFor={name}>{name}</label>
            <input type={type} className="form-control text-capitalize" id={name} name={name} placeholder={name} onChange={onChange}/>
        </div>
    );
}

export default Input;