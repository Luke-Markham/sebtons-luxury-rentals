import React from "react";
import "./services-card.styles.scss";

const ServicesCard = ({ imageUrl, text }) => {
  return (
    <div className="services-card-container">
      <img className="services-image" src={imageUrl} alt={text} />
      <div className="services-overlay">
        <p className="services-card-text">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
