import React from "react";
import "./desktop-nav.styles.scss";
import { NavLink } from "react-router-dom";

const DesktopNav = () => {
  return (
    <nav className="desktop-nav-container">
      <ul className="desktop-nav-ul">
        <NavLink
          exact
          to="/home"
          className="desktop-nav-item"
          activeClassName="desktop-is-current"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/properties"
          className="desktop-nav-item"
          activeClassName="desktop-is-current"
        >
          Properties
        </NavLink>
        <NavLink
          exact
          to="/services"
          className="desktop-nav-item"
          activeClassName="desktop-is-current"
        >
          Services
        </NavLink>
        <NavLink
          exact
          to="/rentalpolicy"
          className="desktop-nav-item"
          activeClassName="desktop-is-current"
        >
          Rental Policy
        </NavLink>
        <NavLink
          exact
          to="/aboutus"
          className="desktop-nav-item"
          activeClassName="desktop-is-current"
        >
          About Us
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="desktop-nav-item"
          activeClassName="desktop-is-current"
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default DesktopNav;
