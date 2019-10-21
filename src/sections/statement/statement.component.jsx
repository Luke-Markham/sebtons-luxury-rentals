import React from "react";
import "./statement.styles.scss";
import { ReactComponent as ExclusivityIcon } from "../../assets/svg/exclusivity.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/svg/experience.svg";
import { ReactComponent as PersonalizationIcon } from "../../assets/svg/personalization.svg";
import Fade from "react-reveal/Fade";

const Statement = () => {
  return (
    <section className="statement-container">
      <Fade>
        <div className="statement-card">
          <div className="statement-icon-container">
            <ExclusivityIcon className="statement-icon-svg" />
          </div>
          <p className="statement-text">
            Exclusive Access to properties in St Lucia at premier rates.
          </p>
        </div>
        <div className="statement-card">
          <div className="statement-icon-container">
            <ExperienceIcon className="statement-icon-svg" />
          </div>
          <p className="statement-text">
            Over 15 years experience in luxury real estate rental delivering
            outstanding results and satisfaction for our clients.
          </p>
        </div>
        <div className="statement-card">
          <div className="statement-icon-container">
            <PersonalizationIcon className="statement-icon-svg" />
          </div>
          <p className="statement-text">
            Personalized in-house concierge specialist 24/7.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Statement;
