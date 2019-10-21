import React from "react";
import "./social-media.styles.scss";
import { ReactComponent as InstaLogo } from "../../assets/svg/instagram.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svg/facebook.svg";
import Fade from "react-reveal/Fade";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <Fade duration={1500}>
        <div className="social-media-icon-container">
          <InstaLogo className="social-media-svg" />
        </div>
        <div className="social-media-icon-container">
          <FacebookLogo className="social-media-svg" />
        </div>
      </Fade>
    </div>
  );
};
export default SocialMedia;
