import React from "react";
import "./mobile-nav.styles.scss";
const MobileNav = () => {
  return (
    <nav className="mobile-nav-container">
      <ul className="mobile-nav-ul">
        <li className="mobile-nav-item">Home</li>
        <li className="mobile-nav-item">Villas</li>
        <li className="mobile-nav-item">Services</li>
        <li className="mobile-nav-item">About Us</li>
        <li className="mobile-nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default MobileNav;
