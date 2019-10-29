export const showLightbox = lightboxDetails => {
  return {
    type: "SHOW_LIGHTBOX",
    payload: lightboxDetails
  };
};

export const hideLightbox = () => {
  return {
    type: "HIDE_LIGHTBOX"
  };
};
