import React from "react";
import "./hamburger.styles.scss";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { ReactComponent as OpenNav } from "../../assets/svg/openNav.svg";
import { ReactComponent as CloseNav } from "../../assets/svg/closeNav.svg";
import { displayMobileNav } from "../../redux/nav/nav.actions";

const Hamburger = ({ toggleMobileNav, displayMobileNav }) => {
  return (
    <div className="hamburger-container" onClick={toggleMobileNav}>
      {displayMobileNav ? (
        <Fade>
          <CloseNav className="hamburger-icon" />
        </Fade>
      ) : (
        <Fade>
          <OpenNav className="hamburger-icon" />
        </Fade>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  displayMobileNav: state.nav.displayMobileNav
});

const mapDispatchToProps = dispatch => ({
  toggleMobileNav: () => dispatch(displayMobileNav())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hamburger);
