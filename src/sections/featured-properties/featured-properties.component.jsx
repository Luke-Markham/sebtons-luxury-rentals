import React from "react";
import "./featured-properties.styles.scss";
import PropertyCard from "../../components/property-card/property-card.component";
import Fade from "react-reveal/Fade";

const FeaturedProperties = ({ featuredProperties, routeObject }) => {
  return (
    <div className="featured-properties-container">
      <Fade left>
        <h2 className="featured-properties-title">Featured Properties</h2>
      </Fade>
      <div className="property-cards-layout-container">
        {featuredProperties.map((property, index) => {
          const {
            imageUrl,
            altDescription,
            propertyTitle,
            bedrooms,
            bathrooms,
            propertyPageUrl
          } = property;
          return (
            <Fade key={index}>
              <PropertyCard
                routeObject={routeObject}
                imageUrl={imageUrl}
                altDescription={altDescription}
                propertyTitle={propertyTitle}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                propertyPageUrl={propertyPageUrl}
              />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedProperties;
