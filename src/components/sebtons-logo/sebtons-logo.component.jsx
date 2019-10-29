import React from "react";
import "./sebtons-logo.styles.scss";
import Fade from "react-reveal/Fade";

const SebtonsLogo = ({ logoSrc, size }) => {
  return (
    <Fade duration={1500}>
      <img className={size} src={logoSrc} alt="sebtons logo"></img>
    </Fade>
  );
};

export default SebtonsLogo;
