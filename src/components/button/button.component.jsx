import React from "react";
import "./button.styles.scss";
const Btn = ({ typeOfBtn, text }) => {
  return (
    <button className="button" type={typeOfBtn}>
      {text}
    </button>
  );
};

export default Btn;
