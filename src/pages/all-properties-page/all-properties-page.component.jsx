import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllPropertiesStartAsync } from "../../redux/allProperties/allProperties.actions";
import { allPropertiesSelector } from "../../redux/allProperties/allProperties.selectors";
import "./all-properties-page.styles.scss";
import PropertyCard from "../../components/property-card/property-card.component";
import Loading from "../../components/loading/loading.component";
import Fade from "react-reveal/Fade";

const AllPropertiesPage = ({
  isFetching,
  allProperties,
  fetchAllPropertiesStartAsync
}) => {
  useEffect(() => {
    fetchAllPropertiesStartAsync();
  }, [fetchAllPropertiesStartAsync]);

  return (
    <div className="all-properties-page-container">
      <Fade left>
        <h2 className="all-properties-title">Properties</h2>
      </Fade>

      {isFetching ? (
        <Loading />
      ) : (
        allProperties.map((property, index) => {
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
        })
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
