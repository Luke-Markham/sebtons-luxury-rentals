import React from "react";
import "./header.styles.scss";
import { connect } from "react-redux";
import SocialMedia from "../../components/social-media/social-media.component";
import SebtonsLogo from "../../components/sebtons-logo/sebtons-logo.component";
import PhoneNumber from "../../components/phone-number/phone-number.component";
import Hamburger from "../../components/hamburger/hamburger.component";
import MobileNav from "../../components/mobile-nav/mobile-nav.component";

const Header = ({ displayMobileNav }) => {
  return (
    <header>
      <Hamburger />
      <SebtonsLogo />
      <SocialMedia />
      <PhoneNumber />
      {displayMobileNav ? <MobileNav /> : null}
    </header>
  );
};

const mapStateToProps = state => ({
  displayMobileNav: state.nav.displayMobileNav
});

export default connect(mapStateToProps)(Header);
