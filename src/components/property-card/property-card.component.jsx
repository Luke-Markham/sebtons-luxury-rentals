import React from "react";
import "./property-card.styles.scss";
import PhotoCarousel from "../../components/photo-carousel/photo-carousel.component";

const PropertyCard = ({
  photos,
  propertyPageUrl,
  propertyTitle,
  bedrooms,
  bathrooms,
  price,
  location,
  imageUrl,
  altDescription,
  wifi,
  minStay
}) => {
  return (
    <div className="property-card-container">
      {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=  Featured Property =-=-=-=-=-=-=-=-=-=-=-=-=-=-=  */}
      {imageUrl && altDescription && propertyPageUrl ? (
        <a
          className="property-page-link-container"
          href={`/properties/${propertyPageUrl}`}
        >
          <img className="property-image" src={imageUrl} alt={altDescription} />
          <p className="featured-property-title">{propertyTitle}</p>
        </a>
      ) : null}
      {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-= All Properties =-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
      {photos && propertyPageUrl ? (
        <div>
          <PhotoCarousel photosArray={photos} />
          <a
            className="property-page-link-container"
            href={`properties/${propertyPageUrl}`}
          >
            <p className="all-property-title">{propertyTitle}</p>
          </a>
        </div>
      ) : null}

      <div className="property-details-container">
        <div className="details-container">
          <span>Bedrooms</span>
          <span>{bedrooms}</span>
        </div>
        <div className="details-container">
          <span>Bathrooms</span>
          <span>{bathrooms}</span>
        </div>
        {location ? (
          <div className="details-container">
            <span>Location</span>
            <span>{location}</span>
          </div>
        ) : null}
        {price ? (
          <div className="details-container">
            <span>Price</span>
            <span>{price}</span>
          </div>
        ) : null}
        {wifi ? (
          <div className="details-container">
            <span>Wifi</span>
            <span>{wifi}</span>
          </div>
        ) : null}
        {minStay ? (
          <div className="details-container">
            <span>Min Stay</span>
            <span>{minStay}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PropertyCard;
