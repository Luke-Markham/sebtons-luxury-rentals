import React from "react";
import "./general-form-input.styles.scss";

const GeneralformInput = ({
  type,
  name,
  id,
  value,
  required,
  labelFor,
  text,
  onChange
}) => {
  return (
    <div className="group">
      <label className="general-form-input-label" htmlFor={labelFor}>
        {text}
      </label>
      <br />
      <input
        className="general-form-input"
        type={type}
        name={name}
        id={id}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default GeneralformInput;
