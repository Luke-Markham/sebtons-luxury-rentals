import React, { useEffect } from "react";
import "./all-properties-page.styles.scss";

import { connect } from "react-redux";
import { fetchAllPropertiesStartAsync } from "../../redux/allProperties/allProperties.actions";
import { allPropertiesSelector } from "../../redux/allProperties/allProperties.selectors";
import PropertyCard from "../../components/property-card/property-card.component";
import Fade from "react-reveal/Fade";

import ReactLoading from "react-loading";

const AllPropertiesPage = ({
  isFetching,
  allProperties,
  fetchAllPropertiesStartAsync,
  routeObject
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllPropertiesStartAsync();
  }, [fetchAllPropertiesStartAsync]);

  return (
    <div className="all-properties-page-container">
      <Fade left>
        <h2 className="all-properties-title">Properties</h2>
      </Fade>
      {isFetching ? (
        <ReactLoading type="cylon" color="#ffde59" height="%20" width="40%" />
      ) : (
        <div className="property-cards-layout-container">
          {allProperties.map((property, index) => {
            const {
              photos,
              propertyTitle,
              bedrooms,
              bathrooms,
              price,
              location,
              propertyPageUrl
            } = property;
            return (
              <Fade key={index}>
                <PropertyCard
                  routeObject={routeObject}
                  photos={photos}
                  price={price}
                  location={location}
                  propertyPageUrl={propertyPageUrl}
                  propertyTitle={propertyTitle}
                  bedrooms={bedrooms}
                  bathrooms={bathrooms}
                />
              </Fade>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchAllPropertiesStartAsync: () => dispatch(fetchAllPropertiesStartAsync())
});

const mapStateToProps = state => ({
  allProperties: allPropertiesSelector(state),
  isFetching: state.allProperties.isFetching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPropertiesPage);
