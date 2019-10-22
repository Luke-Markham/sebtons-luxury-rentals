import React from "react";
import "./button.styles.scss";
const Btn = ({ typeOfBtn, text, btnClass }) => {
  return (
    <button className={btnClass ? btnClass : "button"} type={typeOfBtn}>
      {text}
    </button>
  );
};

export default Btn;
