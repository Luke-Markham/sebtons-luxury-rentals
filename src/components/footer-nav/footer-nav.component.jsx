import React from "react";
import "./footer-nav.styles.scss";
import Fade from "react-reveal/Fade";

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <Fade duration={1500}>
        <ul className="footer-nav-ul">
          <li className="footer-nav-item">Home</li>
          <li className="footer-nav-item">Properties</li>
          <li className="footer-nav-item">Services</li>
          <li className="footer-nav-item">About Us</li>
          <li className="footer-nav-item">Contact</li>
        </ul>
      </Fade>
    </nav>
  );
};

export default FooterNav;
