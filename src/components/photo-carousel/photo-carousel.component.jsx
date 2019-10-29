import React, { useState } from "react";
import "./photo-carousel.styles.scss";
import { connect } from "react-redux";
import {
  showLightbox,
  hideLightbox
} from "../../redux/lightbox/lightbox.actions";
import { ReactComponent as Next } from "../../assets/svg/next.svg";
import { ReactComponent as Prev } from "../../assets/svg/prev.svg";
import { ReactComponent as CloseLightbox } from "../../assets/svg/closeNav.svg";

const PhotoCarousel = ({
  photosArray,
  showLightbox,
  hideLightbox,
  lightboxVersion,
  currentPhoto
}) => {
  const [photoNumber, setPhotoNumber] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(currentPhoto);

  const showNextPhoto = () => {
    setPhotoNumber(photoNumber + 1);
    setCurrentPhotoIndex(currentPhotoIndex + 1);
  };

  const showPrevPhoto = () => {
    setPhotoNumber(photoNumber - 1);
    setCurrentPhotoIndex(currentPhotoIndex - 1);
  };

  return (
    <div
      className={
        "photo-carousel-container" +
        (lightboxVersion ? " lightbox-version" : "")
      }
    >
      <img
        className="property-image"
        src={photosArray[currentPhotoIndex]}
        alt="house and grounds of the property"
        onClick={() => showLightbox({ photosArray, photoNumber })}
      />
      {lightboxVersion ? (
        <CloseLightbox
          className="close-lightbox"
          onClick={() => hideLightbox()}
        />
      ) : null}
      {currentPhotoIndex > 0 ? (
        <Prev className="prev-photo" onClick={showPrevPhoto} />
      ) : null}
      {currentPhotoIndex < photosArray.length - 1 ? (
        <Next className="next-photo" onClick={showNextPhoto} />
      ) : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  showLightbox: photos => dispatch(showLightbox(photos)),
  hideLightbox: () => dispatch(hideLightbox())
});

const mapStateToProps = state => ({
  currentPhoto: state.lightbox.currentPhoto,
  lightboxPhotos: state.lightbox.lightboxPhotos
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoCarousel);
