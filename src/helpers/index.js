import React from "react";

export function formatPostData(data){
    const params = new URLSearchParams();

    for(let [k, v] of Object.entries(data)){
        params.append(k, v);
    }
    return params;
}

export function renderInputs(props) {
    const error = props.meta.touched && props.meta.error;
    return (
        <div className={`form-group ${props.className}`}>
            <label>{props.label}</label>
            <input {...props.input} type={props.type || "text"} className={`form-control ${error ? "is-invalid" : ""}`} autoComplete="off"/>
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    )
}
