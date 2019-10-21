import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./home-page.styles.scss";
import LazyLoad from "react-lazyload";
import PropertySearch from "../../sections/property-search/property-search.component";
import Statement from "../../sections/statement/statement.component";
import { fetchFeaturedPropertiesStartAsync } from "../../redux/featuredProperties/featuredProperties.actions";
import HomePageAboutUs from "../../sections/homepage-about-us-card/homepage-about-us-card.component";
import Loading from "../../components/loading/loading.component";
import FeaturedProperties from "../../sections/featured-properties/featured-properties.component";

const HomePage = ({
  routeObject,
  isFetching,
  featuredProperties,
  fetchFeaturedPropertiesStartAsync
}) => {
  useEffect(() => {
    fetchFeaturedPropertiesStartAsync();
  }, [fetchFeaturedPropertiesStartAsync]);
  return (
    <div className="homepage-container">
      <PropertySearch routeObject={routeObject} />
      <Statement />
      <LazyLoad height={200}>
        {isFetching ? (
          <Loading />
        ) : (
          <FeaturedProperties featuredProperties={featuredProperties} />
        )}
      </LazyLoad>
      <LazyLoad>
        <HomePageAboutUs />
      </LazyLoad>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchFeaturedPropertiesStartAsync: () =>
    dispatch(fetchFeaturedPropertiesStartAsync())
});

const mapStateToProps = state => ({
  featuredProperties: state.featuredProperties.properties,
  isFetching: state.featuredProperties.isFetching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
