import React from "react";
import "./sebtons-logo.styles.scss";

const SebtonsLogo = ({ logoSrc, size }) => {
  return <img className={size} src={logoSrc} alt="sebtons logo"></img>;
};

export default SebtonsLogo;
