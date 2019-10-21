import { firestore } from "../../firebase/firebase.utils";

export const fetchFeaturedPropertiesStart = () => {
  return {
    type: "FETCH_FEATURED_PROPERTIES_START"
  };
};

export const fetchFeaturedPropertiesSuccess = featuredProperties => {
  return {
    type: "FETCH_FEATURED_PROPERTIES_SUCCESS",
    payload: featuredProperties
  };
};

export const fetchFeaturedPropertiesFailure = errorMessage => {
  return {
    type: "FETCH_FEATURED_PROPERTIES_FAILURE",
    payload: errorMessage
  };
};

export const fetchFeaturedPropertiesStartAsync = () => {
  return dispatch => {
    const featuredProperties = [];
    dispatch(fetchFeaturedPropertiesStart());

    firestore
      .collection("featured")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          featuredProperties.push(data);
        });
        dispatch(fetchFeaturedPropertiesSuccess(featuredProperties));
      })
      .catch(error => dispatch(fetchFeaturedPropertiesFailure(error.message)));
  };
};
