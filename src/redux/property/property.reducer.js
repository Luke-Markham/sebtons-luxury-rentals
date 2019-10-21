const INITIAL_STATE = {
  property: [""],
  isFetching: false,
  errorMessage: undefined
};

const propertyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PROPERTY_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_PROPERTY_SUCCESS":
      return {
        ...state,
        isFetching: false,
        property: action.payload
      };
    case "FETCH_PROPERTY_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default propertyReducer;
