import React from "react";
import "./photo-carousel-overlay.styles.scss";
import { animated, useTransition } from "react-spring";
import { connect } from "react-redux";
import PhotoCarousel from "../photo-carousel/photo-carousel.component";

const Overlay = ({ showLightbox, lightboxPhotos }) => {
  const fadeInOut = useTransition(showLightbox, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div className={showLightbox ? "overlay-container" : "hide-overlay"}>
      {fadeInOut.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <div className="overlay">
                {lightboxPhotos ? (
                  <PhotoCarousel lightboxVersion photosArray={lightboxPhotos} />
                ) : null}
              </div>
            </animated.div>
          )
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  showLightbox: state.lightbox.showLightbox,
  lightboxPhotos: state.lightbox.lightboxPhotos
});

export default connect(mapStateToProps)(Overlay);
