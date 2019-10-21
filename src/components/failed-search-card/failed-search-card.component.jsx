import React from "react";
import "./failed-search-card.styles.scss";
import { ReactComponent as BackArrow } from "../../assets/svg/back-arrow.svg";
import Fade from "react-reveal/Fade";
const FailedSearchCard = ({ routeObject }) => {
  return (
    <div className="failed-search-container">
      <div className="failed-search-text">
        <p>
          We currently do not have any properties that match your search terms.
        </p>
        <p> Please try again!</p>
      </div>
      <Fade right>
        <BackArrow
          className="failed-search-back-arrow"
          onClick={() => routeObject.history.push("/home")}
        />
      </Fade>
    </div>
  );
};

export default FailedSearchCard;
