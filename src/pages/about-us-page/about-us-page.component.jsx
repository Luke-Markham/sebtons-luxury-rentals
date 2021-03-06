import React, { useEffect } from "react";
import "./about-us.styles.scss";
import Fade from "react-reveal/Fade";
import cardOneImage from "../../assets/jpg/Lital17.jpg";
import cardTwoImage from "../../assets/jpg/about-us-cards-bkg.jpg";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="about-us-page-container">
      <div className="about-us-intro">
        <Fade duration={2000}>
          <h1>
            <strong>Sebtons</strong> is a premier luxury rental agency
          </h1>
          <p>Based in St Lucia</p>
        </Fade>
      </div>
      <div className="about-us-cards-container">
        <Fade>
          <div className="about-us-card-1">
            <Fade left>
              <p>
                We specialize in the finest residences found in St Lucia, from
                sprawling hillside villas to exclusive waterfront homes.
                <br />
                <br />
                The Sebtons team of licensed realtors is at the forefront of the
                luxury real estate market, providing elite and exclusive access
                to all high-end residences sweeping across St Lucia.
              </p>
            </Fade>
            <Fade right>
              <img
                className="about-us-card-image"
                src={cardOneImage}
                alt="overview of luxury house with pool"
              />
            </Fade>
          </div>
        </Fade>
        <br />
        <Fade>
          <div className="about-us-card-2">
            <Fade left>
              <img
                className="about-us-card-image"
                src={cardTwoImage}
                alt="overview of luxury house with pool"
              />
            </Fade>
            <Fade right>
              <p>
                Born from the desire to supply outstanding accommodation and
                services while in St Lucia, Sebtons approaches luxury rentals
                with a pristine taste for quality and full-service experience.
                <br />
                <br />
                Catering to the discerning individual, Sebtons matches their
                need for 5-star quality into a world-class rental stay
                experience.
              </p>
            </Fade>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutUsPage;
