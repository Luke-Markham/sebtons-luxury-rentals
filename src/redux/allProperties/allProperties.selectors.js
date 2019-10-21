import { createSelector } from "reselect";

const selectAllPropertiesState = state => state.allProperties;

export const allPropertiesSelector = createSelector(
  [selectAllPropertiesState],
  allProperties => allProperties.properties
);
