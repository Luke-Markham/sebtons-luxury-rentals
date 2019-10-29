import React from "react";
import "./standard-optional-services.styles.scss";
import Fade from "react-reveal/Fade";
import ServicesCard from "../../components/services-card/services-card.component";
import houseKeeping from "../../assets/jpg/servicesCardImages/housekeeping.jpg";
import hygiene from "../../assets/jpg/servicesCardImages/hygiene.jpg";
import linenTowel from "../../assets/jpg/servicesCardImages/linen-towels.jpg";
import luxuryRentalCar from "../../assets/jpg/servicesCardImages/luxury-rental-car.jpg";
import concierge from "../../assets/jpg/servicesCardImages/concierge.jpg";
import welcomeDrink from "../../assets/jpg/servicesCardImages/welcomeDrink.jpg";

const StandardServices = () => {
  return (
    <section className="standard-optional-services-container">
      <Fade duration={2500}>
        <h3 className="sub-title">Standard</h3>
        <ul className="services-note">
          <li>
            All standard services come with any property booked with Sebtons.
            All our staff are handpicked for professionalism.
          </li>
        </ul>
      </Fade>
      <div className="services-cards-container">
        <Fade>
          <ServicesCard imageUrl={houseKeeping} text="Daily Housekeeping" />
        </Fade>
        <Fade>
          <ServicesCard
            imageUrl={linenTowel}
            text="Fresh Linen & Towels Daily"
          />
        </Fade>
        <Fade>
          <ServicesCard imageUrl={hygiene} text="L'occitane Hygiene Items" />
        </Fade>
        <Fade>
          <ServicesCard imageUrl={concierge} text="Concierge" />
        </Fade>
        <Fade>
          <ServicesCard imageUrl={luxuryRentalCar} text="Luxury Rental Car" />
        </Fade>
        <Fade>
          <ServicesCard imageUrl={welcomeDrink} text="Champagne On Arrival" />
        </Fade>
      </div>
    </section>
  );
};

export default StandardServices;
