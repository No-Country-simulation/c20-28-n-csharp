import React from "react";
import "../../styles/input.css";

export function InputCheck({ name, value, type, onChange, ...props }) {
    return (
        <div className="mb-3 input-field">
            <label className="text-capitalize" htmlFor={name}>
                {name}
            </label>
            <input
                type={type}
                className="form-control text-capitalize"
                id={name}
                name={name}
                placeholder={name}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
}

export function InputField({ name, value, type, placeholder, onChange }) {
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

export function InputFloat(props) {
    return (
        <div className="input-container">
            <input type="text" id="input" required />
            <label for="input">{props.label}</label>
        </div>
    );
}

export function SelectFloat(props) {
    return (
        <div className="input-container">
            <select type="select" id="input" required>
                <option>Varios</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
            </select>
            <label for="input">{props.label}</label>
        </div>
    );
}

export function InputNumber(props) {
    return (
        <div className="input-container">
            <input type="number" id="inputNumber" required />
            <label for="inputNumber">{props.label}</label>
        </div>
    );
}
