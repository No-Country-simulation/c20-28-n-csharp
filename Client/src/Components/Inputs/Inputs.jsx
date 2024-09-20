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
            <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} className="inputFloat" required />
            <label className="label-input" forHtml={props.id}>{props.label}</label>
        </div>
    );
}

export function SelectFloat(props) {
    return (
        <div className="input-container">
            <select type="select" className="select" id="select" required>
                <option>Varios</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
            </select>
            <label className="label-input" forHtml="select">{props.label}</label>
        </div>
    );
}

export function InputNumber(props) {
    return (
        <div className="input-container">
            <input type="number" className="inputNumber" id="inputNumber" required />
            <label className="label-input" forHtml="inputNumber">{props.label}</label>
        </div>
    );
}
