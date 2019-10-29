import React from "react";
// optional and standard services styles the same, stylesheet kept in the standard services folder
import "../standard-services/standard-optional-services.styles.scss";
import Fade from "react-reveal/Fade";
import ServicesCard from "../../components/services-card/services-card.component";
import boatRentalCharter from "../../assets/jpg/servicesCardImages/boatRental-charters.jpg";
import chauffeur from "../../assets/jpg/servicesCardImages/chauffeur.jpg";
import childcare from "../../assets/jpg/servicesCardImages/childcare.jpg";
import inHouseChef from "../../assets/jpg/servicesCardImages/in-house-chef.jpg";
import spaMassage from "../../assets/jpg/servicesCardImages/spa-massage.jpg";
import scubaDivingFishing from "../../assets/jpg/servicesCardImages/scuba-diving.jpg";

const OptionalServices = () => {
  return (
    <section className="standard-optional-services-container">
      <Fade duration={2500}>
        <h3 className="sub-title">Optional</h3>
        <ul className="services-note">
          <li>
            Please request which optional services you would like to add or get
            more information about when contacting us about a property
          </li>
        </ul>
      </Fade>
      <div className="services-cards-container">
        <Fade>
          <ServicesCard imageUrl={chauffeur} text="Chauffeur" />
        </Fade>
        <Fade>
          <ServicesCard imageUrl={childcare} text="Childcare & Nannies" />
        </Fade>
        <Fade>
          <ServicesCard
            imageUrl={inHouseChef}
            text="In house chef & catering"
          />
        </Fade>
        <Fade>
          <ServicesCard
            imageUrl={boatRentalCharter}
            text="Boat Rentals & Charters"
          />
        </Fade>
        <Fade>
          <ServicesCard
            imageUrl={scubaDivingFishing}
            text="Scuba Diving & Fishing"
          />
        </Fade>
        <Fade>
          <ServicesCard imageUrl={spaMassage} text="Spa & Massage" />
        </Fade>
      </div>
    </section>
  );
};

export default OptionalServices;
