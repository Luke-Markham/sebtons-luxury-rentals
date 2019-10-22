import React from "react";
import "./statement.styles.scss";
import { ReactComponent as ExclusivityIcon } from "../../assets/svg/exclusivity.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/svg/experience.svg";
import { ReactComponent as PersonalizationIcon } from "../../assets/svg/personalization.svg";
import Fade from "react-reveal/Fade";
import person from "../../assets/png/person.png";
const Statement = () => {
  return (
    <section className="statement-container">
      <Fade>
        <div className="statements">
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
        </div>
        <img className="person" src={person} alt="owner of sebtons" />
      </Fade>
    </section>
  );
};

export default Statement;
