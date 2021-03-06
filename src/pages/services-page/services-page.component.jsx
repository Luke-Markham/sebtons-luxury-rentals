import React, { useEffect } from "react";
import "./services-page.styles.scss";
import Fade from "react-reveal/Fade";
import StandardServices from "../../sections/standard-services/standard-services.component";
import OptionalServices from "../../sections/optional-services/optional-services.component";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="services-page-container">
      <Fade>
        <div className="services-header">
          <Fade left>
            <h2 className="services-title">Services</h2>
          </Fade>
        </div>
      </Fade>
      <StandardServices />
      <OptionalServices />
    </section>
  );
};

export default ServicesPage;
