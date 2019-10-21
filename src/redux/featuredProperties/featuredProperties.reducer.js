const INITIAL_STATE = {
  properties: [""],
  isFetching: false,
  errorMessage: undefined
};

const featuredPropertiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_FEATURED_PROPERTIES_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_FEATURED_PROPERTIES_SUCCESS":
      return {
        ...state,
        isFetching: false,
        properties: action.payload
      };
    case "FETCH_FEATURED_PROPERTIES_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default featuredPropertiesReducer;
