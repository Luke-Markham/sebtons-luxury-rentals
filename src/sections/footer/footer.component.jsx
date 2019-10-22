import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";
import SebtonsLogo from "../../components/sebtons-logo/sebtons-logo.component";
import logoS from "../../assets/png/sebtons-logo-S.png";
import FooterNav from "../../components/footer-nav/footer-nav.component";
import PhoneNumber from "../../components/phone-number/phone-number.component";
import SocialMedia from "../../components/social-media/social-media.component";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <SebtonsLogo size="sebtons-logo-small" logoSrc={logoS} />
      </div>
      <div className="footer-nav-container">
        <FooterNav />
      </div>
      <div className="footer-phone-and-social-container">
        <PhoneNumber />
        <SocialMedia />
      </div>

      <div className="footer-bottom-bar">
        <Link className="footer-rental-policy-link" to="rentalpolicy">
          Rental Policy
        </Link>
        <p>© 2019 Sebtons INC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
