import { createSelector } from "reselect";

const selectSearchState = state => state.search;

export const searchValuesSelector = createSelector(
  [selectSearchState],
  search => search.searchValues
);

export const failedSearchSelector = createSelector(
  [selectSearchState],
  search => search.failedSearch
);

export const searchResultsSelector = createSelector(
  [selectSearchState],
  search => search.searchResults
);
