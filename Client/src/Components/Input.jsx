import React from "react";

function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>  </label>
            <input type={props.type} className="form-control" id={props.id} name={props.name} placeholder={props.placeholder} required={props.required} onChange={props.onChange}/>
        </div>
    );
}