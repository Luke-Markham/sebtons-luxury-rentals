import React from "react";
import "./checkbox-input.styles.scss";

const CheckboxInput = ({ name, id, text, labelFor, checked, onChange }) => {
  return (
    <div className="checkbox-group">
      <input
        className="checkbox-input"
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox-input-label" htmlFor={labelFor}>
        {text}
      </label>
    </div>
  );
};

export default CheckboxInput;
