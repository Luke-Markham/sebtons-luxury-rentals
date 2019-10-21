import React from "react";
import "./property-search.styles.scss";
import PropertySearchForm from "../../components/property-search-form/property-search-form.component";
import Fade from "react-reveal/Fade";

const PropertySearch = ({ routeObject }) => {
  return (
    <section id="home" className="property-search-container">
      <Fade>
        <PropertySearchForm routeObject={routeObject} />
      </Fade>
    </section>
  );
};

export default PropertySearch;
