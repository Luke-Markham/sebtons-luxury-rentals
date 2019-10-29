const INITIAL_STATE = {
  showLightbox: false,
  lightboxPhotos: false,
  currentPhoto: 0
};

const lightboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_LIGHTBOX":
      const {
        photoNumber,
        photo0,
        photo1,
        photo2,
        photosArray
      } = action.payload;
      return {
        ...state,
        showLightbox: true,
        lightboxPhotos: photosArray,
        currentPhoto: photoNumber
          ? photoNumber
          : photo0
          ? photo0
          : photo1
          ? photo1
          : photo2
          ? photo2
          : state.currentPhoto
      };
    case "HIDE_LIGHTBOX":
      return {
        ...state,
        showLightbox: false,
        lightboxPhotos: false,
        currentPhoto: 0
      };
    default:
      return state;
  }
};

export default lightboxReducer;
