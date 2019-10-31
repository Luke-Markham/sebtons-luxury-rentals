import React, { useEffect } from "react";
import "./property-page.styles.scss";
import { connect } from "react-redux";
import { Breakpoint } from "react-socks";
import { fetchPropertyStartAsync } from "../../redux/property/property.actions";
import Loading from "../../components/loading/loading.component";
import PhotoCarousel from "../../components/photo-carousel/photo-carousel.component";
import PhotoScrollCarousel from "../../components/photo-scroll-carousel/photo-scroll-carousel.component";
import { ReactComponent as Bedrooms } from "../../assets/svg/bedrooms.svg";
import { ReactComponent as Bathrooms } from "../../assets/svg/bathrooms.svg";
import { ReactComponent as Price } from "../../assets/svg/price.svg";
import { ReactComponent as Wifi } from "../../assets/svg/wifi.svg";
import { ReactComponent as MinStay } from "../../assets/svg/nights.svg";
import { ReactComponent as Location } from "../../assets/svg/location.svg";
const PropertyPage = ({
  routeObject,
  fetchPropertyStartAsync,
  property,
  isFetching
}) => {
  const {
    photos,
    propertyTitle,
    bedrooms,
    bathrooms,
    price,
    location,
    description,
    wifi,
    minStay
  } = property[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    const pathname = routeObject.location.pathname;
    console.log(routeObject.location.pathname);
    const toFetch = pathname.slice(12);
    fetchPropertyStartAsync(toFetch);
  }, [fetchPropertyStartAsync, routeObject.location.pathname]);

  return isFetching ? (
    <Loading />
  ) : (
    <>
      {/* below 768px version =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
      <Breakpoint small down>
        <div className="property-page-container">
          {property[0] === false ? null : (
            <>
              <h2 className="property-page-title">{propertyTitle}</h2>
              {/* Photos =-=-=-=-=-=-=-=-=-=-*/}
              <div className="property-page-photo-carousel-container">
                <PhotoCarousel photosArray={photos} />
                <PhotoScrollCarousel photosArray={photos} />
              </div>
              {/* Description =-=-=-=-=-=-=-=-=-=-*/}
              <div className="property-page-description-container">
                {description.split("BREAK").map((para, index) => {
                  return <p key={index}>{para}</p>;
                })}
                {/* Details =-=-=-=-=-=-=-=-=-=-*/}
                <div className="property-page-details-container">
                  <div className="property-page-details-col-1">
                    <div className="property-page-detail">
                      <Bedrooms className="details-icon" />
                      {bedrooms} Bedrooms
                    </div>
                    <div className="property-page-detail">
                      <Bathrooms className="details-icon" />
                      {bathrooms} Bathrooms
                    </div>
                    <div className="property-page-detail">
                      <Wifi className="details-icon" />
                      {wifi}
                    </div>
                  </div>
                  <div className="property-page-details-col-2">
                    <div className="property-page-detail">
                      <MinStay className="details-icon" />
                      Min Stay: {minStay}
                    </div>
                    <div className="property-page-detail">
                      <Price className="details-icon" />
                      {price} Per Night
                    </div>
                    <div className="property-page-detail">
                      <Location className="details-icon" />
                      {location}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Breakpoint>
      {/* Above 768px version =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
      <Breakpoint medium up>
        <div className="property-page-container">
          {property[0] === false ? null : (
            <>
              <h2 className="property-page-title">{propertyTitle}</h2>
              {/* Photos =-=-=-=-=-=-=-=-=-=-*/}
              <div className="property-page-layout-col-1">
                <div className="property-page-photo-carousel-container">
                  <PhotoCarousel photosArray={photos} />
                  <PhotoScrollCarousel photosArray={photos} />
                </div>
                {/* Details =-=-=-=-=-=-=-=-=-=-*/}
                <div className="property-page-details-container">
                  <div className="property-page-details-col-1">
                    <div className="property-page-detail">
                      <Bedrooms className="details-icon" />
                      {bedrooms} Bedrooms
                    </div>
                    <div className="property-page-detail">
                      <Bathrooms className="details-icon" />
                      {bathrooms} Bathrooms
                    </div>
                    <div className="property-page-detail">
                      <Wifi className="details-icon" />
                      {wifi}
                    </div>
                  </div>
                  <div className="property-page-details-col-2">
                    <div className="property-page-detail">
                      <MinStay className="details-icon" />
                      Min Stay: {minStay}
                    </div>
                    <div className="property-page-detail">
                      <Price className="details-icon" />
                      {price} Per Night
                    </div>
                    <div className="property-page-detail">
                      <Location className="details-icon" />
                      {location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-page-layout-col-2">
                {/* Description =-=-=-=-=-=-=-=-=-=-*/}
                <div className="property-page-description-container">
                  {description.split("BREAK").map((para, index) => {
                    if (index < 2) {
                      return (
                        <p className="paragraphs-1-2" key={index}>
                          {para}
                        </p>
                      );
                    } else
                      return (
                        <p className="paragraphs-2-plus" key={index}>
                          {para}
                        </p>
                      );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </Breakpoint>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchPropertyStartAsync: toFetch => dispatch(fetchPropertyStartAsync(toFetch))
});
const mapStateToProps = state => ({
  property: state.property.property,
  isFetching: state.property.isFetching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyPage);
