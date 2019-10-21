import React, { useEffect } from "react";
import "./property-page.styles.scss";
import { connect } from "react-redux";
import { fetchPropertyStartAsync } from "../../redux/property/property.actions";
import Loading from "../../components/loading/loading.component";
import PropertyCard from "../../components/property-card/property-card.component";
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
    const pathname = routeObject.location.pathname;
    const toFetch = pathname.slice(12);
    fetchPropertyStartAsync(toFetch);
  }, [fetchPropertyStartAsync, routeObject.location.pathname]);

  return isFetching ? (
    <Loading />
  ) : (
    <div className="property-page-container">
      <PropertyCard
        description={description}
        photos={photos}
        price={price}
        location={location}
        propertyTitle={propertyTitle}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        wifi={wifi}
        minStay={minStay}
      />
    </div>
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
