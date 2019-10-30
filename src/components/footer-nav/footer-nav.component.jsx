import React from "react";
import "./footer-nav.styles.scss";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <Fade duration={1500}>
        <ul className="footer-nav-ul">
          <NavLink
            exact
            to="/sebtons-luxury-rentals/home"
            className="footer-nav-item"
            activeClassName="footer-is-current"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/sebtons-luxury-rentals/properties"
            className="footer-nav-item"
            activeClassName="footer-is-current"
          >
            Properties
          </NavLink>
          <NavLink
            exact
            to="/sebtons-luxury-rentals/services"
            className="footer-nav-item"
            activeClassName="footer-is-current"
          >
            Services
          </NavLink>
          <NavLink
            exact
            to="/sebtons-luxury-rentals/rentalpolicy"
            className="footer-nav-item"
            activeClassName="footer-is-current"
          >
            Rental Policy
          </NavLink>
          <NavLink
            exact
            to="/sebtons-luxury-rentals/aboutus"
            className="footer-nav-item"
            activeClassName="footer-is-current"
          >
            About Us
          </NavLink>
          <NavLink
            exact
            to="/sebtons-luxury-rentals/contact"
            className="footer-nav-item"
            activeClassName="footer-is-current"
          >
            Contact
          </NavLink>
        </ul>
      </Fade>
    </nav>
  );
};

export default FooterNav;
