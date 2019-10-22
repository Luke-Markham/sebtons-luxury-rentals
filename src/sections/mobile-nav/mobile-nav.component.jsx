import React from "react";
import "./mobile-nav.styles.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { animated, useTransition } from "react-spring";
import { displayMobileNav } from "../../redux/nav/nav.actions";

const MobileNav = ({ toggleMobileNav, displayMobileNav }) => {
  const slideDown = useTransition(displayMobileNav, null, {
    from: { transform: "translateX(+100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(+100%)" }
  });

  return (
    <nav className="mobile-nav-container">
      {slideDown.map(
        // props needed for reactSpring library
        ({ item, key, props }) =>
          item && (
            // animated.div className in order to keep css grid context
            <animated.div
              className="mobile-nav-container"
              key={key}
              style={props}
            >
              <ul className="mobile-nav-ul">
                <NavLink
                  exact
                  to="/home"
                  className="mobile-nav-item"
                  onClick={toggleMobileNav}
                  activeClassName="mobile-is-current"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  to="/properties"
                  className="mobile-nav-item"
                  onClick={toggleMobileNav}
                  activeClassName="mobile-is-current"
                >
                  Properties
                </NavLink>
                <NavLink
                  exact
                  to="/services"
                  className="mobile-nav-item"
                  onClick={toggleMobileNav}
                  activeClassName="mobile-is-current"
                >
                  Services
                </NavLink>
                <NavLink
                  exact
                  to="/rentalpolicy"
                  className="mobile-nav-item"
                  onClick={toggleMobileNav}
                  activeClassName="mobile-is-current"
                >
                  Rental Policy
                </NavLink>
                <NavLink
                  exact
                  to="/aboutus"
                  className="mobile-nav-item"
                  onClick={toggleMobileNav}
                  activeClassName="mobile-is-current"
                >
                  About Us
                </NavLink>
                <NavLink
                  exact
                  to="/contact"
                  className="mobile-nav-item"
                  onClick={toggleMobileNav}
                  activeClassName="mobile-is-current"
                >
                  Contact
                </NavLink>
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleMobileNav: () => dispatch(displayMobileNav())
});

const mapStateToProps = state => ({
  displayMobileNav: state.nav.displayMobileNav
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNav);
