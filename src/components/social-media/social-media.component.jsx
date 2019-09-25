import React from "react";
import "./social-media.styles.scss";
import { ReactComponent as InstaLogo } from "../../assets/svg/instagram.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svg/facebook.svg";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <div className="social-media-icon-container">
        <InstaLogo className="social-media-svg" />
      </div>
      <div className="social-media-icon-container">
        <FacebookLogo className="social-media-svg" />
      </div>
    </div>
  );
};
export default SocialMedia;
