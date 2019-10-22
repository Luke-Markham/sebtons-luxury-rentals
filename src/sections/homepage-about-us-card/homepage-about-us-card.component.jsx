import React from "react";
import "./homepage-about-us-card.styles.scss";
import worldmap from "../../assets/png/worldmap.png";
import Fade from "react-reveal/Fade";

const HomePageAboutUs = () => {
  return (
    <section className="homepage-about-us-container">
      <Fade left>
        <h2 className="homepage-about-us-title">Sebtons</h2>
      </Fade>
      <Fade duration={2000}>
        <h3 className="homepage-about-us-title-description">
          St Lucia Luxury Property Rentals and Services.
        </h3>
        <div className="homepage-about-us-layout-container">
          <p className="homepage-about-us-text">
            Based in St Lucia, Sebtons is the leading luxury vacation rental and
            services provider in St Lucia. 15 years of experience has enabled us
            to craft the perfect tropical get away for discerning clients who
            require VIP treatment in one of the most beautiful destinations
            around the world.
          </p>
          <img
            className="world-map"
            src={worldmap}
            alt="world map marking location of St Lucia"
          />
        </div>
      </Fade>
    </section>
  );
};

export default HomePageAboutUs;
