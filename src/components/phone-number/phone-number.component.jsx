import React from "react";
import "./phone-number.styles.scss";
import { ReactComponent as PhoneIcon } from "../../assets/svg/phone.svg";
import Fade from "react-reveal/Fade";

const PhoneNumber = () => {
  return (
    <div className="phone-number-container">
      <Fade duration={1500}>
        <a href="tel:+18446101788">
          <div className="phone-icon-container">
            <PhoneIcon className="phone-icon" />
          </div>
        </a>
        <span className="phone-number-number">+1844&nbsp;610&nbsp;1788</span>
      </Fade>
    </div>
  );
};
export default PhoneNumber;
