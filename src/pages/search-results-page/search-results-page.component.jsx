import React, { useEffect } from "react";
import "./search-results-page.styles.scss";
import { connect } from "react-redux";
import { fetchSearchResultsStartAsync } from "../../redux/search/search.actions";
import {
  searchValuesSelector,
  searchResultsSelector,
  failedSearchSelector
} from "../../redux/search/search.selectors";
import Fade from "react-reveal/Fade";
import PropertyCard from "../../components/property-card/property-card.component";
import FailedSearchCard from "../../components/failed-search-card/failed-search-card.component";
import Loading from "../../components/loading/loading.component";

const SearchResultsPage = ({
  isFetching,
  searchResults,
  failedSearch,
  searchValues,
  fetchSearchResultsStartAsync,
  routeObject
}) => {
  useEffect(() => {
    fetchSearchResultsStartAsync(searchValues);
    return () => {};
  }, [fetchSearchResultsStartAsync, searchValues]);

  return (
    <div className="search-results-page-container">
      <Fade left>
        <h2 className="search-results-title">Search Results</h2>
      </Fade>

      {isFetching ? (
        <Loading />
      ) : failedSearch ? (
        <div>
          <Fade>
            <FailedSearchCard routeObject={routeObject} />
          </Fade>
        </div>
      ) : (
        <div className="property-cards-layout-container">
          {searchResults.map((property, index) => {
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
          })}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchSearchResultsStartAsync: searchValues =>
    dispatch(fetchSearchResultsStartAsync(searchValues))
});

const mapStateToProps = state => ({
  searchResults: searchResultsSelector(state),
  isFetching: state.search.isFetching,
  failedSearch: failedSearchSelector(state),
  searchValues: searchValuesSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsPage);
