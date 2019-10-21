import { firestore } from "../../firebase/firebase.utils";

export const storeSearchValues = formState => {
  return {
    type: "STORE_SEARCH_VALUES",
    payload: formState
  };
};

export const fetchSearchResultsStart = () => {
  return {
    type: "FETCH_SEARCH_RESULTS_START"
  };
};

export const fetchSearchResultsSuccess = filteredResults => {
  return {
    type: "FETCH_SEARCH_RESULTS_SUCCESS",
    payload: filteredResults
  };
};

export const fetchSearchResultsFail = () => {
  return {
    type: "FETCH_SEARCH_RESULTS_FAILURE"
  };
};

export const resetSearch = () => {
  return {
    type: "RESET_SEARCH"
  };
};

export const fetchSearchResultsStartAsync = searchValues => {
  return dispatch => {
    dispatch(fetchSearchResultsStart());

    firestore
      .collection("properties")
      .get()
      .then(function(querySnapshot) {
        const unfiltered = [];
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          unfiltered.push(data);
        });
        return unfiltered;
      })
      .then(unfiltered => {
        const filteredResults = unfiltered.filter(property => {
          if (
            searchValues.bedrooms <= property.bedrooms &&
            searchValues.bathrooms <= property.bathrooms &&
            searchValues.location === property.location
          ) {
            return property;
          }
          return false;
        });
        return filteredResults;
      })
      .then(filteredResults => {
        if (filteredResults.length === 0) {
          dispatch(fetchSearchResultsFail());
        } else dispatch(fetchSearchResultsSuccess(filteredResults));
      })
      .catch(error => dispatch(fetchSearchResultsFail(), console.log(error)));
  };
};
