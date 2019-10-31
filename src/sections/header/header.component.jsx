import React from "react";
import "./header.styles.scss";
import SocialMedia from "../../components/social-media/social-media.component";
import SebtonsLogo from "../../components/sebtons-logo/sebtons-logo.component";
import PhoneNumber from "../../components/phone-number/phone-number.component";
import Hamburger from "../../components/hamburger/hamburger.component";
import logo from "../../assets/png/sebtons-logo-main.png";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <Fade>
      <header>
        <Hamburger />
        <SebtonsLogo size="sebtons-logo-large" logoSrc={logo} />
        <SocialMedia />
        <PhoneNumber />
      </header>{" "}
    </Fade>
  );
};

export default Header;
