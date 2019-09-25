import React from "react";
import logo from "../../assets/png/sebtons-logo.png";
import "./sebtons-logo.styles.scss";

const SebtonsLogo = () => {
  return (
    <div className="sebtons-logo-container">
      <img className="sebtons-logo" src={logo} alt="sebtons logo"></img>
    </div>
  );
};

export default SebtonsLogo;
