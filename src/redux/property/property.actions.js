import { firestore } from "../../firebase/firebase.utils";

export const fetchPropertyStart = () => {
  return {
    type: "FETCH_PROPERTY_START"
  };
};

export const fetchPropertySuccess = property => {
  return {
    type: "FETCH_PROPERTY_SUCCESS",
    payload: property
  };
};

export const fetchPropertyFailure = errorMessage => {
  return {
    type: "FETCH_PROPERTY_FAILURE",
    payload: errorMessage
  };
};

export const fetchPropertyStartAsync = propertyName => {
  return dispatch => {
    const property = [];
    dispatch(fetchPropertyStart());

    firestore
      .collection("properties")
      .doc(propertyName)
      .get()
      .then(function(doc) {
        const data = doc.data();
        property.push(data);
        dispatch(fetchPropertySuccess(property));
      })
      .catch(error => dispatch(fetchPropertyFailure(error.message)));
  };
};
