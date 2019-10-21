const INITIAL_STATE = {
  searchValues: false,
  isFetching: false,
  failedSearch: false,
  searchResults: []
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "STORE_SEARCH_VALUES":
      return {
        ...state,
        searchValues: action.payload
      };
    case "FETCH_SEARCH_RESULTS_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_SEARCH_RESULTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        failedSearch: false,
        searchResults: action.payload
      };

    case "FETCH_SEARCH_RESULTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        failedSearch: true
      };

    case "RESET_SEARCH":
      return {
        ...state,
        searchValues: false,
        failedSearch: false,
        searchResults: []
      };
    default:
      return state;
  }
};

export default searchReducer;
