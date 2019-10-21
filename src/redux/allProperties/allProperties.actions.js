import { firestore } from "../../firebase/firebase.utils";

export const fetchAllPropertiesStart = () => {
  return {
    type: "FETCH_ALL_PROPERTIES_START"
  };
};

export const fetchAllPropertiesSuccess = allProperties => {
  return {
    type: "FETCH_ALL_PROPERTIES_SUCCESS",
    payload: allProperties
  };
};

export const fetchAllPropertiesFailure = errorMessage => {
  return {
    type: "FETCH_ALL_PROPERTIES_FAILURE",
    payload: errorMessage
  };
};

export const fetchAllPropertiesStartAsync = () => {
  return dispatch => {
    const allProperties = [];
    dispatch(fetchAllPropertiesStart());

    firestore
      .collection("properties")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          allProperties.push(data);
        });
        dispatch(fetchAllPropertiesSuccess(allProperties));
      })
      .catch(error => dispatch(fetchAllPropertiesFailure(error.message)));
  };
};
